import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'erro404',
    templateUrl: './erro404.component.html'
})
export class Erro404Component {
    constructor(private router: Router) { 
        this.router.navigateByUrl('/404');
    }
}