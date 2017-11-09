import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Alerta } from '../alerta/alerta';
import { Colaborador } from '../colaborador/colaborador';
import { ProcessoService } from './processo.service';
import { LoginService } from '../login/login.service';
import { Processo } from './processo';

@Component({
    moduleId: module.id,
    selector: 'processo-cadastro',
    templateUrl: './processo.component.html'
})
export class ProcessoComponent implements OnInit {
    processo: Processo = new Processo();
    colaborador: Colaborador;
    alerta: Alerta = new Alerta('','');
    codigo;

    constructor(private service: ProcessoService,
                private route: ActivatedRoute,
                private router: Router,
                private loginService: LoginService) {
        
        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);

        this.loginService.getLogado().subscribe(colaborador => this.colaborador = colaborador);

        this.route.params.subscribe(params => {
            this.codigo = params['codigo'];
        });
    }

    ngOnInit() {
        if(this.codigo) {
            this.service.buscar(this.codigo).subscribe(processo => {
                this.processo = processo;
                this.setColor();
            });
        } else {
            this.processo.cor = "#e6e6e6";
            this.setColor();
        }
    }

    setColor() {
        let processo = this.processo;
        var colorPalette = (<any>$('#cor')).colorPalette({
            palette : 'crayons',
            color : processo.cor,
            manual : false,
            select : function(cor) { 
                processo.cor = cor;
            },
            hover : function(c) { }
            //bindTo : $('#l')[0]
        });
    }

    reset() {
        this.processo.codigo = null;
        this.processo.cor = "#e6e6e6";
        this.processo.nome = "";
        this.processo.sigla = "";
        $('.color-palette-button').css('background', this.processo.cor);
    }

    salvar(event) {
        event.preventDefault();

        // Se for um NOVO cadastro
        if(!this.processo.codigo) {
            this.processo.empresa = this.colaborador.empresa;
        }
       
        this.service
            .salvar(this.processo)
            .subscribe(processo => {
                if(this.processo.codigo) {
                    this.alerta = new Alerta('Processo salvo com sucesso', 'sucesso');

                } else if(processo.codigo) {
                    this.alerta = new Alerta('Processo salvo com sucesso', 'sucesso');
                    this.reset();
                } else {
                    this.alerta = new Alerta('Não foi possível salvar o processo', 'erro');
                }
            }, erro => console.log(erro));
        
    }

    excluir(event) {
        event.preventDefault();
        
        if(confirm('Deseja excluir o processo: ' + this.processo.nome + '?')) {
            this.service
                .excluir(this.processo)
                .subscribe(processo => {
                    this.processo = processo;
                    if(processo.status == null) {
                        this.router.navigateByUrl('/cadastros/processo');
                    } else {
                        this.alerta = new Alerta('Não foi possível excluir o processo', 'erro');
                    }
                }, erro => console.log(erro));
        }
    }
    
}