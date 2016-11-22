import { FireService } from './../../services/fire-service';
import { User } from './../../model/user';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
export var UserPage = (function () {
    function UserPage(nav, events, fire) {
        this.nav = nav;
        this.events = events;
        this.fire = fire;
        this.user = new User();
        var userData = this.fire.getUser();
        console.log(userData);
        this.user.userName = userData.displayName;
        this.user.userImageUrl = userData.imageUrl;
        this.user.email = userData.email;
        console.log('this.user: ', this.user);
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
        { type: FireService, },
    ];
    return UserPage;
}());
//# sourceMappingURL=user.js.map