import { Cargo } from '../cargo/cargo';
import { Empresa } from '../empresa/empresa';
import { Usuario } from '../usuario/usuario';

export class Colaborador {
    codigo: number;
    nome: string;
    apelido: string;
    cpf: string;
    email: string;
    cargo: Cargo = new Cargo();
    empresa: Empresa;
    usuario: Usuario = new Usuario();
    administrador: Boolean;
}