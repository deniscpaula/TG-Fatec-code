import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from '../login/login.service';
import { Webservice } from '../helpers/webservice';
import { Chamado } from './chamado';
import { Colaborador } from '../colaborador/colaborador';
import { Alerta } from '../alerta/alerta';

@Injectable()
export class ChamadoService {
    constructor(private webservice: Webservice, private loginService: LoginService) {}

    salvar(chamado: Chamado): Observable<Chamado> {
        let colaborador: Colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        return this.webservice.post('chamado/save/' + colaborador.codigo, JSON.stringify(chamado))
            .map(res => res.json());
    }

    finalizar(chamado: Chamado): Observable<Chamado>  {
        let colaborador: Colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        chamado.status = false;
        return this.webservice.post('chamado/save/' + colaborador.codigo, JSON.stringify(chamado))
            .map(res => res.json());
    }

    excluir(chamado: Chamado) {
        this.webservice.post('chamado/delete/', JSON.stringify(chamado))
            .map(res => res.json());
    }

    listar(status: boolean): Observable<Chamado[]>  {
        let colaborador: Colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        
        let path: string ='chamado/list/' + colaborador.empresa.codigo;       
        if(!colaborador.administrador) return this.webservice.get(path  + '/' + status  + '/'  + colaborador.codigo)
            .map(res => res.json());

        return this.webservice.get(path  + '/'  + status)
            .map(res => res.json());
    }

    buscar(codigo: number): Observable<Chamado> {
        let colaborador: Colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        return this.webservice.get('chamado/get/' + codigo + '/' + colaborador.empresa.codigo)
            .map(res => res.json());
    }

    buscarPorCodigo(codigo: number): Observable<Chamado> {
        let colaborador: Colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        return this.webservice.get('chamado/get/' + codigo)
            .map(res => res.json());
    }
}