import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertaModule } from '../alerta/alerta.module';


import { HistoricoComponent } from './historico.component';
import { HistoricoService } from './historico.service';

@NgModule({
    imports: [ FormsModule, CommonModule, NgbModule, AlertaModule ],
    exports: [],
    declarations: [ HistoricoComponent ],
    providers: [ HistoricoService ]
})
export class HistoricoModule {

}