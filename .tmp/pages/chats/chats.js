import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatService } from '../../services/chat-service';
import { ChatDetailPage } from "../chat-detail/chat-detail";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var ChatsPage = (function () {
    function ChatsPage(nav, chatService) {
        this.nav = nav;
        this.chatService = chatService;
        // get sample data only
        this.chats = chatService.getAll();
    }
    ChatsPage.prototype.viewChat = function (id) {
        this.nav.push(ChatDetailPage, { id: id });
    };
    ChatsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-chats',
                    templateUrl: 'chats.html'
                },] },
    ];
    /** @nocollapse */
    ChatsPage.ctorParameters = [
        { type: NavController, },
        { type: ChatService, },
    ];
    return ChatsPage;
}());
//# sourceMappingURL=chats.js.map