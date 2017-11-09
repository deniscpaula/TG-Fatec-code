import { Empresa } from '../empresa/empresa';

export class TipoChamado {
    codigo: number;
    nome: string;
    sigla: string;
    status: boolean = true;
    empresa: Empresa;
}