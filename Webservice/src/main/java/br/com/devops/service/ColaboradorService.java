package br.com.devops.service;

import java.util.List;

import br.com.devops.model.Colaborador;

public interface ColaboradorService {
	public Colaborador get(Long codigo);
	public Colaborador save(Colaborador colaborador);
	public void delete(Colaborador colaborador);
	public List<Colaborador> list(Long empresa);
	public List<Colaborador> list(Long empresa, Boolean status);
	public Colaborador getByUser(Long codigo);
}
