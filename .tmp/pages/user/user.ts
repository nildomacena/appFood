import { UserService } from './../../services/user-service';
import { User } from './../../model/user';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';


@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  user: User = new User();
  
  constructor(public nav: NavController, public events: Events, public userService: UserService) {
    let userData = this.userService.getUserData();
      this.user.displayName = userData.displayName;
      this.user.imageUrl = userData.imageUrl;
      this.user.email = userData.email;
  }
}
