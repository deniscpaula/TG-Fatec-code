"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alerta = (function () {
    function Alerta(_mensagem, _status) {
        this._mensagem = _mensagem;
        this._status = _status;
        this._mensagem = _mensagem;
        this._status = _status;
    }
    Object.defineProperty(Alerta.prototype, "mensagem", {
        get: function () {
            return this._mensagem;
        },
        set: function (mensagem) {
            this._mensagem = mensagem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alerta.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: true,
        configurable: true
    });
    return Alerta;
}());
exports.Alerta = Alerta;
//# sourceMappingURL=alerta.js.map