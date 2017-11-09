import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { TituloModule } from '../titulo/titulo.module';
import { AlertaModule } from  '../alerta/alerta.module';

import { ProdutoService } from './produto.service';
import { ListaProdutoComponent } from './lista-produto.component';
import { ProdutoComponent } from './produto.component';

@NgModule({
    imports: [ FormsModule, CommonModule, RouterModule, TituloModule, BreadcrumbModule, AlertaModule ],
    exports: [],
    declarations: [ ListaProdutoComponent, ProdutoComponent ],
    providers: [ ProdutoService ]
})
export class ProdutoModule {

}