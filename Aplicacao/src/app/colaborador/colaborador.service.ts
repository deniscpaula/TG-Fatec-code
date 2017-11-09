import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Alerta } from '../alerta/alerta';
import { Colaborador } from './colaborador';
import { Usuario } from '../usuario/usuario';
import { Empresa } from '../empresa/empresa';
import { Webservice } from '../helpers/webservice';

@Injectable()
export class ColaboradorService {
    
    constructor(private webservice: Webservice) {}

    salvar(colaborador: Colaborador): Observable<Colaborador> {
        return this.webservice.post('colaborador/save', JSON.stringify(colaborador))
            .map(res => res.json());
        
    }

    listar(status: boolean): Observable<Colaborador[]>  {
        let colaborador: Colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        let path: string ='colaborador/list/' + colaborador.empresa.codigo + '/';

        if(status == null) return this.webservice.get(path)
            .map(res => res.json());

        return this.webservice.get(path + status)
            .map(res => res.json());
    }

    excluir(colaborador: Colaborador): Observable<Colaborador> {
        return this.webservice.delete('colaborador/delete/' + colaborador.codigo)
            .map(res => res.json());
    }

    buscar(codigo: number): Observable<Colaborador> {
        return this.webservice.get('colaborador/get/' + codigo)
            .map(res => res.json());
    }
}