"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var alerta_1 = require("../alerta/alerta");
var chamado_service_1 = require("./chamado.service");
var cliente_service_1 = require("../cliente/cliente.service");
var colaborador_service_1 = require("../colaborador/colaborador.service");
var processo_service_1 = require("../processo/processo.service");
var tipo_chamado_service_1 = require("../tipo-chamado/tipo-chamado.service");
var produto_service_1 = require("../produto/produto.service");
var prioridade_service_1 = require("../prioridade/prioridade.service");
var helper_1 = require("../helpers/helper");
var inputmask_1 = require("../helpers/inputmask");
var colaborador_1 = require("../colaborador/colaborador");
var tipo_chamado_1 = require("../tipo-chamado/tipo-chamado");
var processo_1 = require("../processo/processo");
var cliente_1 = require("../cliente/cliente");
var produto_1 = require("../produto/produto");
var login_service_1 = require("../login/login.service");
var chamado_1 = require("./chamado");
var DetalheChamadoComponent = (function () {
    function DetalheChamadoComponent(route, router, service, clienteService, colaboradorService, tipoService, processoService, produtoService, prioridadeService, helper, loginService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.clienteService = clienteService;
        this.colaboradorService = colaboradorService;
        this.tipoService = tipoService;
        this.processoService = processoService;
        this.produtoService = produtoService;
        this.prioridadeService = prioridadeService;
        this.helper = helper;
        this.loginService = loginService;
        this.alerta = new alerta_1.Alerta('', '');
        this.chamado = new chamado_1.Chamado();
        this.responsaveis = [];
        this.clientes = [];
        this.produtos = [];
        this.processos = [];
        this.tipos = [];
        this.prioridades = [];
        this.inputMask = new inputmask_1.InputMask();
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(false);
        this.loginService.getLogado().subscribe(function (colaborador) {
            _this.colaborador = colaborador;
            _this.loadSelect();
        });
        this.route.params.subscribe(function (params) {
            var codigo = params['codigo'];
            if (codigo) {
                _this.service.buscar(codigo).subscribe(function (chamado) {
                    _this.chamado = chamado;
                    _this.setNullElements();
                }, function (erro) { return console.log(erro); });
            }
        });
    }
    DetalheChamadoComponent.prototype.loadSelect = function () {
        var _this = this;
        this.prioridadeService.listar().subscribe(function (prioridades) { return _this.prioridades = prioridades; });
        this.processoService.listar(true).subscribe(function (processos) {
            _this.processos = processos;
            if (_this.chamado.processo.codigo != null && !_this.chamado.processo.status) {
                _this.processos.push(_this.chamado.processo);
            }
            ;
            _this.sort(_this.processos);
        });
        this.tipoService.listar(true).subscribe(function (tipos) {
            _this.tipos = tipos;
            if (_this.chamado.tipo.codigo != null && !_this.chamado.tipo.status) {
                _this.tipos.push(_this.chamado.tipo);
            }
            ;
            _this.sort(_this.tipos);
        });
        this.produtoService.listar(true).subscribe(function (produtos) {
            _this.produtos = produtos;
            if (_this.chamado.produto.codigo != null && !_this.chamado.produto.status) {
                _this.produtos.push(_this.chamado.produto);
            }
            ;
            _this.sort(_this.produtos);
        });
        this.clienteService.listar(true).subscribe(function (clientes) {
            _this.clientes = clientes;
            if (_this.chamado.cliente.codigo != null && !_this.chamado.cliente.status) {
                _this.clientes.push(_this.chamado.cliente);
            }
            ;
            _this.sort(_this.clientes);
        });
        this.colaboradorService.listar(true).subscribe(function (responsaveis) {
            _this.responsaveis = responsaveis;
            if (_this.chamado.responsavel.codigo != null && !_this.chamado.responsavel.usuario.status) {
                _this.responsaveis.push(_this.chamado.responsavel);
            }
            ;
            _this.sort(_this.responsaveis);
        });
    };
    DetalheChamadoComponent.prototype.sort = function (lista) {
        lista.sort(function (itemA, itemB) { return (itemA.codigo - itemB.codigo); });
    };
    DetalheChamadoComponent.prototype.salvar = function (event) {
        var _this = this;
        event.preventDefault();
        // Se for um NOVO cadastro
        if (!this.chamado.codigo) {
            this.chamado.empresa = this.colaborador.empresa;
            this.chamado.status = true;
        }
        this.service
            .salvar(this.chamado)
            .subscribe(function (chamado) {
            _this.chamado = chamado;
            _this.setNullElements();
            if (chamado.codigo)
                _this.alerta = new alerta_1.Alerta('Chamado salvo com sucesso', 'sucesso');
            if (!_this.alerta.mensagem)
                _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    DetalheChamadoComponent.prototype.setNullElements = function () {
        if (this.chamado.processo == null)
            this.chamado.processo = new processo_1.Processo();
        if (this.chamado.tipo == null)
            this.chamado.tipo = new tipo_chamado_1.TipoChamado();
        if (this.chamado.produto == null)
            this.chamado.produto = new produto_1.Produto();
        if (this.chamado.cliente == null)
            this.chamado.cliente = new cliente_1.Cliente();
        if (this.chamado.responsavel == null)
            this.chamado.responsavel = new colaborador_1.Colaborador();
    };
    DetalheChamadoComponent.prototype.setPrazo = function (prazo) {
        this.chamado.prazo = this.helper.toDate(prazo);
    };
    return DetalheChamadoComponent;
}());
DetalheChamadoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'detalhe-chamado-cadastro',
        templateUrl: './detalhe-chamado.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        chamado_service_1.ChamadoService,
        cliente_service_1.ClienteService,
        colaborador_service_1.ColaboradorService,
        tipo_chamado_service_1.TipoChamadoService,
        processo_service_1.ProcessoService,
        produto_service_1.ProdutoService,
        prioridade_service_1.PrioridadeService,
        helper_1.Helper,
        login_service_1.LoginService])
], DetalheChamadoComponent);
exports.DetalheChamadoComponent = DetalheChamadoComponent;
//# sourceMappingURL=detalhe-chamado.component.js.map