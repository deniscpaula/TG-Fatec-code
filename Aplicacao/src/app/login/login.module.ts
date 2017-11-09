import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Helper } from '../helpers/helper';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { AlertaModule } from '../alerta/alerta.module';

@NgModule({
    imports: [ CommonModule, RouterModule, FormsModule, AlertaModule ],
    exports: [],
    declarations: [ LoginComponent ],
    providers: [ LoginService, Helper ]
})
export class LoginModule {}