package br.com.devops.service;

import java.util.List;

import br.com.devops.model.Processo;

public interface ProcessoService {
	public Processo get(Long codigo);
	public Processo save(Processo processo);
	public void delete(Processo processo);
	public List<Processo> list(Long empresa);
	public List<Processo> list(Long empresa, Boolean status);
}
