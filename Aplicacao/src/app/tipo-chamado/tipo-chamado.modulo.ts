import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TituloModule } from '../titulo/titulo.module';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { AlertaModule } from '../alerta/alerta.module';

import { ListaTipoChamadoComponent } from './lista-tipo-chamado.component';
import { TipoChamadoComponent } from './tipo-chamado.component';
import { TipoChamadoService } from './tipo-chamado.service';

@NgModule({
    imports: [ FormsModule, CommonModule, RouterModule, TituloModule, BreadcrumbModule, AlertaModule ],
    exports: [],
    declarations: [ ListaTipoChamadoComponent, TipoChamadoComponent ],
    providers: [ TipoChamadoService ]
})
export class TipoChamadoModule {

}