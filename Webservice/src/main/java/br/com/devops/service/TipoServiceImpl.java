package br.com.devops.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devops.model.Tipo;
import br.com.devops.repository.TipoRepository;

@Service("tipoService")
public class TipoServiceImpl implements TipoService {

	@Autowired
	private TipoRepository tipoRepository; 

	public Tipo get(Long codigo) {
		return this.tipoRepository.findByCodigo(codigo);
	}

	public Tipo save(Tipo tipo) {
		return this.tipoRepository.save(tipo);
	}

	public void delete(Tipo tipo) {
		tipo.setStatus(null);
		this.tipoRepository.save(tipo);
	}

	public List<Tipo> list(Long empresa) {
		return this.tipoRepository.findAll(empresa);
	}
	
	public List<Tipo> list(Long empresa, Boolean status) {
		return this.tipoRepository.findByStatus(empresa, status);
	}
}
