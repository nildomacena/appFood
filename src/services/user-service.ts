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
        this.events.subscribe('user:created', () => {
            this.fire.getUserInfo()
                .then(snapshot => {
                    let userLogged = snapshot.val();
                    console.log('snapshot.val(): ',snapshot.val());
                    if(userLogged){
                        this.user.displayName = userLogged.name;
                        this.user.email = userLogged.email;
                        this.user.imageUrl = userLogged.photo;
                        this.events.publish('user:registered', this.user);
                    }
                })
        })
    }

    getUserData():User{
        return this.user;
    }

    createUser(email:string, password:string, name: string): Promise<any> {
        return this.fire.createUserWithEmailAndPassword(email, password, name)
    }
}