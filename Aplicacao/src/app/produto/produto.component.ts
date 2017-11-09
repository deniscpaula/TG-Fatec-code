import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from '../login/login.service';
import { ProdutoService } from './produto.service';
import { Produto } from './produto';
import { Alerta } from '../alerta/alerta';
import { Colaborador } from '../colaborador/colaborador';

@Component({
    moduleId: module.id,
    selector: 'produto-cadastro',
    templateUrl: './produto.component.html'
})
export class ProdutoComponent {
    produto: Produto = new Produto();
    colaborador: Colaborador;
    alerta: Alerta = new Alerta('','');

    constructor(private service: ProdutoService, 
                private route: ActivatedRoute,
                private router: Router,
                private loginService: LoginService) {

        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);

        this.loginService.getLogado().subscribe(colaborador => this.colaborador = colaborador);

        this.route.params.subscribe(params => {
            let codigo = params['codigo'];

            if(codigo) {
                this.service.buscar(codigo).subscribe(produto => this.produto = produto);
            }
        })
    }

    salvar(event) {
        event.preventDefault();

        // Se for um NOVO cadastro
        if(!this.produto.codigo) {
            this.produto.empresa = this.colaborador.empresa;
        }
        this.service
            .salvar(this.produto)
            .subscribe(produto => {
                if(this.produto.codigo) {
                    this.alerta = new Alerta('Produto salvo com sucesso', 'sucesso');

                } else if(produto.codigo) {
                    this.produto = new Produto();
                    this.alerta = new Alerta('Produto salvo com sucesso', 'sucesso');
                
                } else {
                    this.alerta = new Alerta('Não foi possível salvar o produto', 'erro');
                }
            }, erro => console.log(erro));
    }

    excluir(event) {
        event.preventDefault();
        
        if(confirm('Deseja excluir o produto: ' + this.produto.nome + '?')) {
            this.service
                .excluir(this.produto)
                .subscribe(produto => {
                    this.produto = produto;
                    if(produto.status == null) {
                        this.router.navigateByUrl('/cadastros/produto');
                    } else {
                        this.alerta = new Alerta('Não foi possível excluir o produto', 'erro');
                    }
                }, erro => console.log(erro));
        }
    }
}