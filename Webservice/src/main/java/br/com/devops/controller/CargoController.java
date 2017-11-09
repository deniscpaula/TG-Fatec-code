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

import br.com.devops.model.Cargo;
import br.com.devops.service.CargoService;
import br.com.devops.view.View;

@RestController
@RequestMapping(value="/cargo")
public class CargoController {
	
	@Autowired
	private CargoService cargoService;

	@RequestMapping(value = "/get/{codigo}")
	@JsonView(View.All.class)
	public ResponseEntity<Cargo> get(@PathVariable("codigo") Long codigo) {
		
		Cargo cargo = cargoService.get(codigo);
		if(cargo == null){
			return new ResponseEntity<Cargo>(cargo, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Cargo>(cargo, HttpStatus.OK);
	}
	
	
	// Retorna a lista de itens ativos E inativos
	@RequestMapping(value = "/list/{empresa}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Cargo>> list(
			@PathVariable("empresa") Long codigo) {
		
		return new ResponseEntity<Collection<Cargo>>(cargoService.list(codigo), HttpStatus.OK);
	}
	
	
	// Retorna a lista de itens ativos OU inativos
	@RequestMapping(value = "/list/{empresa}/{status}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Cargo>> list(
			@PathVariable("empresa") Long codigo,
			@PathVariable("status") Boolean status) {
		
		return new ResponseEntity<Collection<Cargo>>(cargoService.list(codigo, status), HttpStatus.OK);
	}

	
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.All.class)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Cargo> save(@RequestBody Cargo cargo, HttpServletRequest request, HttpServletResponse response){
		cargo = cargoService.save(cargo);
		response.addHeader("Location", request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/cargo/get/" + cargo.getCodigo());
		
		if(cargo.getCodigo() == null) {
			return new ResponseEntity<Cargo>(cargo, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Cargo>(cargo, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/delete/{codigo}", method = RequestMethod.DELETE)
	@JsonView(View.All.class)
	public ResponseEntity<Cargo> delete(@PathVariable("codigo") Long codigo) {
		Cargo cargo = cargoService.get(codigo);
		if(cargo == null || cargo.getStatus() == null){
			return new ResponseEntity<Cargo>(cargo, HttpStatus.NOT_FOUND);
		} else {
			cargo.setStatus(null);
			cargoService.save(cargo);
		}
		return new ResponseEntity<Cargo>(cargo, HttpStatus.OK);
	}
}
