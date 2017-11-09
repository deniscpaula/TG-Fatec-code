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
var breadcrumb_module_1 = require("../breadcrumb/breadcrumb.module");
var titulo_module_1 = require("../titulo/titulo.module");
var alerta_module_1 = require("../alerta/alerta.module");
var produto_service_1 = require("./produto.service");
var lista_produto_component_1 = require("./lista-produto.component");
var produto_component_1 = require("./produto.component");
var ProdutoModule = (function () {
    function ProdutoModule() {
    }
    return ProdutoModule;
}());
ProdutoModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule, titulo_module_1.TituloModule, breadcrumb_module_1.BreadcrumbModule, alerta_module_1.AlertaModule],
        exports: [],
        declarations: [lista_produto_component_1.ListaProdutoComponent, produto_component_1.ProdutoComponent],
        providers: [produto_service_1.ProdutoService]
    })
], ProdutoModule);
exports.ProdutoModule = ProdutoModule;
//# sourceMappingURL=produto.module.js.map