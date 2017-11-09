import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { AlertaModule } from '../alerta/alerta.module';

import { CargoComponent } from './cargo.component';
import { CargoService } from './cargo.service';
import { ListaCargoComponent } from './lista-cargo.component';
import { TituloModule } from '../titulo/titulo.module';

@NgModule({
    imports: [ CommonModule, RouterModule, FormsModule, TituloModule, BreadcrumbModule, AlertaModule ],
    exports: [ ],
    declarations: [ CargoComponent, ListaCargoComponent ],
    providers: [ CargoService ],
})
export class CargoModule { }
