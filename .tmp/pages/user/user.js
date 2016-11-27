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
    UserPage = __decorate([
        Component({
            selector: 'page-user',template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/user/user.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>User</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <!-- Cover and profile picture -->\n  <div class="profile-cover">\n    <ion-grid>\n      <ion-row>\n        <ion-col width-33 text-center>\n          <img class="profile-picture circle" [src]="user.imageUrl">\n        </ion-col>\n        <ion-col width-66>\n          <h4 padding no-margin color="light">{{user.displayName}}</h4>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- User information -->\n  <ion-list class="list-full-border">\n\n    <ion-item>\n      <ion-label stacked color="primary">Name</ion-label>\n      <ion-input type="text" [value]="user.displayName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Phone</ion-label>\n      <ion-input type="text" value="+849123456789"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Email</ion-label>\n      <ion-input type="text" [value]="user.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Password</ion-label>\n      <ion-input type="password" value="123456"></ion-input>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<!--bottom buttons-->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row class="item-button-group" no-padding>\n      <ion-col no-padding>\n        <button ion-button block color="gray">\n          Cancel\n        </button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button block>\n          Save\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/user/user.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, Events, UserService])
    ], UserPage);
    return UserPage;
}());
//# sourceMappingURL=user.js.map