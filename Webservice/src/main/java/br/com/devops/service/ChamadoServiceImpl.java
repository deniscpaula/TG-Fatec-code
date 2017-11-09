package br.com.devops.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.devops.model.Chamado;
import br.com.devops.model.Colaborador;
import br.com.devops.model.Historico;
import br.com.devops.model.Processo;
import br.com.devops.repository.ChamadoRepository;

@Service("chamadoService")
public class ChamadoServiceImpl implements ChamadoService {

	@Autowired
	private ChamadoRepository chamadoRepository;
	
	@Autowired
	private HistoricoService historicoService;
	
	@Autowired
	private ProcessoService processoService;

	public Chamado get(Long codigo) {
		return this.chamadoRepository.findByCodigo(codigo);
	}
	
	public Chamado get(Long codigoInterno, Long empresa) {
		return this.chamadoRepository.findByCodigo(codigoInterno, empresa);
	}

	@Transactional
	public Chamado save(Chamado chamado, Colaborador colaborador) {		
		boolean novoChamado = false;
		if(chamado.getCliente().getCodigo() == null) chamado.setCliente(null);
		if(chamado.getProcesso().getCodigo() == null) chamado.setProcesso(null);
		if(chamado.getProduto().getCodigo() == null) chamado.setProduto(null);
		if(chamado.getTipo().getCodigo() == null) chamado.setTipo(null);
		if(chamado.getResponsavel().getCodigo() == null) chamado.setResponsavel(null);
		
		if(chamado.getCodigo() == null) novoChamado = true;
		
		Chamado original = this.chamadoRepository.findByCodigo(chamado.getCodigo());
		Processo processoOriginal = null;
		if(original != null) processoOriginal = original.getProcesso();
		Boolean statusOriginal = null;
		if(original != null) statusOriginal = original.getStatus();
		
		chamado = this.chamadoRepository.save(chamado);
		
		// Adiciona um histórico referente a abertura do chamado
		if(novoChamado) {
			Historico historico = new Historico();
			historico.setChamado(chamado);
			historico.setColaborador(colaborador);
			historico.setTitulo("Abertura de chamado");
			
			this.historicoService.save(historico);
		
		} else {
			Boolean mesmoProcesso = null;
			if(chamado.getProcesso() != null && processoOriginal != null) mesmoProcesso = chamado.getProcesso().getCodigo().equals(processoOriginal.getCodigo());
			
			// Caso haja alteração do processo que o chamado está, um novo histórico será criado
			if((chamado.getProcesso() != null && processoOriginal == null) || (mesmoProcesso != null && !mesmoProcesso)) {
				Processo processo = this.processoService.get(chamado.getProcesso().getCodigo());
				
				Historico historico = new Historico();
				historico.setChamado(chamado);
				historico.setColaborador(colaborador);
				historico.setTitulo(processo.getNome());
				
				this.historicoService.save(historico);
			}
			
			if(chamado.getStatus() == false && statusOriginal != chamado.getStatus()) {
				Historico historico = new Historico();
				historico.setChamado(chamado);
				historico.setColaborador(colaborador);
				historico.setTitulo("Chamado finalizado.");
				
				this.historicoService.save(historico);
			}
		}
		
		return chamado;
	}

	public void delete(Chamado chamado, Colaborador colaborador) {
		chamado.setStatus(null);
		this.chamadoRepository.save(chamado);
		
		Historico historico = new Historico();
		historico.setChamado(chamado);
		historico.setColaborador(colaborador);
		historico.setTitulo("Chamado excluído.");
		
		this.historicoService.save(historico);
	}

	public List<Chamado> list(Long empresa, Boolean status) {
		List<Chamado> chamados = this.chamadoRepository.findAll(empresa, status);
		chamados.addAll(this.chamadoRepository.findAllPrazoNull(empresa, status));
		return chamados;
	}
	
	public List<Chamado> list(Long empresa, Boolean status, Long colaborador) {
		List<Chamado> chamados = this.chamadoRepository.findAllByColaborador(empresa, status, colaborador);
		chamados.addAll(this.chamadoRepository.findAllByColaboradorPrazoNull(empresa, status, colaborador));
		return chamados;
	}
	
}
