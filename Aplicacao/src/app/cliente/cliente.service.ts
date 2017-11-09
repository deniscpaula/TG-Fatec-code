import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from './cliente';
import { Colaborador } from '../colaborador/colaborador';
import { Alerta } from '../alerta/alerta';
import { Webservice } from '../helpers/webservice';

@Injectable()
export class ClienteService {

    constructor(private webservice: Webservice) {}

    salvar(cliente: Cliente): Observable<Cliente> {
        return this.webservice.post('cliente/save', JSON.stringify(cliente))
            .map(res => res.json());
        
    }

    listar(status: boolean): Observable<Cliente[]>  {
        let colaborador: Colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        let path: string ='cliente/list/' + colaborador.empresa.codigo + '/';
        
        if(status == null) return this.webservice.get(path)
            .map(res => res.json());
            
        return this.webservice.get(path + status)
            .map(res => res.json());

    }

    excluir(cliente: Cliente): Observable<Cliente> {
        return this.webservice.delete('cliente/delete/' + cliente.codigo)
            .map(res => res.json());
    }

    buscar(codigo: number): Observable<Cliente> {
        return this.webservice.get('cliente/get/' + codigo)
            .map(res => res.json());
    }
}