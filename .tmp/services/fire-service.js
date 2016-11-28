import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { GooglePlus, Facebook } from 'ionic-native';
import { AngularFire } from 'angularfire2';
export var FireService = (function () {
    function FireService(events, af) {
        var _this = this;
        this.events = events;
        this.af = af;
        this.auth = firebase.auth;
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
        Facebook.login(['user_friends', 'public_profile', 'email'])
            .then(function (userFacebook) {
            console.log('userFacebook: ', userFacebook);
            var credential = firebase.auth.FacebookAuthProvider.credential(userFacebook.authResponse.accessToken);
            firebase.auth().signInWithCredential(credential)
                .then(function (data) {
                console.log('signInWithProvider result: ', data);
                _this.events.publish('user:created', firebase.auth().currentUser);
            })
                .catch(function (error) {
                console.log('error: ', error);
                var pendingCred = error['credential'];
                var email = error['email'];
                console.log('Email do erro: ', email);
                console.log('Credencial do erro: ', pendingCred);
                if (error['code'] === 'auth/account-exists-with-different-credential') {
                    firebase.auth().fetchProvidersForEmail(email)
                        .then(function (providers) {
                        _this.fetchGoogleAndFacebook(providers[0])
                            .then(function (user) {
                            var provider = firebase.auth.GoogleAuthProvider.credential(user.idToken);
                            firebase.auth().signInWithCredential(provider)
                                .then(function (userLogged) {
                                console.log('pending cred');
                                userLogged.link(pendingCred);
                                _this.events.publish('user:created', firebase.auth().currentUser);
                            })
                                .catch(function (error) {
                                console.log('erro após o signInWithCredential: ', error);
                            });
                        })
                            .catch(function (error) {
                            console.log('erro após o fetchGoogleAndFacebook: ', error);
                        });
                    });
                }
            });
        });
    };
    FireService.prototype.loginWithGoogle = function () {
        var _this = this;
        GooglePlus.login({ 'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com' })
            .then(function (user) {
            var credential = firebase.auth.GoogleAuthProvider.credential(user.idToken);
            console.log('User depois GooglePlus.login: ', user);
            firebase.auth().fetchProvidersForEmail(user.email)
                .then(function (providers) {
                if (providers[0] === 'facebook.com') {
                    console.log('Tem providers para esse email');
                    _this.fetchGoogleAndFacebook(providers[0])
                        .then(function (user) {
                        console.log('user fetchGoogleAndFacebook: ', user);
                        var provider = firebase.auth.FacebookAuthProvider.credential(user.authResponse.accessToken);
                        firebase.auth().signInWithCredential(provider)
                            .then(function (userLogged) {
                            console.log('pending cred');
                            userLogged.link(credential);
                            _this.events.publish('user:created', firebase.auth().currentUser);
                        })
                            .catch(function (error) {
                            console.log('erro após o signInWithCredential: ', error);
                        });
                    })
                        .catch(function (error) {
                        console.log('erro após o fetchGoogleAndFacebook: ', error);
                    });
                }
                else {
                    console.log('Não tem providers para esse email');
                    firebase.auth().signInWithCredential(credential)
                        .then(function (data) {
                        _this.events.publish('user:created', firebase.auth().currentUser);
                        return Promise.resolve(user);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                }
            });
        });
    };
    FireService.prototype.fetchGoogleAndFacebook = function (provider) {
        if (provider === 'google.com')
            return GooglePlus.login({ 'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com' });
        if (provider === 'facebook.com')
            return Facebook.login(['user_friends', 'public_profile', 'email']);
    };
    FireService.prototype.getUserInfo = function () {
        var user = firebase.auth().currentUser;
        return Promise.resolve(user);
    };
    FireService.prototype.logout = function () {
        return firebase.auth().signOut();
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