import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { AlertaModule } from '../alerta/alerta.module';
import { TextMaskModule } from 'angular2-text-mask';

import { ColaboradorComponent } from './colaborador.component';
import { ListaColaboradorComponent } from './lista-colaborador.component';
import { ColaboradorService } from './colaborador.service';
import { TituloModule } from '../titulo/titulo.module';

@NgModule({
    imports: [ CommonModule, RouterModule, FormsModule, 
                TituloModule, BreadcrumbModule, AlertaModule,
                TextMaskModule ],
    exports: [],
    declarations: [ ColaboradorComponent, ListaColaboradorComponent ],
    providers: [ ColaboradorService ]
})
export class ColaboradorModule {}