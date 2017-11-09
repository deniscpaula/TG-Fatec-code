package br.com.devops.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.devops.model.Colaborador;
import br.com.devops.model.Usuario;
import br.com.devops.service.ColaboradorService;
import br.com.devops.service.UsuarioService;
import br.com.devops.view.View;

@RestController
@RequestMapping(value="/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private ColaboradorService colaboradorService;
	
	@RequestMapping(value = "/get/{codigo}")
	@JsonView(View.All.class)
	public ResponseEntity<Usuario> get(@PathVariable("codigo") Long codigo) {
		
		Usuario usuario = usuarioService.get(codigo);
		if(usuario == null){
			return new ResponseEntity<Usuario>(usuario, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.All.class)
	public ResponseEntity<Usuario> save(@RequestBody Usuario usuario, HttpServletRequest request, HttpServletResponse response){
		usuario = usuarioService.save(usuario);
		response.addHeader("Location", request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/usuario/get/" + usuario.getCodigo());
		
		if(usuario.getCodigo() == null) {
			return new ResponseEntity<Usuario>(usuario, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Usuario>(usuario, HttpStatus.CREATED);
	}
	
	
	@RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.Login.class)
	public ResponseEntity<Colaborador> login(@RequestBody Usuario usuario){
		usuario = usuarioService.login(usuario);
		
		
		Colaborador colaborador = null;
		if(usuario == null) {
			return new ResponseEntity<Colaborador>(colaborador, HttpStatus.NOT_FOUND);
		}
		
		colaborador = colaboradorService.getByUser(usuario.getCodigo());
		
		if(colaborador == null) {
			return new ResponseEntity<Colaborador>(colaborador, HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<Colaborador>(colaborador, HttpStatus.OK);
	}
	
}