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
var inputmask_1 = require("../helpers/inputmask");
var cliente_1 = require("./cliente");
var alerta_1 = require("../alerta/alerta");
var cliente_service_1 = require("./cliente.service");
var login_service_1 = require("../login/login.service");
var ClienteComponent = (function () {
    function ClienteComponent(service, route, router, loginService) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.alerta = new alerta_1.Alerta('', '');
        this.cliente = new cliente_1.Cliente();
        this.inputMask = new inputmask_1.InputMask();
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(true);
        this.loginService.getLogado().subscribe(function (colaborador) { return _this.colaborador = colaborador; });
        this.route.params.subscribe(function (params) {
            var codigo = params['codigo'];
            if (codigo) {
                _this.service.buscar(codigo).subscribe(function (cliente) { return _this.cliente = cliente; });
            }
            else {
                _this.cliente.status = true;
            }
        });
    }
    ClienteComponent.prototype.salvar = function (event) {
        var _this = this;
        event.preventDefault();
        // Se for um NOVO cadastro
        if (!this.cliente.codigo) {
            this.cliente.empresa = this.colaborador.empresa;
        }
        this.service
            .salvar(this.cliente)
            .subscribe(function (alerta) {
            _this.alerta = alerta;
            if (!alerta.mensagem)
                _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    return ClienteComponent;
}());
ClienteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cliente-cadastro',
        templateUrl: './cliente.component.html'
    }),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService,
        router_1.ActivatedRoute,
        router_1.Router,
        login_service_1.LoginService])
], ClienteComponent);
exports.ClienteComponent = ClienteComponent;
//# sourceMappingURL=cliente.component.js.map