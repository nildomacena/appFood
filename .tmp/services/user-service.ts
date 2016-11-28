import { FireService } from './fire-service';
import { Events } from 'ionic-angular';
import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    user: User = new User();

    constructor(public events: Events, public fire: FireService) {
        console.log('UserService');
        this.fire.isLoggedIn();
        this.events.subscribe('user:created', currentUser => {
            this.user.imageUrl = currentUser[0].photoURL;
            this.user.email = currentUser[0].email;
            this.user.displayName = currentUser[0].displayName;
            this.events.publish('user:registered', this.user);
        })
    }

    getUserData():User{
        return this.user;
    }

    createUser(email:string, password:string):firebase.Promise<any> {
        return this.fire.createUserWithEmailAndPassword(email,password)
    }
}