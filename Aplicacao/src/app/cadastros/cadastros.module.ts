import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CadastrosComponent } from './cadastros.component';
import { TituloModule } from '../titulo/titulo.module';

@NgModule({
    imports: [ CommonModule, RouterModule, TituloModule ],
    exports: [ ],
    declarations: [ CadastrosComponent ],
    providers: [ ],
})
export class CadastrosModule { }
