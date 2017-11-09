package br.com.devops.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devops.model.Cargo;
import br.com.devops.repository.CargoRepository;

@Service("cargoService")
public class CargoServiceImpl implements CargoService {

	@Autowired
	private CargoRepository cargoRepository; 

	public Cargo get(Long codigo) {
		return this.cargoRepository.findByCodigo(codigo);
	}

	public Cargo save(Cargo cargo) {
		return this.cargoRepository.save(cargo);
	}
	
	public void delete(Cargo cargo) {
		cargo.setStatus(null);
		this.cargoRepository.save(cargo);
	}

	public List<Cargo> list(Long empresa, Boolean status) {
		return this.cargoRepository.findByStatus(empresa, status);
	}
	
	public List<Cargo> list(Long empresa) {
		return this.cargoRepository.findAll(empresa);
	}
}
