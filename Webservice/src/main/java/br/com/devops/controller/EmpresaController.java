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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.devops.model.Empresa;
import br.com.devops.service.EmpresaService;
import br.com.devops.view.View;

@RestController
@RequestMapping(value="/empresa")
public class EmpresaController {
	
	@Autowired
	private EmpresaService empresaService;

	@RequestMapping(value = "/get/{codigo}")
	@JsonView(View.All.class)
	public ResponseEntity<Empresa> get(@PathVariable("codigo") Long codigo) {
		Empresa empresa = empresaService.get(codigo);
		if(empresa == null){
			return new ResponseEntity<Empresa>(empresa, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Empresa>(empresa, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.All.class)
	@ResponseStatus(HttpStatus.CREATED)
	public Empresa save(@RequestBody Empresa empresa, HttpServletRequest request, HttpServletResponse response){
		empresa = empresaService.save(empresa);
		response.addHeader("Location", request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/empresa/get/" + empresa.getCodigo());
		
		return empresa;
	}
	
	
	@RequestMapping(value = "/delete/{codigo}", method = RequestMethod.DELETE)
	@JsonView(View.All.class)
	public ResponseEntity<Empresa> delete(@PathVariable("codigo") Long codigo, HttpServletRequest request, HttpServletResponse response) {
		Empresa empresa = empresaService.get(codigo);
		
		if(empresa == null){
			return new ResponseEntity<Empresa>(empresa, HttpStatus.NOT_FOUND);
		
		} else {
			empresa.setStatus(null);
			empresaService.save(empresa);
		}
		
		return new ResponseEntity<Empresa>(empresa, HttpStatus.OK);
	}
}
