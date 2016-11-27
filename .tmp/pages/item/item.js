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
import { NavController, AlertController } from 'ionic-angular';
import { ItemService } from '../../services/item-service';
import { CartPage } from "../cart/cart";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var ItemPage = (function () {
    function ItemPage(nav, itemService, alertController) {
        this.nav = nav;
        this.itemService = itemService;
        this.alertController = alertController;
        // get sample data for item
        this.item = itemService.getItem(1);
    }
    // toggle favorite
    ItemPage.prototype.toggleFav = function (item) {
        item.faved = !item.faved;
    };
    // add item to cart
    ItemPage.prototype.addCart = function () {
        var _this = this;
        var prompt = this.alertController.create({
            title: 'Quanity',
            message: "",
            inputs: [
                {
                    name: 'quantity',
                    value: '1'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                        // go to cart
                        _this.nav.setRoot(CartPage);
                    }
                }
            ]
        });
        prompt.present();
    };
    ItemPage = __decorate([
        Component({
            selector: 'page-item',template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/item/item.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Item cover -->\n  <div class="cover">\n    <ion-slides pager>\n      <ion-slide *ngFor="let img of item.images">\n        <img class="full-image" src="{{ img }}" alt=""/>\n      </ion-slide>\n    </ion-slides>\n\n    <div class="overlay">\n      <span class="pull-left" color="light">\n        {{ item.description }}\n      </span>\n\n      <span class="pull-right price" color="light">\n        ${{ item.price }}\n      </span>\n    </div>\n  </div>\n\n  <!-- Buttons -->\n  <ion-grid no-padding>\n    <ion-row class="item-button-group" no-padding>\n      <ion-col no-padding>\n        <button ion-button block (click)="toggleFav(item)" color="gray">\n          <ion-icon class="text-2x" name="ios-star" [hidden]="!item.faved"></ion-icon>\n          <ion-icon class="text-2x" name="ios-star-outline" [hidden]="item.faved"></ion-icon>\n          <span class="text-sm">Adicionar aos favoritos</span>\n        </button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button block (click)="addCart()">\n          <ion-icon class="text-2x" name="ios-cart-outline"></ion-icon>\n          <span class="text-sm">Adicionar ao carrinho</span>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list class="list-full-border" no-margin>\n    <ion-item-divider>Options</ion-item-divider>\n    <ion-item *ngFor="let option of item.options">\n      <ion-label>{{ option.name }}</ion-label>\n      <ion-checkbox color="primary"></ion-checkbox>\n    </ion-item>\n\n    <ion-item-divider>Extras</ion-item-divider>\n    <ion-item *ngFor="let extra of item.extras">\n      <ion-label>{{ extra.name }}: ${{ extra.price }}</ion-label>\n      <ion-checkbox color="primary"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="list-full-border" no-margin radio-group>\n    <ion-item-divider>Sizes</ion-item-divider>\n    <ion-item *ngFor="let size of item.sizes">\n      <ion-label>{{ size.name }}: ${{ size.price }}</ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/item/item.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, ItemService, AlertController])
    ], ItemPage);
    return ItemPage;
}());
//# sourceMappingURL=item.js.map