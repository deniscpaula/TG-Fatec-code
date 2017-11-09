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
var empresa_1 = require("../empresa/empresa");
var usuario_1 = require("../usuario/usuario");
var colaborador_1 = require("../colaborador/colaborador");
var cadastro_service_1 = require("./cadastro.service");
var cargo_service_1 = require("../cargo/cargo.service");
var colaborador_service_1 = require("../colaborador/colaborador.service");
var login_service_1 = require("../login/login.service");
var alerta_1 = require("../alerta/alerta");
var CadastroComponent = (function () {
    function CadastroComponent(serviceColaborador, serviceCargo, service, loginService, router) {
        this.serviceColaborador = serviceColaborador;
        this.serviceCargo = serviceCargo;
        this.service = service;
        this.loginService = loginService;
        this.router = router;
        this.alerta = new alerta_1.Alerta('', '');
        this.colaborador = new colaborador_1.Colaborador();
        this.colaborador.empresa = new empresa_1.Empresa();
        this.colaborador.cargo = null;
        this.colaborador.usuario = new usuario_1.Usuario();
    }
    CadastroComponent.prototype.salvar = function (event) {
        var _this = this;
        event.preventDefault();
        this.colaborador.administrador = true;
        this.serviceColaborador.salvar(this.colaborador)
            .subscribe(function () {
            _this.loginService.login(_this.colaborador.usuario)
                .subscribe(function (colaborador) {
                _this.colaborador = colaborador;
                if (_this.colaborador) {
                    sessionStorage.removeItem('colaborador');
                    sessionStorage.setItem('colaborador', JSON.stringify(_this.colaborador));
                    _this.router.navigateByUrl('/chamados');
                }
            });
        }, function (erro) { return console.log(erro); });
    };
    return CadastroComponent;
}());
CadastroComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastro',
        templateUrl: './cadastro.component.html'
    }),
    __metadata("design:paramtypes", [colaborador_service_1.ColaboradorService,
        cargo_service_1.CargoService,
        cadastro_service_1.CadastroService,
        login_service_1.LoginService,
        router_1.Router])
], CadastroComponent);
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map