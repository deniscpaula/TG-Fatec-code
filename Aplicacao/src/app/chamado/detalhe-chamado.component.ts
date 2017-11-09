import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { Alerta } from '../alerta/alerta';
import { ChamadoService } from './chamado.service';
import { ClienteService } from '../cliente/cliente.service';
import { ColaboradorService } from '../colaborador/colaborador.service';
import { ProcessoService } from '../processo/processo.service';
import { TipoChamadoService } from '../tipo-chamado/tipo-chamado.service';
import { ProdutoService } from '../produto/produto.service';
import { PrioridadeService } from '../prioridade/prioridade.service';
import { Helper } from '../helpers/helper';
import { InputMask } from '../helpers/inputmask';
import { Prioridade } from '../prioridade/prioridade';
import { Colaborador } from '../colaborador/colaborador';
import { TipoChamado } from '../tipo-chamado/tipo-chamado';
import { Processo } from '../processo/processo';
import { Cliente } from '../cliente/cliente';
import { Produto } from '../produto/produto';
import { Empresa } from '../empresa/empresa';
import { LoginService } from '../login/login.service';

import { Chamado } from './chamado';

@Component({
    moduleId: module.id,
    selector: 'detalhe-chamado-cadastro',
    templateUrl: './detalhe-chamado.component.html'
})
export class DetalheChamadoComponent {
    alerta: Alerta = new Alerta('','');
    colaborador: Colaborador;
    chamado: Chamado = new Chamado();
    responsaveis: Colaborador[] = [];
    clientes: Cliente[] = [];
    produtos: Produto[] = [];
    processos: Processo[] = [];
    tipos: TipoChamado[] = [];
    prioridades: Prioridade[] = [];

    inputMask: InputMask = new InputMask();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: ChamadoService,
                private clienteService: ClienteService,
                private colaboradorService: ColaboradorService,
                private tipoService: TipoChamadoService,
                private processoService: ProcessoService,
                private produtoService: ProdutoService,
                private prioridadeService: PrioridadeService,
                private helper: Helper, 
                private loginService: LoginService) {

        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(false);
        
        this.loginService.getLogado().subscribe(colaborador => {
            this.colaborador = colaborador;
            this.loadSelect();
        });

        this.route.params.subscribe(params => {
            let codigo = params['codigo'];

            if(codigo) {
                this.service.buscar(codigo).subscribe(
                    chamado => {
                        this.chamado = chamado;
                        this.setNullElements();
                    }, erro => console.log(erro));
            }
        })
    }

    loadSelect() {
        this.prioridadeService.listar().subscribe(prioridades => this.prioridades = prioridades);
        
        this.processoService.listar(true).subscribe(processos => {
            this.processos = processos;
            if(this.chamado.processo.codigo != null && !this.chamado.processo.status) {
                this.processos.push(this.chamado.processo);
            };
            this.sort(this.processos);
        });
            
        this.tipoService.listar(true).subscribe(tipos => {
            this.tipos = tipos;
            if(this.chamado.tipo.codigo != null && !this.chamado.tipo.status) {
                this.tipos.push(this.chamado.tipo);
            };
            this.sort(this.tipos);
        });
        
        this.produtoService.listar(true).subscribe(produtos => {
            this.produtos = produtos;
            if(this.chamado.produto.codigo != null && !this.chamado.produto.status) {
                this.produtos.push(this.chamado.produto);
            };
            this.sort(this.produtos);
        });

        this.clienteService.listar(true).subscribe(clientes => {
            this.clientes = clientes;
            if(this.chamado.cliente.codigo != null && !this.chamado.cliente.status) {
                this.clientes.push(this.chamado.cliente);
            };
            this.sort(this.clientes);
        });        
        
        this.colaboradorService.listar(true).subscribe(responsaveis => {
            this.responsaveis = responsaveis;
            if(this.chamado.responsavel.codigo != null && !this.chamado.responsavel.usuario.status) {
                this.responsaveis.push(this.chamado.responsavel);
            };
            this.sort(this.responsaveis);
        });      
    }

    sort(lista: any) {
        lista.sort((itemA, itemB) => (itemA.codigo - itemB.codigo));
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
                this.setNullElements();
                if(chamado.codigo) this.alerta = new Alerta('Chamado salvo com sucesso', 'sucesso');
                if(!this.alerta.mensagem) this.router.navigate(['']);
            }, erro => console.log(erro));
    }
    
    finalizar() {
        this.service.finalizar(this.chamado).subscribe(chamado => {
                this.chamado = chamado;
                this.setNullElements();
                if(chamado.status == false) {
                    this.alerta = new Alerta('Chamado finalizado com sucesso', 'sucesso');
                    setTimeout(() => {
                        this.router.navigateByUrl('/chamados');
                    }, 5000);
                };
        });
    }

    setNullElements() {
        if(this.chamado.processo == null) this.chamado.processo = new Processo();
        if(this.chamado.tipo == null) this.chamado.tipo = new TipoChamado();
        if(this.chamado.produto == null) this.chamado.produto = new Produto();
        if(this.chamado.cliente == null) this.chamado.cliente = new Cliente();
        if(this.chamado.responsavel == null) this.chamado.responsavel = new Colaborador();
    }

    setPrazo(prazo: string) {
        this.chamado.prazo = this.helper.toDate(prazo);
    }
}