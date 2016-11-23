import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { GooglePlus, Facebook } from 'ionic-native';
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
    FireService.prototype.loginWithFacebook = function () {
        var _this = this;
        console.log('loginWithFacebook');
        Facebook.login(['user_friends', 'public_profile'])
            .then(function (userFacebook) {
            var provider = firebase.auth.FacebookAuthProvider.credential(userFacebook.authResponse.accessToken);
            firebase.auth().signInWithCredential(provider);
            _this.events.publish('user:created', userFacebook);
        });
    };
    FireService.prototype.loginWithGoogle = function () {
        var _this = this;
        GooglePlus.login({ 'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com' })
            .then(function (user) {
            var provider = firebase.auth.GoogleAuthProvider.credential(user.idToken);
            firebase.auth().signInWithCredential(provider)
                .then(function (data) {
                _this.user = user;
                _this.events.publish('user:created', user);
            });
        });
    };
    FireService.prototype.getUserInfo = function () {
        var user = firebase.auth().currentUser;
        return Promise.resolve(user);
    };
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