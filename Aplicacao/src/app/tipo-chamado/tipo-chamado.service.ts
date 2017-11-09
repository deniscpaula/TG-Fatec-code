import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Colaborador } from '../colaborador/colaborador';
import { Alerta } from '../alerta/alerta';
import { Webservice } from '../helpers/webservice';
import { TipoChamado } from './tipo-chamado';


@Injectable()
export class TipoChamadoService {
    
    constructor(private webservice: Webservice) {}

    salvar(tipoChamado: TipoChamado): Observable<TipoChamado> {
        return this.webservice.post('tipo/save', JSON.stringify(tipoChamado))
            .map(res => res.json());
        
    }

    listar(status: boolean): Observable<TipoChamado[]>  {
        let colaborador: Colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        let path: string ='tipo/list/' + colaborador.empresa.codigo + '/';
        
        if(status == null) return this.webservice.get(path)
            .map(res => res.json());
            
        return this.webservice.get(path + status)
            .map(res => res.json());

    }

    excluir(tipoChamado: TipoChamado): Observable<TipoChamado> {
        return this.webservice.delete('tipo/delete/' + tipoChamado.codigo)
            .map(res => res.json());
    }

    buscar(codigo: number): Observable<TipoChamado> {
        return this.webservice.get('tipo/get/' + codigo)
            .map(res => res.json());
    }
}