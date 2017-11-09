import { Component } from '@angular/core';

import { CargoService } from './cargo.service';
import { LoginService } from '../login/login.service';
import { Cargo } from './cargo';

@Component({
    moduleId: module.id,
    selector: 'lista-cargo',
    templateUrl: './lista-cargo.component.html'
})
export class ListaCargoComponent {

    cargos: Cargo[]  = [];
    
    constructor(private service: CargoService, private loginService: LoginService) {

        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);
        
        this.service.listar(null)
        .subscribe(
            cargos => this.cargos = cargos,
            erro => console.log(erro));

    }
}