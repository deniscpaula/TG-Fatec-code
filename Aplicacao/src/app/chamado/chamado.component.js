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
var chamado_service_1 = require("./chamado.service");
var alerta_1 = require("../alerta/alerta");
var prioridade_service_1 = require("../prioridade/prioridade.service");
var login_service_1 = require("../login/login.service");
var chamado_1 = require("./chamado");
var ChamadoComponent = (function () {
    function ChamadoComponent(service, prioridadeService, loginService, route, router) {
        var _this = this;
        this.service = service;
        this.prioridadeService = prioridadeService;
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.alerta = new alerta_1.Alerta('', '');
        this.chamado = new chamado_1.Chamado();
        this.prioridades = [];
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(false);
        this.loginService.getLogado().subscribe(function (colaborador) { return _this.colaborador = colaborador; });
        this.route.params.subscribe(function (params) {
            var codigo = params['codigo'];
            if (codigo) {
                _this.service.buscar(codigo)
                    .subscribe(function (chamado) { return _this.chamado = chamado; }, function (erro) { return console.log(erro); });
            }
        });
    }
    ChamadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prioridadeService
            .listar()
            .subscribe(function (prioridades) {
            _this.prioridades = prioridades;
        }, function (erro) { return console.log(erro); });
    };
    ChamadoComponent.prototype.salvar = function (event) {
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
            _this.service.buscarPorCodigo(_this.chamado.codigo).subscribe(function (chamado) {
                _this.chamado = chamado;
                _this.router.navigateByUrl('/chamados/detalhar/' + _this.chamado.codigoInterno);
            });
        }, function (erro) { return console.log(erro); });
    };
    return ChamadoComponent;
}());
ChamadoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'chamado-cadastro',
        templateUrl: './chamado.component.html'
    }),
    __metadata("design:paramtypes", [chamado_service_1.ChamadoService,
        prioridade_service_1.PrioridadeService,
        login_service_1.LoginService,
        router_1.ActivatedRoute,
        router_1.Router])
], ChamadoComponent);
exports.ChamadoComponent = ChamadoComponent;
//# sourceMappingURL=chamado.component.js.map