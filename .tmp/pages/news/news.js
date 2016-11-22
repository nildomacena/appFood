import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostService } from '../../services/post-service';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var NewsPage = (function () {
    function NewsPage(nav, postService) {
        this.nav = nav;
        this.postService = postService;
        // set sample data
        this.posts = postService.getAll();
    }
    NewsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-news',
                    templateUrl: 'news.html'
                },] },
    ];
    /** @nocollapse */
    NewsPage.ctorParameters = [
        { type: NavController, },
        { type: PostService, },
    ];
    return NewsPage;
}());
//# sourceMappingURL=news.js.map