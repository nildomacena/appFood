import { User } from './../model/user';
import { FireService } from './../services/fire-service';
import {Component} from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';

// import pages
import {HomePage} from '../pages/home/home';
import {CategoriesPage} from '../pages/categories/categories';
import {FavoritePage} from '../pages/favorite/favorite';
import {CartPage} from '../pages/cart/cart';
import {OfferPage} from '../pages/offer/offer';
import {UserPage} from '../pages/user/user';
import {SettingPage} from '../pages/setting/setting';
import {NewsPage} from '../pages/news/news';
import {AboutPage} from '../pages/about/about';
import {LoginPage} from '../pages/login/login';
import {ChatsPage} from '../pages/chats/chats';
// end import pages

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {

  public rootPage: any;

  public nav: any;

  public pages = [
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
    // import menu

  ];

  user: User = new User();
  constructor(public platform: Platform, public fire: FireService, public events: Events) {
    this.rootPage = LoginPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.events.subscribe('user:registered', user => {
        this.user = user[0];
      });
    });
    
  }
  ionViewDidLoad(){
    
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.fire.logout()
      .then(data => { 
        this.nav.setRoot(LoginPage);
      })
      .catch(error => {
        console.log('error logout: ',error);
      })

  }

  // view my profile
  viewMyProfile() {
    this.nav.setRoot(UserPage);
  }
}


