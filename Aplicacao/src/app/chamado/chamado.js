"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tipo_chamado_1 = require("../tipo-chamado/tipo-chamado");
var colaborador_1 = require("../colaborador/colaborador");
var processo_1 = require("../processo/processo");
var cliente_1 = require("../cliente/cliente");
var produto_1 = require("../produto/produto");
var prioridade_1 = require("../prioridade/prioridade");
var empresa_1 = require("../empresa/empresa");
var Chamado = (function () {
    function Chamado() {
        this.prioridade = new prioridade_1.Prioridade();
        this.processo = new processo_1.Processo();
        this.tipo = new tipo_chamado_1.TipoChamado();
        this.produto = new produto_1.Produto();
        this.cliente = new cliente_1.Cliente();
        this.responsavel = new colaborador_1.Colaborador();
        this.empresa = new empresa_1.Empresa();
    }
    return Chamado;
}());
exports.Chamado = Chamado;
//# sourceMappingURL=chamado.js.map