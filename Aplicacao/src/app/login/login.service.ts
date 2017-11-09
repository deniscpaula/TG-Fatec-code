import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Webservice } from '../helpers/webservice';
import { Colaborador } from '../colaborador/colaborador';
import { Usuario } from '../usuario/usuario';

@Injectable()
export class LoginService {

    constructor(private webservice: Webservice, private router: Router) {}

    login(usuario: Usuario): Observable<Colaborador> {
        return this.webservice.post('usuario/login', JSON.stringify(usuario)).map(res => res.json());
        
    }

    getLogado(): Observable<Colaborador> {
        let colaborador: Colaborador = new Colaborador();
        colaborador = JSON.parse(sessionStorage.getItem('colaborador'));

        if(colaborador) return this.webservice.get('colaborador/get/' + colaborador.codigo)
            .map(res => res.json());
        
        return this.webservice.none().map(() => null);
    }

    isLogged(): boolean {
        if(sessionStorage.getItem('colaborador')) return true;
        this.router.navigateByUrl('/');
        return false;
    }

    // Bloqueia o acesso caso não haja um usuário logado, ou caso não seja administrador
    permitAccess(admin: boolean) {
        let colaborador = new Colaborador();
        try {
            this.getLogado().subscribe(
                c => {
                    colaborador = c;
                    if(colaborador.codigo == null) this.router.navigateByUrl('/');        
                    if(admin && !colaborador.administrador) this.router.navigateByUrl('/chamados');
                }, erro => this.router.navigateByUrl('/')
            );

        } catch (erro) {
            this.router.navigateByUrl('/');
        }
    }
}