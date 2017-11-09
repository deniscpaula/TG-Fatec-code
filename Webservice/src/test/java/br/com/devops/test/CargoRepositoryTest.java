package br.com.devops.test;


import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import br.com.devops.model.Cargo;
import br.com.devops.model.Empresa;
import br.com.devops.repository.CargoRepository;
import br.com.devops.repository.EmpresaRepository;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:/Test-context.xml" })
@Rollback
@Transactional
public class CargoRepositoryTest extends AbstractTransactionalJUnit4SpringContextTests {
	
	@Autowired
	private CargoRepository cargoRepository;
	
	@Autowired
	private EmpresaRepository empresaRepository;
	
	public void setCargoRepository(CargoRepository cargoRepository) {
		this.cargoRepository = cargoRepository;
	}
	
	public void setEmpresaRepository(EmpresaRepository empresaRepository) {
		this.empresaRepository = empresaRepository;
	}
	

	@Test
	public void save() {
		Empresa empresa = new Empresa();
		empresa.setNomeFantasia("DevOps");
		empresa.setRazaoSocial("DevOps Ltda EPP");
		empresa.setStatus(true);
		this.empresaRepository.save(empresa);
		
		Cargo cargo = new Cargo();
		cargo.setDescricao("Desenvolvedor web java / spring");
		cargo.setNome("Desenvolvedor");
		cargo.setStatus(true);
		cargo.setEmpresa(empresa);
		this.cargoRepository.save(cargo);
		
		System.out.println(cargo.getCodigo());
		
		assertTrue(cargo.getCodigo() != null);
	}

}
