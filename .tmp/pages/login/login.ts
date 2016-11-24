import { UserService } from './../../services/user-service';
import { User } from './../../model/user';
import {Component} from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HomePage} from "../home/home";



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: User = new User();
  constructor(public nav: NavController, public events: Events, public userService: UserService) {
    this.events.subscribe('user:registered', user =>{
        this.user = user[0];
        this.nav.setRoot(HomePage);
    })
  }

  ionViewDidLoad(){
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    alert('Usuário ou senha inválidos');
  }

  loginWithGoogle(){
    this.userService.loginWithGoogle();
  }

  loginWithFacebook(){
    this.userService.loginWithFacebook();
  }
}
