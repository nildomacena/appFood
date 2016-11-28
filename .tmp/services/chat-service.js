import { Injectable } from "@angular/core";
import { CHATS } from "./mock-chats";
export var ChatService = (function () {
    function ChatService() {
        this.chats = CHATS;
    }
    ChatService.prototype.getAll = function () {
        return this.chats;
    };
    ChatService.prototype.getItem = function (id) {
        for (var i = 0; i < this.chats.length; i++) {
            if (this.chats[i].id === parseInt(id)) {
                return this.chats[i];
            }
        }
        return null;
    };
    ChatService.prototype.remove = function (item) {
        this.chats.splice(this.chats.indexOf(item), 1);
    };
    ChatService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ChatService.ctorParameters = [];
    return ChatService;
}());
//# sourceMappingURL=chat-service.js.map