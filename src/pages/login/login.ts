import { User } from './../../model/user';
import {Component} from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HomePage} from "../home/home";
import { FireService } from '../../services/fire-service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: User = new User();
  constructor(public nav: NavController, public fire: FireService, public events: Events) {
    this.events.subscribe('user:created', user =>{
        this.user = user[0];
        this.nav.setRoot(HomePage);
    })
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    this.nav.setRoot(HomePage);
  }

  loginWithGoogle(){
    this.fire.loginWithGoogle();
  }
}
