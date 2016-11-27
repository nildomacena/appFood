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
import { CategoryPage } from "../category/category";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var CategoriesPage = (function () {
    function CategoriesPage(nav, categoryService) {
        this.nav = nav;
        this.categoryService = categoryService;
        // set sample data
        this.categories = categoryService.getAll();
    }
    // view a category
    CategoriesPage.prototype.viewCategory = function (categoryId) {
        this.nav.push(CategoryPage, { id: categoryId });
    };
    CategoriesPage = __decorate([
        Component({
            selector: 'page-categories',template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/categories/categories.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Categories</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="list-items">\n    <div class="item-menu" *ngFor="let category of categories" (click)="viewCategory(category.id)">\n\n      <img src="{{ category.thumb }}" alt="{{ category.name }}"/>\n\n      <div class="overlay">\n\n          <span class="pull-left" color="light">\n            {{ category.name }}\n          </span>\n\n        <span class="pull-right" color="light">\n            {{ category.items.length }}\n          </span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/categories/categories.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, CategoryService])
    ], CategoriesPage);
    return CategoriesPage;
}());
//# sourceMappingURL=categories.js.map