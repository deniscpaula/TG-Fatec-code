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
var cargo_1 = require("./cargo");
var cargo_service_1 = require("./cargo.service");
var login_service_1 = require("../login/login.service");
var alerta_1 = require("../alerta/alerta");
var CargoComponent = (function () {
    function CargoComponent(service, loginService, route, router) {
        var _this = this;
        this.service = service;
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.cargo = new cargo_1.Cargo();
        this.alerta = new alerta_1.Alerta('', '');
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(true);
        this.loginService.getLogado().subscribe(function (colaborador) { return _this.colaborador = colaborador; });
        this.route.params.subscribe(function (params) {
            var codigo = params['codigo'];
            if (codigo) {
                _this.service.buscar(codigo)
                    .subscribe(function (cargo) { return _this.cargo = cargo; }, function (erro) { return console.log(erro); });
            }
            else {
                _this.cargo.status = true;
            }
        });
    }
    CargoComponent.prototype.salvar = function (event) {
        var _this = this;
        event.preventDefault();
        // Se for um NOVO cadastro
        if (!this.cargo.codigo) {
            this.cargo.empresa = this.colaborador.empresa;
        }
        this.service
            .salvar(this.cargo)
            .subscribe(function (alerta) {
            _this.alerta = alerta;
            if (!alerta.mensagem)
                _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    return CargoComponent;
}());
CargoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cargo-cadastro',
        templateUrl: './cargo.component.html'
    }),
    __metadata("design:paramtypes", [cargo_service_1.CargoService, login_service_1.LoginService,
        router_1.ActivatedRoute, router_1.Router])
], CargoComponent);
exports.CargoComponent = CargoComponent;
//# sourceMappingURL=cargo.component.js.map