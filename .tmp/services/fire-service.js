import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { GooglePlus, Facebook } from 'ionic-native';
import { AngularFire } from 'angularfire2';
export var FireService = (function () {
    function FireService(events, af) {
        var _this = this;
        this.events = events;
        this.af = af;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('User logged (onAuthStateChanged)');
                _this.events.publish('user:created', firebase.auth().currentUser);
            }
            else
                console.log('User not logged (onAuthStateChanged)');
        });
    }
    FireService.prototype.getUser = function () {
        return this.user;
    };
    FireService.prototype.isLoggedIn = function () {
        if (firebase.auth().currentUser)
            this.events.publish('user:created', firebase.auth().currentUser);
    };
    FireService.prototype.loginWithFacebook = function () {
        var _this = this;
        console.log('loginWithFacebook');
        console.log('currentUser: ', firebase.auth().currentUser);
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
        console.log('loginWithGoogle');
        console.log('currentUser: ', firebase.auth().currentUser);
        GooglePlus.login({ 'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com' })
            .then(function (user) {
            var provider = firebase.auth.GoogleAuthProvider.credential(user.idToken);
            firebase.auth().signInWithCredential(provider)
                .then(function (data) {
                _this.user = user;
                _this.events.publish('user:created', firebase.auth().currentUser);
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