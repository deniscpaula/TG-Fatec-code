import { Component } from '@angular/core';

import { Chamado } from './chamado';
import { ChamadoService } from './chamado.service';
import { LoginService } from '../login/login.service';
import { Helper } from '../helpers/helper';

@Component({
    moduleId: module.id,
    selector: 'lista-chamado',
    templateUrl: './lista-chamado.component.html'
})
export class ListaChamadoComponent {
    chamados: Chamado[] = [];
    status: boolean = false;
    
    constructor(private service: ChamadoService, 
                private loginService: LoginService,
                private helper: Helper) {

        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(false);
        
        this.listar();
    }

    listar() {
        this.service.listar(!this.status)
        .subscribe(
            chamados => this.chamados = chamados,
            erro => console.log(erro));
    }
}