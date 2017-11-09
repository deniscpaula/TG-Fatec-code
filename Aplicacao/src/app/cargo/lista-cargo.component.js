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
var cargo_service_1 = require("./cargo.service");
var login_service_1 = require("../login/login.service");
var ListaCargoComponent = (function () {
    function ListaCargoComponent(service, loginService) {
        var _this = this;
        this.service = service;
        this.loginService = loginService;
        this.cargos = [];
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(true);
        this.service.listar(null)
            .subscribe(function (cargos) { return _this.cargos = cargos; }, function (erro) { return console.log(erro); });
    }
    return ListaCargoComponent;
}());
ListaCargoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lista-cargo',
        templateUrl: './lista-cargo.component.html'
    }),
    __metadata("design:paramtypes", [cargo_service_1.CargoService, login_service_1.LoginService])
], ListaCargoComponent);
exports.ListaCargoComponent = ListaCargoComponent;
//# sourceMappingURL=lista-cargo.component.js.map