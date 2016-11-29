import { UserService } from './../../services/user-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";
export var RegisterPage = (function () {
    function RegisterPage(nav, userService) {
        this.nav = nav;
        this.userService = userService;
    }
    // register and go to home page
    RegisterPage.prototype.register = function (email, password, name) {
        var _this = this;
        console.log('email: ', email, '\npassword: ', password);
        this.userService.createUser(email, password, name)
            .then(function (data) {
            console.log('Resultado createUser: ', data);
            _this.nav.setRoot(HomePage);
        })
            .catch(function (error) {
            console.log('error create user: ', error);
        });
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
        { type: UserService, },
    ];
    return RegisterPage;
}());
//# sourceMappingURL=register.js.map