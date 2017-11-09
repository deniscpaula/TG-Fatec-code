package br.com.devops.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devops.model.Processo;
import br.com.devops.repository.ProcessoRepository;

@Service("processoService")
public class ProcessoServiceImpl implements ProcessoService {

	@Autowired
	private ProcessoRepository processoRepository; 

	public Processo get(Long codigo) {
		return this.processoRepository.findByCodigo(codigo);
	}

	public Processo save(Processo processo) {
		return this.processoRepository.save(processo);
	}

	public void delete(Processo processo) {
		processo.setStatus(null);
		this.processoRepository.save(processo);
	}

	public List<Processo> list(Long empresa) {
		return this.processoRepository.findAll(empresa);
	}
	
	public List<Processo> list(Long empresa, Boolean status) {
		return this.processoRepository.findByStatus(empresa, status);
	}
}
