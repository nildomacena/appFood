import { Injectable } from "@angular/core";
import { CART } from "./mock-cart";
export var CartService = (function () {
    function CartService() {
        this.cart = CART;
    }
    CartService.prototype.getAll = function () {
        return this.cart;
    };
    CartService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CartService.ctorParameters = [];
    return CartService;
}());
//# sourceMappingURL=cart-service.js.map