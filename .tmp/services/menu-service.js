import { Injectable } from "@angular/core";
import { MENU } from "./mock-menu";
export var MenuService = (function () {
    function MenuService() {
        this.menu = MENU;
    }
    MenuService.prototype.getAll = function () {
        return this.menu;
    };
    MenuService.prototype.getItem = function (id) {
        for (var i = 0; i < this.menu.length; i++) {
            if (this.menu[i].id === parseInt(id)) {
                return this.menu[i];
            }
        }
        return null;
    };
    MenuService.prototype.remove = function (item) {
        this.menu.splice(this.menu.indexOf(item), 1);
    };
    MenuService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MenuService.ctorParameters = [];
    return MenuService;
}());
//# sourceMappingURL=menu-service.js.map