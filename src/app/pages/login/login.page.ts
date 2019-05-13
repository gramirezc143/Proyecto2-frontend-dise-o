import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IonSlides, NavController } from '@ionic/angular';

import { Usuario } from '../../interfaces/interface';
import { UiServiceService } from '../../services/ui-service.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;



loginUser = {
  email: 'gramirezc143@gmail.com',
  password: 'ga2652437'
};


registerUser: Usuario = {
  email: 'test',
  password: '123456',
  nombre: 'Test',
  avatar: 'av-1.png'
}


  constructor( private usuarioService: UsuarioService,
               private navCtrl: NavController,
               private uiService: UiServiceService ) { }

  ngOnInit() {
    this.slides.lockSwipes( true );
  }


  // Función Login
  async login( fLogin: NgForm ) {
    if(fLogin.invalid) {return;}
    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password);

    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
    }
  }


  // Funcion para el registro de usuario
  async registro( fRegistro: NgForm ) {

    if ( fRegistro.invalid ) { return; }
    
    const valido = await this.usuarioService.registro( this.registerUser );

    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );
    } else {
      // mostrar alerta de correo electrónico existente
      this.uiService.alertaInformativa('Ese correo electrónico ya existe.');
    }

  }

  mostrarRegistro() {
    this.slides.lockSwipes( false );
    this.slides.slideTo(1);
    this.slides.lockSwipes( true );
  }

  mostrarLogin() {
    this.slides.lockSwipes( false );
    this.slides.slideTo(0);
    this.slides.lockSwipes( true );
  }

}
