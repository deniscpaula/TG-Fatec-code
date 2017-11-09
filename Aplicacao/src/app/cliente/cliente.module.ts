import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { AlertaModule } from '../alerta/alerta.module';
import { TextMaskModule } from 'angular2-text-mask';

import { ClienteComponent } from './cliente.component';
import { ClienteService } from './cliente.service';
import { ListaClienteComponent } from './lista-cliente.component';
import { TituloModule } from '../titulo/titulo.module';

@NgModule({
    imports: [ CommonModule, RouterModule, FormsModule, 
                TituloModule, BreadcrumbModule, AlertaModule,
                TextMaskModule ],
    exports: [],
    declarations: [ ClienteComponent, ListaClienteComponent ],
    providers: [ ClienteService ]
})
export class ClienteModule {}