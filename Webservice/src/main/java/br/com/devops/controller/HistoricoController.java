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
import br.com.devops.model.Historico;
import br.com.devops.service.ChamadoService;
import br.com.devops.service.HistoricoService;
import br.com.devops.view.View;

@RestController
@RequestMapping(value="/chamado/historico")
public class HistoricoController {
	
	@Autowired
	private HistoricoService historicoService;
	
	@Autowired
	private ChamadoService chamadoService;

	@RequestMapping(value = "/get/{codigo}")
	@JsonView(View.All.class)
	public ResponseEntity<Historico> get(@PathVariable("codigo") Long codigo) {
		Historico historico = historicoService.get(codigo);
		if(historico == null){
			return new ResponseEntity<Historico>(historico, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Historico>(historico, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/list/{codigo}")
	@JsonView(View.Historico.class)
	public ResponseEntity<Collection<Historico>> list(
			@PathVariable("codigo") Long codigo) {
		
		Chamado chamado = chamadoService.get(codigo);
		return new ResponseEntity<Collection<Historico>>(historicoService.list(chamado), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.All.class)
	@ResponseStatus(HttpStatus.CREATED)
	public Historico save(@RequestBody Historico historico, HttpServletRequest request, HttpServletResponse response){
		historico = historicoService.save(historico);
		response.addHeader("Location", request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/chamado/historico/get/" + historico.getCodigo());
		
		return historico;
	}
	
}
