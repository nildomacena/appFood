import { UserService } from './../../services/user-service';
import { User } from './../../model/user';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
export var UserPage = (function () {
    function UserPage(nav, events, userService) {
        this.nav = nav;
        this.events = events;
        this.userService = userService;
        this.user = new User();
        var userData = this.userService.getUserData();
        this.user.displayName = userData.displayName;
        this.user.imageUrl = userData.imageUrl;
        this.user.email = userData.email;
    }
    UserPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-user',
                    templateUrl: 'user.html'
                },] },
    ];
    /** @nocollapse */
    UserPage.ctorParameters = [
        { type: NavController, },
        { type: Events, },
        { type: UserService, },
    ];
    return UserPage;
}());
//# sourceMappingURL=user.js.map