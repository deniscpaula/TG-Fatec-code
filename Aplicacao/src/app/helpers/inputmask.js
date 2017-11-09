"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InputMask = (function () {
    function InputMask() {
        this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.dateMask = [/[0-3]/, /[\d]/, '/', /[0-1]/, /\d/, '/', /[2]/, /\d/, /\d/, /\d/];
        this.telMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    return InputMask;
}());
exports.InputMask = InputMask;
//# sourceMappingURL=inputmask.js.map