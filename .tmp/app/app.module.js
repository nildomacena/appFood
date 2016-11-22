import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
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
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
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
                        IonicModule.forRoot(MyApp)
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
                        FireService
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map