package br.com.devops.service;

import br.com.devops.model.Usuario;

public interface UsuarioService {
	public Usuario get(Long codigo);
	public Usuario save(Usuario usuario);
	public Usuario login(Usuario usuario);
}
