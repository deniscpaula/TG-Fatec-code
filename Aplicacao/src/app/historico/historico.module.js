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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var alerta_module_1 = require("../alerta/alerta.module");
var historico_component_1 = require("./historico.component");
var historico_service_1 = require("./historico.service");
var HistoricoModule = (function () {
    function HistoricoModule() {
    }
    return HistoricoModule;
}());
HistoricoModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule, ng_bootstrap_1.NgbModule, alerta_module_1.AlertaModule],
        exports: [],
        declarations: [historico_component_1.HistoricoComponent],
        providers: [historico_service_1.HistoricoService]
    })
], HistoricoModule);
exports.HistoricoModule = HistoricoModule;
//# sourceMappingURL=historico.module.js.map