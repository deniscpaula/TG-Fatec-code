"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var titulo_module_1 = require("../titulo/titulo.module");
var breadcrumb_module_1 = require("../breadcrumb/breadcrumb.module");
var alerta_module_1 = require("../alerta/alerta.module");
var lista_tipo_chamado_component_1 = require("./lista-tipo-chamado.component");
var tipo_chamado_component_1 = require("./tipo-chamado.component");
var tipo_chamado_service_1 = require("./tipo-chamado.service");
var TipoChamadoModule = (function () {
    function TipoChamadoModule() {
    }
    return TipoChamadoModule;
}());
TipoChamadoModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule, titulo_module_1.TituloModule, breadcrumb_module_1.BreadcrumbModule, alerta_module_1.AlertaModule],
        exports: [],
        declarations: [lista_tipo_chamado_component_1.ListaTipoChamadoComponent, tipo_chamado_component_1.TipoChamadoComponent],
        providers: [tipo_chamado_service_1.TipoChamadoService]
    })
], TipoChamadoModule);
exports.TipoChamadoModule = TipoChamadoModule;
//# sourceMappingURL=tipo-chamado.modulo.js.map