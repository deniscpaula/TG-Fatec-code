package br.com.devops.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.devops.model.Prioridade;
import br.com.devops.service.PrioridadeService;
import br.com.devops.view.View;

@RestController
@RequestMapping(value="/prioridade")
public class PrioridadeController {
	
	@Autowired
	private PrioridadeService prioridadeService;

	@RequestMapping(value = "/get/{codigo}")
	@JsonView(View.All.class)
	public ResponseEntity<Prioridade> get(@PathVariable("codigo") Long codigo) {
		Prioridade prioridade = prioridadeService.get(codigo);
		if(prioridade == null){
			return new ResponseEntity<Prioridade>(prioridade, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Prioridade>(prioridade, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/list/{status}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Prioridade>> list(@PathVariable("status") Boolean status) {
		return new ResponseEntity<Collection<Prioridade>>(prioridadeService.list(status), HttpStatus.OK);
	}
}
