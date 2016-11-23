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
    // view my profile
    MyApp.prototype.viewMyProfile = function () {
        this.nav.setRoot(UserPage);
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html',
                    queries: {
                        nav: new ViewChild('content')
                    }
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
        { type: FireService, },
        { type: Events, },
    ];
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map