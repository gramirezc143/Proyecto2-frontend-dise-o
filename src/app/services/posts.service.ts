import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { RespuestaPosts, Post } from '../interfaces/interface';

import { UsuarioService } from './usuario.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0;

  nuevoPost = new EventEmitter<Post>();

  constructor( private http: HttpClient,
               private usuarioService: UsuarioService ) { }

// Funcion para obtener los post
  getPosts( pull: boolean = false ) {
    if(pull){
      this.paginaPosts = 0;
    }
    this.paginaPosts ++;
    return this.http.get<RespuestaPosts>(`${ URL }/posts/?pagina=${ this.paginaPosts }`);
  }

  // Funcion para crear un nuevo post 
  crearPost( post ) {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise( resolve => {

      this.http.post(`${ URL }/posts`, post, { headers })
      .subscribe( resp => {
  
        this.nuevoPost.emit( resp['post'] );
        resolve(true);
      });

    });
  }
}
