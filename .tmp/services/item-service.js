import { Injectable } from "@angular/core";
import { ITEMS } from "./mock-items";
export var ItemService = (function () {
    function ItemService() {
        this.items = ITEMS;
    }
    ItemService.prototype.getAll = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === parseInt(id)) {
                return this.items[i];
            }
        }
        return null;
    };
    ItemService.prototype.remove = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    ItemService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ItemService.ctorParameters = [];
    return ItemService;
}());
//# sourceMappingURL=item-service.js.map