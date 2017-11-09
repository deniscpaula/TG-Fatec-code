import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPaletteComponent } from './color-palette.component';

@NgModule({
    imports: [ FormsModule ],
    exports: [ ColorPaletteComponent ],
    declarations: [ ColorPaletteComponent ],
    providers: []
})
export class ColorPaletteModule {}