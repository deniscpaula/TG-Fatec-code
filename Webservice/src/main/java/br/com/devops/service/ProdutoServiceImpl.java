package br.com.devops.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devops.model.Produto;
import br.com.devops.repository.ProdutoRepository;

@Service("produtoService")
public class ProdutoServiceImpl implements ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository; 

	public Produto get(Long codigo) {
		return this.produtoRepository.findByCodigo(codigo);
	}

	public Produto save(Produto produto) {
		return this.produtoRepository.save(produto);
	}

	public void delete(Produto produto) {
		produto.setStatus(null);
		this.produtoRepository.save(produto);
	}

	public List<Produto> list(Long empresa) {
		return this.produtoRepository.findAll(empresa);
	}
	
	public List<Produto> list(Long empresa, Boolean status) {
		return this.produtoRepository.findByStatus(empresa, status);
	}
}
