import { Component } from '@angular/core';

import { TipoChamado } from './tipo-chamado';
import { TipoChamadoService } from './tipo-chamado.service';
import { LoginService } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'lista-tipo-chamado',
    templateUrl: './lista-tipo-chamado.component.html'
})
export class ListaTipoChamadoComponent {
    tipos: TipoChamado[] = [];

    constructor(private service: TipoChamadoService, private loginService: LoginService) {
        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);

        service.listar(null).subscribe(tipos => this.tipos = tipos);
    }
}