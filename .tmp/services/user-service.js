import { FireService } from './fire-service';
import { Events } from 'ionic-angular';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
export var UserService = (function () {
    function UserService(events, fire) {
        var _this = this;
        this.events = events;
        this.fire = fire;
        this.user = new User();
        console.log('UserService');
        this.fire.isLoggedIn();
        this.events.subscribe('user:created', function () {
            _this.fire.getUserInfo()
                .then(function (snapshot) {
                var userLogged = snapshot.val();
                console.log('snapshot.val(): ', snapshot.val());
                if (userLogged) {
                    _this.user.displayName = userLogged.name;
                    _this.user.email = userLogged.email;
                    _this.user.imageUrl = userLogged.photo;
                    _this.events.publish('user:registered', _this.user);
                }
            });
        });
    }
    UserService.prototype.getUserData = function () {
        return this.user;
    };
    UserService.prototype.createUser = function (email, password, name) {
        return this.fire.createUserWithEmailAndPassword(email, password, name);
    };
    UserService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserService.ctorParameters = [
        { type: Events, },
        { type: FireService, },
    ];
    return UserService;
}());
//# sourceMappingURL=user-service.js.map