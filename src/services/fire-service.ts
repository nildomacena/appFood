import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { GooglePlus } from 'ionic-native';
import { User } from './../model/user';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class FireService {
    user: any;
    constructor(public events: Events, public af: AngularFire){ }

    getUser():any{
        return this.user;
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

    /* loginWithGoogle():Promise<any>{
        console.log('loginWithGoogle');
        return GooglePlus.login({'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com'});
    } */

    /* loginWithGoogle():Observable<User>{
        let observable: Observable<any>;
        let promise: Promise<any>;

        promise = GooglePlus.login({'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com'});
        observable = Observable.fromPromise(promise);
        return observable;
        
    }*/
}