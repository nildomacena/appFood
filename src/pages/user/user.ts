import { FireService } from './../../services/fire-service';
import { User } from './../../model/user';
import {Component} from '@angular/core';
import { NavController, Events } from 'ionic-angular';


@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  user: User = new User();
  
  constructor(public nav: NavController, public events: Events, public fire: FireService) {
    let userData = this.fire.getUser();
    console.log(userData);
      this.user.displayName = userData.displayName;
      this.user.imageUrl = userData.imageUrl;
      this.user.email = userData.email;
      console.log('this.user: ',this.user)
    
  }
}
