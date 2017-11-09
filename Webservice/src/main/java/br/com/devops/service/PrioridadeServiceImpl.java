package br.com.devops.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devops.model.Prioridade;
import br.com.devops.repository.PrioridadeRepository;

@Service("prioridadeService")
public class PrioridadeServiceImpl implements PrioridadeService {

	@Autowired
	private PrioridadeRepository prioridadeRepository; 

	public Prioridade get(Long codigo) {
		return this.prioridadeRepository.findByCodigo(codigo);
	}

	public List<Prioridade> list(Boolean status) {
		return this.prioridadeRepository.findAll(status);
	}

}
