import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatService } from '../../services/chat-service';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var ChatDetailPage = (function () {
    function ChatDetailPage(nav, chatService) {
        this.nav = nav;
        this.chatService = chatService;
        // get sample data only
        //this.chat = chatService.getItem(navParams.get('id'));
        this.chat = chatService.getItem(0);
    }
    ChatDetailPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-chat-detail',
                    templateUrl: 'chat-detail.html'
                },] },
    ];
    /** @nocollapse */
    ChatDetailPage.ctorParameters = [
        { type: NavController, },
        { type: ChatService, },
    ];
    return ChatDetailPage;
}());
//# sourceMappingURL=chat-detail.js.map