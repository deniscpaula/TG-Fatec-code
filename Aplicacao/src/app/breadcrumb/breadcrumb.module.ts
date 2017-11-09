import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
    imports: [ CommonModule, RouterModule ],
    exports: [ BreadcrumbComponent ],
    declarations: [ BreadcrumbComponent ],
    providers: []
})
export class BreadcrumbModule {}