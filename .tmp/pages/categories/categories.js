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
    CategoriesPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-categories',
                    templateUrl: 'categories.html'
                },] },
    ];
    /** @nocollapse */
    CategoriesPage.ctorParameters = [
        { type: NavController, },
        { type: CategoryService, },
    ];
    return CategoriesPage;
}());
//# sourceMappingURL=categories.js.map