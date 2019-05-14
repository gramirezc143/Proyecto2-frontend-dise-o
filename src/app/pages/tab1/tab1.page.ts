import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/interfaces/interface';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];

  habilitado = true;

  constructor( private postsService: PostsService ) {}

    ngOnInit(){

      this.siguentes();

      this.postsService.nuevoPost
        .subscribe( post => {

          this.posts.unshift( post );
          
        });

    }

    recargar( event ) {
      this.siguentes( event, true );
      this.habilitado = true;
      this.posts = [];
    }

    
    siguentes( event?, pull: boolean = false ) {
      this.postsService.getPosts( pull )
        .subscribe( resp => {
          console.log(resp);
          this.posts.push( ...resp.posts);

          if ( event ) {
            event.target.complete();
            if ( resp.posts.length === 0 ) {
              this.habilitado = false;
            }
          }
        });
    }
}
