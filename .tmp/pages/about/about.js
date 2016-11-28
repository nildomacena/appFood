import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
export var AboutPage = (function () {
    function AboutPage(nav) {
        this.nav = nav;
        // working days
        this.days = [
            {
                'name': 'Monday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Tuesday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Wednesday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Thursday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Friday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Saturday',
                'hours': '05:00pm - 10:00pm'
            },
            {
                'name': 'Sunday',
                'hours': '05:00pm - 10:00pm'
            }
        ];
    }
    AboutPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-about',
                    templateUrl: 'about.html'
                },] },
    ];
    /** @nocollapse */
    AboutPage.ctorParameters = [
        { type: NavController, },
    ];
    return AboutPage;
}());
//# sourceMappingURL=about.js.map