import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';

import { AlertaModule } from '../alerta/alerta.module';
import { ChamadoComponent } from './chamado.component';
import { ListaChamadoComponent } from './lista-chamado.component';
import { DetalheChamadoComponent } from './detalhe-chamado.component';
import { ChamadoService } from './chamado.service';
import { TituloModule } from '../titulo/titulo.module';
import { Helper } from '../helpers/helper';
import { Webservice } from '../helpers/webservice';
import { FiltroChamado } from './chamado.pipes';

@NgModule({
    imports: [ CommonModule, RouterModule, TituloModule, FormsModule, 
                NgbModule, TextMaskModule, AlertaModule ],
    exports: [ ListaChamadoComponent ],
    declarations: [ ChamadoComponent, ListaChamadoComponent, DetalheChamadoComponent, FiltroChamado ],
    providers: [ ChamadoService, Helper, Webservice ]
})
export class ChamadoModule { }
