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

import br.com.devops.model.Cliente;
import br.com.devops.service.ClienteService;
import br.com.devops.view.View;

@RestController
@RequestMapping(value="/cliente")
public class ClienteController {
	
	@Autowired
	private ClienteService clienteService;

	@RequestMapping(value = "/get/{codigo}")
	@JsonView(View.All.class)
	public ResponseEntity<Cliente> get(@PathVariable("codigo") Long codigo) {
		
		Cliente cliente = clienteService.get(codigo);
		if(cliente == null){
			return new ResponseEntity<Cliente>(cliente, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/list/{empresa}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Cliente>> list(
			@PathVariable("empresa") Long codigo) {
		
		return new ResponseEntity<Collection<Cliente>>(clienteService.list(codigo), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/list/{empresa}/{status}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Cliente>> list(
			@PathVariable("empresa") Long codigo,
			@PathVariable("status") Boolean status) {
		
		return new ResponseEntity<Collection<Cliente>>(clienteService.list(codigo, status), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.All.class)
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente save(@RequestBody Cliente cliente, HttpServletRequest request, HttpServletResponse response){
		cliente = clienteService.save(cliente);
		
		return cliente;
	}
	
	
	@RequestMapping(value = "/delete/{codigo}", method = RequestMethod.DELETE)
	@JsonView(View.All.class)
	public ResponseEntity<Cliente> delete(@PathVariable("codigo") Long codigo) {
		Cliente cliente = clienteService.get(codigo);
		if(cliente == null || cliente.getStatus() == null){
			return new ResponseEntity<Cliente>(cliente, HttpStatus.NOT_FOUND);
		} else {
			clienteService.delete(cliente);
		}
		return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
	}
}
