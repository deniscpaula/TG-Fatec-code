package br.com.devops.service;

import java.util.List;

import br.com.devops.model.Chamado;
import br.com.devops.model.Historico;

public interface HistoricoService {
	public Historico get(Long codigo);
	public Historico save(Historico historico);
	public List<Historico> list(Chamado chamado);
}
