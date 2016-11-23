import { UserService } from './user-service';
import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { GooglePlus, Facebook } from 'ionic-native';
import { AngularFire } from 'angularfire2';
export var FireService = (function () {
    function FireService(events, af, userService) {
        this.events = events;
        this.af = af;
        this.userService = userService;
    }
    FireService.prototype.getUser = function () {
        return this.user;
    };
    FireService.prototype.loginWithFacebook = function () {
        var _this = this;
        console.log('loginWithFacebook');
        Facebook.login(['user_friends', 'public_profile', 'email'])
            .then(function (userFacebook) {
            var provider = firebase.auth.FacebookAuthProvider.credential(userFacebook.authResponse.accessToken);
            firebase.auth().signInWithCredential(provider)
                .then(function (data) {
                console.log(data);
                _this.events.publish('user:created', firebase.auth().currentUser);
            })
                .catch(function (error) {
                console.log(error['code'] == 'auth/account-exists-with-different-credential');
                _this.events.publish('user:created', firebase.auth().currentUser);
            });
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
        { type: UserService, },
    ];
    return FireService;
}());
//# sourceMappingURL=fire-service.js.map