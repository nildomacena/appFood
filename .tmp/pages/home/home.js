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
        this.fire.getUserInfo().then(function (user) { return console.log('getUserInfo: ', user); });
    };
    // view a category
    HomePage.prototype.viewCategory = function (categoryId) {
        this.nav.push(CategoryPage, { id: categoryId });
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: MenuService, },
        { type: NavParams, },
        { type: FireService, },
    ];
    return HomePage;
}());
//# sourceMappingURL=home.js.map