package br.com.devops.service;

import java.util.List;

import br.com.devops.model.Produto;

public interface ProdutoService {
	public Produto get(Long codigo);
	public Produto save(Produto produto);
	public void delete(Produto produto);
	public List<Produto> list(Long empresa);
	public List<Produto> list(Long empresa, Boolean status);
}
