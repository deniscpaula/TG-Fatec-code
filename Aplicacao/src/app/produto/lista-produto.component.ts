import { Component } from '@angular/core';

import { ProdutoService } from './produto.service';
import { LoginService } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'lista-produto',
    templateUrl: 'lista-produto.component.html'
})
export class ListaProdutoComponent {
    produtos = [];
    
    constructor(private service: ProdutoService, private loginService: LoginService) {
        if(!this.loginService.isLogged()) return;
        this.loginService.permitAccess(true);

        service.listar(null).subscribe(produtos => this.produtos = produtos);
    }
}