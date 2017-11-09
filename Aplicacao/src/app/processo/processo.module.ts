import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { AlertaModule } from '../alerta/alerta.module';
import { ProcessoComponent } from './processo.component';
import { ListaProcessoComponent } from './lista-processo.component';
import { ColorPaletteModule } from '../color-palette/color-palette.module';
import { TituloModule } from '../titulo/titulo.module';

import { ProcessoService } from './processo.service';

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule, 
        FormsModule,
        ColorPaletteModule,
        TituloModule,
        BreadcrumbModule,
        AlertaModule
    ],
    exports: [ ],
    declarations: [ ProcessoComponent, ListaProcessoComponent ],
    providers: [ ProcessoService ]
})
export class ProcessoModule { }
