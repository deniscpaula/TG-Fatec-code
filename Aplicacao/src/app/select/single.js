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
var core_1 = require('@angular/core');
var SingleComponent = (function () {
    function SingleComponent() {
        this.items = [];
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
    }
    Object.defineProperty(SingleComponent.prototype, "disabledV", {
        get: function () {
            return this._disabledV;
        },
        set: function (value) {
            this._disabledV = value;
            this.disabled = this._disabledV === '1';
        },
        enumerable: true,
        configurable: true
    });
    SingleComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    SingleComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    SingleComponent.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    SingleComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SingleComponent.prototype, "items", void 0);
    SingleComponent = __decorate([
        core_1.Component({
            selector: 'single',
            templateUrl: './single.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SingleComponent);
    return SingleComponent;
}());
exports.SingleComponent = SingleComponent;
//# sourceMappingURL=single.js.map