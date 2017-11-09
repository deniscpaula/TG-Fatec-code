package br.com.devops.service;

import java.util.List;

import br.com.devops.model.Tipo;

public interface TipoService {
	public Tipo get(Long codigo);
	public Tipo save(Tipo tipo);
	public void delete(Tipo tipo);
	public List<Tipo> list(Long empresa);
	public List<Tipo> list(Long empresa, Boolean status);
}
