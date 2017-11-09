import { Component } from '@angular/core';

import { Colaborador } from './colaborador';
import { ColaboradorService } from './colaborador.service';
import { LoginService } from '../login/login.service';
import { CargoService } from '../cargo/cargo.service';

@Component({
    moduleId: module.id,
    selector: 'lista-colaborador',
    templateUrl: './lista-colaborador.component.html'
})
export class ListaColaboradorComponent {
    
    colaboradores: Colaborador[] = [];

    constructor(private service: ColaboradorService,
                private serviceCargo: CargoService, 
                private loginService: LoginService) {
                    
        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);
        
        this.service.listar(null).subscribe(colaboradores => this.colaboradores = colaboradores);
    }
}