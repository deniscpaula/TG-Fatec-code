import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Helper } from '../helpers/helper';
import { Empresa } from '../empresa/empresa';
import { Usuario } from '../usuario/usuario';
import { Colaborador } from '../colaborador/colaborador';
import { ConfiguracaoService } from './configuracao.service';
import { CargoService } from '../cargo/cargo.service';
import { ColaboradorService } from '../colaborador/colaborador.service';
import { LoginService } from '../login/login.service';
import { Alerta } from '../alerta/alerta';

@Component({
    moduleId: module.id,
    selector: 'configuracao',
    templateUrl: './configuracao.component.html'
})
export class ConfiguracaoComponent {
    alerta = new Alerta('', '');
    colaborador: Colaborador = new Colaborador();
    csenha: string;
    constructor(private serviceColaborador: ColaboradorService,
                private service: ConfiguracaoService,
                private loginService: LoginService,
                private router: Router) {

        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(false);

        this.loginService.getLogado().subscribe(colaborador => this.colaborador = colaborador)
    }

    salvar(event) {
        event.preventDefault();

        if(this.colaborador.usuario.senha === this.csenha) {
            this.service.salvar(this.colaborador.usuario)
            .subscribe(alerta => {
                this.alerta = alerta;
                if(!alerta.mensagem) this.router.navigate(['']);
            }, erro => console.log(erro));

        } else {
            this.alerta.status = 'erro';
            this.alerta.mensagem = 'Confirmação de senha inválida';
        }
    }
}