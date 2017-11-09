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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var angular2_text_mask_1 = require("angular2-text-mask");
var alerta_module_1 = require("../alerta/alerta.module");
var chamado_component_1 = require("./chamado.component");
var lista_chamado_component_1 = require("./lista-chamado.component");
var detalhe_chamado_component_1 = require("./detalhe-chamado.component");
var chamado_service_1 = require("./chamado.service");
var titulo_module_1 = require("../titulo/titulo.module");
var helper_1 = require("../helpers/helper");
var webservice_1 = require("../helpers/webservice");
var chamado_pipes_1 = require("./chamado.pipes");
var ChamadoModule = (function () {
    function ChamadoModule() {
    }
    return ChamadoModule;
}());
ChamadoModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule, titulo_module_1.TituloModule, forms_1.FormsModule,
            ng_bootstrap_1.NgbModule, angular2_text_mask_1.TextMaskModule, alerta_module_1.AlertaModule],
        exports: [lista_chamado_component_1.ListaChamadoComponent],
        declarations: [chamado_component_1.ChamadoComponent, lista_chamado_component_1.ListaChamadoComponent, detalhe_chamado_component_1.DetalheChamadoComponent, chamado_pipes_1.FiltroChamado],
        providers: [chamado_service_1.ChamadoService, helper_1.Helper, webservice_1.Webservice]
    })
], ChamadoModule);
exports.ChamadoModule = ChamadoModule;
//# sourceMappingURL=chamado.module.js.map