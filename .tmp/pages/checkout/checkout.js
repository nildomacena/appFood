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
    CheckoutPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-checkout',
                    templateUrl: 'checkout.html'
                },] },
    ];
    /** @nocollapse */
    CheckoutPage.ctorParameters = [
        { type: NavController, },
        { type: AlertController, },
    ];
    return CheckoutPage;
}());
//# sourceMappingURL=checkout.js.map