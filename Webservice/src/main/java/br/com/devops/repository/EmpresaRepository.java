package br.com.devops.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.devops.model.Empresa;

public interface EmpresaRepository extends CrudRepository<Empresa, Long>{
	public Empresa findByCodigo(Long codigo);
	
	@Query("from Empresa e where status = ?1")
	public List<Empresa> findAll(Boolean status);
}
