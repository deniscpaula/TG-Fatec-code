import { Empresa } from '../empresa/empresa';

export class Processo {
    codigo: number;
    nome: string;
    sigla: string;
    cor: string;
    status: boolean = true;
    empresa: Empresa;
}