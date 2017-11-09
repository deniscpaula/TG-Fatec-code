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
@Table(name = "cliente")
public class Cliente {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo")
	@JsonView({View.All.class})
	private Long codigo;
	
	@Column(name = "nome_fantasia")
	@JsonView({View.All.class})
	private String nomeFantasia;
	
	@Column(name = "razao_social")
	@JsonView({View.All.class})
	private String razaoSocial;
	
	@Column(name = "cnpj")
	@JsonView({View.All.class})
	private String cnpj;
	
	@Column(name = "telefone")
	@JsonView({View.All.class})
	private String telefone;
	
	@Column(name = "email")
	@JsonView({View.All.class})
	private String email;
	
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
	
	public String getNomeFantasia() {
		return nomeFantasia;
	}

	public void setNomeFantasia(String nomeFantasia) {
		this.nomeFantasia = nomeFantasia;
	}

	public String getRazaoSocial() {
		return razaoSocial;
	}

	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public void setEmpresa(Empresa empresal) {
		this.empresa = empresal;
	}
	
}
