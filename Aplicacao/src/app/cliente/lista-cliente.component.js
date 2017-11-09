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
var cliente_service_1 = require("./cliente.service");
var login_service_1 = require("../login/login.service");
var ListaClienteComponent = (function () {
    function ListaClienteComponent(service, loginService) {
        var _this = this;
        this.service = service;
        this.loginService = loginService;
        this.clientes = [];
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(true);
        this.service.listar(null).subscribe(function (clientes) { return _this.clientes = clientes; });
    }
    return ListaClienteComponent;
}());
ListaClienteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lista-cliente',
        templateUrl: './lista-cliente.component.html'
    }),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService, login_service_1.LoginService])
], ListaClienteComponent);
exports.ListaClienteComponent = ListaClienteComponent;
//# sourceMappingURL=lista-cliente.component.js.map