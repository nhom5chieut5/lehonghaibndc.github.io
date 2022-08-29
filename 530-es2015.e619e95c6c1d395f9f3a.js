"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[530],{54395:function(t,e,i){i.d(e,{b:function(){return o}});var n=i(77393),s=i(33637);function o(t,e=s.P){return i=>i.lift(new r(t,e))}class r{constructor(t,e){this.dueTime=t,this.scheduler=e}call(t,e){return e.subscribe(new a(t,this.dueTime,this.scheduler))}}class a extends n.L{constructor(t,e,i){super(t),this.dueTime=e,this.scheduler=i,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(l,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:t}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}clearDebounce(){const t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}function l(t){t.debouncedNext()}},90530:function(t,e,i){i.r(e),i.d(e,{MaterialPageModule:function(){return D}});var n=i(38583),s=i(90665),o=i(47063),r=i(13619),a=i(64762),l=i(27887),c=i(16738),u=i(79765),d=i(25917),m=i(54395),h=i(87519),g=i(43190),Z=i(88002),p=i(15189),A=i(37716);let f=(()=>{class t{constructor(t){this.reqAPIService=t,this.URL_API="/manager/material-api"}setFarmCode(t){this.fcode=t}getFarmCode(){return this.fcode}list(){return this.reqAPIService.get(this.URL_API+"?action=list&fcode="+this.fcode)}listAction(){return this.reqAPIService.get(this.URL_API+"?action=listAction&fcode="+this.fcode)}add(t){return this.reqAPIService.post(this.URL_API+"?action=add&fcode="+this.fcode,t)}addAction(t){return this.reqAPIService.post(this.URL_API+"?action=addAction&fcode="+this.fcode,t)}edit(t,e){return this.reqAPIService.post(this.URL_API+"?action=update&id="+t+"&fcode="+this.fcode,e)}editAction(t,e){return this.reqAPIService.post(this.URL_API+"?action=editAction&code="+t+"&fcode="+this.fcode,e)}remove(t){return this.reqAPIService.get(this.URL_API+"?action=remove&id="+t+"&fcode="+this.fcode)}removeAction(t){return this.reqAPIService.get(this.URL_API+"?action=removeAction&code="+t+"&fcode="+this.fcode)}getAction(t){return this.reqAPIService.get(this.URL_API+"?action=getAction&code="+t+"&fcode="+this.fcode)}searchTerm(t){return this.reqAPIService.post(this.URL_API+"?action=searchTerm&fcode="+this.fcode,{name:t})}}return t.\u0275fac=function(e){return new(e||t)(A.LFG(p.$))},t.\u0275prov=A.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var T=i(81780),q=i(84465);function _(t,e){1&t&&A._UZ(0,"ion-progress-bar",12)}function v(t,e){if(1&t){const t=A.EpF();A.TgZ(0,"ion-item"),A.TgZ(1,"ion-text"),A._uU(2),A.qZA(),A.TgZ(3,"ion-button",16),A.NdJ("click",function(){const e=A.CHM(t).$implicit;return A.oxw(2).setTermName(e.term_name)}),A._uU(4),A.ALo(5,"translate"),A.qZA(),A.qZA()}if(2&t){const t=e.$implicit;A.xp6(2),A.hij(" ",t.term_name," "),A.xp6(2),A.hij(" ",A.lcZ(5,2,"SELECT")," ")}}function x(t,e){if(1&t&&(A.TgZ(0,"ion-item"),A.TgZ(1,"ion-label"),A.TgZ(2,"p"),A._uU(3),A.qZA(),A.qZA(),A.qZA()),2&t){const t=A.oxw(2);A.xp6(3),A.Oqu(t.message)}}function b(t,e){if(1&t&&(A.TgZ(0,"ion-list",13),A.YNc(1,v,6,4,"ion-item",14),A.ALo(2,"async"),A.YNc(3,x,4,1,"ion-item",15),A.qZA()),2&t){const t=A.oxw();A.xp6(1),A.Q6J("ngForOf",A.lcZ(2,2,t.terms$)),A.xp6(2),A.Q6J("ngIf",t.message)}}let S=(()=>{class t{constructor(t,e,i,n,o){this.modalController=t,this.actionSheetController=e,this.translate=i,this.materialService=n,this.toastService=o,this.minDate=c().endOf("day"),this.form=new s.cw({name:new s.NI("",s.kI.required),term_name:new s.NI("",s.kI.required),expiry:new s.NI(c().add(180,"days").format("YYYY-MM-DD"),s.kI.required)}),this.loadingFlag=new l.E,this.search$=new u.xQ,this.message=""}ngOnInit(){this.form.setValue({name:this.data.name,term_name:this.data.term_name,expiry:c(1e3*this.data.expiry).format("YYYY-MM-DD")});let t=this.search$.pipe((0,m.b)(300),(0,h.x)(),(0,g.w)(t=>this.getListTerm(t)));this.terms$=t,this.terms$.subscribe(t=>{this.loadingFlag.setResult(!0)})}getListTerm(t){return this.loadingFlag.setPending(!0),t.trim()?this.materialService.searchTerm(t).pipe((0,Z.U)(t=>t.data.filter(t=>!this.termSelected||t.term_name!=this.form.value.term_name))):(this.loadingFlag.setResult(!0),this.message="",(0,d.of)([]))}save(){this.loadingFlag.setPending(!0);let t={name:this.form.value.name,term_name:this.form.value.term_name,expiry:c(this.form.value.expiry).valueOf()/1e3};this.materialService.edit(this.data.id,t).subscribe(e=>{1==e.status?(this.modalController.dismiss(t),this.toastService.success(this.translate.instant("WALL.UPDATE_SUCCESS"))):this.toastService.success(e.error),this.loadingFlag.setResult(!0)},()=>{this.loadingFlag.setResult(!1),this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}searchTerm(){this.search$.next(this.form.value.term_name)}setTermName(t){this.form.patchValue({term_name:t}),this.termSelected=t}resetTermName(){this.termSelected=null}}return t.\u0275fac=function(e){return new(e||t)(A.Y36(o.IN),A.Y36(o.BX),A.Y36(T.sK),A.Y36(f),A.Y36(q.k))},t.\u0275cmp=A.Xpm({type:t,selectors:[["app-material-edit"]],inputs:{data:"data"},decls:32,vars:23,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["slot","end"],[3,"disabled","click"],[3,"formGroup"],["type","indeterminate",4,"ngIf"],["position","floating"],["formControlName","expiry",3,"displayFormat","min"],["formControlName","name"],["formControlName","term_name",3,"ionChange","ionFocus"],["lines","none",4,"ngIf"],["type","indeterminate"],["lines","none"],[4,"ngFor","ngForOf"],[4,"ngIf"],["slot","end",3,"click"]],template:function(t,e){1&t&&(A.TgZ(0,"ion-header"),A.TgZ(1,"ion-toolbar"),A.TgZ(2,"ion-buttons",0),A.TgZ(3,"ion-button",1),A.NdJ("click",function(){return e.modalController.dismiss()}),A._UZ(4,"ion-icon",2),A.qZA(),A.qZA(),A.TgZ(5,"ion-title"),A._uU(6),A.ALo(7,"translate"),A.qZA(),A.TgZ(8,"ion-buttons",3),A.TgZ(9,"ion-button",4),A.NdJ("click",function(){return e.save()}),A._uU(10),A.ALo(11,"translate"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(12,"ion-content",5),A.YNc(13,_,1,0,"ion-progress-bar",6),A.TgZ(14,"ion-grid"),A.TgZ(15,"ion-item"),A.TgZ(16,"ion-label",7),A._uU(17),A.ALo(18,"translate"),A.qZA(),A._UZ(19,"ion-datetime",8),A.ALo(20,"translate"),A.qZA(),A.TgZ(21,"ion-item"),A.TgZ(22,"ion-label",7),A._uU(23),A.ALo(24,"translate"),A.qZA(),A._UZ(25,"ion-input",9),A.qZA(),A.TgZ(26,"ion-item"),A.TgZ(27,"ion-label",7),A._uU(28),A.ALo(29,"translate"),A.qZA(),A.TgZ(30,"ion-input",10),A.NdJ("ionChange",function(){return e.searchTerm()})("ionFocus",function(){return e.resetTermName()}),A.qZA(),A.qZA(),A.qZA(),A.YNc(31,b,4,4,"ion-list",11),A.qZA()),2&t&&(A.xp6(6),A.Oqu(A.lcZ(7,11,"EDIT")),A.xp6(3),A.Q6J("disabled",e.form.invalid),A.xp6(1),A.Oqu(A.lcZ(11,13,"FARM_MOD.SAVE")),A.xp6(2),A.Q6J("formGroup",e.form),A.xp6(1),A.Q6J("ngIf",e.loadingFlag.pending),A.xp6(4),A.Oqu(A.lcZ(18,15,"MATERIAL_MOD.EXPERY")),A.xp6(2),A.Q6J("displayFormat",A.lcZ(20,17,"FORMAT_DATE_MOMENT"))("min",e.minDate.format("YYYY-MM-DD")),A.xp6(4),A.Oqu(A.lcZ(24,19,"NAME")),A.xp6(5),A.Oqu(A.lcZ(29,21,"MATERIAL_MOD.TERM_NAME")),A.xp6(3),A.Q6J("ngIf",!e.termSelected))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,s.JL,s.sg,n.O5,o.jY,o.Ie,o.Q$,o.x4,o.QI,s.JJ,s.u,o.pK,o.j9,o.X7,o.q_,n.sg,o.yW],pipes:[T.X$,n.Ov],styles:[""]}),t})(),I=(()=>{class t{constructor(t,e,i,n,s){this.modalController=t,this.actionSheetController=e,this.translate=i,this.materialService=n,this.toastService=s,this.loadingFlag=new l.E}ngOnInit(){console.log(this.data)}openRemove(){return(0,a.mG)(this,void 0,void 0,function*(){yield(yield this.actionSheetController.create({header:this.translate.instant("WAREHOUSE_MOD.CONFIRM"),buttons:[{text:this.translate.instant("WAREHOUSE_MOD.DELETE"),role:"destructive",icon:"trash-outline",handler:()=>{this.loadingFlag.setPending(!0),this.materialService.remove(this.data.id).subscribe(t=>{1==t.status?(this.toastService.success(this.translate.instant("DEVICE_MOD.REMOVE_DATA_SUCCESS")),this.modalController.dismiss()):this.toastService.warning(t.error),this.loadingFlag.setResult(!0)},()=>{this.loadingFlag.setResult(!1),this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}},{text:this.translate.instant("WAREHOUSE_MOD.NO"),icon:"close",role:"cancel"}]})).present()})}openEdit(){return(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:S,componentProps:{data:this.data}});return t.onDidDismiss().then(t=>{t.data&&(this.data.name=t.data.name,this.data.term_name=t.data.term_name,this.data.expiry=t.data.expiry,console.log(t.data))}),yield t.present()})}}return t.\u0275fac=function(e){return new(e||t)(A.Y36(o.IN),A.Y36(o.BX),A.Y36(T.sK),A.Y36(f),A.Y36(q.k))},t.\u0275cmp=A.Xpm({type:t,selectors:[["app-detail"]],inputs:{data:"data"},decls:44,vars:28,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],[1,"ion-text-center"],["slot","end"],[1,"ion-padding"],["size","large","color","primary","expand","block","shape","round","fill","outline",3,"click"],["size","large","color","danger","expand","block","shape","round","fill","outline",3,"click"],["name","remove-circle-outline","slot","start"]],template:function(t,e){1&t&&(A.TgZ(0,"ion-header"),A.TgZ(1,"ion-toolbar"),A.TgZ(2,"ion-buttons",0),A.TgZ(3,"ion-button",1),A.NdJ("click",function(){return e.modalController.dismiss()}),A._UZ(4,"ion-icon",2),A.qZA(),A.qZA(),A.TgZ(5,"ion-title"),A._uU(6),A.ALo(7,"translate"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(8,"ion-content"),A.TgZ(9,"h1",3),A._uU(10),A.qZA(),A.TgZ(11,"ion-item"),A.TgZ(12,"ion-label"),A._uU(13),A.ALo(14,"translate"),A.qZA(),A.TgZ(15,"ion-text",4),A._uU(16),A.qZA(),A.qZA(),A.TgZ(17,"ion-item"),A.TgZ(18,"ion-label"),A._uU(19),A.ALo(20,"translate"),A.qZA(),A.TgZ(21,"ion-text",4),A._uU(22),A.ALo(23,"date"),A.qZA(),A.qZA(),A.TgZ(24,"ion-item"),A.TgZ(25,"ion-label"),A._uU(26),A.ALo(27,"translate"),A.qZA(),A.TgZ(28,"ion-text",4),A._uU(29),A.qZA(),A.qZA(),A.TgZ(30,"ion-item"),A.TgZ(31,"ion-label"),A._uU(32),A.ALo(33,"translate"),A.qZA(),A.TgZ(34,"ion-text",4),A._uU(35),A.qZA(),A.qZA(),A.TgZ(36,"div",5),A.TgZ(37,"ion-button",6),A.NdJ("click",function(){return e.openEdit()}),A._uU(38),A.ALo(39,"translate"),A.qZA(),A.TgZ(40,"ion-button",7),A.NdJ("click",function(){return e.openRemove()}),A._UZ(41,"ion-icon",8),A._uU(42),A.ALo(43,"translate"),A.qZA(),A.qZA(),A.qZA()),2&t&&(A.xp6(6),A.Oqu(A.lcZ(7,12,"SHOP.DETAIL")),A.xp6(4),A.Oqu(e.data.name),A.xp6(3),A.hij(" ",A.lcZ(14,14,"MATERIAL_MOD.TERM_NAME")," "),A.xp6(3),A.hij(" ",e.data.term_name," "),A.xp6(3),A.hij(" ",A.lcZ(20,16,"MATERIAL_MOD.EXPERY")," "),A.xp6(3),A.hij(" ",A.lcZ(23,18,1e3*e.data.expiry)," "),A.xp6(4),A.hij(" ",A.lcZ(27,20,"MATERIAL_MOD.QUANTITY_AVAILABLE")," "),A.xp6(3),A.hij(" ",e.data.quantity," "),A.xp6(3),A.hij(" ",A.lcZ(33,22,"MATERIAL_MOD.LOSS")," "),A.xp6(3),A.hij(" ",e.data.quantity_loss," "),A.xp6(3),A.hij(" ",A.lcZ(39,24,"WAREHOUSE_MOD.EDIT_INFOR")," "),A.xp6(4),A.hij(" ",A.lcZ(43,26,"WAREHOUSE_MOD.DELETE")," "))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,o.Ie,o.Q$,o.yW],pipes:[T.X$,n.uU],styles:[""]}),t})(),E=(()=>{class t{constructor(t,e,i){this.modalController=t,this.actionSheetController=e,this.translate=i}ngOnInit(){}save(){}}return t.\u0275fac=function(e){return new(e||t)(A.Y36(o.IN),A.Y36(o.BX),A.Y36(T.sK))},t.\u0275cmp=A.Xpm({type:t,selectors:[["app-material-action-add"]],decls:13,vars:6,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["slot","end"]],template:function(t,e){1&t&&(A.TgZ(0,"ion-header"),A.TgZ(1,"ion-toolbar"),A.TgZ(2,"ion-buttons",0),A.TgZ(3,"ion-button",1),A.NdJ("click",function(){return e.modalController.dismiss()}),A._UZ(4,"ion-icon",2),A.qZA(),A.qZA(),A.TgZ(5,"ion-title"),A._uU(6),A.ALo(7,"translate"),A.qZA(),A.TgZ(8,"ion-buttons",3),A.TgZ(9,"ion-button",1),A.NdJ("click",function(){return e.save()}),A._uU(10),A.ALo(11,"translate"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A._UZ(12,"ion-content")),2&t&&(A.xp6(6),A.Oqu(A.lcZ(7,2,"MATERIAL_MOD.INPUT")),A.xp6(4),A.Oqu(A.lcZ(11,4,"SAVE")))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2],pipes:[T.X$],styles:[""]}),t})(),O=(()=>{class t{constructor(t,e,i,n,s){this.modalController=t,this.actionSheetController=e,this.translate=i,this.materialService=n,this.toastService=s,this.loadingFlag=new l.E}ngOnInit(){this.getList()}getList(){this.loadingFlag.setPending(!0),this.materialService.listAction().subscribe(t=>{1==t.status?this.list=t.data:this.toastService.warning(t.error),this.loadingFlag.setResult(!0)},()=>{this.loadingFlag.setResult(!1),this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}}return t.\u0275fac=function(e){return new(e||t)(A.Y36(o.IN),A.Y36(o.BX),A.Y36(T.sK),A.Y36(f),A.Y36(q.k))},t.\u0275cmp=A.Xpm({type:t,selectors:[["app-material-action-list"]],decls:9,vars:3,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"]],template:function(t,e){1&t&&(A.TgZ(0,"ion-header"),A.TgZ(1,"ion-toolbar"),A.TgZ(2,"ion-buttons",0),A.TgZ(3,"ion-button",1),A.NdJ("click",function(){return e.modalController.dismiss()}),A._UZ(4,"ion-icon",2),A.qZA(),A.qZA(),A.TgZ(5,"ion-title"),A._uU(6),A.ALo(7,"translate"),A.qZA(),A.qZA(),A.qZA(),A._UZ(8,"ion-content")),2&t&&(A.xp6(6),A.Oqu(A.lcZ(7,1,"MATERIAL_MOD.HISTORY")))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2],pipes:[T.X$],styles:[""]}),t})();function U(t,e){1&t&&A._UZ(0,"ion-progress-bar",12)}function L(t,e){if(1&t){const t=A.EpF();A.TgZ(0,"ion-item"),A.TgZ(1,"ion-text"),A._uU(2),A.qZA(),A.TgZ(3,"ion-button",16),A.NdJ("click",function(){const e=A.CHM(t).$implicit;return A.oxw(2).setTermName(e.term_name)}),A._uU(4),A.ALo(5,"translate"),A.qZA(),A.qZA()}if(2&t){const t=e.$implicit;A.xp6(2),A.hij(" ",t.term_name," "),A.xp6(2),A.hij(" ",A.lcZ(5,2,"SELECT")," ")}}function N(t,e){if(1&t&&(A.TgZ(0,"ion-item"),A.TgZ(1,"ion-label"),A.TgZ(2,"p"),A._uU(3),A.qZA(),A.qZA(),A.qZA()),2&t){const t=A.oxw(2);A.xp6(3),A.Oqu(t.message)}}function R(t,e){if(1&t&&(A.TgZ(0,"ion-list",13),A.YNc(1,L,6,4,"ion-item",14),A.ALo(2,"async"),A.YNc(3,N,4,1,"ion-item",15),A.qZA()),2&t){const t=A.oxw();A.xp6(1),A.Q6J("ngForOf",A.lcZ(2,2,t.terms$)),A.xp6(2),A.Q6J("ngIf",t.message)}}let M=(()=>{class t{constructor(t,e,i,n,o){this.modalController=t,this.actionSheetController=e,this.translate=i,this.materialService=n,this.toastService=o,this.minDate=c().endOf("day"),this.form=new s.cw({name:new s.NI("",s.kI.required),term_name:new s.NI("",s.kI.required),expiry:new s.NI(c().add(180,"days").format("YYYY-MM-DD"),s.kI.required)}),this.loadingFlag=new l.E,this.search$=new u.xQ,this.message=""}ngOnInit(){let t=this.search$.pipe((0,m.b)(300),(0,h.x)(),(0,g.w)(t=>this.getListTerm(t)));this.terms$=t,this.terms$.subscribe(t=>{this.loadingFlag.setResult(!0)})}getListTerm(t){return this.loadingFlag.setPending(!0),t.trim()?this.materialService.searchTerm(t).pipe((0,Z.U)(t=>t.data.filter(t=>!this.termSelected||t.term_name!=this.form.value.term_name))):(this.loadingFlag.setResult(!0),this.message="",(0,d.of)([]))}save(){this.loadingFlag.setPending(!0);let t={name:this.form.value.name,term_name:this.form.value.term_name,expiry:c(this.form.value.expiry).valueOf()/1e3};this.materialService.add(t).subscribe(e=>{1==e.status?(this.modalController.dismiss(t),this.toastService.success(this.translate.instant("SHOP.CART.ADDRESS.ADD_SUCCESS"))):this.toastService.success(e.error),this.loadingFlag.setResult(!0)},()=>{this.loadingFlag.setResult(!1),this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}searchTerm(){this.search$.next(this.form.value.term_name)}setTermName(t){this.form.patchValue({term_name:t}),this.termSelected=t}resetTermName(){this.termSelected=null}}return t.\u0275fac=function(e){return new(e||t)(A.Y36(o.IN),A.Y36(o.BX),A.Y36(T.sK),A.Y36(f),A.Y36(q.k))},t.\u0275cmp=A.Xpm({type:t,selectors:[["app-material-add"]],decls:32,vars:23,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["slot","end"],[3,"disabled","click"],[3,"formGroup"],["type","indeterminate",4,"ngIf"],["position","floating"],["formControlName","expiry",3,"displayFormat","min"],["formControlName","name"],["formControlName","term_name",3,"ionChange","ionFocus"],["lines","none",4,"ngIf"],["type","indeterminate"],["lines","none"],[4,"ngFor","ngForOf"],[4,"ngIf"],["slot","end",3,"click"]],template:function(t,e){1&t&&(A.TgZ(0,"ion-header"),A.TgZ(1,"ion-toolbar"),A.TgZ(2,"ion-buttons",0),A.TgZ(3,"ion-button",1),A.NdJ("click",function(){return e.modalController.dismiss()}),A._UZ(4,"ion-icon",2),A.qZA(),A.qZA(),A.TgZ(5,"ion-title"),A._uU(6),A.ALo(7,"translate"),A.qZA(),A.TgZ(8,"ion-buttons",3),A.TgZ(9,"ion-button",4),A.NdJ("click",function(){return e.save()}),A._uU(10),A.ALo(11,"translate"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(12,"ion-content",5),A.YNc(13,U,1,0,"ion-progress-bar",6),A.TgZ(14,"ion-grid"),A.TgZ(15,"ion-item"),A.TgZ(16,"ion-label",7),A._uU(17),A.ALo(18,"translate"),A.qZA(),A._UZ(19,"ion-datetime",8),A.ALo(20,"translate"),A.qZA(),A.TgZ(21,"ion-item"),A.TgZ(22,"ion-label",7),A._uU(23),A.ALo(24,"translate"),A.qZA(),A._UZ(25,"ion-input",9),A.qZA(),A.TgZ(26,"ion-item"),A.TgZ(27,"ion-label",7),A._uU(28),A.ALo(29,"translate"),A.qZA(),A.TgZ(30,"ion-input",10),A.NdJ("ionChange",function(){return e.searchTerm()})("ionFocus",function(){return e.resetTermName()}),A.qZA(),A.qZA(),A.qZA(),A.YNc(31,R,4,4,"ion-list",11),A.qZA()),2&t&&(A.xp6(6),A.Oqu(A.lcZ(7,11,"ADD")),A.xp6(3),A.Q6J("disabled",e.form.invalid),A.xp6(1),A.Oqu(A.lcZ(11,13,"FARM_MOD.SAVE")),A.xp6(2),A.Q6J("formGroup",e.form),A.xp6(1),A.Q6J("ngIf",e.loadingFlag.pending),A.xp6(4),A.Oqu(A.lcZ(18,15,"MATERIAL_MOD.EXPERY")),A.xp6(2),A.Q6J("displayFormat",A.lcZ(20,17,"FORMAT_DATE_MOMENT"))("min",e.minDate.format("YYYY-MM-DD")),A.xp6(4),A.Oqu(A.lcZ(24,19,"NAME")),A.xp6(5),A.Oqu(A.lcZ(29,21,"MATERIAL_MOD.TERM_NAME")),A.xp6(3),A.Q6J("ngIf",!e.termSelected))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,s.JL,s.sg,n.O5,o.jY,o.Ie,o.Q$,o.x4,o.QI,s.JJ,s.u,o.pK,o.j9,o.X7,o.q_,n.sg,o.yW],pipes:[T.X$,n.Ov],styles:[""]}),t})();function Y(t,e){if(1&t){const t=A.EpF();A.TgZ(0,"ion-item",10),A.NdJ("click",function(){const e=A.CHM(t),i=e.$implicit,n=e.index;return A.oxw().openDetail(i,n)}),A.TgZ(1,"ion-text"),A._uU(2),A.qZA(),A.TgZ(3,"ion-text",11),A._uU(4),A.qZA(),A.qZA()}if(2&t){const t=e.$implicit;A.xp6(2),A.Oqu(t.name),A.xp6(2),A.Oqu(t.quantity_available)}}const y=[{path:"",component:(()=>{class t{constructor(t,e,i,n,s){this.translate=t,this.toastService=e,this.materialService=i,this.route=n,this.modalController=s,this.list=[],this.loadingFlag=new l.E}ngOnInit(){this.materialService.setFarmCode(this.route.snapshot.paramMap.get("id")),this.getList()}getList(){this.loadingFlag.setPending(!0),this.materialService.list().subscribe(t=>{1==t.status?(this.list=t.data,console.log(this.list)):this.toastService.warning(t.error),this.loadingFlag.setResult(!0)},()=>{this.loadingFlag.setResult(!1),this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}openDetail(t,e){return(0,a.mG)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:I,componentProps:{data:t}});return e.onDidDismiss().then(t=>{this.getList()}),yield e.present()})}openAdd(){return(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:M});return t.onDidDismiss().then(t=>{this.getList()}),yield t.present()})}openImport(){return(0,a.mG)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:E,componentProps:{data:"import"}})).present()})}openListAction(){return(0,a.mG)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:O})).present()})}}return t.\u0275fac=function(e){return new(e||t)(A.Y36(T.sK),A.Y36(q.k),A.Y36(f),A.Y36(r.gz),A.Y36(o.IN))},t.\u0275cmp=A.Xpm({type:t,selectors:[["app-material"]],decls:32,vars:14,consts:[["slot","start"],["text","","defaultHref","tabs/management"],[1,"ion-text-center","ion-align-self-center"],["mode","ios",1,"menu-icon-square",3,"click"],["fill","clear","color","light"],["color","primary","name","list-outline",1,"icon-large"],["color","primary","name","clipboard-outline",1,"icon-large"],["detail","",3,"click",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["name","add"],["detail","",3,"click"],["slot","end"]],template:function(t,e){1&t&&(A.TgZ(0,"ion-header"),A.TgZ(1,"ion-toolbar"),A.TgZ(2,"ion-buttons",0),A._UZ(3,"ion-back-button",1),A.qZA(),A.TgZ(4,"ion-title"),A._uU(5),A.ALo(6,"translate"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(7,"ion-content"),A.TgZ(8,"ion-grid"),A.TgZ(9,"ion-row"),A.TgZ(10,"ion-col",2),A.TgZ(11,"ion-card",3),A.NdJ("click",function(){return e.openImport()}),A.TgZ(12,"ion-button",4),A._UZ(13,"ion-icon",5),A.qZA(),A._UZ(14,"br"),A._uU(15),A.ALo(16,"translate"),A.qZA(),A.qZA(),A.TgZ(17,"ion-col",2),A.TgZ(18,"ion-card",3),A.NdJ("click",function(){return e.openListAction()}),A.TgZ(19,"ion-button",4),A._UZ(20,"ion-icon",6),A.qZA(),A._UZ(21,"br"),A._uU(22),A.ALo(23,"translate"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(24,"ion-list"),A.TgZ(25,"ion-list-header"),A._uU(26),A.ALo(27,"translate"),A.qZA(),A.YNc(28,Y,5,2,"ion-item",7),A.qZA(),A.TgZ(29,"ion-fab",8),A.NdJ("click",function(){return e.openAdd()}),A.TgZ(30,"ion-fab-button"),A._UZ(31,"ion-icon",9),A.qZA(),A.qZA(),A.qZA()),2&t&&(A.xp6(5),A.Oqu(A.lcZ(6,6,"FARM_MOD.MATERIAL")),A.xp6(10),A.hij(" ",A.lcZ(16,8,"MATERIAL_MOD.INPUT")," "),A.xp6(7),A.hij(" ",A.lcZ(23,10,"WAREHOUSE_MOD.LOGS")," "),A.xp6(4),A.AsE(" ",e.list.length," ",A.lcZ(27,12,"FARM_MOD.MATERIAL")," "),A.xp6(2),A.Q6J("ngForOf",e.list))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.W2,o.jY,o.Nd,o.wI,o.PM,o.YG,o.gu,o.q_,o.yh,n.sg,o.IJ,o.W4,o.Ie,o.yW],pipes:[T.X$],styles:[""]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=A.oAB({type:t}),t.\u0275inj=A.cJS({imports:[[r.Bz.forChild(y)],r.Bz]}),t})(),D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=A.oAB({type:t}),t.\u0275inj=A.cJS({imports:[[n.ez,s.u5,s.UX,o.Pc,T.aw.forChild(),C]]}),t})()},27887:function(t,e,i){i.d(e,{E:function(){return n}});class n{constructor(){this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}setStart(t){this.start=t,!0===t&&(this.pending=!0,this.end=!1),this.result=null,this.count++}setPending(t){this.pending=t,!1===t?this.start=!1:this.end=!0}setResult(t){this.result=t,this.pending=!1,this.start=!1,this.end=!0}}}}]);