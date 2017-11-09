package br.com.devops.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.devops.model.Processo;

public interface ProcessoRepository extends CrudRepository<Processo, Long>{
	public Processo findByCodigo(Long codigo);
	
	@Query("from Processo p where empresa.codigo = ?1 and status = ?2")
	public List<Processo> findByStatus(Long empresa, Boolean status);
	
	@Query("from Processo p where empresa.codigo = ?1 and status != null")
	public List<Processo> findAll(Long empresa);
}
