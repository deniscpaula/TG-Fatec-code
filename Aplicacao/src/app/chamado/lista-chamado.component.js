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
var chamado_service_1 = require("./chamado.service");
var login_service_1 = require("../login/login.service");
var helper_1 = require("../helpers/helper");
var ListaChamadoComponent = (function () {
    function ListaChamadoComponent(service, loginService, helper) {
        var _this = this;
        this.service = service;
        this.loginService = loginService;
        this.helper = helper;
        this.chamados = [];
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(false);
        this.service.listar(true)
            .subscribe(function (chamados) { return _this.chamados = chamados; }, function (erro) { return console.log(erro); });
    }
    return ListaChamadoComponent;
}());
ListaChamadoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lista-chamado',
        templateUrl: './lista-chamado.component.html'
    }),
    __metadata("design:paramtypes", [chamado_service_1.ChamadoService,
        login_service_1.LoginService,
        helper_1.Helper])
], ListaChamadoComponent);
exports.ListaChamadoComponent = ListaChamadoComponent;
//# sourceMappingURL=lista-chamado.component.js.map