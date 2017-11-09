import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Helper } from '../helpers/helper';
import { Empresa } from '../empresa/empresa';
import { Usuario } from '../usuario/usuario';
import { Colaborador } from '../colaborador/colaborador';
import { CadastroService } from './cadastro.service';
import { CargoService } from '../cargo/cargo.service';
import { ColaboradorService } from '../colaborador/colaborador.service';
import { LoginService } from '../login/login.service';
import { Alerta } from '../alerta/alerta';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    alerta = new Alerta('', '');
    colaborador: Colaborador = new Colaborador();

    constructor(private serviceColaborador: ColaboradorService, 
                private serviceCargo: CargoService, 
                private service: CadastroService, 
                private loginService: LoginService,
                private router: Router) {

        this.colaborador.empresa = new Empresa();
        this.colaborador.cargo = null;
        this.colaborador.usuario = new Usuario();
    }


    salvar(event) {
        event.preventDefault();
        this.colaborador.administrador = true;
        this.serviceColaborador.salvar(this.colaborador)
        .subscribe(() => {
            this.loginService.login(this.colaborador.usuario)
            .subscribe(colaborador => {
                this.colaborador = colaborador;
                
                if(this.colaborador) {
                    sessionStorage.removeItem('colaborador');
                    sessionStorage.setItem('colaborador', JSON.stringify(this.colaborador));
                    this.router.navigateByUrl('/chamados');
                }
            });
        }, erro => console.log(erro));
    }
}