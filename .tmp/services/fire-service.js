import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { GooglePlus } from 'ionic-native';
import { AngularFire } from 'angularfire2';
import 'rxjs/Rx';
export var FireService = (function () {
    function FireService(events, af) {
        this.events = events;
        this.af = af;
    }
    FireService.prototype.getUser = function () {
        return this.user;
    };
    FireService.prototype.loginWithGoogle = function () {
        var _this = this;
        GooglePlus.login({ 'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com' })
            .then(function (user) {
            var provider = firebase.auth.GoogleAuthProvider.credential(user.idToken);
            firebase.auth().signInWithCredential(provider)
                .then(function (data) {
                _this.user = user;
                console.log('user dentro do loginwithgoogle(fibase: ', user);
                console.log('retorno signinwithcredential: ', data);
                _this.events.publish('user:created', user);
            });
        });
    };
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
    FireService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FireService.ctorParameters = [
        { type: Events, },
        { type: AngularFire, },
    ];
    return FireService;
}());
//# sourceMappingURL=fire-service.js.map