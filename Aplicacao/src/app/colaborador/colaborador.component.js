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
var cargo_1 = require("../cargo/cargo");
var usuario_1 = require("../usuario/usuario");
var colaborador_1 = require("./colaborador");
var cargo_service_1 = require("../cargo/cargo.service");
var colaborador_service_1 = require("./colaborador.service");
var login_service_1 = require("../login/login.service");
var inputmask_1 = require("../helpers/inputmask");
var ColaboradorComponent = (function () {
    function ColaboradorComponent(service, serviceCargo, route, router, loginService) {
        var _this = this;
        this.service = service;
        this.serviceCargo = serviceCargo;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.colaborador = new colaborador_1.Colaborador();
        this.cargos = [];
        this.alerta = new alerta_1.Alerta('', '');
        this.inputMask = new inputmask_1.InputMask();
        if (!this.loginService.isLogged())
            return;
        this.loginService.permitAccess(true);
        this.loginService.getLogado().subscribe(function (logado) { return _this.colaboradorLogado = logado; });
        this.route.params.subscribe(function (params) {
            var codigo = params['codigo'];
            if (codigo) {
                service.buscar(codigo).subscribe(function (colaborador) {
                    _this.colaborador = colaborador;
                    if (_this.colaborador.cargo == null) {
                        _this.colaborador.cargo = new cargo_1.Cargo();
                    }
                    _this.loadCargos();
                });
            }
            else {
                _this.colaborador.usuario = new usuario_1.Usuario();
                _this.colaborador.usuario.status = true;
                _this.loadCargos();
            }
        });
    }
    ColaboradorComponent.prototype.loadCargos = function () {
        var _this = this;
        this.serviceCargo.listar(true).subscribe(function (cargos) {
            _this.cargos = cargos;
            if (_this.colaborador.cargo.codigo != null && !_this.colaborador.cargo.status) {
                _this.cargos.push(_this.colaborador.cargo);
            }
            ;
            _this.cargos.sort(function (c1, c2) { return (c1.codigo - c2.codigo); });
        });
    };
    /*ngAfterViewInit() {
        $(function() {
            (<any>$('select')).selectize();
        });
    }*/
    ColaboradorComponent.prototype.salvar = function (event) {
        var _this = this;
        event.preventDefault();
        // Se for um NOVO cadastro
        if (!this.colaborador.codigo) {
            this.colaborador.empresa = this.colaboradorLogado.empresa;
        }
        this.service.salvar(this.colaborador)
            .subscribe(function (alerta) {
            _this.alerta = alerta;
        }, function (erro) { return console.log(erro); });
    };
    return ColaboradorComponent;
}());
ColaboradorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'colaborador-cadastro',
        templateUrl: './colaborador.component.html'
    }),
    __metadata("design:paramtypes", [colaborador_service_1.ColaboradorService,
        cargo_service_1.CargoService,
        router_1.ActivatedRoute,
        router_1.Router,
        login_service_1.LoginService])
], ColaboradorComponent);
exports.ColaboradorComponent = ColaboradorComponent;
//# sourceMappingURL=colaborador.component.js.map