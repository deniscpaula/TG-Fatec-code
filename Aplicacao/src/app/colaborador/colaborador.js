"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cargo_1 = require("../cargo/cargo");
var usuario_1 = require("../usuario/usuario");
var Colaborador = (function () {
    function Colaborador() {
        this.cargo = new cargo_1.Cargo();
        this.usuario = new usuario_1.Usuario();
    }
    return Colaborador;
}());
exports.Colaborador = Colaborador;
//# sourceMappingURL=colaborador.js.map