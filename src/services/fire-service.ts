import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { GooglePlus, Facebook } from 'ionic-native';
import { AngularFire } from 'angularfire2';

@Injectable()

export class FireService {
    user: any;
    auth: any = firebase.auth;
    constructor(public events: Events, public af: AngularFire){
        firebase.auth().onAuthStateChanged(user =>{
            if (user){
                console.log('User logged (onAuthStateChanged)');
                this.events.publish('user:created', firebase.auth().currentUser)
            }
            else    
                console.log('User not logged (onAuthStateChanged)');
        })
    }

    getUser():any{
        return this.user;
    }

    isLoggedIn(){
        if (firebase.auth().currentUser)
            this.events.publish('user:created', firebase.auth().currentUser)

    }

    loginWithFacebook(){
        Facebook.login(['user_friends', 'public_profile', 'email'])
            .then(userFacebook => {
                console.log('userFacebook: ',userFacebook);
                let credential = firebase.auth.FacebookAuthProvider.credential(userFacebook.authResponse.accessToken);
                firebase.auth().signInWithCredential(credential)
                    .then(data => {
                        console.log('signInWithProvider result: ', data);
                        this.events.publish('user:created',firebase.auth().currentUser);
                    })
                    .catch(error => {
                        console.log('error: ',error);
                        let pendingCred = error['credential'];
                        let email = error['email'];
                        console.log('Email do erro: ', email);
                        console.log('Credencial do erro: ',pendingCred);
                        if(error['code'] === 'auth/account-exists-with-different-credential'){
                            firebase.auth().fetchProvidersForEmail(email)
                                .then(providers => {
                                    this.fetchGoogleAndFacebook(providers[0])
                                        .then(user => {
                                            let provider = firebase.auth.GoogleAuthProvider.credential(user.idToken);
                                            firebase.auth().signInWithCredential(provider)
                                                .then(userLogged => {
                                                    console.log('pending cred');
                                                    userLogged.link(pendingCred);
                                                    this.events.publish('user:created',firebase.auth().currentUser);
                                                })
                                                .catch(error => {
                                                    console.log('erro após o signInWithCredential: ', error);
                                                })
                                        })
                                        .catch(error => {
                                            console.log('erro após o fetchGoogleAndFacebook: ', error);
                                        });
                                })
                        }

                    })
            })
    }

    loginWithGoogle() {
        GooglePlus.login({'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com'})
        .then(user => {
            let credential = firebase.auth.GoogleAuthProvider.credential(user.idToken);
            console.log('User depois GooglePlus.login: ',user)
            firebase.auth().fetchProvidersForEmail(user.email)
                .then(providers => {
                    if(providers[0]==='facebook.com'){
                        console.log('Tem providers para esse email')
                        this.fetchGoogleAndFacebook(providers[0])
                            .then(user => {
                                console.log('user fetchGoogleAndFacebook: ',user)
                                let provider = firebase.auth.FacebookAuthProvider.credential(user.authResponse.accessToken);
                                firebase.auth().signInWithCredential(provider)
                                    .then(userLogged => {
                                        console.log('pending cred');
                                        userLogged.link(credential);
                                        this.events.publish('user:created',firebase.auth().currentUser);
                                    })
                                    .catch(error => {
                                        console.log('erro após o signInWithCredential: ', error);
                                    })
                            })
                            .catch(error => {
                                console.log('erro após o fetchGoogleAndFacebook: ', error);
                            });
                    }

                    else{
                        console.log('Não tem providers para esse email')
                        firebase.auth().signInWithCredential(credential)
                            .then(data => {
                                this.events.publish('user:created',firebase.auth().currentUser);
                                return Promise.resolve(user);
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    }


                })
        })   
    }

    fetchGoogleAndFacebook(provider):firebase.Promise<any> {
        if(provider === 'google.com')
            return GooglePlus.login({'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com'})
        if(provider === 'facebook.com')
            return Facebook.login(['user_friends', 'public_profile', 'email'])
    }

    getUserInfo():Promise<any>{
        let user = firebase.auth().currentUser;
        return Promise.resolve(user);
    }

    logout():firebase.Promise<any> {
        return firebase.auth().signOut();
    }
}