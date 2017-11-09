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
var processo_service_1 = require("./processo.service");
var login_service_1 = require("../login/login.service");
var ListaProcessoComponent = (function () {
    function ListaProcessoComponent(service, loginService) {
        var _this = this;
        this.service = service;
        this.loginService = loginService;
        this.processos = [];
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(true);
        service.listar(null).subscribe(function (processos) { return _this.processos = processos; });
    }
    return ListaProcessoComponent;
}());
ListaProcessoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lista-processo',
        templateUrl: './lista-processo.component.html'
    }),
    __metadata("design:paramtypes", [processo_service_1.ProcessoService, login_service_1.LoginService])
], ListaProcessoComponent);
exports.ListaProcessoComponent = ListaProcessoComponent;
//# sourceMappingURL=lista-processo.component.js.map