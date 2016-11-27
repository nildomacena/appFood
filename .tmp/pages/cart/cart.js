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
import { CartService } from '../../services/cart-service';
import { CheckoutPage } from "../checkout/checkout";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var CartPage = (function () {
    function CartPage(nav, cartService) {
        this.nav = nav;
        this.cartService = cartService;
        // set sample data
        this.cart = cartService.getAll();
    }
    // plus quantity
    CartPage.prototype.plusQty = function (item) {
        item.quantity++;
    };
    // minus quantity
    CartPage.prototype.minusQty = function (item) {
        if (item.quantity > 1)
            item.quantity--;
    };
    // remove item from cart
    CartPage.prototype.remove = function (index) {
        this.cart.items.splice(index, 1);
    };
    // click buy button
    CartPage.prototype.buy = function () {
        this.nav.push(CheckoutPage);
    };
    CartPage = __decorate([
        Component({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/cart/cart.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cart</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="cart gray-bg">\n  <ion-list class="list-no-border">\n\n    <ion-item-sliding class="card" *ngFor="let item of cart.items; let i = index" margin-top>\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img src="{{ item.thumb }}" alt=""/>\n        </ion-thumbnail>\n        <h2>{{ item.name }}</h2>\n        <div>\n          <h2 class="price pull-left">\n            <span color="primary">${{ item.price }}</span>\n            <span>x {{ item.quantity }}</span>\n          </h2>\n          <button ion-button color="primary" class="button-qty pull-right" (click)="plusQty(item)">\n            <ion-icon name="add"></ion-icon>\n          </button>\n          <button ion-button color="primary" class="button-qty pull-right" (click)="minusQty(item)">\n            <ion-icon name="remove"></ion-icon>\n          </button>\n        </div>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button (click)="remove(i)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n\n<!--Footer button-->\n<ion-footer class="cart-footer">\n  <ion-title>\n    <span color="dark">Total</span>\n    <br/>\n    <span class="bold" color="danger">${{ cart.total }}</span>\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button (click)="buy()" color="danger">\n      BUY ALL\n    </button>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/cart/cart.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, CartService])
    ], CartPage);
    return CartPage;
}());
//# sourceMappingURL=cart.js.map