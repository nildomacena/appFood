import { Injectable } from "@angular/core";
import { POSTS } from "./mock-posts";
export var PostService = (function () {
    function PostService() {
        this.posts = POSTS;
    }
    PostService.prototype.getAll = function () {
        return this.posts;
    };
    PostService.prototype.getItem = function (id) {
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id === parseInt(id)) {
                return this.posts[i];
            }
        }
        return null;
    };
    PostService.prototype.remove = function (item) {
        this.posts.splice(this.posts.indexOf(item), 1);
    };
    PostService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PostService.ctorParameters = [];
    return PostService;
}());
//# sourceMappingURL=post-service.js.map