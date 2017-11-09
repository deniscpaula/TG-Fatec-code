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
@Table(name = "historico")
public class Historico {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo")
	@JsonView({View.All.class, View.Historico.class})
	private Long codigo;
	
	@Column(name = "titulo")
	@JsonView({View.All.class, View.Historico.class})
	private String titulo;
	
	@Column(name = "descricao")
	@JsonView({View.All.class, View.Historico.class})
	private String descricao;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "data")
	@JsonView({View.All.class, View.Historico.class})
	private Date data;
	
	@ManyToOne
	@JoinColumn(name = "fk_colaborador")
	@JsonView({View.All.class, View.Historico.class})
	private Colaborador colaborador;
	
	@ManyToOne
	@JoinColumn(name = "fk_chamado")
	@JsonView({View.All.class, View.Historico.class})
	private Chamado chamado;

	public Long getCodigo() {
		return codigo;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public Colaborador getColaborador() {
		return colaborador;
	}

	public void setColaborador(Colaborador colaborador) {
		this.colaborador = colaborador;
	}

	public Chamado getChamado() {
		return chamado;
	}

	public void setChamado(Chamado chamado) {
		this.chamado = chamado;
	}
}	
