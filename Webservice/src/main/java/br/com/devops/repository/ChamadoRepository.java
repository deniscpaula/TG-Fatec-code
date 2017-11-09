package br.com.devops.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.devops.model.Chamado;

public interface ChamadoRepository extends CrudRepository<Chamado, Long>{
	public Chamado findByCodigo(Long codigo);
	
	@Query("from Chamado c where codigoInterno = ?1 and empresa.codigo = ?2")
	public Chamado findByCodigo(Long codigoInterno, Long empresa);
	
	@Query("from Chamado c where empresa.codigo = ?1 and status = ?2 and prazo != null order by prazo, prioridade.codigo desc, codigo")
	public List<Chamado> findAll(Long empresa, Boolean status);
	
	@Query("from Chamado c where empresa.codigo = ?1 and status = ?2 and prazo = null order by prazo, prioridade.codigo desc, codigo")
	public List<Chamado> findAllPrazoNull(Long empresa, Boolean status);
	
	@Query("from Chamado c where empresa.codigo = ?1 and status = ?2 and prazo != null and responsavel.codigo = ?3 order by prazo, prioridade.codigo desc, codigo")
	public List<Chamado> findAllByColaborador(Long empresa, Boolean status, Long colaborador);
	
	@Query("from Chamado c where empresa.codigo = ?1 and status = ?2 and prazo = null and responsavel.codigo = ?3 order by prazo, prioridade.codigo desc, codigo")
	public List<Chamado> findAllByColaboradorPrazoNull(Long empresa, Boolean status, Long colaborador);
}