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
    FavoritePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-favorite',
                    templateUrl: 'favorite.html'
                },] },
    ];
    /** @nocollapse */
    FavoritePage.ctorParameters = [
        { type: NavController, },
        { type: ItemService, },
    ];
    return FavoritePage;
}());
//# sourceMappingURL=favorite.js.map