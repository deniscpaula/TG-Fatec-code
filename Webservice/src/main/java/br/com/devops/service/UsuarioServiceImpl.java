package br.com.devops.service;

import java.math.BigInteger;
import java.security.SecureRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devops.model.Usuario;
import br.com.devops.repository.UsuarioRepository;

@Service("usuarioService")
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository; 
	
	private SecureRandom random = new SecureRandom();

	public Usuario get(Long codigo) {
		return this.usuarioRepository.findByCodigo(codigo);
	}

	public Usuario save(Usuario usuario) {
		if(usuario.getCodigo() != null && usuario.getSenha() == null) {
			String senha = usuarioRepository.findByCodigo(usuario.getCodigo()).getSenha();
			usuario.setSenha(senha);
		
		} else if(usuario.getCodigo() == null && usuario.getSenha() == null) {
			usuario.setSenha("teste");
			//usuario.setSenha(Long.toHexString(new BigInteger(32, random).longValue()));
		}
		
		return this.usuarioRepository.save(usuario);
	}

	public Usuario login(Usuario usuario) {
		return this.usuarioRepository.login(usuario.getEmail(), usuario.getSenha());
	}
}
