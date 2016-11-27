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
import { ItemService } from '../../services/item-service';
import { ItemPage } from "../item/item";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var OfferPage = (function () {
    function OfferPage(nav, itemService) {
        this.nav = nav;
        this.itemService = itemService;
        // get all items
        this.items = itemService.getAll();
    }
    // view item detail
    OfferPage.prototype.viewItem = function (id) {
        this.nav.push(ItemPage, { id: id });
    };
    // add cart
    OfferPage.prototype.addCart = function () {
        // add your code here
    };
    OfferPage = __decorate([
        Component({
            selector: 'page-offer',template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/offer/offer.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Offer</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class=" gray-bg">\n  <ion-slides pager>\n    <ion-slide *ngFor="let item of items">\n      <div class="card rlt light-bg" (click)="viewItem(item.id)">\n        <img class="full-image" src="{{ item.thumb }}" alt=""/>\n\n        <div class="card-bottom" padding>\n            <span class="pull-left">\n              {{ item.name }}\n            </span>\n\n          <span class="pull-right price" color="primary">\n              ${{ item.price }}\n            </span>\n\n          <div class="clear"></div>\n        </div>\n\n        <div class="offer-label">\n          <span class="square" text-center color="light">{{ item.offer }}%</span>\n          <i class="triangle"></i>\n        </div>\n      </div>\n\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n<!--Footer button-->\n<ion-footer class="offer-footer">\n  <ion-grid no-padding>\n    <ion-row class="item-button-group" no-padding>\n      <ion-col no-padding>\n        <button ion-button block color="gray">\n          <ion-icon class="text-2x" name="ios-star"></ion-icon>\n          <span class="text-sm">ADD TO FAVORITE</span>\n        </button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button block (click)="addCart()">\n          <ion-icon class="text-2x" name="ios-cart-outline"></ion-icon>\n          <span class="text-sm">ADD TO CART</span>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/offer/offer.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, ItemService])
    ], OfferPage);
    return OfferPage;
}());
//# sourceMappingURL=offer.js.map