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
var tipo_chamado_service_1 = require("./tipo-chamado.service");
var login_service_1 = require("../login/login.service");
var tipo_chamado_1 = require("./tipo-chamado");
var alerta_1 = require("../alerta/alerta");
var TipoChamadoComponent = (function () {
    function TipoChamadoComponent(service, route, router, loginService) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.alerta = new alerta_1.Alerta('', '');
        this.tipoChamado = new tipo_chamado_1.TipoChamado();
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(true);
        this.loginService.getLogado().subscribe(function (colaborador) { return _this.colaborador = colaborador; });
        this.route.params.subscribe(function (params) {
            var codigo = params['codigo'];
            if (codigo) {
                _this.service.buscar(codigo).subscribe(function (tipo) { return _this.tipoChamado = tipo; });
            }
            else {
                _this.tipoChamado.status = true;
            }
        });
    }
    TipoChamadoComponent.prototype.salvar = function (event) {
        var _this = this;
        event.preventDefault();
        // Se for um NOVO cadastro
        if (!this.tipoChamado.codigo) {
            this.tipoChamado.empresa = this.colaborador.empresa;
        }
        this.service
            .salvar(this.tipoChamado)
            .subscribe(function (alerta) {
            _this.alerta = alerta;
            if (!alerta.mensagem)
                _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    return TipoChamadoComponent;
}());
TipoChamadoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tipo-chamado-cadastro',
        templateUrl: './tipo-chamado.component.html'
    }),
    __metadata("design:paramtypes", [tipo_chamado_service_1.TipoChamadoService, router_1.ActivatedRoute,
        router_1.Router, login_service_1.LoginService])
], TipoChamadoComponent);
exports.TipoChamadoComponent = TipoChamadoComponent;
//# sourceMappingURL=tipo-chamado.component.js.map