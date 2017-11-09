import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Erro404Component } from './erro404.component';

@NgModule({
    imports: [ FormsModule, RouterModule ],
    exports: [ Erro404Component ],
    declarations: [ Erro404Component ],
    providers: [],
})
export class Erro404Module { }
