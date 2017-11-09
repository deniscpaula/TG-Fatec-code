import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cargo } from './cargo';
import { Colaborador } from '../colaborador/colaborador';
import { Alerta } from '../alerta/alerta';
import { Webservice } from '../helpers/webservice';

@Injectable()
export class CargoService { 

    constructor(private webservice: Webservice) {}

    salvar(cargo: Cargo): Observable<Cargo> {
        return this.webservice.post('cargo/save', JSON.stringify(cargo))
            .map(res => res.json());
        
    }

    listar(status: boolean): Observable<Cargo[]>  {
        let colaborador: Colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        let path: string ='cargo/list/' + colaborador.empresa.codigo + '/';

        if(status == null) return this.webservice.get(path)
            .map(res => res.json());

        return this.webservice.get(path + status)
            .map(res => res.json());
    }

    excluir(cargo: Cargo): Observable<Cargo> {
        return this.webservice.delete('cargo/delete/' + cargo.codigo)
            .map(res => res.json());
    }

    buscar(codigo: number): Observable<Cargo> {
        return this.webservice.get('cargo/get/' + codigo)
            .map(res => res.json());
    }
}