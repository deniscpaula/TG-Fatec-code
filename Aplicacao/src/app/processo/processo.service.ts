import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Processo } from './processo';
import { Colaborador } from '../colaborador/colaborador';
import { Alerta } from '../alerta/alerta';
import { Webservice } from '../helpers/webservice';

@Injectable()
export class ProcessoService { 
    constructor(private webservice: Webservice) {}

    salvar(processo: Processo): Observable<Processo> {
        return this.webservice.post('processo/save', JSON.stringify(processo))
            .map(res => res.json());
        
    }

    listar(status: boolean): Observable<Processo[]>  {
        let colaborador: Colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        let path: string ='processo/list/' + colaborador.empresa.codigo + '/';
        
        if(status == null) return this.webservice.get(path)
            .map(res => res.json());
            
        return this.webservice.get(path + status)
            .map(res => res.json());

    }

    excluir(processo: Processo): Observable<Processo> {
        return this.webservice.delete('processo/delete/' + processo.codigo)
            .map(res => res.json());
    }

    buscar(codigo: number): Observable<Processo> {
        return this.webservice.get('processo/get/' + codigo)
            .map(res => res.json());
    }
}