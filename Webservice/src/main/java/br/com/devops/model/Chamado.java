package br.com.devops.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.devops.view.View;

@Entity
@Table(name = "chamado")
public class Chamado {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo")
	@JsonView({View.All.class, View.Historico.class})
	private Long codigo;
	
	@Column(name = "codigo_interno")
	@JsonView({View.All.class})
	private Long codigoInterno;
	
	@Column(name = "assunto")
	@JsonView({View.All.class})
	private String assunto;
	
	@Column(name = "descricao")
	@JsonView({View.All.class})
	private String descricao;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "prazo")	
	@JsonView({View.All.class})
	private Date prazo;
	
	@Column(name = "status")
	@JsonView({View.All.class})
	private Boolean status;
	
	@ManyToOne
	@JoinColumn(name = "fk_prioridade")
	@JsonView({View.All.class})
	private Prioridade prioridade;
	
	@ManyToOne
	@JoinColumn(name = "fk_cliente")
	@JsonView({View.All.class})
	private Cliente cliente;
	
	@ManyToOne
	@JoinColumn(name = "fk_processo")
	@JsonView({View.All.class})
	private Processo processo;
	
	@ManyToOne
	@JoinColumn(name = "fk_tipo")
	@JsonView({View.All.class})
	private Tipo tipo;
	
	@ManyToOne
	@JoinColumn(name = "fk_responsavel")
	@JsonView({View.All.class})
	private Colaborador responsavel;
	
	@ManyToOne
	@JoinColumn(name = "fk_produto")
	@JsonView({View.All.class})
	private Produto produto;
	
	@ManyToOne
	@JoinColumn(name = "fk_empresa")
	@JsonView({View.All.class})
	private Empresa empresa;

	public Long getCodigo() {
		return codigo;
	}

	public Long getCodigoInterno() {
		return codigoInterno;
	}

	public void setCodigoInterno(Long codigoInterno) {
		this.codigoInterno = codigoInterno;
	}

	public String getAssunto() {
		return assunto;
	}

	public void setAssunto(String assunto) {
		this.assunto = assunto;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Date getPrazo() {
		return prazo;
	}

	public void setPrazo(Date prazo) {
		this.prazo = prazo;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Prioridade getPrioridade() {
		return prioridade;
	}

	public void setPrioridade(Prioridade prioridade) {
		this.prioridade = prioridade;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Processo getProcesso() {
		return processo;
	}

	public void setProcesso(Processo processo) {
		this.processo = processo;
	}

	public Tipo getTipo() {
		return tipo;
	}

	public void setTipo(Tipo tipo) {
		this.tipo = tipo;
	}

	public Colaborador getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(Colaborador responsavel) {
		this.responsavel = responsavel;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}
	
}
