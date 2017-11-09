import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'titulo',
    templateUrl: './titulo.component.html'
})
export class TituloComponent {
    @Input() titulo: string;
    constructor() { }
}