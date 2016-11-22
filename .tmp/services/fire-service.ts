import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { GooglePlus } from 'ionic-native';
import { User } from './../model/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class FireService {
    user: any;
    constructor(public events: Events){ }

    getUser():any{
        return this.user;
    }
    loginWithGoogle(){

        GooglePlus.login({'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com'})
        .then(user => {
            this.user = user;
            console.log('user dentro do loginwithgoogle: ',user);
            this.events.publish('user:created',user);
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