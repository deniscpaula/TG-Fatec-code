import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Colaborador } from '../colaborador/colaborador';
import { Produto } from './produto';
import { Webservice } from '../helpers/webservice';
import { Alerta } from '../alerta/alerta';

@Injectable()
export class ProdutoService {

    constructor(private webservice: Webservice) {}

    salvar(produto: Produto): Observable<Produto> {
        return this.webservice.post('produto/save', JSON.stringify(produto))
            .map(res => res.json());
        
    }

    listar(status: boolean): Observable<Produto[]>  {
        let colaborador: Colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        if(status == null) return this.webservice.get('produto/list/' + colaborador.empresa.codigo)
            .map(res => res.json());
            
        return this.webservice.get('produto/list/' + colaborador.empresa.codigo + '/' + status)
            .map(res => res.json());

    }

    excluir(produto: Produto): Observable<Produto> {
        return this.webservice.delete('produto/delete/' + produto.codigo)
            .map(res => res.json());
    }

    buscar(codigo: number): Observable<Produto> {
        return this.webservice.get('produto/get/' + codigo)
            .map(res => res.json());
    }

}