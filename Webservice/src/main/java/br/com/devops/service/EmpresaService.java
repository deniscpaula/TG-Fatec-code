package br.com.devops.service;

import br.com.devops.model.Empresa;

public interface EmpresaService {
	public Empresa get(Long codigo);
	public Empresa save(Empresa empresa);
}
