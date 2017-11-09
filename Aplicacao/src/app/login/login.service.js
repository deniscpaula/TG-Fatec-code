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
var webservice_1 = require("../helpers/webservice");
var colaborador_1 = require("../colaborador/colaborador");
var LoginService = (function () {
    function LoginService(webservice, router) {
        this.webservice = webservice;
        this.router = router;
    }
    LoginService.prototype.login = function (usuario) {
        return this.webservice.post('usuario/login', JSON.stringify(usuario)).map(function (res) { return res.json(); });
    };
    LoginService.prototype.getLogado = function () {
        var colaborador = new colaborador_1.Colaborador();
        colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        if (colaborador)
            return this.webservice.get('colaborador/get/' + colaborador.codigo)
                .map(function (res) { return res.json(); });
        return this.webservice.none().map(function () { return null; });
    };
    LoginService.prototype.isLogged = function () {
        if (sessionStorage.getItem('colaborador'))
            return true;
        this.router.navigateByUrl('/');
        return false;
    };
    // Bloqueia o acesso caso não haja um usuário logado, ou caso não seja administrador
    LoginService.prototype.permitAccess = function (admin) {
        var _this = this;
        var colaborador = new colaborador_1.Colaborador();
        try {
            this.getLogado().subscribe(function (c) {
                colaborador = c;
                if (colaborador.codigo == null)
                    _this.router.navigateByUrl('/');
                if (admin && !colaborador.administrador)
                    _this.router.navigateByUrl('/chamados');
            }, function (erro) { return _this.router.navigateByUrl('/'); });
        }
        catch (erro) {
            this.router.navigateByUrl('/');
        }
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [webservice_1.Webservice, router_1.Router])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map