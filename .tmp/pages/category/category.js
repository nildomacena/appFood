var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryService } from '../../services/category-service';
import { ItemPage } from "../item/item";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var CategoryPage = (function () {
    function CategoryPage(nav, categoryService) {
        this.nav = nav;
        this.categoryService = categoryService;
        // get first category as sample data
        this.category = categoryService.getItem(1);
    }
    // view item detail
    CategoryPage.prototype.viewItem = function (id) {
        this.nav.push(ItemPage, { id: id });
    };
    CategoryPage = __decorate([
        Component({
            selector: 'page-category',template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/category/category.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ category.name }}</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="list-items">\n    <div class="item-menu" *ngFor="let item of category.items" (click)="viewItem(item.id)">\n\n      <img src="{{ item.thumb }}" alt="{{ item.name }}"/>\n\n      <div class="overlay">\n\n        <span class="pull-left" color="light">\n          {{ item.name }}\n        </span>\n\n        <span class="pull-right" color="light">\n          ${{ item.price }}\n        </span>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/category/category.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, CategoryService])
    ], CategoryPage);
    return CategoryPage;
}());
//# sourceMappingURL=category.js.map