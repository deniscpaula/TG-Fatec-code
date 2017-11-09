package br.com.devops.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.devops.model.Chamado;
import br.com.devops.model.Historico;

public interface HistoricoRepository extends CrudRepository<Historico, Long>{
	public Historico findByCodigo(Long codigo);
	
	@Query("from Historico h where chamado = ?1 order by data desc")
	public List<Historico> findAll(Chamado chamado);
}
