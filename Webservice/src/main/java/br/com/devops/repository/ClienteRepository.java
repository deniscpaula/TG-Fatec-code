package br.com.devops.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.devops.model.Cliente;

public interface ClienteRepository extends CrudRepository<Cliente, Long>{
	public Cliente findByCodigo(Long codigo);

	@Query("from Cliente c where empresa.codigo = ?1 and status != null")
	public List<Cliente> findAll(Long empresa);
	
	@Query("from Cliente c where empresa.codigo = ?1 and status = ?2")
	public List<Cliente> findByStatus(Long empresa, Boolean status);

}
