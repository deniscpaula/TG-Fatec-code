package br.com.devops.service;

import java.util.List;

import br.com.devops.model.Cargo;

public interface CargoService {
	public Cargo get(Long codigo);
	public Cargo save(Cargo cargo);
	public void delete(Cargo cargo);
	public List<Cargo> list(Long empresa);
	public List<Cargo> list(Long empresa, Boolean status);
	
}
