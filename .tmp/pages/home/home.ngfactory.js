/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './home';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../services/menu-service';
import * as import10 from 'ionic-angular/navigation/nav-params';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/slides/slides.ngfactory';
import * as import23 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from 'ionic-angular/components/menu/menu-controller';
import * as import29 from 'ionic-angular/components/toolbar/toolbar';
import * as import30 from 'ionic-angular/util/keyboard';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from 'ionic-angular/components/tabs/tabs';
import * as import33 from '@angular/core/src/linker/template_ref';
import * as import34 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import35 from 'ionic-angular/components/icon/icon';
import * as import36 from 'ionic-angular/components/button/button';
import * as import37 from 'ionic-angular/components/menu/menu-toggle';
import * as import38 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import39 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import40 from 'ionic-angular/components/navbar/navbar';
import * as import41 from '@angular/common/src/directives/ng_for';
import * as import42 from 'ionic-angular/components/slides/slides';
import * as import43 from 'ionic-angular/components/content/content';
import * as import44 from '@angular/core/src/security';
import * as import45 from '../../node_modules/ionic-angular/components/typography/typography.ngfactory';
import * as import46 from 'ionic-angular/components/typography/typography';
export var Wrapper_HomePage = (function () {
    function Wrapper_HomePage(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.HomePage(p0, p1, p2);
    }
    Wrapper_HomePage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_HomePage;
}());
var renderType_HomePage_Host = null;
var _View_HomePage_Host0 = (function (_super) {
    __extends(_View_HomePage_Host0, _super);
    function _View_HomePage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage_Host0, renderType_HomePage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-home', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HomePage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HomePage_0_4 = new Wrapper_HomePage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.MenuService), this.parentInjector.get(import10.NavParams));
        this._appEl_0.initComponent(this._HomePage_0_4.context, [], compView_0);
        compView_0.create(this._HomePage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HomePage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HomePage) && (0 === requestNodeIndex))) {
            return this._HomePage_0_4.context;
        }
        return notFoundResult;
    };
    _View_HomePage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._HomePage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_HomePage_Host0;
}(import1.AppView));
function viewFactory_HomePage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomePage_Host === null)) {
        (renderType_HomePage_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_HomePage_Host0(viewUtils, parentInjector, declarationEl);
}
export var HomePageNgFactory = new import12.ComponentFactory('page-home', viewFactory_HomePage_Host0, import0.HomePage);
var styles_HomePage = [];
var renderType_HomePage = null;
var _View_HomePage0 = (function (_super) {
    __extends(_View_HomePage0, _super);
    function _View_HomePage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage0, renderType_HomePage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import13.Wrapper_Header(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import26.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_3, 'color', 'primary');
        this._appEl_3 = new import3.AppElement(3, 1, this, this._el_3);
        var compView_3 = import14.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import14.Wrapper_Navbar(this.parentInjector.get(import27.App), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4.context, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_5, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_5, 'menuToggle', '');
        this._appEl_5 = new import3.AppElement(5, 3, this, this._el_5);
        var compView_5 = import15.viewFactory_Button0(this.viewUtils, this.injector(5), this._appEl_5);
        this._Button_5_4 = new import15.Wrapper_Button('', '', this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_5), this.renderer);
        this._MenuToggle_5_5 = new import16.Wrapper_MenuToggle(this.parentInjector.get(import28.MenuController), new import25.ElementRef(this._el_5), this.parentInjector.get(import26.ViewController, null), this._Navbar_3_4.context);
        this._ToolbarItem_5_6 = new import17.Wrapper_ToolbarItem(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import29.Toolbar, null), this._Navbar_3_4.context);
        this._query_Button_5_0 = new import18.QueryList();
        this._appEl_5.initComponent(this._Button_5_4.context, [], compView_5);
        this._text_6 = this.renderer.createText(null, '\n      ', null);
        this._el_7 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_7, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_7, 'role', 'img');
        this._Icon_7_3 = new import19.Wrapper_Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_7), this.renderer);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        compView_5.create(this._Button_5_4.context, [[].concat([
                this._text_6,
                this._el_7,
                this._text_8
            ])], null);
        this._text_9 = this.renderer.createText(null, '\n    ', null);
        this._el_10 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_10 = new import3.AppElement(10, 3, this, this._el_10);
        var compView_10 = import20.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(10), this._appEl_10);
        this._ToolbarTitle_10_4 = new import20.Wrapper_ToolbarTitle(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import29.Toolbar, null), this._Navbar_3_4.context);
        this._appEl_10.initComponent(this._ToolbarTitle_10_4.context, [], compView_10);
        this._text_11 = this.renderer.createText(null, 'Home', null);
        compView_10.create(this._ToolbarTitle_10_4.context, [[].concat([this._text_11])], null);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        this._el_13 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_13, 'end', '');
        this._ToolbarItem_13_3 = new import17.Wrapper_ToolbarItem(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_13), this.renderer, this.parentInjector.get(import29.Toolbar, null), this._Navbar_3_4.context);
        this._query_Button_13_0 = new import18.QueryList();
        this._text_14 = this.renderer.createText(this._el_13, '\n      ', null);
        this._el_15 = this.renderer.createElement(this._el_13, 'button', null);
        this.renderer.setElementAttribute(this._el_15, 'ion-button', '');
        this._appEl_15 = new import3.AppElement(15, 13, this, this._el_15);
        var compView_15 = import15.viewFactory_Button0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Button_15_4 = new import15.Wrapper_Button(null, '', this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_15), this.renderer);
        this._appEl_15.initComponent(this._Button_15_4.context, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n        ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_17, 'name', 'md-more');
        this.renderer.setElementAttribute(this._el_17, 'role', 'img');
        this._Icon_17_3 = new import19.Wrapper_Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_17), this.renderer);
        this._text_18 = this.renderer.createText(null, '\n      ', null);
        compView_15.create(this._Button_15_4.context, [[].concat([
                this._text_16,
                this._el_17,
                this._text_18
            ])], null);
        this._text_19 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_20 = this.renderer.createText(null, '\n  ', null);
        compView_3.create(this._Navbar_3_4.context, [
            [].concat([this._el_5]),
            [],
            [].concat([this._el_13]),
            [].concat([
                this._text_4,
                this._text_9,
                this._el_10,
                this._text_12,
                this._text_20
            ])
        ], null);
        this._text_21 = this.renderer.createText(this._el_1, '\n\n', null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_23 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_23 = new import3.AppElement(23, null, this, this._el_23);
        var compView_23 = import21.viewFactory_Content0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Content_23_4 = new import21.Wrapper_Content(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_23), this.renderer, this.parentInjector.get(import27.App), this.parentInjector.get(import30.Keyboard), this.parentInjector.get(import31.NgZone), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import32.Tabs, null));
        this._appEl_23.initComponent(this._Content_23_4.context, [], compView_23);
        this._text_24 = this.renderer.createText(null, '\n  ', null);
        this._text_25 = this.renderer.createText(null, '\n  ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-slides', null);
        this.renderer.setElementAttribute(this._el_26, 'auto-play', '2000');
        this.renderer.setElementAttribute(this._el_26, 'pager', '');
        this._appEl_26 = new import3.AppElement(26, 23, this, this._el_26);
        var compView_26 = import22.viewFactory_Slides0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Slides_26_4 = new import22.Wrapper_Slides(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_26), this.renderer);
        this._appEl_26.initComponent(this._Slides_26_4.context, [], compView_26);
        this._text_27 = this.renderer.createText(null, '\n    ', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_28 = new import3.AppElement(28, 26, this, this._anchor_28);
        this._TemplateRef_28_5 = new import33.TemplateRef_(this._appEl_28, viewFactory_HomePage1);
        this._NgFor_28_6 = new import23.Wrapper_NgFor(this._appEl_28.vcRef, this._TemplateRef_28_5, this.parentInjector.get(import34.IterableDiffers), this.ref);
        this._text_29 = this.renderer.createText(null, '\n  ', null);
        compView_26.create(this._Slides_26_4.context, [[].concat([
                this._text_27,
                this._appEl_28,
                this._text_29
            ])], null);
        this._text_30 = this.renderer.createText(null, '\n\n  ', null);
        this._text_31 = this.renderer.createText(null, '\n  ', null);
        this._el_32 = this.renderer.createElement(null, 'h3', null);
        this.renderer.setElementAttribute(this._el_32, 'text-center', '');
        this._text_33 = this.renderer.createText(this._el_32, 'Restaurante blablablá', null);
        this._text_34 = this.renderer.createText(null, '\n\n  ', null);
        this._el_35 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_35, 'class', 'list-items');
        this._text_36 = this.renderer.createText(this._el_35, '\n    ', null);
        this._anchor_37 = this.renderer.createTemplateAnchor(this._el_35, null);
        this._appEl_37 = new import3.AppElement(37, 35, this, this._anchor_37);
        this._TemplateRef_37_5 = new import33.TemplateRef_(this._appEl_37, viewFactory_HomePage2);
        this._NgFor_37_6 = new import23.Wrapper_NgFor(this._appEl_37.vcRef, this._TemplateRef_37_5, this.parentInjector.get(import34.IterableDiffers), this.ref);
        this._text_38 = this.renderer.createText(this._el_35, '\n  ', null);
        this._text_39 = this.renderer.createText(null, '\n', null);
        compView_23.create(this._Content_23_4.context, [
            [],
            [].concat([
                this._text_24,
                this._text_25,
                this._el_26,
                this._text_30,
                this._text_31,
                this._el_32,
                this._text_34,
                this._el_35,
                this._text_39
            ]),
            []
        ], null);
        this._text_40 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_5, 'click', this.eventHandler(this._handle_click_5_0.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._anchor_37,
            this._text_38,
            this._text_39,
            this._text_40
        ], [disposable_0], []);
        return null;
    };
    _View_HomePage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.Icon) && (7 === requestNodeIndex))) {
            return this._Icon_7_3.context;
        }
        if (((token === import36.Button) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Button_5_4.context;
        }
        if (((token === import37.MenuToggle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._MenuToggle_5_5.context;
        }
        if (((token === import38.ToolbarItem) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ToolbarItem_5_6.context;
        }
        if (((token === import39.ToolbarTitle) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ToolbarTitle_10_4.context;
        }
        if (((token === import35.Icon) && (17 === requestNodeIndex))) {
            return this._Icon_17_3.context;
        }
        if (((token === import36.Button) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Button_15_4.context;
        }
        if (((token === import38.ToolbarItem) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._ToolbarItem_13_3.context;
        }
        if (((token === import40.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Navbar_3_4.context;
        }
        if (((token === import29.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Header_1_3.context;
        }
        if (((token === import33.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import41.NgFor) && (28 === requestNodeIndex))) {
            return this._NgFor_28_6.context;
        }
        if (((token === import42.Slides) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Slides_26_4.context;
        }
        if (((token === import33.TemplateRef) && (37 === requestNodeIndex))) {
            return this._TemplateRef_37_5;
        }
        if (((token === import41.NgFor) && (37 === requestNodeIndex))) {
            return this._NgFor_37_6.context;
        }
        if (((token === import43.Content) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Content_23_4.context;
        }
        return notFoundResult;
    };
    _View_HomePage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_1_3.detectChangesInternal(this, this._el_1, throwOnChange);
        var currVal_0 = 'primary';
        this._Navbar_3_4.check_color(currVal_0, throwOnChange, false);
        this._Navbar_3_4.detectChangesInternal(this, this._el_3, throwOnChange);
        if (this._Button_5_4.detectChangesInternal(this, this._el_5, throwOnChange)) {
            this._appEl_5.componentView.markAsCheckOnce();
        }
        var currVal_4 = '';
        this._MenuToggle_5_5.check_menuToggle(currVal_4, throwOnChange, false);
        this._MenuToggle_5_5.detectChangesInternal(this, this._el_5, throwOnChange);
        this._ToolbarItem_5_6.detectChangesInternal(this, this._el_5, throwOnChange);
        var currVal_6 = 'menu';
        this._Icon_7_3.check_name(currVal_6, throwOnChange, false);
        this._Icon_7_3.detectChangesInternal(this, this._el_7, throwOnChange);
        if (this._ToolbarTitle_10_4.detectChangesInternal(this, this._el_10, throwOnChange)) {
            this._appEl_10.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_13_3.detectChangesInternal(this, this._el_13, throwOnChange);
        if (this._Button_15_4.detectChangesInternal(this, this._el_15, throwOnChange)) {
            this._appEl_15.componentView.markAsCheckOnce();
        }
        var currVal_8 = 'md-more';
        this._Icon_17_3.check_name(currVal_8, throwOnChange, false);
        this._Icon_17_3.detectChangesInternal(this, this._el_17, throwOnChange);
        if (this._Content_23_4.detectChangesInternal(this, this._el_23, throwOnChange)) {
            this._appEl_23.componentView.markAsCheckOnce();
        }
        var currVal_11 = '';
        this._Slides_26_4.check_pager(currVal_11, throwOnChange, false);
        if (this._Slides_26_4.detectChangesInternal(this, this._el_26, throwOnChange)) {
            this._appEl_26.componentView.markAsCheckOnce();
        }
        var currVal_12 = this.context.slides;
        this._NgFor_28_6.check_ngForOf(currVal_12, throwOnChange, false);
        this._NgFor_28_6.detectChangesInternal(this, this._anchor_28, throwOnChange);
        var currVal_13 = this.context.categories;
        this._NgFor_37_6.check_ngForOf(currVal_13, throwOnChange, false);
        this._NgFor_37_6.detectChangesInternal(this, this._anchor_37, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_5_0.dirty) {
                this._query_Button_5_0.reset([this._Button_5_4.context]);
                this._ToolbarItem_5_6.context._buttons = this._query_Button_5_0;
                this._query_Button_5_0.notifyOnChanges();
            }
            if (this._query_Button_13_0.dirty) {
                this._query_Button_13_0.reset([this._Button_15_4.context]);
                this._ToolbarItem_13_3.context._buttons = this._query_Button_13_0;
                this._query_Button_13_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_5_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_15_4.context.ngAfterContentInit();
            }
        }
        var currVal_1 = this._Navbar_3_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Navbar_3_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_5 = this._MenuToggle_5_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_5, 'hidden', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_7 = this._Icon_7_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_7, 'hide', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_9 = this._Icon_17_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_17, 'hide', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._Content_23_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_23, 'statusbar-padding', currVal_10);
            this._expr_10 = currVal_10;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.context.ngAfterViewInit();
            }
        }
    };
    _View_HomePage0.prototype.destroyInternal = function () {
        this._Icon_7_3.context.ngOnDestroy();
        this._Icon_17_3.context.ngOnDestroy();
        this._Content_23_4.context.ngOnDestroy();
    };
    _View_HomePage0.prototype._handle_click_5_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_5_5.context.toggle() !== false);
        return (true && pd_0);
    };
    return _View_HomePage0;
}(import1.AppView));
export function viewFactory_HomePage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomePage === null)) {
        (renderType_HomePage = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_HomePage, {}));
    }
    return new _View_HomePage0(viewUtils, parentInjector, declarationEl);
}
var _View_HomePage1 = (function (_super) {
    __extends(_View_HomePage1, _super);
    function _View_HomePage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage1, renderType_HomePage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-slide', null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import22.viewFactory_Slide0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Slide_0_4 = new import22.Wrapper_Slide(new import25.ElementRef(this._el_0), this.parent._Slides_26_4.context);
        this._appEl_0.initComponent(this._Slide_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'img', null);
        this.renderer.setElementAttribute(this._el_2, 'alt', '');
        this.renderer.setElementAttribute(this._el_2, 'class', 'full-image');
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        compView_0.create(this._Slide_0_4.context, [[].concat([
                this._text_1,
                this._el_2,
                this._text_3
            ])], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_HomePage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import42.Slide) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Slide_0_4.context;
        }
        return notFoundResult;
    };
    _View_HomePage1.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Slide_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import44.SecurityContext.URL, currVal_0));
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_HomePage1.prototype.destroyInternal = function () {
        this._Slide_0_4.context.ngOnDestroy();
    };
    return _View_HomePage1;
}(import1.AppView));
function viewFactory_HomePage1(viewUtils, parentInjector, declarationEl) {
    return new _View_HomePage1(viewUtils, parentInjector, declarationEl);
}
var _View_HomePage2 = (function (_super) {
    __extends(_View_HomePage2, _super);
    function _View_HomePage2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage2, renderType_HomePage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item-menu');
        this._text_1 = this.renderer.createText(this._el_0, '\n\n      ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'img', null);
        this._text_3 = this.renderer.createText(this._el_0, '\n\n      ', null);
        this._el_4 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'overlay');
        this._text_5 = this.renderer.createText(this._el_4, '\n\n        ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'span', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'pull-left');
        this.renderer.setElementAttribute(this._el_6, 'color', 'light');
        this._Typography_6_3 = new import45.Wrapper_Typography(this.parent.parentInjector.get(import24.Config), new import25.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n      ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9
        ], [disposable_0], []);
        return null;
    };
    _View_HomePage2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import46.Typography) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Typography_6_3.context;
        }
        return notFoundResult;
    };
    _View_HomePage2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3 = 'light';
        this._Typography_6_3.check_color(currVal_3, throwOnChange, false);
        this._Typography_6_3.detectChangesInternal(this, this._el_6, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.thumb, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import44.SecurityContext.URL, currVal_1));
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_2, 'alt', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_4 = import4.interpolate(1, '\n          ', this.context.$implicit.name, '\n        ');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_7, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_HomePage2.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.viewCategory(this.context.$implicit.id) !== false);
        return (true && pd_0);
    };
    return _View_HomePage2;
}(import1.AppView));
function viewFactory_HomePage2(viewUtils, parentInjector, declarationEl) {
    return new _View_HomePage2(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=home.ngfactory.js.map