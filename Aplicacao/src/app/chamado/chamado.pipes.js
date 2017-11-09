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
var helper_1 = require("../helpers/helper");
var FiltroChamado = (function () {
    function FiltroChamado(helper) {
        this.helper = helper;
    }
    FiltroChamado.prototype.transform = function (chamados, busca) {
        var _this = this;
        busca = busca.toLowerCase().split(',').map(function (busca) { return busca.trim(); });
        var chamadosFiltrado = chamados.filter(function (chamado) {
            var include = true;
            busca.forEach(function (b) {
                if (b.charAt(0) == '-' && b.substr(1, (b.length - 1)).trim()) {
                    var excluir = b.substr(1, (b.length - 1)).trim();
                    //
                    if ((chamado.codigoInterno == excluir) ||
                        (chamado.prazo && _this.helper.format(chamado.prazo).includes(excluir)) ||
                        (chamado.produto && chamado.produto.nome.toLowerCase().includes(excluir)) ||
                        (chamado.assunto.toLowerCase().includes(excluir)) ||
                        (chamado.cliente && chamado.cliente.nomeFantasia.toLowerCase().includes(excluir)) ||
                        (chamado.prioridade && chamado.prioridade.nome.toLowerCase().includes(excluir)) ||
                        (chamado.processo && chamado.processo.nome.toLowerCase().includes(excluir)) ||
                        (chamado.tipo && chamado.tipo.nome.toLowerCase().includes(excluir))) {
                        include = false;
                    }
                }
                else if (b.substr(1, (b.length - 1)).trim()) {
                    // Se não tiver nenhum atributo ou se eles não possuirem a palavra buscada
                    // não irá incluir o chamado na lista
                    if ((chamado.codigoInterno != b) &&
                        (!chamado.prazo || !_this.helper.format(chamado.prazo).includes(b)) &&
                        (!chamado.produto || !chamado.produto.nome.toLowerCase().includes(b)) &&
                        (!chamado.assunto.toLowerCase().includes(b)) &&
                        (!chamado.cliente || !chamado.cliente.nomeFantasia.toLowerCase().includes(b)) &&
                        (!chamado.prioridade || !chamado.prioridade.nome.toLowerCase().includes(b)) &&
                        (!chamado.processo || !chamado.processo.nome.toLowerCase().includes(b)) &&
                        (!chamado.tipo || !chamado.tipo.nome.toLowerCase().includes(b))) {
                        include = false;
                    }
                }
            });
            if (include)
                return chamado;
        });
        return chamadosFiltrado;
    };
    return FiltroChamado;
}());
FiltroChamado = __decorate([
    core_1.Pipe({
        name: 'filtroChamado'
    }),
    __metadata("design:paramtypes", [helper_1.Helper])
], FiltroChamado);
exports.FiltroChamado = FiltroChamado;
//# sourceMappingURL=chamado.pipes.js.map