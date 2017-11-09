package br.com.devops.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.devops.model.Tipo;

public interface TipoRepository extends CrudRepository<Tipo, Long>{
	public Tipo findByCodigo(Long codigo);
	
	@Query("from Tipo t where empresa.codigo = ?1 and status = ?2")
	public List<Tipo> findByStatus(Long empresa, Boolean status);
	
	@Query("from Tipo t where empresa.codigo = ?1 and status != null")
	public List<Tipo> findAll(Long empresa);
}
