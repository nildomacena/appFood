import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var RegisterPage = (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        this.nav.setRoot(HomePage);
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(LoginPage);
    };
    RegisterPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-register',
                    templateUrl: 'register.html'
                },] },
    ];
    /** @nocollapse */
    RegisterPage.ctorParameters = [
        { type: NavController, },
    ];
    return RegisterPage;
}());
//# sourceMappingURL=register.js.map