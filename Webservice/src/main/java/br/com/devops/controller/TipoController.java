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

import br.com.devops.model.Tipo;
import br.com.devops.service.TipoService;
import br.com.devops.view.View;

@RestController
@RequestMapping(value="/tipo")
public class TipoController {
	
	@Autowired
	private TipoService tipoService;
	
	@RequestMapping(value = "/get/{codigo}")
	@JsonView(View.All.class)
	public ResponseEntity<Tipo> get(@PathVariable("codigo") Long codigo) {
		
		Tipo tipo = tipoService.get(codigo);
		if(tipo == null){
			return new ResponseEntity<Tipo>(tipo, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Tipo>(tipo, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/list/{empresa}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Tipo>> list(
			@PathVariable("empresa") Long codigo) {
		
		return new ResponseEntity<Collection<Tipo>>(tipoService.list(codigo), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/list/{empresa}/{status}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Tipo>> list(
			@PathVariable("empresa") Long codigo,
			@PathVariable("status") Boolean status) {
		
		return new ResponseEntity<Collection<Tipo>>(tipoService.list(codigo, status), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.All.class)
	@ResponseStatus(HttpStatus.CREATED)
	public Tipo save(@RequestBody Tipo tipo, HttpServletRequest request, HttpServletResponse response){
		tipo = tipoService.save(tipo);
		response.addHeader("Location", request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/tipo/get/" + tipo.getCodigo());
		
		return tipo;
	}
	
	
	@RequestMapping(value = "/delete/{codigo}", method = RequestMethod.DELETE)
	@JsonView(View.All.class)
	public ResponseEntity<Tipo> delete(@PathVariable("codigo") Long codigo) {
		Tipo tipo = tipoService.get(codigo);
		
		if(tipo == null || tipo.getStatus() == null){
			return new ResponseEntity<Tipo>(tipo, HttpStatus.NOT_FOUND);
			
		} else {
			tipo.setStatus(null);
			tipoService.save(tipo);
		}
		
		return new ResponseEntity<Tipo>(tipo, HttpStatus.OK);
	}
}
