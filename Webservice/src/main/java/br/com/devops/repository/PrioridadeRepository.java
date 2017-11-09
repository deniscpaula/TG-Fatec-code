package br.com.devops.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.devops.model.Prioridade;

public interface PrioridadeRepository extends CrudRepository<Prioridade, Long>{
	public Prioridade findByCodigo(Long codigo);
	
	@Query("from Prioridade p where status = ?1")
	public List<Prioridade> findAll(Boolean status);
}
