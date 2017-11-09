import { Colaborador } from '../colaborador/colaborador';
import { Chamado } from '../chamado/chamado';

export class Historico {
    codigo: number;
    titulo: string;
    descricao: string;
    data: Date;
    colaborador: Colaborador;
    chamado: Chamado;
}