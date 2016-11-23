import { UserService } from './user-service';
import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { GooglePlus, Facebook } from 'ionic-native';
import { User } from './../model/user';
import { AngularFire } from 'angularfire2';

@Injectable()

export class FireService {
    user: any;
    constructor(public events: Events, public af: AngularFire, public userService: UserService){ }

    getUser():any{
        return this.user;
    }

    loginWithFacebook(){
        console.log('loginWithFacebook');
        Facebook.login(['user_friends', 'public_profile', 'email'])
            .then(userFacebook => {
                let provider = firebase.auth.FacebookAuthProvider.credential(userFacebook.authResponse.accessToken);
                firebase.auth().signInWithCredential(provider)
                    .then(data => {
                        console.log(data);
                        this.events.publish('user:created', firebase.auth().currentUser)
                    })
                    .catch(error => {
                        console.log(error['code'] == 'auth/account-exists-with-different-credential');
                        this.events.publish('user:created', firebase.auth().currentUser);
                    })
            })
    }

    loginWithGoogle(){

        GooglePlus.login({'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com'})
        .then(user => {
            let provider = firebase.auth.GoogleAuthProvider.credential(user.idToken);
            firebase.auth().signInWithCredential(provider)
                .then(data => {
                    this.user = user;
                    this.events.publish('user:created',user);
                })
        })   
    }

    getUserInfo():Promise<any>{
        let user = firebase.auth().currentUser;
        return Promise.resolve(user);
    }
}