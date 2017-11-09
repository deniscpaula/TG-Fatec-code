package br.com.devops.test;


import static org.junit.Assert.assertTrue;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import br.com.devops.model.Cargo;
import br.com.devops.model.Chamado;
import br.com.devops.model.Cliente;
import br.com.devops.model.Colaborador;
import br.com.devops.model.Empresa;
import br.com.devops.model.Prioridade;
import br.com.devops.model.Processo;
import br.com.devops.model.Produto;
import br.com.devops.model.Tipo;
import br.com.devops.model.Usuario;
import br.com.devops.repository.CargoRepository;
import br.com.devops.repository.ChamadoRepository;
import br.com.devops.repository.ClienteRepository;
import br.com.devops.repository.ColaboradorRepository;
import br.com.devops.repository.EmpresaRepository;
import br.com.devops.repository.PrioridadeRepository;
import br.com.devops.repository.ProcessoRepository;
import br.com.devops.repository.ProdutoRepository;
import br.com.devops.repository.TipoRepository;
import br.com.devops.repository.UsuarioRepository;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:/Test-context.xml" })
@Rollback
@Transactional
public class ChamadoRepositoryTest extends AbstractTransactionalJUnit4SpringContextTests {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private EmpresaRepository empresaRepository;
	
	@Autowired
	private PrioridadeRepository prioridadeRepository;
	
	@Autowired
	private ProcessoRepository processoRepository;
	
	@Autowired
	private TipoRepository tipoRepository;
	
	@Autowired
	private ChamadoRepository chamadoRepository;
	
	@Autowired
	private ColaboradorRepository colaboradorRepository;
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Autowired
	private CargoRepository cargoRepository;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	

	@Test
	public void save() {
		Empresa empresa = new Empresa();
		empresa.setNomeFantasia("DevOps");
		empresa.setRazaoSocial("DevOps Ltda EPP");
		empresa.setStatus(true);
		this.empresaRepository.save(empresa);
		assertTrue(empresa.getCodigo() != null);
		
		
		Cliente cliente = new Cliente();
		cliente.setCnpj("24.020.051/0001-12");
		cliente.setEmail("denis@devops.com.br");
		cliente.setEmpresa(empresa);
		cliente.setNomeFantasia("Cliente 1");
		cliente.setRazaoSocial("Cliente 1 Ltda EPP");
		cliente.setStatus(true);
		cliente.setTelefone("00000-0000");
		this.clienteRepository.save(cliente);
		assertTrue(cliente.getCodigo() != null);
		
		Date prazo = new Date();
		
		Prioridade prioridade = new Prioridade();
		prioridade = this.prioridadeRepository.findByCodigo(1l);
		this.prioridadeRepository.save(prioridade);
		assertTrue(prioridade.getCodigo() != null);
		
		
		Processo processo = new Processo();
		processo.setCor("#ededed");
		processo.setEmpresa(empresa);
		processo.setNome("Homologação");
		processo.setSigla("HM");
		processo.setStatus(true);
		processoRepository.save(processo);
		assertTrue(processo.getCodigo() != null);
		
		Tipo tipo = new Tipo();
		tipo.setEmpresa(empresa);
		tipo.setNome("Correção");
		tipo.setSigla("CO");
		tipo.setStatus(true);
		this.tipoRepository.save(tipo);
		assertTrue(tipo.getCodigo() != null);
		
		Produto produto = new Produto();
		produto.setDescricao("Sistema bla bla");
		produto.setEmpresa(empresa);
		produto.setNome("Sis J2");
		produto.setStatus(true);
		this.produtoRepository.save(produto);
		assertTrue(produto.getCodigo() != null);
		
		Cargo cargo = new Cargo();
		cargo.setDescricao("Desenvolvedor web java / spring");
		cargo.setNome("Desenvolvedor");
		cargo.setStatus(true);
		cargo.setEmpresa(empresa);
		this.cargoRepository.save(cargo);
		assertTrue(cargo.getCodigo() != null);
		
		Usuario usuario = new Usuario();
		usuario.setEmail("denis@devops.com.br");
		usuario.setSenha("12345");
		usuario.setStatus(true);
		this.usuarioRepository.save(usuario);
		assertTrue(usuario.getCodigo() != null);
		
		
		Colaborador responsavel = new Colaborador();
		responsavel.setApelido("Denis");
		responsavel.setCargo(cargo);
		responsavel.setCpf("102.710.069-25");
		responsavel.setEmpresa(empresa);
		responsavel.setNome("Denis Campos");
		responsavel.setUsuario(usuario);
		this.colaboradorRepository.save(responsavel);
		assertTrue(responsavel.getCodigo() != null);
		
		
		Chamado chamado = new Chamado();
		chamado.setAssunto("Gráfico não funciona");
		chamado.setDescricao("Gráfico está desalinhado e exibindo dados incorretos");
		chamado.setCliente(cliente);
		chamado.setPrazo(prazo);
		chamado.setPrioridade(prioridade);
		chamado.setProcesso(processo);
		chamado.setStatus(true);
		chamado.setTipo(tipo);
		chamado.setProduto(produto);
		chamado.setResponsavel(responsavel);
		this.chamadoRepository.save(chamado);
		
		assertTrue(chamado.getCodigo() != null);
		
	}

}