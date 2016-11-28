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
                                    this.fetchProviders(providers[0])
                                        .then(credentialReturned => {
                                            console.log('credentialReturned: ',credentialReturned)
                                            firebase.auth().signInWithCredential(credentialReturned)
                                                .then(userLogged => {
                                                    userLogged.link(pendingCred);
                                                    this.events.publish('user:created',firebase.auth().currentUser);
                                                })
                                                .catch(error => {
                                                    console.log('Erro após link: ',error);
                                                });
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
                firebase.auth().signInWithCredential(credential)
                    .then(data => {
                        this.events.publish('user:created',firebase.auth().currentUser);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            });
    }

    fetchProviders(provider): Promise<any> {
        
        if(provider === 'google.com'){
            let promise = new Promise((resolve, reject) => {
                GooglePlus.login({'webClientId': '157769908167-97grjmo237oa2s6p532fhm4vab2ano2q.apps.googleusercontent.com'})
                    .then(user => {
                        let credential = firebase.auth.GoogleAuthProvider.credential(user.idToken) 
                        console.log('credential let promise: ',credential);
                        resolve(credential);                    
                    })
            });
            return promise;            
        }

        if(provider === 'facebook.com'){
            Facebook.login(['user_friends', 'public_profile', 'email'])
                .then(userFacebook => {
                    let credential = firebase.auth.FacebookAuthProvider.credential(userFacebook.authResponse.accessToken);
                    console.log('credential no fetch: ', credential)
                    return Promise.resolve(credential);
                })
        }
    }

    getUserInfo():Promise<any>{
        let user = firebase.auth().currentUser;
        return Promise.resolve(user);
    }


    createUserWithEmailAndPassword(email:string, password: string): firebase.Promise<any> {
        
       return this.af.auth.createUser({email: email, password: password})
           
    }

    logout():firebase.Promise<any> {
        return firebase.auth().signOut();
    }
}