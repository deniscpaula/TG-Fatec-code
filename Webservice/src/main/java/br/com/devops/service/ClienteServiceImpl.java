package br.com.devops.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devops.model.Cliente;
import br.com.devops.repository.ClienteRepository;

@Service("clienteService")
public class ClienteServiceImpl implements ClienteService {

	@Autowired
	private ClienteRepository clienteRepository; 

	public Cliente get(Long codigo) {
		return this.clienteRepository.findByCodigo(codigo);
	}

	public Cliente save(Cliente cliente) {
		return this.clienteRepository.save(cliente);
	}
	
	public void delete(Cliente cliente) {
		cliente.setStatus(null);
		this.clienteRepository.save(cliente);
	}

	public List<Cliente> list(Long empresa) {
		return this.clienteRepository.findAll(empresa);
	}
	
	public List<Cliente> list(Long empresa, Boolean status) {
		return this.clienteRepository.findByStatus(empresa, status);
	}
	
}
