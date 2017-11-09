import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChamadoService } from './chamado.service';

import { Alerta } from '../alerta/alerta';
import { Colaborador } from '../colaborador/colaborador';
import { Prioridade } from '../prioridade/prioridade';
import { PrioridadeService } from '../prioridade/prioridade.service';
import { LoginService } from '../login/login.service';

import { Chamado } from './chamado';

@Component({
    moduleId: module.id,
    selector: 'chamado-cadastro',
    templateUrl: './chamado.component.html'
})
export class ChamadoComponent implements OnInit {
    colaborador: Colaborador;
    alerta: Alerta = new Alerta('','');
    chamado: Chamado = new Chamado();
    prioridades: Prioridade[] = [];
    
    constructor(private service: ChamadoService,
                private prioridadeService: PrioridadeService,
                private loginService: LoginService,
                private route: ActivatedRoute,
                private router: Router) {
                 
        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(false);
        
        this.loginService.getLogado().subscribe(colaborador => this.colaborador = colaborador);

        this.route.params.subscribe(params => {
            let codigo = params['codigo'];

            if(codigo) {
                this.service.buscar(codigo)
                    .subscribe(chamado => this.chamado = chamado, erro => console.log(erro));
            }
        });
    }
    
    ngOnInit() {
        this.prioridadeService
        .listar()
        .subscribe(
            prioridades => {
                this.prioridades = prioridades;
                
            }, erro => console.log(erro));    
    }

    salvar(event) {
        event.preventDefault();

        // Se for um NOVO cadastro
        if(!this.chamado.codigo) {
            this.chamado.empresa = this.colaborador.empresa;
            this.chamado.status = true;
        }
        this.service
            .salvar(this.chamado)
            .subscribe(chamado => {
                this.chamado = chamado;
                this.service.buscarPorCodigo(this.chamado.codigo).subscribe(chamado => {
                    this.chamado = chamado;
                    this.router.navigateByUrl('/chamados/detalhar/' + this.chamado.codigoInterno);
                });
            }, erro => console.log(erro));
    }
}