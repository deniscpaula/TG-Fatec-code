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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var alerta_1 = require("../alerta/alerta");
var helper_1 = require("../helpers/helper");
var chamado_service_1 = require("../chamado/chamado.service");
var login_service_1 = require("../login/login.service");
var historico_service_1 = require("./historico.service");
var chamado_1 = require("../chamado/chamado");
var historico_1 = require("./historico");
var HistoricoComponent = (function () {
    function HistoricoComponent(route, router, service, serviceChamado, helper, loginService, modalService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.serviceChamado = serviceChamado;
        this.helper = helper;
        this.loginService = loginService;
        this.modalService = modalService;
        this.alerta = new alerta_1.Alerta('', '');
        this.chamado = new chamado_1.Chamado();
        this.historico = new historico_1.Historico();
        this.historicoList = [];
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(false);
        this.loginService.getLogado().subscribe(function (colaborador) { return _this.colaborador = colaborador; });
        this.route.params.subscribe(function (params) {
            var codigo = params['codigo'];
            if (codigo) {
                _this.serviceChamado.buscar(codigo).subscribe(function (chamado) {
                    _this.chamado = chamado;
                    _this.buscarListaHistorico(codigo);
                }), function (erro) { return console.log(erro); };
            }
        });
    }
    HistoricoComponent.prototype.buscarListaHistorico = function (codigo) {
        var _this = this;
        this.service.listar(this.chamado).subscribe(function (historicoList) { return _this.historicoList = historicoList; }), function (erro) { return console.log(erro); };
    };
    HistoricoComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    HistoricoComponent.prototype.salvar = function (event, c) {
        var _this = this;
        event.preventDefault();
        // Se for um NOVO cadastro
        if (!this.historico.codigo) {
            this.historico.chamado = this.chamado;
            this.historico.colaborador = this.colaborador;
        }
        this.service
            .salvar(this.historico)
            .subscribe(function (historico) {
            _this.historico = historico;
            if (historico.codigo) {
                c('Close click');
                _this.alerta = new alerta_1.Alerta('Chamado salvo com sucesso', 'sucesso');
                _this.buscarListaHistorico(_this.chamado.codigo);
                _this.historico = new historico_1.Historico();
            }
            if (!_this.alerta.mensagem)
                _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    return HistoricoComponent;
}());
HistoricoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'historico',
        templateUrl: './historico.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        historico_service_1.HistoricoService,
        chamado_service_1.ChamadoService,
        helper_1.Helper,
        login_service_1.LoginService,
        ng_bootstrap_1.NgbModal])
], HistoricoComponent);
exports.HistoricoComponent = HistoricoComponent;
//# sourceMappingURL=historico.component.js.map