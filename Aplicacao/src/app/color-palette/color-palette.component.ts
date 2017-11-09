import { Component, OnInit, Input } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'color-palette',
    template: '<span id="corPicker" placeholder="Cor"></span>'
})
export class ColorPaletteComponent implements OnInit {
    
    @Input() cor: string;
    
    constructor() {}

    ngOnInit() {
        if(this.cor == null) this.cor = "#e6e6e6";
        this.setColor();
    }

    setColor() {
        var pal = (<any>$('<input id="cor" type="text" name="cor"/>').appendTo($('#colorPicker'))).colorPalette({
            palette : 'crayons',
            color : this.cor,
            manual : false,
            select : function(c) { },
            hover : function(c) { }
            //bindTo : $('#l')[0]
        });
    }
}