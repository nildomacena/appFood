var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { UserService } from './../../services/user-service';
import { User } from './../../model/user';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { HomePage } from "../home/home";
import { FireService } from '../../services/fire-service';
export var LoginPage = (function () {
    function LoginPage(nav, fire, events, userService) {
        var _this = this;
        this.nav = nav;
        this.fire = fire;
        this.events = events;
        this.userService = userService;
        this.user = new User();
        this.events.subscribe('user:registered', function (user) {
            _this.user = user[0];
            _this.nav.setRoot(HomePage);
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.logged = function () {
    };
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(RegisterPage);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        alert('Usuário ou senha inválidos');
    };
    LoginPage.prototype.loginWithGoogle = function () {
        this.fire.loginWithGoogle();
    };
    LoginPage.prototype.loginWithFacebook = function () {
        this.fire.loginWithFacebook();
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/login/login.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="auth-bg">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo primary-bg">\n        <ion-icon name="md-restaurant" color="light"></ion-icon>\n      </div>\n      <h2 color="light">\n        Ionic 2 Restaurant\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <ion-list class="list-form" padding>\n\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <p text-right color="light">Forgot Password?</p>\n\n    <div>\n      <button ion-button block color="light-blue" (click)="logged()">\n        SIGN IN\n      </button>\n\n      <p text-center color="light">Or</p>\n\n      <button ion-button icon-left block color="google-color" (click)="loginWithGoogle()" >\n        <ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon> \n         Sign in with Google\n      </button>\n      \n      <button ion-button icon-left block color="fb-color" (click)="loginWithFacebook()">\n        <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon> \n        Sign in with Facebook\n      </button>\n    </div>\n\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span color="light" (click)="register()">New here? Sign up</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/login/login.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, FireService, Events, UserService])
    ], LoginPage);
    return LoginPage;
}());
//# sourceMappingURL=login.js.map