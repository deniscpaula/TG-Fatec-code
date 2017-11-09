import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Helper } from '../helpers/helper';
import { ConfiguracaoService } from './configuracao.service';
import { ConfiguracaoComponent } from './configuracao.component';
import { AlertaModule } from '../alerta/alerta.module';

@NgModule({
    imports: [ CommonModule, RouterModule, FormsModule, AlertaModule ],
    exports: [],
    declarations: [ ConfiguracaoComponent ],
    providers: [ ConfiguracaoService, Helper ]
})
export class ConfiguracaoModule {}