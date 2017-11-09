"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var helper_1 = require("../helpers/helper");
var configuracao_service_1 = require("./configuracao.service");
var configuracao_component_1 = require("./configuracao.component");
var alerta_module_1 = require("../alerta/alerta.module");
var ConfiguracaoModule = (function () {
    function ConfiguracaoModule() {
    }
    return ConfiguracaoModule;
}());
ConfiguracaoModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, alerta_module_1.AlertaModule],
        exports: [],
        declarations: [configuracao_component_1.ConfiguracaoComponent],
        providers: [configuracao_service_1.ConfiguracaoService, helper_1.Helper]
    })
], ConfiguracaoModule);
exports.ConfiguracaoModule = ConfiguracaoModule;
//# sourceMappingURL=configuracao.module.js.map