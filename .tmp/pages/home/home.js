var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { FireService } from './../../services/fire-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuService } from '../../services/menu-service';
import { CategoryPage } from "../category/category";
export var HomePage = (function () {
    function HomePage(nav, menuService, params, fire) {
        this.nav = nav;
        this.menuService = menuService;
        this.params = params;
        this.fire = fire;
        // slides for slider
        this.slides = [
            "assets/img/categories/fruit.jpg",
            "assets/img/categories/pizza.jpg",
            "assets/img/categories/sushi.jpg"
        ];
        // set data for categories
        this.categories = menuService.getAll();
        this.user = this.params.get('user');
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    // view a category
    HomePage.prototype.viewCategory = function (categoryId) {
        this.nav.push(CategoryPage, { id: categoryId });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/home/home.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <!--slider-->\n  <ion-slides auto-play="2000" pager>\n    <ion-slide *ngFor="let img of slides">\n      <img class="full-image" src="{{ img }}" alt=""/>\n    </ion-slide>\n  </ion-slides>\n\n  <!--list of categories-->\n  <h3 text-center>Restaurante blablablá</h3>\n\n  <div class="list-items">\n    <div class="item-menu" *ngFor="let category of categories" (click)="viewCategory(category.id)">\n\n      <img src="{{ category.thumb }}" alt="{{ category.name }}"/>\n\n      <div class="overlay">\n\n        <span class="pull-left" color="light">\n          {{ category.name }}\n        </span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/pages/home/home.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, MenuService, NavParams, FireService])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map