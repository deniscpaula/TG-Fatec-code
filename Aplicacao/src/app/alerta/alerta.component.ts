import { Component, Input, OnChanges } from '@angular/core';
import { Alerta } from './alerta';

@Component({
    moduleId: module.id,
    selector: 'alerta',
    templateUrl: './alerta.component.html'
})
export class AlertaComponent implements OnChanges {
    @Input() alerta: Alerta = new Alerta('', '');
    
    constructor() {}

    ngOnChanges() {
        setTimeout(() => {
            this.alerta = new Alerta('','');
        }, 7000);
    }

    show() {
        setTimeout(() => {
            this.hide();
        }, 7000);
    }

    hide() {
        this.alerta = new Alerta('','');
    }
}