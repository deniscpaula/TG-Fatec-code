import { TipoChamado } from '../tipo-chamado/tipo-chamado';
import { Colaborador } from '../colaborador/colaborador';
import { Processo } from '../processo/processo';
import { Cliente } from '../cliente/cliente';
import { Produto } from '../produto/produto';
import { Prioridade } from '../prioridade/prioridade';
import { Empresa } from '../empresa/empresa';

export class Chamado {
    codigo: number;
    codigoInterno: number;
    assunto: string;
    descricao: string;
    prioridade: Prioridade = new Prioridade();
    prazo: Date;
    processo: Processo = new Processo();
    tipo: TipoChamado = new TipoChamado();
    produto: Produto = new Produto();
    cliente: Cliente = new Cliente();
    responsavel: Colaborador = new Colaborador();
    empresa: Empresa = new Empresa();
    status: Boolean;
}