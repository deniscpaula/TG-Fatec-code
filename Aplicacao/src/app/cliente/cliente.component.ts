import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { InputMask } from '../helpers/inputmask';

import { Cliente } from './cliente';
import { Colaborador } from '../colaborador/colaborador';
import { Alerta } from '../alerta/alerta';
import { ClienteService } from './cliente.service';
import { LoginService } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'cliente-cadastro',
    templateUrl: './cliente.component.html'
})
export class ClienteComponent {
    colaborador: Colaborador;
    alerta: Alerta = new Alerta('','');
    cliente: Cliente = new Cliente();
    inputMask: InputMask = new InputMask();

    constructor(private service: ClienteService, 
                private route: ActivatedRoute, 
                private router: Router,
                private loginService: LoginService) {
                    
        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);

        this.loginService.getLogado().subscribe(colaborador => this.colaborador = colaborador);

        this.route.params.subscribe(params => {
            let codigo = params['codigo'];

            if(codigo) {
                this.service.buscar(codigo).subscribe(cliente => this.cliente = cliente);
            }
        })
    }

    salvar(event) {
        event.preventDefault();

        // Se for um NOVO cadastro
        if(!this.cliente.codigo) {
            this.cliente.empresa = this.colaborador.empresa;
        }

        this.service
            .salvar(this.cliente)
            .subscribe(cliente => {
                if(this.cliente.codigo) {
                    this.alerta = new Alerta('Cliente salvo com sucesso', 'sucesso');

                } else if(cliente.codigo) {
                    this.cliente = new Cliente();
                    this.alerta = new Alerta('Cliente salvo com sucesso', 'sucesso');
                
                } else {
                    this.alerta = new Alerta('Não foi possível salvar o cliente', 'erro');
                }
            }, erro => console.log(erro));
    }

    excluir(event) {
        event.preventDefault();
        
        if(confirm('Deseja excluir o cliente: ' + this.cliente.nomeFantasia + '?')) {
            this.service
                .excluir(this.cliente)
                .subscribe(cliente => {
                    this.cliente = cliente;
                    if(cliente.status == null) {
                        this.router.navigateByUrl('/cadastros/cliente');
                    } else {
                        this.alerta = new Alerta('Não foi possível excluir o cliente', 'erro');
                    }
                }, erro => console.log(erro));
        }
    }
}