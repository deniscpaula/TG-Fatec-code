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
var usuario_1 = require("../usuario/usuario");
var login_service_1 = require("./login.service");
var alerta_1 = require("../alerta/alerta");
var LoginComponent = (function () {
    function LoginComponent(service, router) {
        this.service = service;
        this.router = router;
        this.usuario = new usuario_1.Usuario();
        this.alerta = new alerta_1.Alerta('', '');
    }
    LoginComponent.prototype.login = function (event) {
        var _this = this;
        event.preventDefault();
        this.service
            .login(this.usuario)
            .subscribe(function (colaborador) {
            _this.colaborador = colaborador;
            if (_this.colaborador) {
                sessionStorage.removeItem('colaborador');
                sessionStorage.setItem('colaborador', JSON.stringify(_this.colaborador));
                _this.router.navigateByUrl('/chamados');
            }
        }, function (erro) {
            _this.alerta.mensagem = 'Usuário ou senha inválidos';
            _this.alerta.status = 'erro';
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map