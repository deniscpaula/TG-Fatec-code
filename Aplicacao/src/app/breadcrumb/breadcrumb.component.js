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
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(router) {
        var _this = this;
        this.url = [];
        this.router = router;
        this.router.events
            .subscribe(function (e) {
            _this.url = e.url.split('/').filter(function (item) { return item != ""; });
            if (_this.url.length > 3)
                _this.url = _this.url.slice(0, 3);
        });
    }
    BreadcrumbComponent.prototype.getPath = function (link) {
        return '/' + this.url.slice(0, this.url.indexOf(link) + 1).toString().replace(/,/g, '/');
    };
    BreadcrumbComponent.prototype.isLast = function (link) {
        return this.url.indexOf(link) + 1 == this.url.length;
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'breadcrumb',
        templateUrl: './breadcrumb.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], BreadcrumbComponent);
exports.BreadcrumbComponent = BreadcrumbComponent;
//# sourceMappingURL=breadcrumb.component.js.map