import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cargo } from './cargo';
import { Colaborador } from '../colaborador/colaborador';
import { CargoService } from './cargo.service';
import { LoginService } from '../login/login.service';
import { Alerta } from '../alerta/alerta';



@Component({
    moduleId: module.id,
    selector: 'cargo-cadastro',
    templateUrl: './cargo.component.html'
})
export class CargoComponent {
    colaborador: Colaborador;
    cargo: Cargo = new Cargo();
    alerta: Alerta = new Alerta('','');

    constructor(private service: CargoService, private loginService: LoginService, 
        private route: ActivatedRoute, private router: Router) {

        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);
        
        this.loginService.getLogado().subscribe(colaborador => this.colaborador = colaborador);

        this.route.params.subscribe(params => {
            let codigo = params['codigo'];

            if(codigo) {
                this.service.buscar(codigo)
                    .subscribe(
                        cargo => this.cargo = cargo,
                        erro => console.log(erro));
            }
        });        
    }

    salvar(event) {
        event.preventDefault();

        // Se for um NOVO cadastro
        if(!this.cargo.codigo) {
            this.cargo.empresa = this.colaborador.empresa;
        }
        this.service
            .salvar(this.cargo)
            .subscribe(cargo => {
                if(this.cargo.codigo) {
                    this.alerta = new Alerta('Cargo salvo com sucesso', 'sucesso');

                } else if(cargo.codigo) {
                    this.cargo = new Cargo();
                    this.alerta = new Alerta('Cargo salvo com sucesso', 'sucesso');
                
                } else {
                    this.alerta = new Alerta('Não foi possível salvar o cargo', 'erro');
                }
            }, erro => console.log(erro));
    }

    excluir(event) {
        event.preventDefault();

        if(confirm('Deseja excluir o cargo: ' + this.cargo.nome + '?')) {
            this.service
                .excluir(this.cargo)
                .subscribe(cargo => {
                    this.cargo = cargo;
                    if(cargo.status == null) {
                        this.router.navigateByUrl('/cadastros/cargo');
                    } else {
                        this.alerta = new Alerta('Não foi possível excluir o cargo', 'erro');
                    }
                }, erro => console.log(erro));
        }
    }
}