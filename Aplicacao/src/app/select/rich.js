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
var COLORS = [
    { 'name': 'Blue 10', 'hex': '#C0E6FF' },
    { 'name': 'Blue 20', 'hex': '#7CC7FF' },
    { 'name': 'Blue 30', 'hex': '#5AAAFA' },
    { 'name': 'Blue 40', 'hex': '#5596E6' },
    { 'name': 'Blue 50', 'hex': '#4178BE' },
    { 'name': 'Blue 60', 'hex': '#325C80' },
    { 'name': 'Blue 70', 'hex': '#264A60' },
    { 'name': 'Blue 80', 'hex': '#1D3649' },
    { 'name': 'Blue 90', 'hex': '#152935' },
    { 'name': 'Blue 100', 'hex': '#010205' },
    { 'name': 'Green 10', 'hex': '#C8F08F' },
    { 'name': 'Green 20', 'hex': '#B4E051' },
    { 'name': 'Green 30', 'hex': '#8CD211' },
    { 'name': 'Green 40', 'hex': '#5AA700' },
    { 'name': 'Green 50', 'hex': '#4B8400' },
    { 'name': 'Green 60', 'hex': '#2D660A' },
    { 'name': 'Green 70', 'hex': '#144D14' },
    { 'name': 'Green 80', 'hex': '#0A3C02' },
    { 'name': 'Green 90', 'hex': '#0C2808' },
    { 'name': 'Green 100', 'hex': '#010200' },
    { 'name': 'Red 10', 'hex': '#FFD2DD' },
    { 'name': 'Red 20', 'hex': '#FFA5B4' },
    { 'name': 'Red 30', 'hex': '#FF7D87' },
    { 'name': 'Red 40', 'hex': '#FF5050' },
    { 'name': 'Red 50', 'hex': '#E71D32' },
    { 'name': 'Red 60', 'hex': '#AD1625' },
    { 'name': 'Red 70', 'hex': '#8C101C' },
    { 'name': 'Red 80', 'hex': '#6E0A1E' },
    { 'name': 'Red 90', 'hex': '#4C0A17' },
    { 'name': 'Red 100', 'hex': '#040001' },
    { 'name': 'Yellow 10', 'hex': '#FDE876' },
    { 'name': 'Yellow 20', 'hex': '#FDD600' },
    { 'name': 'Yellow 30', 'hex': '#EFC100' },
    { 'name': 'Yellow 40', 'hex': '#BE9B00' },
    { 'name': 'Yellow 50', 'hex': '#8C7300' },
    { 'name': 'Yellow 60', 'hex': '#735F00' },
    { 'name': 'Yellow 70', 'hex': '#574A00' },
    { 'name': 'Yellow 80', 'hex': '#3C3200' },
    { 'name': 'Yellow 90', 'hex': '#281E00' },
    { 'name': 'Yellow 100', 'hex': '#020100' }
];
var RichDemoComponent = (function () {
    function RichDemoComponent() {
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
        this.items = [];
    }
    RichDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        COLORS.forEach(function (color) {
            _this.items.push({
                id: color.hex,
                text: "<colorbox style='background-color:" + color.hex + ";'></colorbox>" + color.name + " (" + color.hex + ")"
            });
        });
    };
    Object.defineProperty(RichDemoComponent.prototype, "disabledV", {
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
    RichDemoComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    RichDemoComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    RichDemoComponent.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    RichDemoComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    RichDemoComponent = __decorate([
        core_1.Component({
            selector: 'rich',
            templateUrl: './rich.html',
            styles: ["colorbox,.colorbox { display:inline-block; height:14px; width:14px;margin-right:4px; border:1px solid #000;}"],
            encapsulation: core_1.ViewEncapsulation.None // Enable dynamic HTML styles
        }), 
        __metadata('design:paramtypes', [])
    ], RichDemoComponent);
    return RichDemoComponent;
}());
exports.RichDemoComponent = RichDemoComponent;
//# sourceMappingURL=rich.js.map