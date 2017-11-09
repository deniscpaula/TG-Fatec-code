package br.com.devops.service;

import java.util.List;

import br.com.devops.model.Chamado;
import br.com.devops.model.Colaborador;

public interface ChamadoService {
	public Chamado get(Long codigo);
	public Chamado get(Long codigoInterno, Long empresa);
	public Chamado save(Chamado chamado, Colaborador colaborador);
	public void delete(Chamado chamado, Colaborador colaborador);
	public List<Chamado> list(Long empresa, Boolean status);
	public List<Chamado> list(Long empresa, Boolean status, Long colaborador);
}
