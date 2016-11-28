import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var AddressPage = (function () {
    function AddressPage(nav) {
        this.nav = nav;
    }
    AddressPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-address',
                    templateUrl: 'address.html'
                },] },
    ];
    /** @nocollapse */
    AddressPage.ctorParameters = [
        { type: NavController, },
    ];
    return AddressPage;
}());
//# sourceMappingURL=address.js.map