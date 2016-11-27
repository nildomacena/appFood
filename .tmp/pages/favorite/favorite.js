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
import { CartPage } from "../cart/cart";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var FavoritePage = (function () {
    function FavoritePage(nav, itemService) {
        this.nav = nav;
        this.itemService = itemService;
        // get all items
        this.items = itemService.getAll();
    }
    // view item detail
    FavoritePage.prototype.viewItem = function (id) {
        this.nav.push(ItemPage, { id: id });
    };
    // remove item from cart
    FavoritePage.prototype.remove = function (index) {
        this.items.splice(index, 1);
    };
    // add to cart
    FavoritePage.prototype.addCart = function (item) {
        this.nav.push(CartPage);
    };
    FavoritePage = __decorate([
        Component({
            selector: 'page-favorite',template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/favorite/favorite.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favorite</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="favorite gray-bg">\n  <ion-list class="list-full-border">\n\n    <ion-item-sliding class="card" *ngFor="let item of items; let i = index" margin-bottom>\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img src="{{ item.thumb }}" alt=""/>\n        </ion-thumbnail>\n        <h2>{{ item.name }}</h2>\n        <div>\n          <h2 class="price pull-left">\n            <span color="primary">${{ item.price }}</span>\n          </h2>\n          <button ion-button color="primary" class="button-cart pull-right" (click)="addCart(item)">\n            <ion-icon name="cart"></ion-icon>\n          </button>\n          <div class="clear"></div>\n        </div>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button (click)="remove(i)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/favorite/favorite.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, ItemService])
    ], FavoritePage);
    return FavoritePage;
}());
//# sourceMappingURL=favorite.js.map