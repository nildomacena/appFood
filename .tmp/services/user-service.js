var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    UserService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Events, FireService])
    ], UserService);
    return UserService;
}());
//# sourceMappingURL=user-service.js.map