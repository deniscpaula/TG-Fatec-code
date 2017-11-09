package br.com.devops.service;

import java.util.List;

import br.com.devops.model.Cliente;

public interface ClienteService {
	public Cliente get(Long codigo);
	public Cliente save(Cliente cliente);
	public void delete(Cliente cliente);
	public List<Cliente> list(Long empresa);
	public List<Cliente> list(Long empresa, Boolean status);
}
