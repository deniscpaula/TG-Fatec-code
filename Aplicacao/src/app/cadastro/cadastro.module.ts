import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Helper } from '../helpers/helper';
import { CadastroService } from './cadastro.service';
import { CadastroComponent } from './cadastro.component';
import { AlertaModule } from '../alerta/alerta.module';

@NgModule({
    imports: [ CommonModule, RouterModule, FormsModule, AlertaModule ],
    exports: [],
    declarations: [ CadastroComponent ],
    providers: [ CadastroService, Helper ]
})
export class CadastroModule {}