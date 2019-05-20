import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
import { ImagenPipe } from './imagen.pipe';

@NgModule({
  declarations: [
    DomSanitizerPipe,
    ImagenPipe,
    ImageSanitizerPipe
  ],
  exports: [
    DomSanitizerPipe,
    ImagenPipe,
    ImageSanitizerPipe
  ]
})
export class PipesModule { }
