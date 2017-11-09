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
var alerta_1 = require("../alerta/alerta");
var processo_service_1 = require("./processo.service");
var login_service_1 = require("../login/login.service");
var processo_1 = require("./processo");
var ProcessoComponent = (function () {
    function ProcessoComponent(service, route, router, loginService) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.processo = new processo_1.Processo();
        this.alerta = new alerta_1.Alerta('', '');
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(true);
        this.loginService.getLogado().subscribe(function (colaborador) { return _this.colaborador = colaborador; });
        this.route.params.subscribe(function (params) {
            _this.codigo = params['codigo'];
        });
    }
    ProcessoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.codigo) {
            this.service.buscar(this.codigo).subscribe(function (processo) {
                _this.processo = processo;
                _this.setColor();
            });
        }
        else {
            this.processo.cor = "#e6e6e6";
            this.processo.status = true;
            this.setColor();
        }
    };
    ProcessoComponent.prototype.setColor = function () {
        var processo = this.processo;
        var pal = $('#cor').colorPalette({
            palette: 'crayons',
            color: processo.cor,
            manual: false,
            select: function (c) {
                processo.cor = c;
            },
            hover: function (c) { }
            //bindTo : $('#l')[0]
        });
    };
    ProcessoComponent.prototype.salvar = function (event) {
        var _this = this;
        event.preventDefault();
        // Se for um NOVO cadastro
        if (!this.processo.codigo) {
            this.processo.empresa = this.colaborador.empresa;
        }
        this.service
            .salvar(this.processo)
            .subscribe(function (alerta) {
            _this.alerta = alerta;
            if (!alerta.mensagem)
                _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    return ProcessoComponent;
}());
ProcessoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'processo-cadastro',
        templateUrl: './processo.component.html'
    }),
    __metadata("design:paramtypes", [processo_service_1.ProcessoService,
        router_1.ActivatedRoute,
        router_1.Router,
        login_service_1.LoginService])
], ProcessoComponent);
exports.ProcessoComponent = ProcessoComponent;
//# sourceMappingURL=processo.component.js.map