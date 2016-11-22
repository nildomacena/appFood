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
    CategoryPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-category',
                    templateUrl: 'category.html'
                },] },
    ];
    /** @nocollapse */
    CategoryPage.ctorParameters = [
        { type: NavController, },
        { type: CategoryService, },
    ];
    return CategoryPage;
}());
//# sourceMappingURL=category.js.map