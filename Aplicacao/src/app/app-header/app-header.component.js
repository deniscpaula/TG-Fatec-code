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
var login_service_1 = require("../login/login.service");
var AppHeaderComponent = (function () {
    function AppHeaderComponent(router, loginService) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        this.url = "";
        this.router.events
            .subscribe(function (e) {
            _this.url = e.url;
            _this.loginService.getLogado()
                .subscribe(function (colaborador) {
                _this.colaborador = colaborador;
                _this.showItensMenu();
                _this.loadMenu();
            }, function (erro) { return console.log(erro); });
        });
    }
    AppHeaderComponent.prototype.ngOnChanges = function () {
        this.showItensMenu();
        this.loadMenu();
    };
    AppHeaderComponent.prototype.showItensMenu = function () {
        this.login = false;
        this.chamado = false;
        if (this.url.includes('chamados')) {
            this.chamado = true;
        }
        else {
            if (this.url === '/' || this.url === '/cadastro') {
                this.login = true;
            }
        }
    };
    AppHeaderComponent.prototype.urlAtiva = function (url) {
        return (this.url && this.url.includes(url));
    };
    AppHeaderComponent.prototype.showMenuOptions = function () {
        $('.menu-options').show();
        $('.menu-icon').show();
        $('.menu-icon-border').show();
    };
    AppHeaderComponent.prototype.hideMenuOptions = function () {
        $('.menu-options').hide();
        $('.menu-icon').hide();
        $('.menu-icon-border').hide();
    };
    AppHeaderComponent.prototype.loadMenu = function () {
        var _this = this;
        $(document).ready(function () {
            $('.burger').off("click").on("click", function () {
                $(".collapsed").animate({
                    height: 'toggle'
                });
                $(window).resize(function () {
                    if ($(window).width() > 640) {
                        $(".collapsed").hide();
                    }
                    event.stopPropagation();
                });
            });
            $('#user-dropdown')
                .hover(function () {
                _this.showMenuOptions();
                $('html').click(function () { return _this.hideMenuOptions(); });
                event.stopPropagation();
            })
                .click(function () {
                _this.showMenuOptions();
                $('html').click(function () { return _this.hideMenuOptions(); });
                event.stopPropagation();
            });
            $('.menu-options').mouseleave(function () { return _this.hideMenuOptions(); });
        });
    };
    AppHeaderComponent.prototype.logout = function () {
        sessionStorage.removeItem('colaborador');
        this.router.navigateByUrl('/');
    };
    return AppHeaderComponent;
}());
AppHeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-header',
        templateUrl: './app-header.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, login_service_1.LoginService])
], AppHeaderComponent);
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=app-header.component.js.map