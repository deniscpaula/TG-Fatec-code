package br.com.devops.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.devops.model.Produto;

public interface ProdutoRepository extends CrudRepository<Produto, Long>{
	public Produto findByCodigo(Long codigo);
	
	@Query("from Produto p where empresa.codigo = ?1 and status = ?2")
	public List<Produto> findByStatus(Long empresa, Boolean status);
	
	@Query("from Produto p where empresa.codigo = ?1 and status != null")
	public List<Produto> findAll(Long empresa);
}
