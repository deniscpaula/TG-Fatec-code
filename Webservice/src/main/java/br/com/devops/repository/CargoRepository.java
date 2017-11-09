package br.com.devops.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.devops.model.Cargo;

public interface CargoRepository extends CrudRepository<Cargo, Long> {
	public Cargo findByCodigo(Long codigo);
	
	@Query("from Cargo c where empresa.codigo = ?1 and status = ?2")
	public List<Cargo> findByStatus(Long empresa, Boolean status);
	
	@Query("from Cargo c where empresa.codigo = ?1 and status != null")
	public List<Cargo> findAll(Long empresa);
}
