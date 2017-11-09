package br.com.devops.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.devops.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long>{
	public Usuario findByCodigo(Long codigo);
	
	@Query("from Usuario u where email = ?1 and senha = ?2")
	public Usuario login(String email, String senha);
}
