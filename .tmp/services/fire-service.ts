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
                        console.log('signInWithProvider result: ', data)
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
                                    if(providers[0] === 'google.com'){
                                        this.fetchGoogleAndFacebook()
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
                                            })
                                    }
                                })
                        }

                    })
            })
    }

    loginWithGoogle() {
        console.log('loginWithGoogle');
        console.log('currentUser: ', firebase.auth().currentUser)
        GooglePlus.login({'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com'})
        .then(user => {
            let provider = firebase.auth.GoogleAuthProvider.credential(user.idToken);
            firebase.auth().signInWithCredential(provider)
                .then(data => {
                    this.events.publish('user:created',firebase.auth().currentUser);
                    return Promise.resolve(user);
                })
                .catch(error => {
                    let pendingCred = error['credential'];
                    let email = error['email'];
                    if(error['code'] === 'auth/account-exists-with-different-credential'){
                            firebase.auth().fetchProvidersForEmail(email)
                                .then(providers => {
                                    console.log('providers: ',providers);
                                    if(providers[0] === 'facebook.com'){
                                        firebase.auth().signInWithCredential(pendingCred)
                                    }
                                })
                    }
                })
        })   
    }

    fetchGoogleAndFacebook():firebase.Promise<any> {
       return GooglePlus.login({'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com'})
    }

    getUserInfo():Promise<any>{
        let user = firebase.auth().currentUser;
        return Promise.resolve(user);
    }

    logout():firebase.Promise<any> {
        return firebase.auth().signOut();
    }
}