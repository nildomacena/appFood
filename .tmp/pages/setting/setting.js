import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var SettingPage = (function () {
    function SettingPage(nav) {
        this.nav = nav;
    }
    SettingPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-setting',
                    templateUrl: 'setting.html'
                },] },
    ];
    /** @nocollapse */
    SettingPage.ctorParameters = [
        { type: NavController, },
    ];
    return SettingPage;
}());
//# sourceMappingURL=setting.js.map