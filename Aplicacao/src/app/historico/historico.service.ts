import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Webservice } from '../helpers/webservice';
import { Alerta } from '../alerta/alerta';
import { Historico } from './historico';
import { Chamado } from '../chamado/chamado';

@Injectable()
export class HistoricoService {
    constructor(private webservice: Webservice) {}

    salvar(historico: Historico): Observable<Historico> {
        return this.webservice.post('chamado/historico/save', JSON.stringify(historico))
            .map(res => res.json());
        
    }

    listar(chamado: Chamado): Observable<Historico[]>  {            
        return this.webservice.get('chamado/historico/list/' + chamado.codigo + '/')
            .map(res => res.json());

    }

    buscar(codigo: number): Observable<Historico> {
        return this.webservice.get('chamado/historico/get/' + codigo)
            .map(res => res.json());
    }
}