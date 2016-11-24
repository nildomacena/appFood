/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './login';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../services/fire-service';
import * as import10 from 'ionic-angular/util/events';
import * as import11 from '../../services/user-service';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/typography/typography.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import23 from 'ionic-angular/config/config';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from 'ionic-angular/components/app/app';
import * as import26 from 'ionic-angular/util/keyboard';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from 'ionic-angular/navigation/view-controller';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/gestures/gesture-controller';
import * as import31 from 'ionic-angular/util/form';
import * as import32 from 'ionic-angular/platform/platform';
import * as import33 from '@angular/forms/src/directives/ng_control';
import * as import34 from 'ionic-angular/components/icon/icon';
import * as import35 from 'ionic-angular/components/typography/typography';
import * as import36 from 'ionic-angular/components/label/label';
import * as import37 from 'ionic-angular/components/input/input';
import * as import38 from 'ionic-angular/components/item/item';
import * as import39 from 'ionic-angular/components/list/list';
import * as import40 from 'ionic-angular/components/button/button';
import * as import41 from 'ionic-angular/components/content/content';
export class Wrapper_LoginPage {
  context:import0.LoginPage;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this.changed = false;
    this.context = new import0.LoginPage(p0,p1,p2,p3);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_LoginPage_Host:import2.RenderComponentType = (null as any);
class _View_LoginPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _LoginPage_0_4:Wrapper_LoginPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_LoginPage_Host0,renderType_LoginPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-login',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_LoginPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._LoginPage_0_4 = new Wrapper_LoginPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.FireService),this.parentInjector.get(import10.Events),this.parentInjector.get(import11.UserService));
    this._appEl_0.initComponent(this._LoginPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._LoginPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.LoginPage) && (0 === requestNodeIndex))) { return this._LoginPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._LoginPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_LoginPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_LoginPage_Host === (null as any))) { (renderType_LoginPage_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_LoginPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const LoginPageNgFactory:import13.ComponentFactory<import0.LoginPage> = new import13.ComponentFactory<import0.LoginPage>('page-login',viewFactory_LoginPage_Host0,import0.LoginPage);
const styles_LoginPage:any[] = ([] as any[]);
var renderType_LoginPage:import2.RenderComponentType = (null as any);
class _View_LoginPage0 extends import1.AppView<import0.LoginPage> {
  _text_0:any;
  _el_1:any;
  /*private*/ _appEl_1:import3.AppElement;
  _Content_1_4:import14.Wrapper_Content;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _Icon_10_3:import15.Wrapper_Icon;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _Typography_13_3:import16.Wrapper_Typography;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _List_18_3:import17.Wrapper_List;
  _text_19:any;
  _el_20:any;
  /*private*/ _appEl_20:import3.AppElement;
  _Item_20_4:import18.Wrapper_Item;
  _ItemContent_20_5:import18.Wrapper_ItemContent;
  _query_Label_20_0:import19.QueryList<any>;
  _query_Button_20_1:import19.QueryList<any>;
  _query_Icon_20_2:import19.QueryList<any>;
  _text_21:any;
  _el_22:any;
  _Label_22_3:import20.Wrapper_Label;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  /*private*/ _appEl_25:import3.AppElement;
  _TextInput_25_4:import21.Wrapper_TextInput;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  /*private*/ _appEl_28:import3.AppElement;
  _Item_28_4:import18.Wrapper_Item;
  _ItemContent_28_5:import18.Wrapper_ItemContent;
  _query_Label_28_0:import19.QueryList<any>;
  _query_Button_28_1:import19.QueryList<any>;
  _query_Icon_28_2:import19.QueryList<any>;
  _text_29:any;
  _el_30:any;
  _Label_30_3:import20.Wrapper_Label;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  /*private*/ _appEl_33:import3.AppElement;
  _TextInput_33_4:import21.Wrapper_TextInput;
  _text_34:any;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  _Typography_37_3:import16.Wrapper_Typography;
  _text_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _el_42:any;
  /*private*/ _appEl_42:import3.AppElement;
  _Button_42_4:import22.Wrapper_Button;
  _text_43:any;
  _text_44:any;
  _el_45:any;
  _Typography_45_3:import16.Wrapper_Typography;
  _text_46:any;
  _text_47:any;
  _el_48:any;
  /*private*/ _appEl_48:import3.AppElement;
  _Button_48_4:import22.Wrapper_Button;
  _text_49:any;
  _el_50:any;
  _Icon_50_3:import15.Wrapper_Icon;
  _text_51:any;
  _text_52:any;
  _el_53:any;
  /*private*/ _appEl_53:import3.AppElement;
  _Button_53_4:import22.Wrapper_Button;
  _text_54:any;
  _el_55:any;
  _Icon_55_3:import15.Wrapper_Icon;
  _text_56:any;
  _text_57:any;
  _text_58:any;
  _text_59:any;
  _el_60:any;
  _text_61:any;
  _el_62:any;
  _Typography_62_3:import16.Wrapper_Typography;
  _text_63:any;
  _text_64:any;
  _text_65:any;
  _text_66:any;
  _text_67:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_23:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_LoginPage0,renderType_LoginPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','auth-bg');
    this._appEl_1 = new import3.AppElement(1,(null as any),this,this._el_1);
    var compView_1:any = import14.viewFactory_Content0(this.viewUtils,this.injector(1),this._appEl_1);
    this._Content_1_4 = new import14.Wrapper_Content(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_1),this.renderer,this.parentInjector.get(import25.App),this.parentInjector.get(import26.Keyboard),this.parentInjector.get(import27.NgZone),this.parentInjector.get(import28.ViewController,(null as any)),this.parentInjector.get(import29.Tabs,(null as any)));
    this._appEl_1.initComponent(this._Content_1_4.context,([] as any[]),compView_1);
    this._text_2 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_3 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','login-content');
    this._text_4 = this.renderer.createText(this._el_3,'\n\n    ',(null as any));
    this._text_5 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_3,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'padding','');
    this.renderer.setElementAttribute(this._el_6,'text-center','');
    this._text_7 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'div',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','logo primary-bg');
    this._text_9 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_10,'color','light');
    this.renderer.setElementAttribute(this._el_10,'name','md-restaurant');
    this.renderer.setElementAttribute(this._el_10,'role','img');
    this._Icon_10_3 = new import15.Wrapper_Icon(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_10),this.renderer);
    this._text_11 = this.renderer.createText(this._el_8,'\n      ',(null as any));
    this._text_12 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_6,'h2',(null as any));
    this.renderer.setElementAttribute(this._el_13,'color','light');
    this._Typography_13_3 = new import16.Wrapper_Typography(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_13),this.renderer);
    this._text_14 = this.renderer.createText(this._el_13,'\n        Ionic 2 Restaurant\n      ',(null as any));
    this._text_15 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._text_16 = this.renderer.createText(this._el_3,'\n\n    ',(null as any));
    this._text_17 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_3,'ion-list',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','list-form');
    this.renderer.setElementAttribute(this._el_18,'padding','');
    this._List_18_3 = new import17.Wrapper_List(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_18),this.renderer,this.parentInjector.get(import30.GestureController));
    this._text_19 = this.renderer.createText(this._el_18,'\n\n      ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_18,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','item item-block');
    this._appEl_20 = new import3.AppElement(20,18,this,this._el_20);
    var compView_20:any = import18.viewFactory_Item0(this.viewUtils,this.injector(20),this._appEl_20);
    this._Item_20_4 = new import18.Wrapper_Item(this.parentInjector.get(import31.Form),this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_20),this.renderer);
    this._ItemContent_20_5 = new import18.Wrapper_ItemContent();
    this._query_Label_20_0 = new import19.QueryList<any>();
    this._query_Button_20_1 = new import19.QueryList<any>();
    this._query_Icon_20_2 = new import19.QueryList<any>();
    this._appEl_20.initComponent(this._Item_20_4.context,([] as any[]),compView_20);
    this._text_21 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_22 = this.renderer.createElement((null as any),'ion-label',(null as any));
    this.renderer.setElementAttribute(this._el_22,'stacked','');
    this._Label_22_3 = new import20.Wrapper_Label(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_22),this.renderer,(null as any),'',(null as any),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'Email',(null as any));
    this._text_24 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_25 = this.renderer.createElement((null as any),'ion-input',(null as any));
    this.renderer.setElementAttribute(this._el_25,'type','text');
    this._appEl_25 = new import3.AppElement(25,20,this,this._el_25);
    var compView_25:any = import21.viewFactory_TextInput0(this.viewUtils,this.injector(25),this._appEl_25);
    this._TextInput_25_4 = new import21.Wrapper_TextInput(this.parentInjector.get(import23.Config),this.parentInjector.get(import31.Form),this._Item_20_4.context,this.parentInjector.get(import25.App),this.parentInjector.get(import32.Platform),new import24.ElementRef(this._el_25),this.renderer,this._Content_1_4.context,this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import33.NgControl,(null as any)));
    this._appEl_25.initComponent(this._TextInput_25_4.context,([] as any[]),compView_25);
    compView_25.create(this._TextInput_25_4.context,([] as any[]),(null as any));
    this._text_26 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._query_Label_20_0.reset([this._Label_22_3.context]);
    this._Item_20_4.context.contentLabel = this._query_Label_20_0.first;
    compView_20.create(this._Item_20_4.context,[
      ([] as any[]),
      ([] as any[]).concat([this._el_22]),
      ([] as any[]).concat([
        this._text_21,
        this._text_24,
        this._text_26
      ]
      ),
      ([] as any[]).concat([this._el_25]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_27 = this.renderer.createText(this._el_18,'\n\n      ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_18,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_28,'class','item item-block');
    this._appEl_28 = new import3.AppElement(28,18,this,this._el_28);
    var compView_28:any = import18.viewFactory_Item0(this.viewUtils,this.injector(28),this._appEl_28);
    this._Item_28_4 = new import18.Wrapper_Item(this.parentInjector.get(import31.Form),this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_28),this.renderer);
    this._ItemContent_28_5 = new import18.Wrapper_ItemContent();
    this._query_Label_28_0 = new import19.QueryList<any>();
    this._query_Button_28_1 = new import19.QueryList<any>();
    this._query_Icon_28_2 = new import19.QueryList<any>();
    this._appEl_28.initComponent(this._Item_28_4.context,([] as any[]),compView_28);
    this._text_29 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_30 = this.renderer.createElement((null as any),'ion-label',(null as any));
    this.renderer.setElementAttribute(this._el_30,'stacked','');
    this._Label_30_3 = new import20.Wrapper_Label(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_30),this.renderer,(null as any),'',(null as any),(null as any));
    this._text_31 = this.renderer.createText(this._el_30,'Password',(null as any));
    this._text_32 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_33 = this.renderer.createElement((null as any),'ion-input',(null as any));
    this.renderer.setElementAttribute(this._el_33,'type','password');
    this._appEl_33 = new import3.AppElement(33,28,this,this._el_33);
    var compView_33:any = import21.viewFactory_TextInput0(this.viewUtils,this.injector(33),this._appEl_33);
    this._TextInput_33_4 = new import21.Wrapper_TextInput(this.parentInjector.get(import23.Config),this.parentInjector.get(import31.Form),this._Item_28_4.context,this.parentInjector.get(import25.App),this.parentInjector.get(import32.Platform),new import24.ElementRef(this._el_33),this.renderer,this._Content_1_4.context,this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import33.NgControl,(null as any)));
    this._appEl_33.initComponent(this._TextInput_33_4.context,([] as any[]),compView_33);
    compView_33.create(this._TextInput_33_4.context,([] as any[]),(null as any));
    this._text_34 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._query_Label_28_0.reset([this._Label_30_3.context]);
    this._Item_28_4.context.contentLabel = this._query_Label_28_0.first;
    compView_28.create(this._Item_28_4.context,[
      ([] as any[]),
      ([] as any[]).concat([this._el_30]),
      ([] as any[]).concat([
        this._text_29,
        this._text_32,
        this._text_34
      ]
      ),
      ([] as any[]).concat([this._el_33]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_35 = this.renderer.createText(this._el_18,'\n\n    ',(null as any));
    this._text_36 = this.renderer.createText(this._el_3,'\n\n    ',(null as any));
    this._el_37 = this.renderer.createElement(this._el_3,'p',(null as any));
    this.renderer.setElementAttribute(this._el_37,'color','light');
    this.renderer.setElementAttribute(this._el_37,'text-right','');
    this._Typography_37_3 = new import16.Wrapper_Typography(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_37),this.renderer);
    this._text_38 = this.renderer.createText(this._el_37,'Forgot Password?',(null as any));
    this._text_39 = this.renderer.createText(this._el_3,'\n\n    ',(null as any));
    this._el_40 = this.renderer.createElement(this._el_3,'div',(null as any));
    this._text_41 = this.renderer.createText(this._el_40,'\n      ',(null as any));
    this._el_42 = this.renderer.createElement(this._el_40,'button',(null as any));
    this.renderer.setElementAttribute(this._el_42,'block','');
    this.renderer.setElementAttribute(this._el_42,'color','light-blue');
    this.renderer.setElementAttribute(this._el_42,'ion-button','');
    this._appEl_42 = new import3.AppElement(42,40,this,this._el_42);
    var compView_42:any = import22.viewFactory_Button0(this.viewUtils,this.injector(42),this._appEl_42);
    this._Button_42_4 = new import22.Wrapper_Button((null as any),'',this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_42),this.renderer);
    this._appEl_42.initComponent(this._Button_42_4.context,([] as any[]),compView_42);
    this._text_43 = this.renderer.createText((null as any),'\n        SIGN IN\n      ',(null as any));
    compView_42.create(this._Button_42_4.context,[([] as any[]).concat([this._text_43])],(null as any));
    this._text_44 = this.renderer.createText(this._el_40,'\n\n      ',(null as any));
    this._el_45 = this.renderer.createElement(this._el_40,'p',(null as any));
    this.renderer.setElementAttribute(this._el_45,'color','light');
    this.renderer.setElementAttribute(this._el_45,'text-center','');
    this._Typography_45_3 = new import16.Wrapper_Typography(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_45),this.renderer);
    this._text_46 = this.renderer.createText(this._el_45,'Or',(null as any));
    this._text_47 = this.renderer.createText(this._el_40,'\n\n      ',(null as any));
    this._el_48 = this.renderer.createElement(this._el_40,'button',(null as any));
    this.renderer.setElementAttribute(this._el_48,'block','');
    this.renderer.setElementAttribute(this._el_48,'color','google-color');
    this.renderer.setElementAttribute(this._el_48,'icon-left','');
    this.renderer.setElementAttribute(this._el_48,'ion-button','');
    this._appEl_48 = new import3.AppElement(48,40,this,this._el_48);
    var compView_48:any = import22.viewFactory_Button0(this.viewUtils,this.injector(48),this._appEl_48);
    this._Button_48_4 = new import22.Wrapper_Button((null as any),'',this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_48),this.renderer);
    this._appEl_48.initComponent(this._Button_48_4.context,([] as any[]),compView_48);
    this._text_49 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_50 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_50,'ios','logo-googleplus');
    this.renderer.setElementAttribute(this._el_50,'md','logo-googleplus');
    this.renderer.setElementAttribute(this._el_50,'role','img');
    this._Icon_50_3 = new import15.Wrapper_Icon(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_50),this.renderer);
    this._text_51 = this.renderer.createText((null as any),' \n         Sign in with Google\n      ',(null as any));
      compView_48.create(this._Button_48_4.context,[([] as any[]).concat([
        this._text_49,
        this._el_50,
        this._text_51
      ]
    )],(null as any));
    this._text_52 = this.renderer.createText(this._el_40,'\n      \n      ',(null as any));
    this._el_53 = this.renderer.createElement(this._el_40,'button',(null as any));
    this.renderer.setElementAttribute(this._el_53,'block','');
    this.renderer.setElementAttribute(this._el_53,'color','fb-color');
    this.renderer.setElementAttribute(this._el_53,'icon-left','');
    this.renderer.setElementAttribute(this._el_53,'ion-button','');
    this._appEl_53 = new import3.AppElement(53,40,this,this._el_53);
    var compView_53:any = import22.viewFactory_Button0(this.viewUtils,this.injector(53),this._appEl_53);
    this._Button_53_4 = new import22.Wrapper_Button((null as any),'',this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_53),this.renderer);
    this._appEl_53.initComponent(this._Button_53_4.context,([] as any[]),compView_53);
    this._text_54 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_55 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_55,'ios','logo-facebook');
    this.renderer.setElementAttribute(this._el_55,'md','logo-facebook');
    this.renderer.setElementAttribute(this._el_55,'role','img');
    this._Icon_55_3 = new import15.Wrapper_Icon(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_55),this.renderer);
    this._text_56 = this.renderer.createText((null as any),' \n        Sign in with Facebook\n      ',(null as any));
      compView_53.create(this._Button_53_4.context,[([] as any[]).concat([
        this._text_54,
        this._el_55,
        this._text_56
      ]
    )],(null as any));
    this._text_57 = this.renderer.createText(this._el_40,'\n    ',(null as any));
    this._text_58 = this.renderer.createText(this._el_3,'\n\n\n    ',(null as any));
    this._text_59 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._el_60 = this.renderer.createElement(this._el_3,'div',(null as any));
    this.renderer.setElementAttribute(this._el_60,'margin-top','');
    this.renderer.setElementAttribute(this._el_60,'text-center','');
    this._text_61 = this.renderer.createText(this._el_60,'\n      ',(null as any));
    this._el_62 = this.renderer.createElement(this._el_60,'span',(null as any));
    this.renderer.setElementAttribute(this._el_62,'color','light');
    this._Typography_62_3 = new import16.Wrapper_Typography(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_62),this.renderer);
    this._text_63 = this.renderer.createText(this._el_62,'New here? Sign up',(null as any));
    this._text_64 = this.renderer.createText(this._el_60,'\n    ',(null as any));
    this._text_65 = this.renderer.createText(this._el_3,'\n\n  ',(null as any));
    this._text_66 = this.renderer.createText((null as any),'\n',(null as any));
    compView_1.create(this._Content_1_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_2,
        this._el_3,
        this._text_66
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_67 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_42,'click',this.eventHandler(this._handle_click_42_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_48,'click',this.eventHandler(this._handle_click_48_0.bind(this)));
    this._expr_17 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_53,'click',this.eventHandler(this._handle_click_53_0.bind(this)));
    this._expr_23 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_62,'click',this.eventHandler(this._handle_click_62_0.bind(this)));
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._el_50,
      this._text_51,
      this._text_52,
      this._el_53,
      this._text_54,
      this._el_55,
      this._text_56,
      this._text_57,
      this._text_58,
      this._text_59,
      this._el_60,
      this._text_61,
      this._el_62,
      this._text_63,
      this._text_64,
      this._text_65,
      this._text_66,
      this._text_67
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import34.Icon) && (10 === requestNodeIndex))) { return this._Icon_10_3.context; }
    if (((token === import35.Typography) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._Typography_13_3.context; }
    if (((token === import36.Label) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) { return this._Label_22_3.context; }
    if (((token === import37.TextInput) && (25 === requestNodeIndex))) { return this._TextInput_25_4.context; }
    if (((token === import38.Item) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._Item_20_4.context; }
    if (((token === import38.ItemContent) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._ItemContent_20_5.context; }
    if (((token === import36.Label) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._Label_30_3.context; }
    if (((token === import37.TextInput) && (33 === requestNodeIndex))) { return this._TextInput_33_4.context; }
    if (((token === import38.Item) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._Item_28_4.context; }
    if (((token === import38.ItemContent) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._ItemContent_28_5.context; }
    if (((token === import39.List) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 35)))) { return this._List_18_3.context; }
    if (((token === import35.Typography) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._Typography_37_3.context; }
    if (((token === import40.Button) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._Button_42_4.context; }
    if (((token === import35.Typography) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) { return this._Typography_45_3.context; }
    if (((token === import34.Icon) && (50 === requestNodeIndex))) { return this._Icon_50_3.context; }
    if (((token === import40.Button) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 51)))) { return this._Button_48_4.context; }
    if (((token === import34.Icon) && (55 === requestNodeIndex))) { return this._Icon_55_3.context; }
    if (((token === import40.Button) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 56)))) { return this._Button_53_4.context; }
    if (((token === import35.Typography) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 63)))) { return this._Typography_62_3.context; }
    if (((token === import41.Content) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 66)))) { return this._Content_1_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Content_1_4.detectChangesInternal(this,this._el_1,throwOnChange)) { this._appEl_1.componentView.markAsCheckOnce(); }
    const currVal_1:any = 'light';
    this._Icon_10_3.check_color(currVal_1,throwOnChange,false);
    const currVal_2:any = 'md-restaurant';
    this._Icon_10_3.check_name(currVal_2,throwOnChange,false);
    this._Icon_10_3.detectChangesInternal(this,this._el_10,throwOnChange);
    const currVal_4:any = 'light';
    this._Typography_13_3.check_color(currVal_4,throwOnChange,false);
    this._Typography_13_3.detectChangesInternal(this,this._el_13,throwOnChange);
    this._List_18_3.detectChangesInternal(this,this._el_18,throwOnChange);
    if (this._Item_20_4.detectChangesInternal(this,this._el_20,throwOnChange)) { this._appEl_20.componentView.markAsCheckOnce(); }
    this._ItemContent_20_5.detectChangesInternal(this,this._el_20,throwOnChange);
    this._Label_22_3.detectChangesInternal(this,this._el_22,throwOnChange);
    const currVal_5:any = 'text';
    this._TextInput_25_4.check_type(currVal_5,throwOnChange,false);
    this._TextInput_25_4.detectChangesInternal(this,this._el_25,throwOnChange);
    if (this._Item_28_4.detectChangesInternal(this,this._el_28,throwOnChange)) { this._appEl_28.componentView.markAsCheckOnce(); }
    this._ItemContent_28_5.detectChangesInternal(this,this._el_28,throwOnChange);
    this._Label_30_3.detectChangesInternal(this,this._el_30,throwOnChange);
    const currVal_6:any = 'password';
    this._TextInput_33_4.check_type(currVal_6,throwOnChange,false);
    this._TextInput_33_4.detectChangesInternal(this,this._el_33,throwOnChange);
    const currVal_7:any = 'light';
    this._Typography_37_3.check_color(currVal_7,throwOnChange,false);
    this._Typography_37_3.detectChangesInternal(this,this._el_37,throwOnChange);
    const currVal_9:any = '';
    this._Button_42_4.check_block(currVal_9,throwOnChange,false);
    const currVal_10:any = 'light-blue';
    this._Button_42_4.check_color(currVal_10,throwOnChange,false);
    if (this._Button_42_4.detectChangesInternal(this,this._el_42,throwOnChange)) { this._appEl_42.componentView.markAsCheckOnce(); }
    const currVal_11:any = 'light';
    this._Typography_45_3.check_color(currVal_11,throwOnChange,false);
    this._Typography_45_3.detectChangesInternal(this,this._el_45,throwOnChange);
    const currVal_13:any = '';
    this._Button_48_4.check_block(currVal_13,throwOnChange,false);
    const currVal_14:any = 'google-color';
    this._Button_48_4.check_color(currVal_14,throwOnChange,false);
    if (this._Button_48_4.detectChangesInternal(this,this._el_48,throwOnChange)) { this._appEl_48.componentView.markAsCheckOnce(); }
    const currVal_15:any = 'logo-googleplus';
    this._Icon_50_3.check_ios(currVal_15,throwOnChange,false);
    const currVal_16:any = 'logo-googleplus';
    this._Icon_50_3.check_md(currVal_16,throwOnChange,false);
    this._Icon_50_3.detectChangesInternal(this,this._el_50,throwOnChange);
    const currVal_19:any = '';
    this._Button_53_4.check_block(currVal_19,throwOnChange,false);
    const currVal_20:any = 'fb-color';
    this._Button_53_4.check_color(currVal_20,throwOnChange,false);
    if (this._Button_53_4.detectChangesInternal(this,this._el_53,throwOnChange)) { this._appEl_53.componentView.markAsCheckOnce(); }
    const currVal_21:any = 'logo-facebook';
    this._Icon_55_3.check_ios(currVal_21,throwOnChange,false);
    const currVal_22:any = 'logo-facebook';
    this._Icon_55_3.check_md(currVal_22,throwOnChange,false);
    this._Icon_55_3.detectChangesInternal(this,this._el_55,throwOnChange);
    const currVal_25:any = 'light';
    this._Typography_62_3.check_color(currVal_25,throwOnChange,false);
    this._Typography_62_3.detectChangesInternal(this,this._el_62,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_20_1.dirty) {
        this._query_Button_20_1.reset(([] as any[]));
        this._Item_20_4.context._buttons = this._query_Button_20_1;
        this._query_Button_20_1.notifyOnChanges();
      }
      if (this._query_Icon_20_2.dirty) {
        this._query_Icon_20_2.reset(([] as any[]));
        this._Item_20_4.context._icons = this._query_Icon_20_2;
        this._query_Icon_20_2.notifyOnChanges();
      }
      if (this._query_Button_28_1.dirty) {
        this._query_Button_28_1.reset(([] as any[]));
        this._Item_28_4.context._buttons = this._query_Button_28_1;
        this._query_Button_28_1.notifyOnChanges();
      }
      if (this._query_Icon_28_2.dirty) {
        this._query_Icon_28_2.reset(([] as any[]));
        this._Item_28_4.context._icons = this._query_Icon_28_2;
        this._query_Icon_28_2.notifyOnChanges();
      }
      this._TextInput_25_4.context.ngAfterContentChecked();
      if ((this.numberOfChecks === 0)) { this._Item_20_4.context.ngAfterContentInit(); }
      this._TextInput_33_4.context.ngAfterContentChecked();
      if ((this.numberOfChecks === 0)) { this._Item_28_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_42_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_48_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_53_4.context.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Content_1_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_1,'statusbar-padding',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_3:any = this._Icon_10_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_10,'hide',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_17:any = this._Icon_50_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_50,'hide',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_23:any = this._Icon_55_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementClass(this._el_55,'hide',currVal_23);
      this._expr_23 = currVal_23;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Icon_10_3.context.ngOnDestroy();
    this._TextInput_25_4.context.ngOnDestroy();
    this._TextInput_33_4.context.ngOnDestroy();
    this._Icon_50_3.context.ngOnDestroy();
    this._Icon_55_3.context.ngOnDestroy();
    this._Content_1_4.context.ngOnDestroy();
  }
  private _handle_click_42_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.logged()) !== false);
    return (true && pd_0);
  }
  private _handle_click_48_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.loginWithGoogle()) !== false);
    return (true && pd_0);
  }
  private _handle_click_53_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.loginWithFacebook()) !== false);
    return (true && pd_0);
  }
  private _handle_click_62_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.register()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_LoginPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.LoginPage> {
  if ((renderType_LoginPage === (null as any))) { (renderType_LoginPage = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,styles_LoginPage,{})); }
  return new _View_LoginPage0(viewUtils,parentInjector,declarationEl);
}