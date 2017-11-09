import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoChamadoService } from './tipo-chamado.service';
import { LoginService } from '../login/login.service';
import { TipoChamado } from './tipo-chamado';
import { Colaborador } from '../colaborador/colaborador';
import { Alerta } from '../alerta/alerta';

@Component({
    moduleId: module.id,
    selector: 'tipo-chamado-cadastro',
    templateUrl: './tipo-chamado.component.html'
})
export class TipoChamadoComponent {
    colaborador: Colaborador;
    alerta: Alerta = new Alerta('','');
    tipoChamado: TipoChamado = new TipoChamado();
    
    constructor(private service: TipoChamadoService, private route: ActivatedRoute, 
                private router: Router, private loginService: LoginService) {
        
        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);

        this.loginService.getLogado().subscribe(colaborador => this.colaborador = colaborador);

        this.route.params.subscribe(params => {
            let codigo = params['codigo'];

            if(codigo) {
                this.service.buscar(codigo).subscribe(tipo => this.tipoChamado = tipo);
            }
        })
    }

    salvar(event) {
        event.preventDefault();

        // Se for um NOVO cadastro
        if(!this.tipoChamado.codigo) {
            this.tipoChamado.empresa = this.colaborador.empresa;
        }

        this.service
            .salvar(this.tipoChamado)
            .subscribe(tipoChamado => {
                if(this.tipoChamado.codigo) {
                    this.alerta = new Alerta('Tipo de chamado salvo com sucesso', 'sucesso');

                } else if(tipoChamado.codigo) {
                    this.alerta = new Alerta('Tipo de chamado salvo com sucesso', 'sucesso');
                    this.tipoChamado = new TipoChamado();
                } else {
                    this.alerta = new Alerta('Não foi possível salvar o tipo de chamado', 'erro');
                }
            }, erro => console.log(erro));
    }

    excluir(event) {
        event.preventDefault();
        
        if(confirm('Deseja excluir o tipo de chamado: ' + this.tipoChamado.nome + '?')) {
            this.service
                .excluir(this.tipoChamado)
                .subscribe(tipoChamado => {
                    this.tipoChamado = tipoChamado;
                    if(tipoChamado.status == null) {
                        this.router.navigateByUrl('/cadastros/tipo-chamado');
                    } else {
                        this.alerta = new Alerta('Não foi possível excluir o tipo de chamado', 'erro');
                    }
                }, erro => console.log(erro));
        }
    }
}