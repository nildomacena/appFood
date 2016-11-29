import { UserService } from './../../services/user-service';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {LoginPage} from "../login/login";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public nav: NavController, public userService: UserService) {
  }

  // register and go to home page
  register(email, password, name) {
    console.log('email: ',email, '\npassword: ',password);
    this.userService.createUser(email, password, name)
      .then(data => {
        console.log('Resultado createUser: ',data);
        this.nav.setRoot(HomePage);
      })
      .catch(error => {
        console.log('error create user: ', error)
      })
  }

  // go to login page
  login() {
    
    this.nav.setRoot(LoginPage);
  }
}
