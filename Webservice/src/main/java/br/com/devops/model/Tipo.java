package br.com.devops.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.devops.view.View;

@Entity
@Table(name = "tipo")
public class Tipo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo")
	@JsonView({View.All.class})
	private Long codigo;
	
	@Column(name = "nome")
	@JsonView({View.All.class})
	private String nome;
	
	@Column(name = "sigla")
	@JsonView({View.All.class})
	private String sigla;
	
	@Column(name = "status")
	@JsonView({View.All.class})
	private Boolean status;
	
	@ManyToOne
	@JoinColumn(name = "fk_empresa")
	@JsonView({View.All.class})
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

	public String getSigla() {
		return sigla;
	}

	public void setSigla(String sigla) {
		this.sigla = sigla;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}
	
}
