import { Component } from '@angular/core';

import { LoginService } from '../login/login.service';
import { Colaborador } from '../colaborador/colaborador';
import { ChamadoService } from '../chamado/chamado.service';

@Component({
    moduleId: module.id,
    selector: 'cadastros',
    templateUrl: './cadastros.component.html'
})
export class CadastrosComponent {    
    constructor(private loginService: LoginService,
                private service: ChamadoService) {

        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);
    }
}