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
    CartPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-cart',
                    templateUrl: 'cart.html'
                },] },
    ];
    /** @nocollapse */
    CartPage.ctorParameters = [
        { type: NavController, },
        { type: CartService, },
    ];
    return CartPage;
}());
//# sourceMappingURL=cart.js.map