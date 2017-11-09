import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TituloComponent } from './titulo.component';

@NgModule({
    imports: [ FormsModule ],
    exports: [ TituloComponent ],
    declarations: [ TituloComponent ],
    providers: [],
})
export class TituloModule { }
