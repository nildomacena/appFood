import { UserService } from './../../services/user-service';
import { User } from './../../model/user';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { HomePage } from "../home/home";
export var LoginPage = (function () {
    function LoginPage(nav, events, userService) {
        var _this = this;
        this.nav = nav;
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
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(RegisterPage);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        alert('Usuário ou senha inválidos');
    };
    LoginPage.prototype.loginWithGoogle = function () {
        this.userService.loginWithGoogle();
    };
    LoginPage.prototype.loginWithFacebook = function () {
        this.userService.loginWithFacebook();
    };
    LoginPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-login',
                    templateUrl: 'login.html'
                },] },
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = [
        { type: NavController, },
        { type: Events, },
        { type: UserService, },
    ];
    return LoginPage;
}());
//# sourceMappingURL=login.js.map