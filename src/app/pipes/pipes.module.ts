import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { FiltroPipe } from './filtro.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
import { ImagenPipe } from './imagen.pipe';

@NgModule({
  declarations: [
    DomSanitizerPipe,
    ImagenPipe,
    ImageSanitizerPipe,
    FiltroPipe
  ],
  exports: [
    DomSanitizerPipe,
    ImagenPipe,
    ImageSanitizerPipe,
    FiltroPipe
  ]
})
export class PipesModule { }
