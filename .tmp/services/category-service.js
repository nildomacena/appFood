var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    CategoryService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], CategoryService);
    return CategoryService;
}());
//# sourceMappingURL=category-service.js.map