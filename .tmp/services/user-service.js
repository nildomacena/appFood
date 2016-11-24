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
        this.events.subscribe('user:created', function (currentUser) {
            _this.user.imageUrl = currentUser[0].photoURL;
            _this.user.email = currentUser[0].email;
            _this.user.displayName = currentUser[0].displayName;
            _this.events.publish('user:registered', _this.user);
        });
    }
    UserService.prototype.getUserData = function () {
        return this.user;
    };
    UserService.prototype.isLoggedIn = function () {
        var _this = this;
        this.fire.isLoggedIn();
        this.events.subscribe('user:created', function (currentUser) {
            console.log('isLoggedin. Usuário criado');
            _this.user.imageUrl = currentUser[0].photoURL;
            _this.user.email = currentUser[0].email;
            _this.user.displayName = currentUser[0].displayName;
            _this.events.publish('user:registered', _this.user);
        });
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