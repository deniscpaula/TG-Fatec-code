package br.com.devops.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.devops.view.View;

@Entity
@Table(name = "colaborador")
public class Colaborador {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo")
	@JsonView({View.All.class, View.Login.class, View.Historico.class})
	private Long codigo;
	
	@Column(name = "nome")
	@JsonView({View.All.class, View.Historico.class})
	private String nome;
	
	@Column(name = "apelido")
	@JsonView({View.All.class, View.Login.class, View.Historico.class})
	private String apelido;
	
	@Column(name = "cpf")
	@JsonView({View.All.class})
	private String cpf;
	
	@Column(name = "administrador")
	@JsonView({View.All.class, View.Login.class})
	private Boolean administrador;
	
	@ManyToOne
	@JoinColumn(name = "fk_cargo")
	@JsonView({View.All.class})
	private Cargo cargo;
	
	@OneToOne
	@JoinColumn(name = "fk_usuario")
	@JsonView({View.All.class})
	private Usuario usuario;
	
	@ManyToOne
	@JoinColumn(name = "fk_empresa")
	@JsonView({View.All.class, View.Login.class})
	private Empresa empresa;

	public Long getCodigo() {
		return codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getApelido() {
		return apelido;
	}

	public void setApelido(String apelido) {
		this.apelido = apelido;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	public Boolean getAdministrador() {
		return administrador;
	}

	public void setAdministrador(Boolean administrador) {
		this.administrador = administrador;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}
	
}
