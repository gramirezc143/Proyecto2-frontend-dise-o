import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PipesModule } from '../pipes/pipes.module';

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule, 
    IonicModule, 
    PipesModule
  ]
})
export class ComponentsModule { }
