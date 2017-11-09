import { Component } from '@angular/core';

import { ProcessoService } from './processo.service';
import { LoginService } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'lista-processo',
    templateUrl: './lista-processo.component.html'
})
export class ListaProcessoComponent {
    processos = [];

    constructor(private service: ProcessoService, private loginService: LoginService) {
        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);
        
        service.listar(null).subscribe(processos => this.processos = processos);
    }
}