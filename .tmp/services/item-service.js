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
    ItemService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], ItemService);
    return ItemService;
}());
//# sourceMappingURL=item-service.js.map