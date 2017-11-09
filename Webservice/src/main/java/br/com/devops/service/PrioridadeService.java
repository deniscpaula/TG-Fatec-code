package br.com.devops.service;

import java.util.List;

import br.com.devops.model.Prioridade;

public interface PrioridadeService {
	public Prioridade get(Long codigo);
	public List<Prioridade> list(Boolean status);
}
