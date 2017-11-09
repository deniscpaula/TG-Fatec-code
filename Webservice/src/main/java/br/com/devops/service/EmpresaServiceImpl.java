package br.com.devops.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devops.model.Empresa;
import br.com.devops.repository.EmpresaRepository;

@Service("empresaService")
public class EmpresaServiceImpl implements EmpresaService {

	@Autowired
	private EmpresaRepository empresaRepository; 

	public Empresa get(Long codigo) {
		return this.empresaRepository.findByCodigo(codigo);
	}

	public Empresa save(Empresa empresa) {
		return this.empresaRepository.save(empresa);
	}
}
