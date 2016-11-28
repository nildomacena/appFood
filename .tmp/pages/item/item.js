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
    ItemPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-item',
                    templateUrl: 'item.html'
                },] },
    ];
    /** @nocollapse */
    ItemPage.ctorParameters = [
        { type: NavController, },
        { type: ItemService, },
        { type: AlertController, },
    ];
    return ItemPage;
}());
//# sourceMappingURL=item.js.map