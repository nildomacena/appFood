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
    OfferPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-offer',
                    templateUrl: 'offer.html'
                },] },
    ];
    /** @nocollapse */
    OfferPage.ctorParameters = [
        { type: NavController, },
        { type: ItemService, },
    ];
    return OfferPage;
}());
//# sourceMappingURL=offer.js.map