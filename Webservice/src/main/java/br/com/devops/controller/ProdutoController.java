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

import br.com.devops.model.Produto;
import br.com.devops.service.ProdutoService;
import br.com.devops.view.View;

@RestController
@RequestMapping(value="/produto")
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;

	@RequestMapping(value = "/get/{codigo}")
	@JsonView(View.All.class)
	public ResponseEntity<Produto> get(@PathVariable("codigo") Long codigo) {
		
		Produto produto = produtoService.get(codigo);
		if(produto == null){
			return new ResponseEntity<Produto>(produto, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Produto>(produto, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/list/{empresa}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Produto>> getAll(
			@PathVariable("empresa") Long codigo) {
		
		return new ResponseEntity<Collection<Produto>>(produtoService.list(codigo), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/list/{empresa}/{status}")
	@JsonView(View.All.class)
	public ResponseEntity<Collection<Produto>> getAll(
			@PathVariable("empresa") Long codigo,
			@PathVariable("status") Boolean status) {
		
		return new ResponseEntity<Collection<Produto>>(produtoService.list(codigo, status), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@JsonView(View.All.class)
	@ResponseStatus(HttpStatus.CREATED)
	public Produto save(@RequestBody Produto produto, HttpServletRequest request, HttpServletResponse response){
		produto = produtoService.save(produto);
		response.addHeader("Location", request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/produto/get/" + produto.getCodigo());
		
		return produto;
	}
	
	
	@RequestMapping(value = "/delete/{codigo}", method = RequestMethod.DELETE)
	@JsonView(View.All.class)
	public ResponseEntity<Produto> delete(@PathVariable("codigo") Long codigo, HttpServletRequest request, HttpServletResponse response) {
		Produto produto = produtoService.get(codigo);
		if(produto == null || produto.getStatus() == null){
			return new ResponseEntity<Produto>(produto, HttpStatus.NOT_FOUND);
		} else {
			produto.setStatus(null);
			produtoService.save(produto);
			String location = "/produto/list/" + produto.getEmpresa().getCodigo() + "/1"; 
			response.addHeader("Location", request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + location);
		}
		return new ResponseEntity<Produto>(produto, HttpStatus.OK);
	}
}
