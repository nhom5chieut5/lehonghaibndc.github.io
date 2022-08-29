!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[3819],{79941:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(93576);e.EMPTY=new i.Observable(function(t){return t.complete()}),e.empty=function(t){return t?function(t){return new i.Observable(function(e){return t.schedule(function(){return e.complete()})})}(t):e.EMPTY}},20500:function(t,e,n){var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(67241);e.defaultIfEmpty=function(t){return void 0===t&&(t=null),function(e){return e.lift(new s(t))}};var s=function(){function t(t){this.defaultValue=t}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.defaultValue))},t}(),a=function(t){function e(e,n){var i=t.call(this,e)||this;return i.defaultValue=n,i.isEmpty=!0,i}return r(e,t),e.prototype._next=function(t){this.isEmpty=!1,this.destination.next(t)},e.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()},e}(o.Subscriber)},26179:function(t,e,n){var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(67241);e.filter=function(t,e){return function(n){return n.lift(new s(t,e))}};var s=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.predicate,this.thisArg))},t}(),a=function(t){function e(e,n,i){var r=t.call(this,e)||this;return r.predicate=n,r.thisArg=i,r.count=0,r}return r(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}e&&this.destination.next(t)},e}(o.Subscriber)},13169:function(t,e,n){var i=n(88465),r=n(26179),o=n(71056),s=n(20500),a=n(20474),u=n(72516);e.P=function(t,e){var n=arguments.length>=2;return function(c){return c.pipe(t?r.filter(function(e,n){return t(e,n,c)}):u.identity,o.take(1),n?s.defaultIfEmpty(e):a.throwIfEmpty(function(){return new i.EmptyError}))}}},71056:function(t,e,n){var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(67241),s=n(72974),a=n(79941);e.take=function(t){return function(e){return 0===t?a.empty():e.lift(new u(t))}};var u=function(){function t(t){if(this.total=t,this.total<0)throw new s.ArgumentOutOfRangeError}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.total))},t}(),c=function(t){function e(e,n){var i=t.call(this,e)||this;return i.total=n,i.count=0,i}return r(e,t),e.prototype._next=function(t){var e=this.total,n=++this.count;n<=e&&(this.destination.next(t),n===e&&(this.destination.complete(),this.unsubscribe()))},e}(o.Subscriber)},20474:function(t,e,n){var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(88465),s=n(67241);e.throwIfEmpty=function(t){return void 0===t&&(t=c),function(e){return e.lift(new a(t))}};var a=function(){function t(t){this.errorFactory=t}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.errorFactory))},t}(),u=function(t){function e(e,n){var i=t.call(this,e)||this;return i.errorFactory=n,i.hasValue=!1,i}return r(e,t),e.prototype._next=function(t){this.hasValue=!0,this.destination.next(t)},e.prototype._complete=function(){if(this.hasValue)return this.destination.complete();var t=void 0;try{t=this.errorFactory()}catch(e){t=e}this.destination.error(t)},e}(s.Subscriber);function c(){return new o.EmptyError}},72974:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t}();e.ArgumentOutOfRangeError=n},88465:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return t.prototype=Object.create(Error.prototype),t}();e.EmptyError=n},62014:function(e,i,r){r.d(i,{y:function(){return o}});var o=function(){function e(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"currency";t(this,e),this.setType(i),this.setInput(n),this.processConvert()}return n(e,[{key:"setInput",value:function(t){"string"!=typeof t&&(t=String(t)),this.input=t}},{key:"setValue",value:function(t){"string"!=typeof t&&(t=String(t)),this.input=t,this.processConvert()}},{key:"setType",value:function(t){this.type=t}},{key:"processConvert",value:function(){var t,e,n=this.input.split(",").join("");if(n.indexOf(".")!=n.lastIndexOf(".")&&(n=n.slice(0,n.lastIndexOf("."))),-1!=n.indexOf(".")){e=n.indexOf(".");var i=n.split(".");n=i[0],"float"===this.type&&(t=i[1].substring(0,2))}else e=n.length;for(var r=new Array,o=1,s=-3;Math.abs(s)<e;s-=3)r.push(n.slice(s,e+s+3)),o++;var a=n.slice(0,e-3*(o-1));a.length>0&&r.push(a),r.reverse();var u=n.replace(/,/gi,""),c="";this.fakeView=r.join(),"float"===this.type&&null!=t&&(this.fakeView=this.fakeView+"."+t,c=t),this.realValue=parseFloat(u+"."+c)}}]),e}()},13819:function(e,i,r){r.d(i,{m:function(){return w}});var o=r(64762),s=r(90665),a=r(27887),u=r(22923),c=r(28049),l=r(26164),p=r(37716),f=r(47063),m=r(84465),d=r(81780),h=r(38583);function g(t,e){if(1&t&&(p.TgZ(0,"ion-select-option",23),p._uU(1),p.qZA()),2&t){var n=e.$implicit;p.Q6J("value",n.value),p.xp6(1),p.Oqu(n.label)}}function Z(t,e){1&t&&(p.TgZ(0,"ion-item",5),p.TgZ(1,"ion-label",6),p._uU(2),p.ALo(3,"translate"),p.qZA(),p._UZ(4,"ion-input",24),p.qZA()),2&t&&(p.xp6(2),p.Oqu(p.lcZ(3,1,"WAREHOUSE_MOD.CONVERT_KG")))}function v(t,e){1&t&&(p.TgZ(0,"div"),p._UZ(1,"ion-spinner",25),p.qZA())}var _,O=((_=function(){function e(n,i,r,o,s,u,c){t(this,e),this.modalController=n,this.formBulder=i,this.toastService=r,this.storeService=o,this.translate=s,this.companyService=u,this.alertController=c,this.savingFlag=new a.E,this.units=[{value:"kg",label:"Kg"},{value:"lit",label:this.translate.instant("WAREHOUSE_MOD.LITER")}]}return n(e,[{key:"ngOnInit",value:function(){"kg"!=this.item.unit&&"lit"!=this.item.unit&&this.units.push({value:this.item.unit,label:this.item.unit}),this.createForm()}},{key:"createForm",value:function(){this.form=this.formBulder.group({name:[this.item.name,[s.kI.required]],group_id:[this.item.group_id,[s.kI.required]],unit:[this.item.unit,[s.kI.required]],manufacturer_name:[this.item.manufacturer_name,[s.kI.required]],uses:[this.item.uses,[s.kI.required]],dosage:[this.item.dosage],packing:[this.item.packing,[s.kI.required,s.kI.min(1)]]})}},{key:"onSubmit",value:function(){var t=this;this.savingFlag.setPending(!0),this.companyService.sendPost("edit-product-private",this.form.value,"&ccode="+this.companyService.ccode+"&id="+this.item.id,"manager/company-category-api").pipe((0,c.P)()).subscribe(function(e){1===e.status?(t.toastService.success(e.message),t.item.name=t.form.value.name,t.item.group_id=t.form.value.group_id,t.item.manufacturer_name=t.form.value.manufacturer_name,t.item.uses=t.form.value.uses,t.item.unit=t.form.value.unit,t.item.dosage=t.form.value.dosage,t.modalController.dismiss(t.item)):t.toastService.warning(e.error),t.savingFlag.setResult(!0)},function(e){t.savingFlag.setResult(!1),t.toastService.danger(t.translate.instant("ERROR_CONNECT"))})}},{key:"presentAddUnit",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({cssClass:"my-custom-class",header:this.translate.instant("ADD")+" "+this.translate.instant("MONEY_MOD.GROUP"),inputs:[{name:"unit",type:"text",placeholder:this.translate.instant("UNIT")}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"Ok",handler:function(t){e.units.push({value:t.unit,label:t.unit}),e.form.patchValue({unit:t.unit})}}]});case 2:return t.next=4,t.sent.present();case 4:case"end":return t.stop()}},t,this)}))}}]),e}()).\u0275fac=function(t){return new(t||_)(p.Y36(f.IN),p.Y36(s.qu),p.Y36(m.k),p.Y36(u.d),p.Y36(d.sK),p.Y36(l.J),p.Y36(f.Br))},_.\u0275cmp=p.Xpm({type:_,selectors:[["app-store-product-edit"]],inputs:{item:"item"},decls:68,vars:49,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],[1,"ion-padding","ion-text-center"],[3,"formGroup","ngSubmit"],["lines","inset"],["position","floating"],["type","text","formControlName","name","inputmode","text"],["formControlName","group_id",3,"placeholder"],["value","1"],["value","2"],["value","3"],["formControlName","unit",3,"placeholder"],[3,"value",4,"ngFor","ngForOf"],["slot","end"],["slot","icon-only","name","add-circle"],["lines","inset",4,"ngIf"],["type","text","formControlName","manufacturer_name","inputmode","text"],["type","text","formControlName","uses"],["type","text","formControlName","dosage"],[1,"ion-text-center","ion-padding"],[4,"ngIf"],["type","submit","color","primary","shape","round",3,"disabled"],[3,"value"],["formControlName","packing","type","tel","inputmode","decimal"],["name","dots"]],template:function(t,e){1&t&&(p.TgZ(0,"ion-header"),p.TgZ(1,"ion-toolbar"),p.TgZ(2,"ion-buttons",0),p.TgZ(3,"ion-button",1),p.NdJ("click",function(){return e.modalController.dismiss()}),p._UZ(4,"ion-icon",2),p.qZA(),p.qZA(),p.TgZ(5,"ion-title"),p._uU(6),p.ALo(7,"translate"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(8,"ion-content"),p.TgZ(9,"div",3),p.TgZ(10,"h1"),p._uU(11),p.qZA(),p.TgZ(12,"p"),p._uU(13),p.ALo(14,"translate"),p.qZA(),p.qZA(),p.TgZ(15,"form",4),p.NdJ("ngSubmit",function(){return e.onSubmit()}),p.TgZ(16,"ion-list"),p.TgZ(17,"ion-item",5),p.TgZ(18,"ion-label",6),p._uU(19),p.ALo(20,"translate"),p.qZA(),p._UZ(21,"ion-input",7),p.qZA(),p.TgZ(22,"ion-item",5),p.TgZ(23,"ion-label"),p._uU(24),p.ALo(25,"translate"),p.qZA(),p.TgZ(26,"ion-select",8),p.ALo(27,"translate"),p.TgZ(28,"ion-select-option",9),p._uU(29),p.ALo(30,"translate"),p.qZA(),p.TgZ(31,"ion-select-option",10),p._uU(32),p.ALo(33,"translate"),p.qZA(),p.TgZ(34,"ion-select-option",11),p._uU(35),p.ALo(36,"translate"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(37,"ion-item",5),p.TgZ(38,"ion-label"),p._uU(39),p.ALo(40,"translate"),p.qZA(),p.TgZ(41,"ion-select",12),p.ALo(42,"translate"),p.YNc(43,g,2,2,"ion-select-option",13),p.qZA(),p.TgZ(44,"ion-buttons",14),p.TgZ(45,"ion-button",1),p.NdJ("click",function(){return e.presentAddUnit()}),p._UZ(46,"ion-icon",15),p.qZA(),p.qZA(),p.qZA(),p.YNc(47,Z,5,3,"ion-item",16),p.TgZ(48,"ion-item",5),p.TgZ(49,"ion-label",6),p._uU(50),p.ALo(51,"translate"),p.qZA(),p._UZ(52,"ion-input",17),p.qZA(),p.TgZ(53,"ion-item",5),p.TgZ(54,"ion-label",6),p._uU(55),p.ALo(56,"translate"),p.qZA(),p._UZ(57,"ion-textarea",18),p.qZA(),p.TgZ(58,"ion-item",5),p.TgZ(59,"ion-label",6),p._uU(60),p.ALo(61,"translate"),p.qZA(),p._UZ(62,"ion-textarea",19),p.qZA(),p.qZA(),p.TgZ(63,"div",20),p.YNc(64,v,2,0,"div",21),p.TgZ(65,"ion-button",22),p._uU(66),p.ALo(67,"translate"),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t&&(p.xp6(6),p.Oqu(p.lcZ(7,21,"WAREHOUSE_MOD.EDIT_PRODUCT")),p.xp6(5),p.Oqu(e.item.name),p.xp6(2),p.AsE("",p.lcZ(14,23,"WAREHOUSE_MOD.PRODUCER"),": ",e.item.manufacturer_name,""),p.xp6(2),p.Q6J("formGroup",e.form),p.xp6(4),p.Oqu(p.lcZ(20,25,"WAREHOUSE_MOD.PRODUCT")),p.xp6(5),p.Oqu(p.lcZ(25,27,"WAREHOUSE_MOD.GROUP_USED")),p.xp6(2),p.Q6J("placeholder",p.lcZ(27,29,"WAREHOUSE_MOD.SELECT")),p.xp6(3),p.Oqu(p.lcZ(30,31,"WAREHOUSE_MOD.FEED")),p.xp6(3),p.Oqu(p.lcZ(33,33,"WAREHOUSE_MOD.FEED_SUPPLEMENT")),p.xp6(3),p.Oqu(p.lcZ(36,35,"WAREHOUSE_MOD.TREATMENT")),p.xp6(4),p.Oqu(p.lcZ(40,37,"WAREHOUSE_MOD.UNIT")),p.xp6(2),p.Q6J("placeholder",p.lcZ(42,39,"WAREHOUSE_MOD.SELECT")),p.xp6(2),p.Q6J("ngForOf",e.units),p.xp6(4),p.Q6J("ngIf","kg"!=e.form.value.unit&&"lit"!=e.form.value.unit),p.xp6(3),p.Oqu(p.lcZ(51,41,"WAREHOUSE_MOD.PRODUCER")),p.xp6(5),p.Oqu(p.lcZ(56,43,"WAREHOUSE_MOD.USAGE")),p.xp6(5),p.Oqu(p.lcZ(61,45,"WAREHOUSE_MOD.DOSAGE")),p.xp6(4),p.Q6J("ngIf",e.savingFlag.pending),p.xp6(1),p.Q6J("disabled",e.form.invalid||e.savingFlag.pending),p.xp6(1),p.hij("",p.lcZ(67,47,"WAREHOUSE_MOD.SAVE")," "))},directives:[f.Gu,f.sr,f.Sm,f.YG,f.gu,f.wd,f.W2,s._Y,s.JL,s.sg,f.q_,f.Ie,f.Q$,f.pK,f.j9,s.JJ,s.u,f.t9,f.QI,f.n0,h.sg,h.O5,f.g2,f.PQ],pipes:[d.X$],styles:[""]}),_),A=r(62014),E=r(13169),y=r(71239);function q(t,e){if(1&t&&(p.TgZ(0,"div",14),p.TgZ(1,"h1"),p._uU(2),p.qZA(),p.TgZ(3,"p"),p._uU(4),p.ALo(5,"translate"),p.ALo(6,"number"),p.qZA(),p.TgZ(7,"p"),p._uU(8),p.ALo(9,"translate"),p.TgZ(10,"span"),p._uU(11),p.ALo(12,"number"),p.qZA(),p._uU(13),p.ALo(14,"translate"),p.qZA(),p.qZA()),2&t){var n=p.oxw();p.xp6(2),p.Oqu(n.infor.name),p.xp6(2),p.lnq("",p.lcZ(5,8,"WAREHOUSE_MOD.INVENTORY"),": ",p.xi3(6,10,n.infor.quantity_current,"1.0-1")," ",n.infor.unit,""),p.xp6(4),p.hij("",p.lcZ(9,13,"WAREHOUSE_MOD.PRICE"),": "),p.xp6(3),p.Oqu(p.xi3(12,15,n.infor.price,"1.0-1")),p.xp6(2),p.AsE(" ",p.lcZ(14,18,"CURRENCY_S"),"/",n.infor.unit,"")}}function x(t,e){if(1&t&&(p.TgZ(0,"ion-select-option",17),p._uU(1),p.qZA()),2&t){var n=e.$implicit;p.Q6J("value",n.code),p.xp6(1),p.Oqu(n.name)}}function b(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"ion-item",6),p.TgZ(1,"ion-label",7),p._uU(2),p.ALo(3,"translate"),p.qZA(),p.TgZ(4,"ion-select",15),p.NdJ("ionChange",function(t){return p.CHM(n),p.oxw().setInforProduct(t)}),p.YNc(5,x,2,2,"ion-select-option",16),p.qZA(),p.qZA()}if(2&t){var i=p.oxw();p.xp6(2),p.Oqu(p.lcZ(3,2,"FARM_MOD.WAREHOUSE")),p.xp6(3),p.Q6J("ngForOf",i.listStore)}}function T(t,e){1&t&&(p.TgZ(0,"div"),p._UZ(1,"ion-spinner",18),p.qZA())}var S=function(){var e=function(){function e(n,i,r,o,s,u){t(this,e),this.modalController=n,this._formBuilder=i,this.toastService=r,this.storeService=o,this.translate=s,this.dbLocalService=u,this.formatQuantity=new A.y(""),this.formatPrice=new A.y(""),this.savingFlag=new a.E,this.listStore=[]}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.dbLocalService.farms.findIndex(function(e){return e.infor.code===t.storeService.getFarmCode()})>=0&&(this.listStore=this.dbLocalService.stores),"store"==this.from&&(this.infor=this.item),this.form=this._formBuilder.group({quantity_current:["",[s.kI.required,s.kI.min(0)]],price:["",[s.kI.required,s.kI.min(0)]],note:["",[s.kI.maxLength(100)]],wcode:["farm"==this.from?"":this.storeService.getStoreCode(),[s.kI.required]]})}},{key:"onSubmit",value:function(){var t=this,e="&id=".concat(this.item.id);this.savingFlag.setPending(!0);var n={quantity_current:this.form.value.quantity_current.replace(",","."),price:this.formatPrice.realValue,note:this.form.value.note,sid:this.infor.id_store};this.storeService.setStoreCode(this.form.value.wcode),this.storeService.sendPost("correctProduct",n,e).pipe((0,E.P)()).subscribe(function(e){1===e.status?(t.toastService.success(e.message),t.item.quantity_current=n.quantity_current,t.item.price=n.price,t.item.note=n.note,t.modalController.dismiss(t.item)):t.toastService.warning(e.error),t.savingFlag.setResult(!0)},function(e){t.toastService.danger(t.translate.instant("ERROR_CONNECT")),t.savingFlag.setResult(!1)})}},{key:"setInforProduct",value:function(t){var e=this;this.storeService.setStoreCode(t.detail.value),this.storeService.getApiStore("getAProduct","&id="+this.item.id).subscribe(function(t){1==t.status?e.infor=t.data:e.toastService.warning(t.error)},function(){e.toastService.danger(e.translate.instant("ERROR_CONNECT"))})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.Y36(f.IN),p.Y36(s.qu),p.Y36(m.k),p.Y36(u.d),p.Y36(d.sK),p.Y36(y.T))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-store-inventory-edit"]],inputs:{item:"item",from:"from",infor:"infor"},decls:33,vars:21,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["class","ion-padding ion-text-center",4,"ngIf"],[3,"formGroup","ngSubmit"],["lines","inset",4,"ngIf"],["lines","inset"],["position","floating"],["type","tel","formControlName","quantity_current","autofocus","","inputmode","decimal"],["type","tel","formControlName","price","inputmode","decimal",3,"value","ionChange"],["formControlName","note"],[1,"ion-text-center","ion-padding"],[4,"ngIf"],["type","submit","color","primary","shape","round",3,"disabled"],[1,"ion-padding","ion-text-center"],["formControlName","wcode","okText","Okay","cancelText","Dismiss",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["name","dots"]],template:function(t,e){1&t&&(p.TgZ(0,"ion-header"),p.TgZ(1,"ion-toolbar"),p.TgZ(2,"ion-buttons",0),p.TgZ(3,"ion-button",1),p.NdJ("click",function(){return e.modalController.dismiss()}),p._UZ(4,"ion-icon",2),p.qZA(),p.qZA(),p.TgZ(5,"ion-title"),p._uU(6),p.ALo(7,"translate"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(8,"ion-content"),p.YNc(9,q,15,20,"div",3),p.TgZ(10,"form",4),p.NdJ("ngSubmit",function(){return e.onSubmit()}),p.TgZ(11,"ion-list"),p.YNc(12,b,6,4,"ion-item",5),p.TgZ(13,"ion-item",6),p.TgZ(14,"ion-label",7),p._uU(15),p.ALo(16,"translate"),p.qZA(),p._UZ(17,"ion-input",8),p.qZA(),p.TgZ(18,"ion-item",6),p.TgZ(19,"ion-label",7),p._uU(20),p.ALo(21,"translate"),p.qZA(),p.TgZ(22,"ion-input",9),p.NdJ("ionChange",function(t){return e.formatPrice.setValue(t.target.value)}),p.qZA(),p.qZA(),p.TgZ(23,"ion-item",6),p.TgZ(24,"ion-label",7),p._uU(25),p.ALo(26,"translate"),p.qZA(),p._UZ(27,"ion-textarea",10),p.qZA(),p.qZA(),p.TgZ(28,"div",11),p.YNc(29,T,2,0,"div",12),p.TgZ(30,"ion-button",13),p._uU(31),p.ALo(32,"translate"),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t&&(p.xp6(6),p.Oqu(p.lcZ(7,11,"WAREHOUSE_MOD.EDIT_INVENTORY")),p.xp6(3),p.Q6J("ngIf",e.infor),p.xp6(1),p.Q6J("formGroup",e.form),p.xp6(2),p.Q6J("ngIf","farm"==e.from),p.xp6(3),p.Oqu(p.lcZ(16,13,"WAREHOUSE_MOD.NEW_INVENTORY")),p.xp6(5),p.Oqu(p.lcZ(21,15,"WAREHOUSE_MOD.NEW_PRICE")),p.xp6(2),p.Q6J("value",e.formatPrice.fakeView),p.xp6(3),p.Oqu(p.lcZ(26,17,"WAREHOUSE_MOD.CHANGE_NOTE")),p.xp6(4),p.Q6J("ngIf",e.savingFlag.pending),p.xp6(1),p.Q6J("disabled",e.form.invalid||e.savingFlag.pending),p.xp6(1),p.hij("",p.lcZ(32,19,"WAREHOUSE_MOD.SAVE")," "))},directives:[f.Gu,f.sr,f.Sm,f.YG,f.gu,f.wd,f.W2,h.O5,s._Y,s.JL,s.sg,f.q_,f.Ie,f.Q$,f.pK,f.j9,s.JJ,s.u,f.g2,f.t9,f.QI,h.sg,f.n0,f.PQ],pipes:[d.X$,h.JJ],styles:[""]}),e}();function U(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"ion-item"),p.TgZ(1,"ion-label"),p._uU(2),p.ALo(3,"translate"),p.qZA(),p.TgZ(4,"span",9),p._uU(5),p.qZA(),p.TgZ(6,"ion-button",10),p.NdJ("click",function(){return p.CHM(n),p.oxw().presentEditStore()}),p._uU(7),p.ALo(8,"translate"),p.qZA(),p.qZA()}if(2&t){var i=p.oxw();p.xp6(2),p.AsE("",p.lcZ(3,4,"WAREHOUSE_MOD.INVENTORY")," (",i.item.unit,")"),p.xp6(3),p.Oqu(i.item.quantity_current),p.xp6(2),p.hij(" ",p.lcZ(8,6,"WAREHOUSE_MOD.CORRECTION")," ")}}function R(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"ion-button",11),p.NdJ("click",function(){return p.CHM(n),p.oxw().presentEditProduct()}),p._uU(1),p.ALo(2,"translate"),p.qZA()}2&t&&(p.xp6(1),p.hij(" ",p.lcZ(2,1,"WAREHOUSE_MOD.EDIT_INFOR")," "))}function k(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"ion-button",12),p.NdJ("click",function(){return p.CHM(n),p.oxw().presentLock()}),p._UZ(1,"ion-icon",13),p._uU(2),p.ALo(3,"translate"),p.qZA()}2&t&&(p.xp6(2),p.hij(" ",p.lcZ(3,1,"WAREHOUSE_MOD.LOCK")," "))}function C(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"ion-button",12),p.NdJ("click",function(){return p.CHM(n),p.oxw().presentLock()}),p._UZ(1,"ion-icon",14),p._uU(2),p.ALo(3,"translate"),p.qZA()}2&t&&(p.xp6(2),p.hij(" ",p.lcZ(3,1,"WAREHOUSE_MOD.UNLOCK")," "))}function N(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"ion-button",15),p.NdJ("click",function(){return p.CHM(n),p.oxw().presentRemove()}),p._UZ(1,"ion-icon",16),p._uU(2),p.ALo(3,"translate"),p.qZA()}2&t&&(p.xp6(2),p.hij(" ",p.lcZ(3,1,"WAREHOUSE_MOD.DELETE")," "))}var w=function(){var e=function(){function e(n,i,r,o,s){t(this,e),this.modalController=n,this.actionSheetController=i,this.toastService=r,this.storeService=o,this.translate=s,this.itemChanged=!1}return n(e,[{key:"ngOnInit",value:function(){console.log(this.from),console.log(this.item)}},{key:"dismiss",value:function(){this.itemChanged?this.modalController.dismiss(this.item):this.modalController.dismiss()}},{key:"presentRemove",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheetController.create({header:this.translate.instant("WAREHOUSE_MOD.CONFIRM"),buttons:[{text:this.translate.instant("WAREHOUSE_MOD.DELETE"),role:"destructive",icon:"trash-outline",handler:function(){"company"!=e.from&&e.delete(e.item)}},{text:this.translate.instant("WAREHOUSE_MOD.NO"),icon:"close",role:"cancel"}]});case 2:return t.next=4,t.sent.present();case 4:case"end":return t.stop()}},t,this)}))}},{key:"presentLock",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheetController.create({header:this.translate.instant("WAREHOUSE_MOD.CONFIRM"),buttons:[{text:this.translate.instant(1==this.item.status?"WAREHOUSE_MOD.LOCK":"WAREHOUSE_MOD.UNLOCK"),role:"destructive",icon:1==this.item.status?"lock-closed-outline":"ock-open-outline",handler:function(){e.onLock()}},{text:this.translate.instant("WAREHOUSE_MOD.NO"),icon:"close",role:"cancel"}]});case 2:return t.next=4,t.sent.present();case 4:case"end":return t.stop()}},t,this)}))}},{key:"presentEditProduct",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:O,componentProps:{item:this.item}});case 2:return(e=t.sent).onDidDismiss().then(function(t){t.data&&(n.item=t.data,n.itemChanged=!0)}),t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}))}},{key:"presentEditStore",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:S,componentProps:{item:this.item,from:this.from}});case 2:return(e=t.sent).onDidDismiss().then(function(t){t.data&&(n.item=t.data,n.itemChanged=!0)}),t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}))}},{key:"onLock",value:function(){var t=this,e=0==this.item.status?1:0;this.storeService.getApiStore("spause","&id=".concat(this.item.id_store,"&val=").concat(e)).pipe((0,c.P)()).subscribe(function(n){1===n.status?(t.item.status=e,t.itemChanged=!0,t.toastService.success(n.message)):t.toastService.warning(n.error)},function(e){t.toastService.danger(t.translate.instant("ERROR_CONNECT"))})}},{key:"deleteAll",value:function(t){var e=this,n="&fcode=".concat(this.storeService.getFarmCode(),"&id=").concat(t.id);this.storeService.getApiStore("removeProduct",n,"manager/store-api-mobie").pipe((0,c.P)()).subscribe(function(t){1===t.status?(e.toastService.success(t.message),e.modalController.dismiss({delete:!0})):e.toastService.warning(t.error)},function(t){e.toastService.danger(e.translate.instant("ERROR_CONNECT"))})}},{key:"delete",value:function(t){var e=this;this.storeService.getApiStore("removeProduct","&id=".concat(t.id_store)).pipe((0,c.P)()).subscribe(function(t){1===t.status?(e.toastService.success(t.message),e.modalController.dismiss({delete:!0})):e.toastService.warning(t.error)},function(t){e.toastService.danger(e.translate.instant("ERROR_CONNECT"))})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.Y36(f.IN),p.Y36(f.BX),p.Y36(m.k),p.Y36(u.d),p.Y36(d.sK))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-store-product-detail"]],inputs:{item:"item",from:"from"},decls:38,vars:21,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],[1,"ion-text-center"],[4,"ngIf"],[1,"ion-padding"],["size","large","color","primary","expand","block","shape","round","fill","outline",3,"click",4,"ngIf"],["size","large","color","medium","expand","block","shape","round","fill","outline",3,"click",4,"ngIf"],["size","large","color","danger","expand","block","shape","round","fill","outline",3,"click",4,"ngIf"],["slot","end"],["shape","round","fill","outline","slot","end",3,"click"],["size","large","color","primary","expand","block","shape","round","fill","outline",3,"click"],["size","large","color","medium","expand","block","shape","round","fill","outline",3,"click"],["name","lock-closed-outline","slot","start"],["name","lock-open-outline","slot","start"],["size","large","color","danger","expand","block","shape","round","fill","outline",3,"click"],["name","remove-circle-outline","slot","start"]],template:function(t,e){1&t&&(p.TgZ(0,"ion-header"),p.TgZ(1,"ion-toolbar"),p.TgZ(2,"ion-buttons",0),p.TgZ(3,"ion-button",1),p.NdJ("click",function(){return e.dismiss()}),p._UZ(4,"ion-icon",2),p.qZA(),p.qZA(),p.TgZ(5,"ion-title"),p._uU(6),p.ALo(7,"translate"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(8,"ion-content"),p.TgZ(9,"h1",3),p._uU(10),p.qZA(),p.TgZ(11,"ion-item"),p.TgZ(12,"ion-label"),p.TgZ(13,"h3"),p._uU(14),p.ALo(15,"translate"),p.qZA(),p.TgZ(16,"p"),p._uU(17),p.qZA(),p.qZA(),p.qZA(),p.TgZ(18,"ion-item"),p.TgZ(19,"ion-label"),p.TgZ(20,"h3"),p._uU(21),p.ALo(22,"translate"),p.qZA(),p.TgZ(23,"p"),p._uU(24),p.qZA(),p.qZA(),p.qZA(),p.TgZ(25,"ion-item"),p.TgZ(26,"ion-label"),p.TgZ(27,"h3"),p._uU(28),p.ALo(29,"translate"),p.qZA(),p.TgZ(30,"p"),p._uU(31),p.qZA(),p.qZA(),p.qZA(),p.YNc(32,U,9,8,"ion-item",4),p.TgZ(33,"div",5),p.YNc(34,R,3,3,"ion-button",6),p.YNc(35,k,4,3,"ion-button",7),p.YNc(36,C,4,3,"ion-button",7),p.YNc(37,N,4,3,"ion-button",8),p.qZA(),p.qZA()),2&t&&(p.xp6(6),p.Oqu(p.lcZ(7,13,"WAREHOUSE_MOD.PRODUCT")),p.xp6(4),p.Oqu(e.item.name),p.xp6(4),p.Oqu(p.lcZ(15,15,"WAREHOUSE_MOD.PRODUCER")),p.xp6(3),p.Oqu(e.item.manufacturer_name),p.xp6(4),p.Oqu(p.lcZ(22,17,"WAREHOUSE_MOD.USAGE")),p.xp6(3),p.Oqu(e.item.uses),p.xp6(4),p.Oqu(p.lcZ(29,19,"WAREHOUSE_MOD.DOSAGE")),p.xp6(3),p.Oqu(e.item.dosage),p.xp6(1),p.Q6J("ngIf","store"==e.from),p.xp6(2),p.Q6J("ngIf",1==e.item.extend&&"company"==e.from),p.xp6(1),p.Q6J("ngIf",1==e.item.status&&"store"==e.from),p.xp6(1),p.Q6J("ngIf",0==e.item.status&&"store"==e.from),p.xp6(1),p.Q6J("ngIf","store"==e.from))},directives:[f.Gu,f.sr,f.Sm,f.YG,f.gu,f.wd,f.W2,f.Ie,f.Q$,h.O5],pipes:[d.X$],styles:[""]}),e}()}}])}();