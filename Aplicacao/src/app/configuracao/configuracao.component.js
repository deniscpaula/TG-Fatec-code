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
var colaborador_1 = require("../colaborador/colaborador");
var configuracao_service_1 = require("./configuracao.service");
var colaborador_service_1 = require("../colaborador/colaborador.service");
var login_service_1 = require("../login/login.service");
var alerta_1 = require("../alerta/alerta");
var ConfiguracaoComponent = (function () {
    function ConfiguracaoComponent(serviceColaborador, service, loginService, router) {
        var _this = this;
        this.serviceColaborador = serviceColaborador;
        this.service = service;
        this.loginService = loginService;
        this.router = router;
        this.alerta = new alerta_1.Alerta('', '');
        this.colaborador = new colaborador_1.Colaborador();
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(false);
        this.loginService.getLogado().subscribe(function (colaborador) { return _this.colaborador = colaborador; });
    }
    ConfiguracaoComponent.prototype.salvar = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.colaborador.usuario.senha === this.csenha) {
            this.service.salvar(this.colaborador.usuario)
                .subscribe(function (alerta) {
                _this.alerta = alerta;
                if (!alerta.mensagem)
                    _this.router.navigate(['']);
            }, function (erro) { return console.log(erro); });
        }
        else {
            this.alerta.status = 'erro';
            this.alerta.mensagem = 'Confirmação de senha inválida';
        }
    };
    return ConfiguracaoComponent;
}());
ConfiguracaoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'configuracao',
        templateUrl: './configuracao.component.html'
    }),
    __metadata("design:paramtypes", [colaborador_service_1.ColaboradorService,
        configuracao_service_1.ConfiguracaoService,
        login_service_1.LoginService,
        router_1.Router])
], ConfiguracaoComponent);
exports.ConfiguracaoComponent = ConfiguracaoComponent;
//# sourceMappingURL=configuracao.component.js.map