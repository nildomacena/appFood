import { Injectable } from "@angular/core";
import { CATEGORIES } from "./mock-categories";
export var CategoryService = (function () {
    function CategoryService() {
        this.categories = CATEGORIES;
    }
    CategoryService.prototype.getAll = function () {
        return this.categories;
    };
    CategoryService.prototype.getItem = function (id) {
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === parseInt(id)) {
                return this.categories[i];
            }
        }
        return null;
    };
    CategoryService.prototype.remove = function (item) {
        this.categories.splice(this.categories.indexOf(item), 1);
    };
    CategoryService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CategoryService.ctorParameters = [];
    return CategoryService;
}());
//# sourceMappingURL=category-service.js.map