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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.devops.model.Chamado;
import br.com.devops.model.Colaborador;
import br.com.devops.service.ChamadoService;
import br.com.devops.service.ColaboradorService;
import br.com.devops.view.View;

@RestController
@RequestMapping(value="/chamado")
public class ChamadoController {
	
	@Autowired
	private ChamadoService chamadoService;
	
	@Autowired
	private ColaboradorService colaboradorService;

	@RequestMapping(value = "/get/{codigo}")
	@JsonView(View.All.class)
	public ResponseEntity<Chamado> get(
			@PathVariable(value = "codigo") Long codigo) {
		
		Chamado chamado = chamadoService.get(codigo);
		
		if(chamado == null){
			return new ResponseEntity<Chamado>(chamado, HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<Chamado>(chamado, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/get/{codigo}/{empresa}")
	@JsonView(View.All.class)
	public ResponseEntity<Chamado> get(
			@PathVariable(value = "codigo") Long codigo,
			@PathVariable("empresa") Long empresa) {
		
		Chamado chamado = chamadoService.get(codigo, empresa);
		
		if(chamado == null){
			return new ResponseEntity<Chamado>(chamado, HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<Chamado>(chamado, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/list/{empresa}/{status}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Chamado>> list(
			@PathVariable("empresa") Long codigo,
			@PathVariable("status") Boolean status) {
		
		return new ResponseEntity<Collection<Chamado>>(chamadoService.list(codigo, status), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/list/{empresa}/{status}/{colaborador}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Chamado>> list(
			@PathVariable("empresa") Long codigo,
			@PathVariable("status") Boolean status,
			@PathVariable("colaborador") Long colaborador) {
		
		return new ResponseEntity<Collection<Chamado>>(chamadoService.list(codigo, status, colaborador), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/save/{codigo}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.All.class)
	@ResponseStatus(HttpStatus.CREATED)
	public Chamado save(@PathVariable(value = "codigo") Long codigo, @RequestBody Chamado chamado){
		Colaborador colaborador = colaboradorService.get(codigo);
		
		chamado = chamadoService.save(chamado, colaborador);
		
		return chamado;
	}
	
	@RequestMapping(value = "/delete/{codigo}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.All.class)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Chamado> delete(@PathVariable(value = "codigo") Long codigo, @RequestBody Chamado chamado){
		Colaborador colaborador = colaboradorService.get(codigo);
		
		chamadoService.delete(chamado, colaborador);
		
		return new ResponseEntity<Chamado>(HttpStatus.OK);
	}
}
