import { Empresa } from '../empresa/empresa';

export class Cargo {
    codigo: number;
    nome: string;
    descricao: string;
    status: boolean = true;
    empresa: Empresa;
}