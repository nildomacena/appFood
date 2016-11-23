import { Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    user: User = new User();

    constructor(public events: Events) {
        console.log('userService');
        this.events.subscribe('user:created', currentUser => {
            console.log('currentUser', currentUser[0]);
            this.user.imageUrl = currentUser[0].photoURL;
            this.user.email = currentUser[0].email;
            this.user.displayName = currentUser[0].displayName;
            this.events.publish('user:registered', this.user);
        })
    }

    getUserData(){

    }
}