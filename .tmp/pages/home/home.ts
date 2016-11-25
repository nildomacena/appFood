import { FireService } from './../../services/fire-service';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {MenuService} from '../../services/menu-service';
import {CategoryPage} from "../category/category";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // slides for slider
  public slides = [
    "assets/img/categories/fruit.jpg",
    "assets/img/categories/pizza.jpg",
    "assets/img/categories/sushi.jpg"
  ];

  // list of categories
  public categories: any;
  user:any;
  constructor(public nav: NavController, public menuService: MenuService, public params: NavParams, public fire: FireService) {
    // set data for categories
    this.categories = menuService.getAll();
    this.user = this.params.get('user');
  }

  ionViewDidLoad(){
  }
  // view a category
  viewCategory(categoryId) {
    this.nav.push(CategoryPage, {id: categoryId});
  }
}
