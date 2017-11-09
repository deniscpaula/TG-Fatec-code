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

import br.com.devops.model.Processo;
import br.com.devops.service.ProcessoService;
import br.com.devops.view.View;

@RestController
@RequestMapping(value="/processo")
public class ProcessoController {
	
	@Autowired
	private ProcessoService processoService;
	
	@RequestMapping(value = "/get/{codigo}")
	@JsonView(View.All.class)
	public ResponseEntity<Processo> get(@PathVariable("codigo") Long codigo) {
		Processo processo = processoService.get(codigo);
		if(processo == null){
			return new ResponseEntity<Processo>(processo, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Processo>(processo, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/list/{empresa}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Processo>> list(
			@PathVariable("empresa") Long codigo) {
		
		return new ResponseEntity<Collection<Processo>>(processoService.list(codigo), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/list/{empresa}/{status}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Processo>> list(
			@PathVariable("empresa") Long codigo,
			@PathVariable("status") Boolean status) {
		
		return new ResponseEntity<Collection<Processo>>(processoService.list(codigo, status), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.All.class)
	@ResponseStatus(HttpStatus.CREATED)
	public Processo save(@RequestBody Processo processo, HttpServletRequest request, HttpServletResponse response){
		processo = processoService.save(processo);
		response.addHeader("Location", request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/processo/get/" + processo.getCodigo());
		
		return processo;
	}
	
	
	@RequestMapping(value = "/delete/{codigo}", method = RequestMethod.DELETE)
	@JsonView(View.All.class)
	public ResponseEntity<Processo> delete(@PathVariable("codigo") Long codigo) {
		Processo processo = processoService.get(codigo);
		if(processo == null || processo.getStatus() == null){
			return new ResponseEntity<Processo>(processo, HttpStatus.NOT_FOUND);
		} else {
			processo.setStatus(null);
			processoService.save(processo);
		}
		return new ResponseEntity<Processo>(processo, HttpStatus.OK);
	}
}
