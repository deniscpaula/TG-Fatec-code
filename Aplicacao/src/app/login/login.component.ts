import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Helper } from '../helpers/helper';
import { Colaborador } from '../colaborador/colaborador';
import { Usuario } from '../usuario/usuario';
import { LoginService } from './login.service';
import { Alerta } from '../alerta/alerta';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    usuario: Usuario = new Usuario();
    colaborador: Colaborador;
    alerta = new Alerta('', '');

    constructor(private service: LoginService, private router: Router) {}


    login(event) {
        event.preventDefault();
        this.service
            .login(this.usuario)
            .subscribe(colaborador => {
                this.colaborador = colaborador;
                if(this.colaborador) {
                    sessionStorage.removeItem('colaborador');
                    sessionStorage.setItem('colaborador', JSON.stringify(this.colaborador));
                    this.router.navigateByUrl('/chamados');
                }

            }, erro => {
                this.alerta.mensagem = 'Usuário ou senha inválidos';
                this.alerta.status = 'erro';
            });
    }
}