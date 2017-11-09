import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Alerta } from '../alerta/alerta';
import { Helper } from '../helpers/helper';
import { Colaborador } from '../colaborador/colaborador';
import { ChamadoService } from '../chamado/chamado.service';
import { LoginService } from '../login/login.service';
import { HistoricoService } from './historico.service';
import { Chamado } from '../chamado/chamado';
import { Historico } from './historico';

@Component({
    moduleId: module.id,
    selector: 'historico',
    templateUrl: './historico.component.html'
})
export class HistoricoComponent {
    alerta: Alerta = new Alerta('','');
    chamado: Chamado = new Chamado();
    colaborador: Colaborador;
    historico: Historico = new Historico();
    historicoList: Historico[] = [];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: HistoricoService,
                private serviceChamado: ChamadoService, 
                private helper: Helper,
                private loginService: LoginService,
                private modalService: NgbModal) {

        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(false);
        
        this.loginService.getLogado().subscribe(colaborador => this.colaborador = colaborador);

        this.route.params.subscribe(params => {
            let codigo = params['codigo'];

            if(codigo) {
                this.serviceChamado.buscar(codigo).subscribe(chamado => {
                    this.chamado = chamado;
                    this.buscarListaHistorico(codigo);
                }), erro => console.log(erro);
            }
        })
    }

    buscarListaHistorico(codigo) {
        this.service.listar(this.chamado).subscribe(
            historicoList => this.historicoList = historicoList
        ), erro => console.log(erro);
    }

    open(content) {
        this.modalService.open(content);
    }

    salvar(event, c) {
        event.preventDefault();

        // Se for um NOVO cadastro
        if(!this.historico.codigo) {
            this.historico.chamado = this.chamado;
            this.historico.colaborador = this.colaborador;
        }
        this.service
            .salvar(this.historico)
            .subscribe(historico => {
                this.historico = historico;
                if(historico.codigo) {
                    c('Close click');
                    this.alerta = new Alerta('Chamado salvo com sucesso', 'sucesso');
                    this.buscarListaHistorico(this.chamado.codigo);
                    this.historico = new Historico();
                }
                if(!this.alerta.mensagem) this.router.navigate(['']);

            }, erro => console.log(erro));
    }
}