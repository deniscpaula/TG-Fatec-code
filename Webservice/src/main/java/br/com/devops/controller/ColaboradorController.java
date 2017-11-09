package br.com.devops.controller;

import java.util.Collection;

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
import br.com.devops.service.ColaboradorService;
import br.com.devops.service.UsuarioService;
import br.com.devops.view.View;

@RestController
@RequestMapping(value="/colaborador")
public class ColaboradorController {
	
	@Autowired
	private ColaboradorService colaboradorService;
	
	@Autowired
	private UsuarioService usuarioService;

	@RequestMapping(value = "/get/{codigo}")
	@JsonView(View.All.class)
	public ResponseEntity<Colaborador> get(@PathVariable("codigo") Long codigo) {
		Colaborador colaborador = colaboradorService.get(codigo);
		if(colaborador == null){
			return new ResponseEntity<Colaborador>(colaborador, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Colaborador>(colaborador, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/list/{empresa}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Colaborador>> list(
			@PathVariable("empresa") Long codigo) {
		
		return new ResponseEntity<Collection<Colaborador>>(colaboradorService.list(codigo), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/list/{empresa}/{status}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Colaborador>> list(
			@PathVariable("empresa") Long codigo,
			@PathVariable("status") Boolean status) {
		
		return new ResponseEntity<Collection<Colaborador>>(colaboradorService.list(codigo, status), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.All.class)
	public ResponseEntity<Colaborador> save(@RequestBody Colaborador colaborador, HttpServletRequest request, HttpServletResponse response){
		try {
			colaborador = colaboradorService.save(colaborador);
			
			response.addHeader("Location", request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/colaborador/get/" + colaborador.getCodigo());
			
			if(colaborador == null || colaborador.getCodigo() == null) {
				return new ResponseEntity<Colaborador>(colaborador, HttpStatus.NOT_FOUND);
			
			} else {
				return new ResponseEntity<Colaborador>(colaborador, HttpStatus.OK);
			}
		
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Colaborador>(colaborador, HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		
	}
	
	
	@RequestMapping(value = "/delete/{codigo}", method = RequestMethod.DELETE)
	@JsonView(View.All.class)
	public ResponseEntity<Colaborador> delete(@PathVariable("codigo") Long codigo) {
		Colaborador colaborador = colaboradorService.get(codigo);
		
		if(colaborador == null || colaborador.getUsuario().getStatus() == null){
			return new ResponseEntity<Colaborador>(colaborador, HttpStatus.NOT_FOUND);
		
		} else {
			colaborador.getUsuario().setStatus(null);
			usuarioService.save(colaborador.getUsuario());
		}
		
		return new ResponseEntity<Colaborador>(colaborador, HttpStatus.OK);
	}
}
