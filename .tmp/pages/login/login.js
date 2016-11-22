import { User } from './../../model/user';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { HomePage } from "../home/home";
import { FireService } from '../../services/fire-service';
export var LoginPage = (function () {
    function LoginPage(nav, fire, events) {
        var _this = this;
        this.nav = nav;
        this.fire = fire;
        this.events = events;
        this.user = new User();
        this.events.subscribe('user:created', function (user) {
            _this.user = user[0];
            console.log('user no loginpage: ', _this.user);
            _this.nav.setRoot(HomePage);
        });
    }
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(RegisterPage);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(HomePage);
    };
    LoginPage.prototype.loginWithGoogle = function () {
        this.fire.loginWithGoogle();
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
        { type: FireService, },
        { type: Events, },
    ];
    return LoginPage;
}());
//# sourceMappingURL=login.js.map