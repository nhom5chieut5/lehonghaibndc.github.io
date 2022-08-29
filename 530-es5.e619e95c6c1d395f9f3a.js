!function(){"use strict";function t(e,n){return(t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(e,n)}function e(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,o=i(t);if(e){var a=i(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return n(this,r)}}function n(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[530],{54395:function(n,i,o){o.d(i,{b:function(){return u}});var s=o(77393),c=o(33637);function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.P;return function(n){return n.lift(new l(t,e))}}var l=function(){function t(e,n){r(this,t),this.dueTime=e,this.scheduler=n}return a(t,[{key:"call",value:function(t,e){return e.subscribe(new d(t,this.dueTime,this.scheduler))}}]),t}(),d=function(n){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(o,n);var i=e(o);function o(t,e,n){var a;return r(this,o),(a=i.call(this,t)).dueTime=e,a.scheduler=n,a.debouncedSubscription=null,a.lastValue=null,a.hasValue=!1,a}return a(o,[{key:"_next",value:function(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(m,this.dueTime,this))}},{key:"_complete",value:function(){this.debouncedNext(),this.destination.complete()}},{key:"debouncedNext",value:function(){if(this.clearDebounce(),this.hasValue){var t=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}},{key:"clearDebounce",value:function(){var t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}]),o}(s.L);function m(t){t.debouncedNext()}},90530:function(t,e,n){n.r(e),n.d(e,{MaterialPageModule:function(){return F}});var i,o=n(38583),s=n(90665),c=n(47063),u=n(13619),l=n(64762),d=n(27887),m=n(16738),f=n(79765),h=n(25917),g=n(54395),p=n(87519),Z=n(43190),A=n(88002),v=n(15189),T=n(37716),_=((i=function(){function t(e){r(this,t),this.reqAPIService=e,this.URL_API="/manager/material-api"}return a(t,[{key:"setFarmCode",value:function(t){this.fcode=t}},{key:"getFarmCode",value:function(){return this.fcode}},{key:"list",value:function(){return this.reqAPIService.get(this.URL_API+"?action=list&fcode="+this.fcode)}},{key:"listAction",value:function(){return this.reqAPIService.get(this.URL_API+"?action=listAction&fcode="+this.fcode)}},{key:"add",value:function(t){return this.reqAPIService.post(this.URL_API+"?action=add&fcode="+this.fcode,t)}},{key:"addAction",value:function(t){return this.reqAPIService.post(this.URL_API+"?action=addAction&fcode="+this.fcode,t)}},{key:"edit",value:function(t,e){return this.reqAPIService.post(this.URL_API+"?action=update&id="+t+"&fcode="+this.fcode,e)}},{key:"editAction",value:function(t,e){return this.reqAPIService.post(this.URL_API+"?action=editAction&code="+t+"&fcode="+this.fcode,e)}},{key:"remove",value:function(t){return this.reqAPIService.get(this.URL_API+"?action=remove&id="+t+"&fcode="+this.fcode)}},{key:"removeAction",value:function(t){return this.reqAPIService.get(this.URL_API+"?action=removeAction&code="+t+"&fcode="+this.fcode)}},{key:"getAction",value:function(t){return this.reqAPIService.get(this.URL_API+"?action=getAction&code="+t+"&fcode="+this.fcode)}},{key:"searchTerm",value:function(t){return this.reqAPIService.post(this.URL_API+"?action=searchTerm&fcode="+this.fcode,{name:t})}}]),t}()).\u0275fac=function(t){return new(t||i)(T.LFG(v.$))},i.\u0275prov=T.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i),q=n(81780),y=n(84465);function x(t,e){1&t&&T._UZ(0,"ion-progress-bar",12)}function b(t,e){if(1&t){var n=T.EpF();T.TgZ(0,"ion-item"),T.TgZ(1,"ion-text"),T._uU(2),T.qZA(),T.TgZ(3,"ion-button",16),T.NdJ("click",function(){var t=T.CHM(n).$implicit;return T.oxw(2).setTermName(t.term_name)}),T._uU(4),T.ALo(5,"translate"),T.qZA(),T.qZA()}if(2&t){var i=e.$implicit;T.xp6(2),T.hij(" ",i.term_name," "),T.xp6(2),T.hij(" ",T.lcZ(5,2,"SELECT")," ")}}function k(t,e){if(1&t&&(T.TgZ(0,"ion-item"),T.TgZ(1,"ion-label"),T.TgZ(2,"p"),T._uU(3),T.qZA(),T.qZA(),T.qZA()),2&t){var n=T.oxw(2);T.xp6(3),T.Oqu(n.message)}}function O(t,e){if(1&t&&(T.TgZ(0,"ion-list",13),T.YNc(1,b,6,4,"ion-item",14),T.ALo(2,"async"),T.YNc(3,k,4,1,"ion-item",15),T.qZA()),2&t){var n=T.oxw();T.xp6(1),T.Q6J("ngForOf",T.lcZ(2,2,n.terms$)),T.xp6(2),T.Q6J("ngIf",n.message)}}var R=function(){var t=function(){function t(e,n,i,o,a){r(this,t),this.modalController=e,this.actionSheetController=n,this.translate=i,this.materialService=o,this.toastService=a,this.minDate=m().endOf("day"),this.form=new s.cw({name:new s.NI("",s.kI.required),term_name:new s.NI("",s.kI.required),expiry:new s.NI(m().add(180,"days").format("YYYY-MM-DD"),s.kI.required)}),this.loadingFlag=new d.E,this.search$=new f.xQ,this.message=""}return a(t,[{key:"ngOnInit",value:function(){var t=this;this.form.setValue({name:this.data.name,term_name:this.data.term_name,expiry:m(1e3*this.data.expiry).format("YYYY-MM-DD")});var e=this.search$.pipe((0,g.b)(300),(0,p.x)(),(0,Z.w)(function(e){return t.getListTerm(e)}));this.terms$=e,this.terms$.subscribe(function(e){t.loadingFlag.setResult(!0)})}},{key:"getListTerm",value:function(t){var e=this;return this.loadingFlag.setPending(!0),t.trim()?this.materialService.searchTerm(t).pipe((0,A.U)(function(t){return t.data.filter(function(t){return!e.termSelected||t.term_name!=e.form.value.term_name})})):(this.loadingFlag.setResult(!0),this.message="",(0,h.of)([]))}},{key:"save",value:function(){var t=this;this.loadingFlag.setPending(!0);var e={name:this.form.value.name,term_name:this.form.value.term_name,expiry:m(this.form.value.expiry).valueOf()/1e3};this.materialService.edit(this.data.id,e).subscribe(function(n){1==n.status?(t.modalController.dismiss(e),t.toastService.success(t.translate.instant("WALL.UPDATE_SUCCESS"))):t.toastService.success(n.error),t.loadingFlag.setResult(!0)},function(){t.loadingFlag.setResult(!1),t.toastService.danger(t.translate.instant("ERROR_CONNECT"))})}},{key:"searchTerm",value:function(){this.search$.next(this.form.value.term_name)}},{key:"setTermName",value:function(t){this.form.patchValue({term_name:t}),this.termSelected=t}},{key:"resetTermName",value:function(){this.termSelected=null}}]),t}();return t.\u0275fac=function(e){return new(e||t)(T.Y36(c.IN),T.Y36(c.BX),T.Y36(q.sK),T.Y36(_),T.Y36(y.k))},t.\u0275cmp=T.Xpm({type:t,selectors:[["app-material-edit"]],inputs:{data:"data"},decls:32,vars:23,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["slot","end"],[3,"disabled","click"],[3,"formGroup"],["type","indeterminate",4,"ngIf"],["position","floating"],["formControlName","expiry",3,"displayFormat","min"],["formControlName","name"],["formControlName","term_name",3,"ionChange","ionFocus"],["lines","none",4,"ngIf"],["type","indeterminate"],["lines","none"],[4,"ngFor","ngForOf"],[4,"ngIf"],["slot","end",3,"click"]],template:function(t,e){1&t&&(T.TgZ(0,"ion-header"),T.TgZ(1,"ion-toolbar"),T.TgZ(2,"ion-buttons",0),T.TgZ(3,"ion-button",1),T.NdJ("click",function(){return e.modalController.dismiss()}),T._UZ(4,"ion-icon",2),T.qZA(),T.qZA(),T.TgZ(5,"ion-title"),T._uU(6),T.ALo(7,"translate"),T.qZA(),T.TgZ(8,"ion-buttons",3),T.TgZ(9,"ion-button",4),T.NdJ("click",function(){return e.save()}),T._uU(10),T.ALo(11,"translate"),T.qZA(),T.qZA(),T.qZA(),T.qZA(),T.TgZ(12,"ion-content",5),T.YNc(13,x,1,0,"ion-progress-bar",6),T.TgZ(14,"ion-grid"),T.TgZ(15,"ion-item"),T.TgZ(16,"ion-label",7),T._uU(17),T.ALo(18,"translate"),T.qZA(),T._UZ(19,"ion-datetime",8),T.ALo(20,"translate"),T.qZA(),T.TgZ(21,"ion-item"),T.TgZ(22,"ion-label",7),T._uU(23),T.ALo(24,"translate"),T.qZA(),T._UZ(25,"ion-input",9),T.qZA(),T.TgZ(26,"ion-item"),T.TgZ(27,"ion-label",7),T._uU(28),T.ALo(29,"translate"),T.qZA(),T.TgZ(30,"ion-input",10),T.NdJ("ionChange",function(){return e.searchTerm()})("ionFocus",function(){return e.resetTermName()}),T.qZA(),T.qZA(),T.qZA(),T.YNc(31,O,4,4,"ion-list",11),T.qZA()),2&t&&(T.xp6(6),T.Oqu(T.lcZ(7,11,"EDIT")),T.xp6(3),T.Q6J("disabled",e.form.invalid),T.xp6(1),T.Oqu(T.lcZ(11,13,"FARM_MOD.SAVE")),T.xp6(2),T.Q6J("formGroup",e.form),T.xp6(1),T.Q6J("ngIf",e.loadingFlag.pending),T.xp6(4),T.Oqu(T.lcZ(18,15,"MATERIAL_MOD.EXPERY")),T.xp6(2),T.Q6J("displayFormat",T.lcZ(20,17,"FORMAT_DATE_MOMENT"))("min",e.minDate.format("YYYY-MM-DD")),T.xp6(4),T.Oqu(T.lcZ(24,19,"NAME")),T.xp6(5),T.Oqu(T.lcZ(29,21,"MATERIAL_MOD.TERM_NAME")),T.xp6(3),T.Q6J("ngIf",!e.termSelected))},directives:[c.Gu,c.sr,c.Sm,c.YG,c.gu,c.wd,c.W2,s.JL,s.sg,o.O5,c.jY,c.Ie,c.Q$,c.x4,c.QI,s.JJ,s.u,c.pK,c.j9,c.X7,c.q_,o.sg,c.yW],pipes:[q.X$,o.Ov],styles:[""]}),t}(),S=function(){var t=function(){function t(e,n,i,o,a){r(this,t),this.modalController=e,this.actionSheetController=n,this.translate=i,this.materialService=o,this.toastService=a,this.loadingFlag=new d.E}return a(t,[{key:"ngOnInit",value:function(){console.log(this.data)}},{key:"openRemove",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheetController.create({header:this.translate.instant("WAREHOUSE_MOD.CONFIRM"),buttons:[{text:this.translate.instant("WAREHOUSE_MOD.DELETE"),role:"destructive",icon:"trash-outline",handler:function(){e.loadingFlag.setPending(!0),e.materialService.remove(e.data.id).subscribe(function(t){1==t.status?(e.toastService.success(e.translate.instant("DEVICE_MOD.REMOVE_DATA_SUCCESS")),e.modalController.dismiss()):e.toastService.warning(t.error),e.loadingFlag.setResult(!0)},function(){e.loadingFlag.setResult(!1),e.toastService.danger(e.translate.instant("ERROR_CONNECT"))})}},{text:this.translate.instant("WAREHOUSE_MOD.NO"),icon:"close",role:"cancel"}]});case 2:return t.next=4,t.sent.present();case 4:case"end":return t.stop()}},t,this)}))}},{key:"openEdit",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:R,componentProps:{data:this.data}});case 2:return(e=t.sent).onDidDismiss().then(function(t){t.data&&(n.data.name=t.data.name,n.data.term_name=t.data.term_name,n.data.expiry=t.data.expiry,console.log(t.data))}),t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(T.Y36(c.IN),T.Y36(c.BX),T.Y36(q.sK),T.Y36(_),T.Y36(y.k))},t.\u0275cmp=T.Xpm({type:t,selectors:[["app-detail"]],inputs:{data:"data"},decls:44,vars:28,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],[1,"ion-text-center"],["slot","end"],[1,"ion-padding"],["size","large","color","primary","expand","block","shape","round","fill","outline",3,"click"],["size","large","color","danger","expand","block","shape","round","fill","outline",3,"click"],["name","remove-circle-outline","slot","start"]],template:function(t,e){1&t&&(T.TgZ(0,"ion-header"),T.TgZ(1,"ion-toolbar"),T.TgZ(2,"ion-buttons",0),T.TgZ(3,"ion-button",1),T.NdJ("click",function(){return e.modalController.dismiss()}),T._UZ(4,"ion-icon",2),T.qZA(),T.qZA(),T.TgZ(5,"ion-title"),T._uU(6),T.ALo(7,"translate"),T.qZA(),T.qZA(),T.qZA(),T.TgZ(8,"ion-content"),T.TgZ(9,"h1",3),T._uU(10),T.qZA(),T.TgZ(11,"ion-item"),T.TgZ(12,"ion-label"),T._uU(13),T.ALo(14,"translate"),T.qZA(),T.TgZ(15,"ion-text",4),T._uU(16),T.qZA(),T.qZA(),T.TgZ(17,"ion-item"),T.TgZ(18,"ion-label"),T._uU(19),T.ALo(20,"translate"),T.qZA(),T.TgZ(21,"ion-text",4),T._uU(22),T.ALo(23,"date"),T.qZA(),T.qZA(),T.TgZ(24,"ion-item"),T.TgZ(25,"ion-label"),T._uU(26),T.ALo(27,"translate"),T.qZA(),T.TgZ(28,"ion-text",4),T._uU(29),T.qZA(),T.qZA(),T.TgZ(30,"ion-item"),T.TgZ(31,"ion-label"),T._uU(32),T.ALo(33,"translate"),T.qZA(),T.TgZ(34,"ion-text",4),T._uU(35),T.qZA(),T.qZA(),T.TgZ(36,"div",5),T.TgZ(37,"ion-button",6),T.NdJ("click",function(){return e.openEdit()}),T._uU(38),T.ALo(39,"translate"),T.qZA(),T.TgZ(40,"ion-button",7),T.NdJ("click",function(){return e.openRemove()}),T._UZ(41,"ion-icon",8),T._uU(42),T.ALo(43,"translate"),T.qZA(),T.qZA(),T.qZA()),2&t&&(T.xp6(6),T.Oqu(T.lcZ(7,12,"SHOP.DETAIL")),T.xp6(4),T.Oqu(e.data.name),T.xp6(3),T.hij(" ",T.lcZ(14,14,"MATERIAL_MOD.TERM_NAME")," "),T.xp6(3),T.hij(" ",e.data.term_name," "),T.xp6(3),T.hij(" ",T.lcZ(20,16,"MATERIAL_MOD.EXPERY")," "),T.xp6(3),T.hij(" ",T.lcZ(23,18,1e3*e.data.expiry)," "),T.xp6(4),T.hij(" ",T.lcZ(27,20,"MATERIAL_MOD.QUANTITY_AVAILABLE")," "),T.xp6(3),T.hij(" ",e.data.quantity," "),T.xp6(3),T.hij(" ",T.lcZ(33,22,"MATERIAL_MOD.LOSS")," "),T.xp6(3),T.hij(" ",e.data.quantity_loss," "),T.xp6(3),T.hij(" ",T.lcZ(39,24,"WAREHOUSE_MOD.EDIT_INFOR")," "),T.xp6(4),T.hij(" ",T.lcZ(43,26,"WAREHOUSE_MOD.DELETE")," "))},directives:[c.Gu,c.sr,c.Sm,c.YG,c.gu,c.wd,c.W2,c.Ie,c.Q$,c.yW],pipes:[q.X$,o.uU],styles:[""]}),t}(),E=function(){var t=function(){function t(e,n,i){r(this,t),this.modalController=e,this.actionSheetController=n,this.translate=i}return a(t,[{key:"ngOnInit",value:function(){}},{key:"save",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)(T.Y36(c.IN),T.Y36(c.BX),T.Y36(q.sK))},t.\u0275cmp=T.Xpm({type:t,selectors:[["app-material-action-add"]],decls:13,vars:6,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["slot","end"]],template:function(t,e){1&t&&(T.TgZ(0,"ion-header"),T.TgZ(1,"ion-toolbar"),T.TgZ(2,"ion-buttons",0),T.TgZ(3,"ion-button",1),T.NdJ("click",function(){return e.modalController.dismiss()}),T._UZ(4,"ion-icon",2),T.qZA(),T.qZA(),T.TgZ(5,"ion-title"),T._uU(6),T.ALo(7,"translate"),T.qZA(),T.TgZ(8,"ion-buttons",3),T.TgZ(9,"ion-button",1),T.NdJ("click",function(){return e.save()}),T._uU(10),T.ALo(11,"translate"),T.qZA(),T.qZA(),T.qZA(),T.qZA(),T._UZ(12,"ion-content")),2&t&&(T.xp6(6),T.Oqu(T.lcZ(7,2,"MATERIAL_MOD.INPUT")),T.xp6(4),T.Oqu(T.lcZ(11,4,"SAVE")))},directives:[c.Gu,c.sr,c.Sm,c.YG,c.gu,c.wd,c.W2],pipes:[q.X$],styles:[""]}),t}(),I=function(){var t=function(){function t(e,n,i,o,a){r(this,t),this.modalController=e,this.actionSheetController=n,this.translate=i,this.materialService=o,this.toastService=a,this.loadingFlag=new d.E}return a(t,[{key:"ngOnInit",value:function(){this.getList()}},{key:"getList",value:function(){var t=this;this.loadingFlag.setPending(!0),this.materialService.listAction().subscribe(function(e){1==e.status?t.list=e.data:t.toastService.warning(e.error),t.loadingFlag.setResult(!0)},function(){t.loadingFlag.setResult(!1),t.toastService.danger(t.translate.instant("ERROR_CONNECT"))})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(T.Y36(c.IN),T.Y36(c.BX),T.Y36(q.sK),T.Y36(_),T.Y36(y.k))},t.\u0275cmp=T.Xpm({type:t,selectors:[["app-material-action-list"]],decls:9,vars:3,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"]],template:function(t,e){1&t&&(T.TgZ(0,"ion-header"),T.TgZ(1,"ion-toolbar"),T.TgZ(2,"ion-buttons",0),T.TgZ(3,"ion-button",1),T.NdJ("click",function(){return e.modalController.dismiss()}),T._UZ(4,"ion-icon",2),T.qZA(),T.qZA(),T.TgZ(5,"ion-title"),T._uU(6),T.ALo(7,"translate"),T.qZA(),T.qZA(),T.qZA(),T._UZ(8,"ion-content")),2&t&&(T.xp6(6),T.Oqu(T.lcZ(7,1,"MATERIAL_MOD.HISTORY")))},directives:[c.Gu,c.sr,c.Sm,c.YG,c.gu,c.wd,c.W2],pipes:[q.X$],styles:[""]}),t}();function U(t,e){1&t&&T._UZ(0,"ion-progress-bar",12)}function L(t,e){if(1&t){var n=T.EpF();T.TgZ(0,"ion-item"),T.TgZ(1,"ion-text"),T._uU(2),T.qZA(),T.TgZ(3,"ion-button",16),T.NdJ("click",function(){var t=T.CHM(n).$implicit;return T.oxw(2).setTermName(t.term_name)}),T._uU(4),T.ALo(5,"translate"),T.qZA(),T.qZA()}if(2&t){var i=e.$implicit;T.xp6(2),T.hij(" ",i.term_name," "),T.xp6(2),T.hij(" ",T.lcZ(5,2,"SELECT")," ")}}function N(t,e){if(1&t&&(T.TgZ(0,"ion-item"),T.TgZ(1,"ion-label"),T.TgZ(2,"p"),T._uU(3),T.qZA(),T.qZA(),T.qZA()),2&t){var n=T.oxw(2);T.xp6(3),T.Oqu(n.message)}}function w(t,e){if(1&t&&(T.TgZ(0,"ion-list",13),T.YNc(1,L,6,4,"ion-item",14),T.ALo(2,"async"),T.YNc(3,N,4,1,"ion-item",15),T.qZA()),2&t){var n=T.oxw();T.xp6(1),T.Q6J("ngForOf",T.lcZ(2,2,n.terms$)),T.xp6(2),T.Q6J("ngIf",n.message)}}var M=function(){var t=function(){function t(e,n,i,o,a){r(this,t),this.modalController=e,this.actionSheetController=n,this.translate=i,this.materialService=o,this.toastService=a,this.minDate=m().endOf("day"),this.form=new s.cw({name:new s.NI("",s.kI.required),term_name:new s.NI("",s.kI.required),expiry:new s.NI(m().add(180,"days").format("YYYY-MM-DD"),s.kI.required)}),this.loadingFlag=new d.E,this.search$=new f.xQ,this.message=""}return a(t,[{key:"ngOnInit",value:function(){var t=this,e=this.search$.pipe((0,g.b)(300),(0,p.x)(),(0,Z.w)(function(e){return t.getListTerm(e)}));this.terms$=e,this.terms$.subscribe(function(e){t.loadingFlag.setResult(!0)})}},{key:"getListTerm",value:function(t){var e=this;return this.loadingFlag.setPending(!0),t.trim()?this.materialService.searchTerm(t).pipe((0,A.U)(function(t){return t.data.filter(function(t){return!e.termSelected||t.term_name!=e.form.value.term_name})})):(this.loadingFlag.setResult(!0),this.message="",(0,h.of)([]))}},{key:"save",value:function(){var t=this;this.loadingFlag.setPending(!0);var e={name:this.form.value.name,term_name:this.form.value.term_name,expiry:m(this.form.value.expiry).valueOf()/1e3};this.materialService.add(e).subscribe(function(n){1==n.status?(t.modalController.dismiss(e),t.toastService.success(t.translate.instant("SHOP.CART.ADDRESS.ADD_SUCCESS"))):t.toastService.success(n.error),t.loadingFlag.setResult(!0)},function(){t.loadingFlag.setResult(!1),t.toastService.danger(t.translate.instant("ERROR_CONNECT"))})}},{key:"searchTerm",value:function(){this.search$.next(this.form.value.term_name)}},{key:"setTermName",value:function(t){this.form.patchValue({term_name:t}),this.termSelected=t}},{key:"resetTermName",value:function(){this.termSelected=null}}]),t}();return t.\u0275fac=function(e){return new(e||t)(T.Y36(c.IN),T.Y36(c.BX),T.Y36(q.sK),T.Y36(_),T.Y36(y.k))},t.\u0275cmp=T.Xpm({type:t,selectors:[["app-material-add"]],decls:32,vars:23,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["slot","end"],[3,"disabled","click"],[3,"formGroup"],["type","indeterminate",4,"ngIf"],["position","floating"],["formControlName","expiry",3,"displayFormat","min"],["formControlName","name"],["formControlName","term_name",3,"ionChange","ionFocus"],["lines","none",4,"ngIf"],["type","indeterminate"],["lines","none"],[4,"ngFor","ngForOf"],[4,"ngIf"],["slot","end",3,"click"]],template:function(t,e){1&t&&(T.TgZ(0,"ion-header"),T.TgZ(1,"ion-toolbar"),T.TgZ(2,"ion-buttons",0),T.TgZ(3,"ion-button",1),T.NdJ("click",function(){return e.modalController.dismiss()}),T._UZ(4,"ion-icon",2),T.qZA(),T.qZA(),T.TgZ(5,"ion-title"),T._uU(6),T.ALo(7,"translate"),T.qZA(),T.TgZ(8,"ion-buttons",3),T.TgZ(9,"ion-button",4),T.NdJ("click",function(){return e.save()}),T._uU(10),T.ALo(11,"translate"),T.qZA(),T.qZA(),T.qZA(),T.qZA(),T.TgZ(12,"ion-content",5),T.YNc(13,U,1,0,"ion-progress-bar",6),T.TgZ(14,"ion-grid"),T.TgZ(15,"ion-item"),T.TgZ(16,"ion-label",7),T._uU(17),T.ALo(18,"translate"),T.qZA(),T._UZ(19,"ion-datetime",8),T.ALo(20,"translate"),T.qZA(),T.TgZ(21,"ion-item"),T.TgZ(22,"ion-label",7),T._uU(23),T.ALo(24,"translate"),T.qZA(),T._UZ(25,"ion-input",9),T.qZA(),T.TgZ(26,"ion-item"),T.TgZ(27,"ion-label",7),T._uU(28),T.ALo(29,"translate"),T.qZA(),T.TgZ(30,"ion-input",10),T.NdJ("ionChange",function(){return e.searchTerm()})("ionFocus",function(){return e.resetTermName()}),T.qZA(),T.qZA(),T.qZA(),T.YNc(31,w,4,4,"ion-list",11),T.qZA()),2&t&&(T.xp6(6),T.Oqu(T.lcZ(7,11,"ADD")),T.xp6(3),T.Q6J("disabled",e.form.invalid),T.xp6(1),T.Oqu(T.lcZ(11,13,"FARM_MOD.SAVE")),T.xp6(2),T.Q6J("formGroup",e.form),T.xp6(1),T.Q6J("ngIf",e.loadingFlag.pending),T.xp6(4),T.Oqu(T.lcZ(18,15,"MATERIAL_MOD.EXPERY")),T.xp6(2),T.Q6J("displayFormat",T.lcZ(20,17,"FORMAT_DATE_MOMENT"))("min",e.minDate.format("YYYY-MM-DD")),T.xp6(4),T.Oqu(T.lcZ(24,19,"NAME")),T.xp6(5),T.Oqu(T.lcZ(29,21,"MATERIAL_MOD.TERM_NAME")),T.xp6(3),T.Q6J("ngIf",!e.termSelected))},directives:[c.Gu,c.sr,c.Sm,c.YG,c.gu,c.wd,c.W2,s.JL,s.sg,o.O5,c.jY,c.Ie,c.Q$,c.x4,c.QI,s.JJ,s.u,c.pK,c.j9,c.X7,c.q_,o.sg,c.yW],pipes:[q.X$,o.Ov],styles:[""]}),t}();function Y(t,e){if(1&t){var n=T.EpF();T.TgZ(0,"ion-item",10),T.NdJ("click",function(){var t=T.CHM(n),e=t.$implicit,i=t.index;return T.oxw().openDetail(e,i)}),T.TgZ(1,"ion-text"),T._uU(2),T.qZA(),T.TgZ(3,"ion-text",11),T._uU(4),T.qZA(),T.qZA()}if(2&t){var i=e.$implicit;T.xp6(2),T.Oqu(i.name),T.xp6(2),T.Oqu(i.quantity_available)}}var C=[{path:"",component:function(){var t=function(){function t(e,n,i,o,a){r(this,t),this.translate=e,this.toastService=n,this.materialService=i,this.route=o,this.modalController=a,this.list=[],this.loadingFlag=new d.E}return a(t,[{key:"ngOnInit",value:function(){this.materialService.setFarmCode(this.route.snapshot.paramMap.get("id")),this.getList()}},{key:"getList",value:function(){var t=this;this.loadingFlag.setPending(!0),this.materialService.list().subscribe(function(e){1==e.status?(t.list=e.data,console.log(t.list)):t.toastService.warning(e.error),t.loadingFlag.setResult(!0)},function(){t.loadingFlag.setResult(!1),t.toastService.danger(t.translate.instant("ERROR_CONNECT"))})}},{key:"openDetail",value:function(t,e){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:S,componentProps:{data:t}});case 2:return(n=e.sent).onDidDismiss().then(function(t){i.getList()}),e.next=6,n.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}))}},{key:"openAdd",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:M});case 2:return(e=t.sent).onDidDismiss().then(function(t){n.getList()}),t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}))}},{key:"openImport",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:E,componentProps:{data:"import"}});case 2:return t.next=4,t.sent.present();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}))}},{key:"openListAction",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:I});case 2:return t.next=4,t.sent.present();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(T.Y36(q.sK),T.Y36(y.k),T.Y36(_),T.Y36(u.gz),T.Y36(c.IN))},t.\u0275cmp=T.Xpm({type:t,selectors:[["app-material"]],decls:32,vars:14,consts:[["slot","start"],["text","","defaultHref","tabs/management"],[1,"ion-text-center","ion-align-self-center"],["mode","ios",1,"menu-icon-square",3,"click"],["fill","clear","color","light"],["color","primary","name","list-outline",1,"icon-large"],["color","primary","name","clipboard-outline",1,"icon-large"],["detail","",3,"click",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["name","add"],["detail","",3,"click"],["slot","end"]],template:function(t,e){1&t&&(T.TgZ(0,"ion-header"),T.TgZ(1,"ion-toolbar"),T.TgZ(2,"ion-buttons",0),T._UZ(3,"ion-back-button",1),T.qZA(),T.TgZ(4,"ion-title"),T._uU(5),T.ALo(6,"translate"),T.qZA(),T.qZA(),T.qZA(),T.TgZ(7,"ion-content"),T.TgZ(8,"ion-grid"),T.TgZ(9,"ion-row"),T.TgZ(10,"ion-col",2),T.TgZ(11,"ion-card",3),T.NdJ("click",function(){return e.openImport()}),T.TgZ(12,"ion-button",4),T._UZ(13,"ion-icon",5),T.qZA(),T._UZ(14,"br"),T._uU(15),T.ALo(16,"translate"),T.qZA(),T.qZA(),T.TgZ(17,"ion-col",2),T.TgZ(18,"ion-card",3),T.NdJ("click",function(){return e.openListAction()}),T.TgZ(19,"ion-button",4),T._UZ(20,"ion-icon",6),T.qZA(),T._UZ(21,"br"),T._uU(22),T.ALo(23,"translate"),T.qZA(),T.qZA(),T.qZA(),T.qZA(),T.TgZ(24,"ion-list"),T.TgZ(25,"ion-list-header"),T._uU(26),T.ALo(27,"translate"),T.qZA(),T.YNc(28,Y,5,2,"ion-item",7),T.qZA(),T.TgZ(29,"ion-fab",8),T.NdJ("click",function(){return e.openAdd()}),T.TgZ(30,"ion-fab-button"),T._UZ(31,"ion-icon",9),T.qZA(),T.qZA(),T.qZA()),2&t&&(T.xp6(5),T.Oqu(T.lcZ(6,6,"FARM_MOD.MATERIAL")),T.xp6(10),T.hij(" ",T.lcZ(16,8,"MATERIAL_MOD.INPUT")," "),T.xp6(7),T.hij(" ",T.lcZ(23,10,"WAREHOUSE_MOD.LOGS")," "),T.xp6(4),T.AsE(" ",e.list.length," ",T.lcZ(27,12,"FARM_MOD.MATERIAL")," "),T.xp6(2),T.Q6J("ngForOf",e.list))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.wd,c.W2,c.jY,c.Nd,c.wI,c.PM,c.YG,c.gu,c.q_,c.yh,o.sg,c.IJ,c.W4,c.Ie,c.yW],pipes:[q.X$],styles:[""]}),t}()}],D=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=T.oAB({type:t}),t.\u0275inj=T.cJS({imports:[[u.Bz.forChild(C)],u.Bz]}),t}(),F=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=T.oAB({type:t}),t.\u0275inj=T.cJS({imports:[[o.ez,s.u5,s.UX,c.Pc,q.aw.forChild(),D]]}),t}()},27887:function(t,e,n){n.d(e,{E:function(){return i}});var i=function(){function t(){r(this,t),this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}return a(t,[{key:"setStart",value:function(t){this.start=t,!0===t&&(this.pending=!0,this.end=!1),this.result=null,this.count++}},{key:"setPending",value:function(t){this.pending=t,!1===t?this.start=!1:this.end=!0}},{key:"setResult",value:function(t){this.result=t,this.pending=!1,this.start=!1,this.end=!0}}]),t}()}}])}();