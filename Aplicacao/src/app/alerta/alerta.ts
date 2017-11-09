export class Alerta {

    constructor(private _mensagem: string, private _status: string) {
        this._mensagem = _mensagem;
        this._status = _status;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    get status(): string {
        return this._status;
    }

    set mensagem(mensagem: string) {
        this._mensagem = mensagem;
    }

    set status(status: string) {
        this._status = status;
    }
}