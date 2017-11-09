import { Empresa } from '../empresa/empresa';

export class Cliente {
    codigo: number;
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    telefone: string;
    email: string;
    status: boolean = true;
    empresa: Empresa;
}