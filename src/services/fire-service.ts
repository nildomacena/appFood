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
                this.events.publish('user:created')
            }
            else{
                console.log('User not logged (onAuthStateChanged)');
            }
        });
    }

    getUser():any{
        return this.user;
    }

    isLoggedIn(){
        if (firebase.auth().currentUser)
            this.events.publish('user:created')

    }

    loginWithFacebook(){
        Facebook.login(['user_friends', 'public_profile', 'email'])
            .then(userFacebook => {
                let credential = firebase.auth.FacebookAuthProvider.credential(userFacebook.authResponse.accessToken);
                firebase.auth().signInWithCredential(credential)
                    .then(data => {
                        this.saveUserInfo()
                            .then(retorno => {
                                if(retorno)
                                    this.events.publish('user:created');
                            })
                    })
                    .catch(error => {
                        let pendingCred = error['credential'];
                        let email = error['email'];
                        if(error['code'] === 'auth/account-exists-with-different-credential'){
                            firebase.auth().fetchProvidersForEmail(email)
                                .then(providers => {
                                    this.fetchProviders(providers[0])
                                        .then(credentialReturned => {
                                            firebase.auth().signInWithCredential(credentialReturned)
                                                .then(userLogged => {
                                                    userLogged.link(pendingCred);
                                                    this.saveUserInfo();
                                                    this.events.publish('user:created');
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
                        this.saveUserInfo()
                            .then(retorno => {
                                console.log('dataSaveUserInfo(): ', retorno);
                                this.events.publish('user:created');

                            })
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
                    return Promise.resolve(credential);
                })
        }
    }

    getUserInfo():firebase.Promise<any>{
        let currentUser = firebase.auth().currentUser; 
        let uid = currentUser.uid;
        return firebase.database().ref('users/'+uid).once('value')
    }

    saveUserInfo():Promise<any> {
        let currentUser = firebase.auth().currentUser; 
        let uid = currentUser.uid;
        let promise: Promise<any>; 
        promise = new Promise((resolve, reject)=>{
            firebase.database().ref('users/'+uid).once('value')
                .then(snapshot => {
                    console.log('saveUserInfo snapshot: ',snapshot.val())
                    if(!snapshot.val()){
                        console.log('Não tem usuário cadastrado');
                        firebase.database().ref('users/'+uid).set({
                            uid: uid,
                            name: currentUser.displayName,
                            photo: currentUser.photoURL,
                            email: currentUser.email 
                        })
                        .then(data => {
                            resolve(true);
                        })
                    }
                })
        })
        return promise;
    }
    createUserWithEmailAndPassword(email:string, password: string, name: string): Promise<any> {
        console.log('name create user: ',name)
        let promise = new Promise((resolve, reject) => { 
            this.af.auth.createUser({email: email, password: password})
                .then(user => {
                    user.auth.updateProfile({
                        displayName: name,
                        photoURL: ''
                    }) 
                    .then(userCreated => { 
                        console.log(userCreated);
                        resolve(userCreated);
                    })  
                })
        });

        return promise;
           
    }

    logout():firebase.Promise<any> {
        return firebase.auth().signOut();
    }
}