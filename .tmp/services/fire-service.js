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
        firebase.database().ref('users').on('value', function (snapshot) {
            console.log('snapshot: ', snapshot.val());
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
            var credential = firebase.auth.FacebookAuthProvider.credential(userFacebook.authResponse.accessToken);
            firebase.auth().signInWithCredential(credential)
                .then(function (data) {
                _this.saveUserInfo();
                _this.events.publish('user:created', firebase.auth().currentUser);
            })
                .catch(function (error) {
                var pendingCred = error['credential'];
                var email = error['email'];
                if (error['code'] === 'auth/account-exists-with-different-credential') {
                    firebase.auth().fetchProvidersForEmail(email)
                        .then(function (providers) {
                        _this.fetchProviders(providers[0])
                            .then(function (credentialReturned) {
                            firebase.auth().signInWithCredential(credentialReturned)
                                .then(function (userLogged) {
                                userLogged.link(pendingCred);
                                _this.saveUserInfo();
                                _this.events.publish('user:created', firebase.auth().currentUser);
                            })
                                .catch(function (error) {
                                console.log('Erro após link: ', error);
                            });
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
            firebase.auth().signInWithCredential(credential)
                .then(function (data) {
                _this.saveUserInfo();
                _this.events.publish('user:created', firebase.auth().currentUser);
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    };
    FireService.prototype.fetchProviders = function (provider) {
        if (provider === 'google.com') {
            var promise = new Promise(function (resolve, reject) {
                GooglePlus.login({ 'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com' })
                    .then(function (user) {
                    var credential = firebase.auth.GoogleAuthProvider.credential(user.idToken);
                    console.log('credential let promise: ', credential);
                    resolve(credential);
                });
            });
            return promise;
        }
        if (provider === 'facebook.com') {
            Facebook.login(['user_friends', 'public_profile', 'email'])
                .then(function (userFacebook) {
                var credential = firebase.auth.FacebookAuthProvider.credential(userFacebook.authResponse.accessToken);
                console.log('credential no fetch: ', credential);
                return Promise.resolve(credential);
            });
        }
    };
    FireService.prototype.getUserInfo = function () {
        var user = firebase.auth().currentUser;
        return Promise.resolve(user);
    };
    FireService.prototype.saveUserInfo = function () {
        var currentUser = firebase.auth().currentUser;
        var uid = currentUser.uid;
        firebase.database().ref('users/' + uid).once('value')
            .then(function (snapshot) {
            console.log();
            if (!snapshot.val())
                firebase.database().ref('users/' + uid).set({
                    uid: uid,
                    name: currentUser.displayName,
                    photo: currentUser.photoURL
                });
        });
    };
    FireService.prototype.createUserWithEmailAndPassword = function (email, password, name) {
        var _this = this;
        console.log('name create user: ', name);
        var promise = new Promise(function (resolve, reject) {
            _this.af.auth.createUser({ email: email, password: password })
                .then(function (user) {
                user.auth.updateProfile({
                    displayName: name,
                    photoURL: ''
                })
                    .then(function (userCreated) {
                    console.log(userCreated);
                    resolve(userCreated);
                });
            });
        });
        return promise;
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