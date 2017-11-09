"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Helper = (function () {
    function Helper() {
        this.months = [
            'Janeiro', 'Fevereiro', 'Março',
            'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro',
            'Outubro', 'Novembro', 'Dezembro'
        ];
    }
    Helper.prototype.format = function (date) {
        if (!date)
            return null;
        date = new Date(date);
        var day = ("0" + (date.getDate())).slice(-2);
        //var month = this.months[date.getMonth()];
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var year = date.getFullYear();
        return day + '/' + month + '/' + year;
    };
    Helper.prototype.formatWithTime = function (date) {
        if (!date)
            return null;
        date = new Date(date);
        var day = ("0" + date.getDate()).slice(-2);
        //var month = this.months[date.getMonth()];
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var year = date.getFullYear();
        var hour = ("0" + date.getHours()).slice(-2);
        var minutes = ("0" + date.getMinutes()).slice(-2);
        var seconds = ("0" + date.getSeconds()).slice(-2);
        return day + '/' + month + '/' + year + " - " + hour + ":" + minutes + ":" + seconds;
    };
    Helper.prototype.toDate = function (data) {
        var dataArray = data.split('/');
        return new Date(dataArray[1] + '/' + dataArray[0] + '/' + dataArray[2]);
    };
    return Helper;
}());
Helper = __decorate([
    core_1.Injectable()
], Helper);
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map