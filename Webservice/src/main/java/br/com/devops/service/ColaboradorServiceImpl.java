package br.com.devops.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.devops.model.Colaborador;
import br.com.devops.model.Usuario;
import br.com.devops.repository.ColaboradorRepository;
import br.com.devops.repository.EmpresaRepository;

@Service("colaboradorService")
public class ColaboradorServiceImpl implements ColaboradorService {

	@Autowired
	private ColaboradorRepository colaboradorRepository; 
	
	@Autowired
	private EmpresaRepository empresaRepository;
	
	@Autowired
	private UsuarioService usuarioService;

	public Colaborador get(Long codigo) {
		return this.colaboradorRepository.findByCodigo(codigo);
	}
	
	@Transactional
	public Colaborador save(Colaborador colaborador) {
		if(colaborador.getEmpresa().getCodigo() == null) {
			colaborador.getEmpresa().setStatus(true);
			this.empresaRepository.save(colaborador.getEmpresa());
		}
		if(colaborador.getUsuario().getCodigo() == null) {
			colaborador.getUsuario().setStatus(true);
			this.usuarioService.save(colaborador.getUsuario());
		}
		if(colaborador.getApelido() == null) {
			colaborador.setApelido(colaborador.getNome().split(" ")[0]);
		}
		if(colaborador.getCargo() == null || colaborador.getCargo().getCodigo() == null) {
			colaborador.setCargo(null);
		}
		colaborador = this.colaboradorRepository.save(colaborador);
		return colaborador;
	}
	
	/**
	 * Altera o status do usuário de colaborador para excluído
	 */
	public void delete(Colaborador colaborador) {
		Usuario usuario = colaborador.getUsuario();
		usuario.setStatus(null);
		this.usuarioService.save(usuario);
	}

	public List<Colaborador> list(Long empresa) {
		return this.colaboradorRepository.findAll(empresa);
	}
	
	public List<Colaborador> list(Long empresa, Boolean status) {
		return this.colaboradorRepository.findByStatus(empresa, status);
	}

	public Colaborador getByUser(Long codigo) {
		return this.colaboradorRepository.findByUser(codigo);
	}
	
}
