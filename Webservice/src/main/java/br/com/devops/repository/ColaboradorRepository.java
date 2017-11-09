package br.com.devops.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.devops.model.Colaborador;

public interface ColaboradorRepository extends CrudRepository<Colaborador, Long>{
	public Colaborador findByCodigo(Long codigo);
	
	@Query("from Colaborador c where empresa.codigo = ?1 and usuario.status = ?2")
	public List<Colaborador> findByStatus(Long empresa, Boolean status);
	
	@Query("from Colaborador c where empresa.codigo = ?1 and usuario.status != null")
	public List<Colaborador> findAll(Long empresa);
	
	@Query("from Colaborador c where usuario.codigo = ?1")
	public Colaborador findByUser(Long codigo);
}
