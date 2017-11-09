package br.com.devops.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devops.model.Chamado;
import br.com.devops.model.Historico;
import br.com.devops.repository.HistoricoRepository;

@Service("historicoService")
public class HistoricoServiceImpl implements HistoricoService {

	@Autowired
	private HistoricoRepository historicoRepository; 

	public Historico get(Long codigo) {
		return this.historicoRepository.findByCodigo(codigo);
	}

	public Historico save(Historico historico) {
		return this.historicoRepository.save(historico);
	}

	public List<Historico> list(Chamado chamado) {
		return this.historicoRepository.findAll(chamado);
	}

}
