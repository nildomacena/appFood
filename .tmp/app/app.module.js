var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { UserService } from './../services/user-service';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { MenuService } from '../services/menu-service';
import { CategoryService } from '../services/category-service';
import { ItemService } from '../services/item-service';
import { CartService } from '../services/cart-service';
import { PostService } from '../services/post-service';
import { ChatService } from '../services/chat-service';
import { FireService } from '../services/fire-service';
import { AboutPage } from '../pages/about/about';
import { AddressPage } from '../pages/address/address';
import { CartPage } from '../pages/cart/cart';
import { CategoriesPage } from '../pages/categories/categories';
import { CategoryPage } from '../pages/category/category';
import { ChatDetailPage } from '../pages/chat-detail/chat-detail';
import { ChatsPage } from '../pages/chats/chats';
import { CheckoutPage } from '../pages/checkout/checkout';
import { FavoritePage } from '../pages/favorite/favorite';
import { HomePage } from '../pages/home/home';
import { ItemPage } from '../pages/item/item';
import { LoginPage } from '../pages/login/login';
import { NewsPage } from '../pages/news/news';
import { OfferPage } from '../pages/offer/offer';
import { RegisterPage } from '../pages/register/register';
import { SettingPage } from '../pages/setting/setting';
import { UserPage } from '../pages/user/user';
// end import pages
var config = {
    apiKey: "AIzaSyANDjWZuEIbS9RZ38BLiNKpdCjO-co0XDc",
    authDomain: "appfood-150302.firebaseapp.com",
    databaseURL: "https://appfood-150302.firebaseio.com",
    storageBucket: "appfood-150302.appspot.com",
    messagingSenderId: "157769908167"
};
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                AboutPage,
                AddressPage,
                CartPage,
                CategoriesPage,
                CategoryPage,
                ChatDetailPage,
                ChatsPage,
                CheckoutPage,
                FavoritePage,
                HomePage,
                ItemPage,
                LoginPage,
                NewsPage,
                OfferPage,
                RegisterPage,
                SettingPage,
                UserPage
            ],
            imports: [
                IonicModule.forRoot(MyApp),
                AngularFireModule.initializeApp(config)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                AboutPage,
                AddressPage,
                CartPage,
                CategoriesPage,
                CategoryPage,
                ChatDetailPage,
                ChatsPage,
                CheckoutPage,
                FavoritePage,
                HomePage,
                ItemPage,
                LoginPage,
                NewsPage,
                OfferPage,
                RegisterPage,
                SettingPage,
                UserPage
            ],
            providers: [
                MenuService,
                CategoryService,
                ItemService,
                CartService,
                PostService,
                ChatService,
                FireService,
                UserService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map