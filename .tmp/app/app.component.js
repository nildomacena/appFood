var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { User } from './../model/user';
import { FireService } from './../services/fire-service';
import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { CategoriesPage } from '../pages/categories/categories';
import { FavoritePage } from '../pages/favorite/favorite';
import { CartPage } from '../pages/cart/cart';
import { OfferPage } from '../pages/offer/offer';
import { UserPage } from '../pages/user/user';
import { SettingPage } from '../pages/setting/setting';
import { NewsPage } from '../pages/news/news';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { ChatsPage } from '../pages/chats/chats';
// end import pages
export var MyApp = (function () {
    function MyApp(platform, fire, events) {
        var _this = this;
        this.platform = platform;
        this.fire = fire;
        this.events = events;
        this.pages = [
            {
                title: 'Início',
                icon: 'ios-home-outline',
                count: 0,
                component: HomePage
            },
            {
                title: 'Categorias',
                icon: 'apps',
                count: 0,
                component: CategoriesPage
            },
            {
                title: 'Favoritos',
                icon: 'star-outline',
                count: 5,
                component: FavoritePage
            },
            {
                title: 'Carrinho',
                icon: 'ios-cart-outline',
                count: 2,
                component: CartPage
            },
            {
                title: 'Ofertas',
                icon: 'ios-pricetag-outline',
                count: 2,
                component: OfferPage
            },
            {
                title: 'Configurações',
                icon: 'ios-settings-outline',
                count: 0,
                component: SettingPage
            },
            {
                title: 'Novidades',
                icon: 'ios-paper-outline',
                count: 0,
                component: NewsPage
            },
            {
                title: 'Sobre',
                icon: 'ios-information-circle-outline',
                count: 0,
                component: AboutPage
            },
            {
                title: 'Ajuda',
                icon: 'ios-help-circle-outline',
                count: 0,
                component: ChatsPage
            },
            {
                title: 'Logout',
                icon: 'ios-exit-outline',
                count: 0,
                component: LoginPage
            },
        ];
        this.user = new User();
        this.rootPage = LoginPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            _this.events.subscribe('user:registered', function (user) {
                _this.user = user[0];
            });
        });
    }
    MyApp.prototype.ionViewDidLoad = function () {
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.fire.logout()
            .then(function (data) {
            _this.nav.setRoot(LoginPage);
        })
            .catch(function (error) {
            console.log('error logout: ', error);
        });
    };
    // view my profile
    MyApp.prototype.viewMyProfile = function () {
        this.nav.setRoot(UserPage);
    };
    MyApp = __decorate([
        Component({template:/*ion-inline-start:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-content class="menu-left">\n    <!-- User profile -->\n    <div text-center padding-top padding-bottom class="primary-bg menu-left">\n      <a menuClose (click)="viewMyProfile()">\n        <img class="profile-picture" [src]="user.imageUrl ">\n        <h4 color="light" >{{user.displayName}}</h4>\n      </a>\n    </div>\n\n    <ion-list class="list-full-border">\n      <button ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">\n        <ion-icon item-left name="{{ page.icon }}"></ion-icon>\n        {{ page.title }}\n        <ion-badge danger item-right *ngIf="page.count">{{ page.count }}</ion-badge>\n      </button>\n      \n      <button ion-item menuClose (click)="logout()" >\n        <ion-icon item-left name="ios-exit-outline"></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/jackson/Projetos/Ionic 2/MyMenu/src/app/app.html"*/,
            queries: {
                nav: new ViewChild('content')
            }
        }), 
        __metadata('design:paramtypes', [Platform, FireService, Events])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map