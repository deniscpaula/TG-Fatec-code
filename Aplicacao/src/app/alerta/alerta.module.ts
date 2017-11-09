import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertaComponent } from './alerta.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ AlertaComponent ],
    declarations: [ AlertaComponent ],
    providers: [ ]
})
export class AlertaModule { }
