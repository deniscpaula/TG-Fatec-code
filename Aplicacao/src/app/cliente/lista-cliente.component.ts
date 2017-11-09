import { Component } from '@angular/core';

import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { LoginService } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'lista-cliente',
    templateUrl: './lista-cliente.component.html'
})
export class ListaClienteComponent {
    clientes: Cliente[] = [];

    constructor(private service: ClienteService, private loginService: LoginService) {
        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);
        
        this.service.listar(null).subscribe(clientes => this.clientes = clientes);
    }
}