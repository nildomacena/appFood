var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var SettingPage = (function () {
    function SettingPage(nav) {
        this.nav = nav;
    }
    SettingPage = __decorate([
        Component({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/setting/setting.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Setting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <!-- Cover and profile picture -->\n  <div class="profile-cover">\n    <ion-grid>\n      <ion-row>\n        <ion-col width-33 text-center>\n          <img class="profile-picture circle" src="assets/img/people/max.png">\n        </ion-col>\n        <ion-col width-66>\n          <h4 padding no-margin color="light">Adam Lambert</h4>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- User settings -->\n  <ion-list class="list-full-border">\n\n    <ion-item>\n      <ion-label color="primary">Notification</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Credit card #No</ion-label>\n      <ion-input type="text" value="XXXX XXXX XXXX 4678"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Expires</ion-label>\n      <ion-input type="text" value="08/16"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">CVV-Code</ion-label>\n      <ion-input type="text" value="3013"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Address</ion-label>\n      <ion-input type="text" value="St Luiz, Barcelona"></ion-input>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<!--bottom buttons-->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row class="item-button-group" no-padding>\n      <ion-col no-padding>\n        <button ion-button block color="gray">\n          Cancel\n        </button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button block>\n          Save\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/setting/setting.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], SettingPage);
    return SettingPage;
}());
//# sourceMappingURL=setting.js.map