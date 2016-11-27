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
import { HomePage } from "../home/home";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var CheckoutPage = (function () {
    function CheckoutPage(nav, alertController) {
        this.nav = nav;
        this.alertController = alertController;
    }
    // edit address
    CheckoutPage.prototype.editAddress = function () {
        var prompt = this.alertController.create({
            title: 'Address',
            message: "",
            inputs: [
                {
                    name: 'address',
                    value: ''
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
                    }
                }
            ]
        });
        prompt.present();
    };
    // place order button click
    CheckoutPage.prototype.buy = function () {
        var _this = this;
        // show alert
        var alert = this.alertController.create({
            title: 'Info',
            subTitle: 'Your order has been sent.',
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        // back to home page
                        _this.nav.setRoot(HomePage);
                    }
                }
            ]
        });
        alert.present();
    };
    CheckoutPage = __decorate([
        Component({
            selector: 'page-checkout',template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/checkout/checkout.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Checkout</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" gray-bg">\n\n  <!--select payment method-->\n  <div margin>Payment</div>\n  <ion-list class="list-full-border card" margin radio-group>\n\n    <ion-item>\n      <ion-label>\n        Credit card\n        <p class="text-hint">\n          XXXX XXXX XXXX 4678\n        </p>\n      </ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        Cash on delivery\n        <p class="text-hint">\n          Free\n        </p>\n      </ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n\n  </ion-list>\n\n  <!--shipping address-->\n  <div margin>\n    <span>Shipping address</span>\n    <ion-icon name="md-create" class="pull-right" (click)="editAddress()"></ion-icon>\n  </div>\n  <div class="card light-bg" margin-left margin-right padding>\n    No 01\n    <br/>\n    St Luiz, Barcelona\n    <br/>\n    Spain\n  </div>\n\n</ion-content>\n\n<!--Footer button-->\n<ion-footer class="cart-footer">\n  <ion-title>\n    <span color="dark">Total</span>\n    <br/>\n    <span class="bold" color="danger">$20</span>\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button (click)="buy()" color="danger">\n      PLACE ORDER\n    </button>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/checkout/checkout.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, AlertController])
    ], CheckoutPage);
    return CheckoutPage;
}());
//# sourceMappingURL=checkout.js.map