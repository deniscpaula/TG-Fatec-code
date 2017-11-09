import { Empresa } from '../empresa/empresa';

export class Produto {
    codigo: number;
    nome: string;
    descricao: string;
    status: boolean = true;
    empresa: Empresa;
}