import { Events } from 'ionic-angular';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
export var UserService = (function () {
    function UserService(events) {
        var _this = this;
        this.events = events;
        this.user = new User();
        console.log('userService');
        this.events.subscribe('user:created', function (currentUser) {
            console.log('currentUser', currentUser[0]);
            _this.user.imageUrl = currentUser[0].photoURL;
            _this.user.email = currentUser[0].email;
            _this.user.displayName = currentUser[0].displayName;
            _this.events.publish('user:registered', _this.user);
        });
    }
    UserService.prototype.getUserData = function () {
    };
    UserService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserService.ctorParameters = [
        { type: Events, },
    ];
    return UserService;
}());
//# sourceMappingURL=user-service.js.map