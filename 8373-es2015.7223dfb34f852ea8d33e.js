"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[8373],{31786:function(t,e,i){i.d(e,{B:function(){return g}});var o=i(64762),n=i(22923),s=i(37716),r=i(47063),a=i(84465),l=i(81780),c=i(38583),d=i(13619);function u(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"ion-button",8),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw(2).openConfirm(e.key)}),s._uU(1),s.qZA()}if(2&t){const t=e.$implicit,i=s.oxw(2);s.Q6J("fill",t.key==i.item.infor.status?"solid":"outline"),s.xp6(1),s.Oqu(t.value)}}function m(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"ion-list"),s.TgZ(1,"ion-item",5),s.NdJ("click",function(){s.CHM(t);const e=s.oxw();return e.modalController.dismiss(e.flagLoad)}),s.TgZ(2,"ion-text"),s._uU(3),s.ALo(4,"translate"),s.qZA(),s.TgZ(5,"ion-text",6),s._uU(6),s.qZA(),s.qZA(),s.TgZ(7,"ion-item",5),s.NdJ("click",function(){s.CHM(t);const e=s.oxw();return e.modalController.dismiss(e.flagLoad)}),s.TgZ(8,"ion-text"),s._uU(9),s.ALo(10,"translate"),s.qZA(),s.TgZ(11,"ion-text",6),s._uU(12),s.qZA(),s.qZA(),s.TgZ(13,"ion-item"),s.TgZ(14,"ion-text"),s._uU(15),s.qZA(),s.TgZ(16,"ion-text",6),s._uU(17),s.ALo(18,"date"),s.qZA(),s.qZA(),s.TgZ(19,"ion-item"),s.TgZ(20,"ion-text"),s._uU(21),s.ALo(22,"translate"),s.qZA(),s.TgZ(23,"ion-text",6),s._uU(24),s.qZA(),s.qZA(),s.TgZ(25,"ion-item"),s.TgZ(26,"ion-text"),s._uU(27),s.ALo(28,"translate"),s.qZA(),s.TgZ(29,"ion-text",6),s._uU(30),s.qZA(),s.qZA(),s.TgZ(31,"ion-item"),s.TgZ(32,"ion-text"),s._uU(33),s.ALo(34,"translate"),s.qZA(),s.TgZ(35,"ion-text",6),s._uU(36),s.qZA(),s.qZA(),s.TgZ(37,"ion-item"),s.YNc(38,u,2,2,"ion-button",7),s.ALo(39,"keyvalue"),s.qZA(),s.qZA()}if(2&t){const t=s.oxw();s.xp6(1),s.MGl("routerLink","/store/",t.item.warehouse.code,""),s.xp6(2),s.hij(" ",s.lcZ(4,15,"STORE")," "),s.xp6(3),s.hij(" ",t.item.warehouse.name," "),s.xp6(1),s.MGl("routerLink","/pond/",t.item.pond.code,""),s.xp6(2),s.hij(" ",s.lcZ(10,17,"POND")," "),s.xp6(3),s.hij(" ",t.item.pond.name," "),s.xp6(3),s.hij(" ",t.item.infor.user_name," "),s.xp6(2),s.hij(" ",s.xi3(18,19,1e3*t.item.infor.time,"HH:mm dd-MM-YYYY")," "),s.xp6(4),s.hij(" ",s.lcZ(22,22,"DEVICE_MOD.STATUS")," "),s.xp6(3),s.hij(" ","export"==t.item.infor.mod?"Xu\u1ea5t":"Nh\u1eadp l\u1ea1i"," "),s.xp6(3),s.hij(" ",s.lcZ(28,24,"POND_MOD.PRODUCT")," "),s.xp6(3),s.hij(" ",t.item.infor.product_name," "),s.xp6(3),s.hij(" ",s.lcZ(34,26,"NOTE")," "),s.xp6(3),s.hij(" ",t.item.infor.note," "),s.xp6(2),s.Q6J("ngForOf",s.lcZ(39,28,t.obStatus))}}let g=(()=>{class t{constructor(t,e,i,o,n){this.modalController=t,this.storeService=e,this.toastService=i,this.translate=o,this.alertController=n,this.obStatus={pending:"Ch\u1edd x\u1eed l\xfd",confirm:"\u0110\xe3 x\xe1c nh\u1eadn",reject:"Sai ph\u1ea1m"},this.flagLoad=!1}ngOnInit(){console.log(this.data),this.getDetail()}getDetail(){this.storeService.getApiStore("get","&id="+this.data.id+"&fcode="+this.storeService.getFarmCode(),"manager/warehouse-daily-api").subscribe(t=>{1==t.status?this.item=t.data:this.toastService.warning(t.error)},()=>{this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}openConfirm(t){return(0,o.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:this.translate.instant("NOTE"),inputs:[{name:"note",id:"note",type:"textarea",placeholder:this.translate.instant("NOTE")}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"Ok",handler:e=>{console.log(e),this.storeService.sendPost("confirm",{status:t,note:e.note},"&id="+this.data.id+"&fcode="+this.storeService.getFarmCode(),"manager/warehouse-daily-api").subscribe(i=>{1==i.status?(this.toastService.success(this.translate.instant("WALL.UPDATE_SUCCESS")),this.item.infor.status=t,this.item.infor.note=e.note,this.flagLoad=!0):this.toastService.warning(i.error)},()=>{this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}}]})).present()})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(r.IN),s.Y36(n.d),s.Y36(a.k),s.Y36(l.sK),s.Y36(r.Br))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-store-log-detail"]],inputs:{data:"data"},decls:10,vars:4,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],[1,"ion-padding"],[4,"ngIf"],["detail","",3,"routerLink","click"],["slot","end"],[3,"fill","click",4,"ngFor","ngForOf"],[3,"fill","click"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-buttons",0),s.TgZ(3,"ion-button",1),s.NdJ("click",function(){return e.modalController.dismiss(e.flagLoad)}),s._UZ(4,"ion-icon",2),s.qZA(),s.qZA(),s.TgZ(5,"ion-title"),s._uU(6),s.ALo(7,"translate"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(8,"ion-content",3),s.YNc(9,m,40,30,"ion-list",4),s.qZA()),2&t&&(s.xp6(6),s.Oqu(s.lcZ(7,2,"SHOP.DETAIL")),s.xp6(3),s.Q6J("ngIf",e.item))},directives:[r.Gu,r.sr,r.Sm,r.YG,r.gu,r.wd,r.W2,c.O5,r.q_,r.Ie,r.YI,d.rH,r.yW,c.sg],pipes:[l.X$,c.uU,c.Nd],styles:[""]}),t})()},99330:function(t,e,i){i.d(e,{o:function(){return g}});var o=i(90665),n=i(16738),s=i(22923),r=i(37716),a=i(47063),l=i(71239),c=i(38583),d=i(81780);function u(t,e){if(1&t&&(r.TgZ(0,"div"),r.TgZ(1,"ion-select-option",8),r._uU(2),r.qZA(),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.Q6J("value",t.infor.id),r.xp6(1),r.Oqu(t.infor.name)}}function m(t,e){if(1&t&&(r.TgZ(0,"div"),r.TgZ(1,"ion-select-option",8),r._uU(2),r.qZA(),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.Q6J("value",t.infor.code),r.xp6(1),r.Oqu(t.infor.name)}}let g=(()=>{class t{constructor(t,e,i){this.modalController=t,this.dbLocalService=e,this.storeService=i,this.form=new o.cw({from:new o.NI(n().subtract(180,"days").format("YYYY-MM-DD")),end:new o.NI(n().endOf("day").format("YYYY-MM-DD")),wcode:new o.NI(""),username:new o.NI(""),pond_id:new o.NI("")}),this.listStore=[],this.listPond=[],this.maxDate=n(),this.minDate=n().subtract(180,"days"),this.obStatus={pending:"Ch\u1edd x\u1eed l\xfd",confirm:"\u0110\xe3 x\xe1c nh\u1eadn",reject:"Sai ph\u1ea1m"}}ngOnInit(){console.log(this.data);let t=this.dbLocalService.farms.findIndex(t=>t.infor.code==this.storeService.getFarmCode());this.listPond=-1==t?[]:this.dbLocalService.ponds.filter(e=>e.infor.farm_id===this.dbLocalService.farms[t].infor.id),this.listStore=this.dbLocalService.stores.filter(t=>t.infor.farm_code===this.storeService.getFarmCode()),this.form.setValue(this.data)}onSubmit(){this.modalController.dismiss(this.form.value)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(a.IN),r.Y36(l.T),r.Y36(s.d))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-store-logs-search"]],inputs:{data:"data"},decls:45,vars:39,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],[3,"formGroup","ngSubmit"],["lines","inset"],["formControlName","from",3,"displayFormat","min","max"],["formControlName","end",3,"displayFormat","min","max"],["type","text","formControlName","pond_id","interface","action-sheet"],[3,"value"],[4,"ngFor","ngForOf"],["type","text","formControlName","wcode","interface","action-sheet"],[1,"ion-text-center","ion-padding"],["type","submit","color","primary","shape","round"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-header"),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-buttons",0),r.TgZ(3,"ion-button",1),r.NdJ("click",function(){return e.modalController.dismiss()}),r._UZ(4,"ion-icon",2),r.qZA(),r.qZA(),r.TgZ(5,"ion-title"),r._uU(6),r.ALo(7,"translate"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(8,"ion-content"),r.TgZ(9,"form",3),r.NdJ("ngSubmit",function(){return e.onSubmit()}),r.TgZ(10,"ion-list"),r.TgZ(11,"ion-item",4),r.TgZ(12,"ion-label"),r._uU(13),r.ALo(14,"translate"),r.qZA(),r._UZ(15,"ion-datetime",5),r.ALo(16,"translate"),r.qZA(),r.TgZ(17,"ion-item",4),r.TgZ(18,"ion-label"),r._uU(19),r.ALo(20,"translate"),r.qZA(),r._UZ(21,"ion-datetime",6),r.ALo(22,"translate"),r.qZA(),r.TgZ(23,"ion-item",4),r.TgZ(24,"ion-label"),r._uU(25),r.ALo(26,"translate"),r.qZA(),r.TgZ(27,"ion-select",7),r.TgZ(28,"ion-select-option",8),r._uU(29),r.ALo(30,"translate"),r.qZA(),r.YNc(31,u,3,2,"div",9),r.qZA(),r.qZA(),r.TgZ(32,"ion-item",4),r.TgZ(33,"ion-label"),r._uU(34),r.ALo(35,"translate"),r.qZA(),r.TgZ(36,"ion-select",10),r.TgZ(37,"ion-select-option",8),r._uU(38),r.ALo(39,"translate"),r.qZA(),r.YNc(40,m,3,2,"div",9),r.qZA(),r.qZA(),r.qZA(),r.TgZ(41,"div",11),r.TgZ(42,"ion-button",12),r._uU(43),r.ALo(44,"translate"),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(6),r.Oqu(r.lcZ(7,19,"SHOP.SEARCH")),r.xp6(3),r.Q6J("formGroup",e.form),r.xp6(4),r.Oqu(r.lcZ(14,21,"FARM_MOD.FROM")),r.xp6(2),r.Q6J("displayFormat",r.lcZ(16,23,"FORMAT_DATE_MOMENT"))("min",e.minDate.format("YYYY-MM-DD"))("max",e.maxDate.format("YYYY-MM-DD")),r.xp6(4),r.Oqu(r.lcZ(20,25,"FARM_MOD.TO")),r.xp6(2),r.Q6J("displayFormat",r.lcZ(22,27,"FORMAT_DATE_MOMENT"))("min",e.minDate.format("YYYY-MM-DD"))("max",e.maxDate.format("YYYY-MM-DD")),r.xp6(4),r.Oqu(r.lcZ(26,29,"POND")),r.xp6(3),r.Q6J("value",""),r.xp6(1),r.Oqu(r.lcZ(30,31,"NO")),r.xp6(2),r.Q6J("ngForOf",e.listPond),r.xp6(3),r.Oqu(r.lcZ(35,33,"STORE")),r.xp6(3),r.Q6J("value",""),r.xp6(1),r.Oqu(r.lcZ(39,35,"NO")),r.xp6(2),r.Q6J("ngForOf",e.listStore),r.xp6(3),r.hij("",r.lcZ(44,37,"WAREHOUSE_MOD.SAVE")," "))},directives:[a.Gu,a.sr,a.Sm,a.YG,a.gu,a.wd,a.W2,o._Y,o.JL,o.sg,a.q_,a.Ie,a.Q$,a.x4,a.QI,o.JJ,o.u,a.t9,a.n0,c.sg],pipes:[d.X$],styles:[""]}),t})()},98373:function(t,e,i){i.d(e,{B:function(){return q}});var o=i(64762),n=i(90665),s=i(16738),r=i(27887),a=i(31786),l=i(99330),c=i(22923),d=i(37716),u=i(81780),m=i(84465),g=i(13619),h=i(47063),p=i(38583);function Z(t,e){1&t&&d._UZ(0,"ion-progress-bar",11)}function f(t,e){1&t&&(d.TgZ(0,"ion-item"),d._uU(1),d.ALo(2,"translate"),d.qZA()),2&t&&(d.xp6(1),d.hij(" ",d.lcZ(2,1,"POND_MOD.NO_ITEM")," "))}function A(t,e){1&t&&d._UZ(0,"ion-icon",17)}function x(t,e){1&t&&d._UZ(0,"ion-icon",18)}function T(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"ion-item",12),d.NdJ("click",function(){const e=d.CHM(t).index;return d.oxw().presentDetail(e)}),d.TgZ(1,"ion-label"),d.TgZ(2,"p"),d.YNc(3,A,1,0,"ion-icon",13),d.YNc(4,x,1,0,"ion-icon",14),d._uU(5),d.qZA(),d.TgZ(6,"ion-text"),d.TgZ(7,"small"),d._uU(8),d._UZ(9,"span",15),d._uU(10),d.TgZ(11,"ion-text",16),d._uU(12),d.qZA(),d._uU(13),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&t){const t=e.$implicit,i=d.oxw();d.xp6(3),d.Q6J("ngIf","export"==t.mod),d.xp6(1),d.Q6J("ngIf","import"==t.mod),d.xp6(1),d.lnq(" ",t.date," ",t.detail," b\u1edfi ",t.user_name," "),d.xp6(3),d.hij(" ",i.obStatus[t.status]," | "),d.xp6(1),d.Q6J("innerHTML","import"==t.mod?"Nh\u1eadp l\u1ea1i":"Xu\u1ea5t",d.oJD),d.xp6(1),d.hij(" ",t.name," "),d.xp6(1),d.Q6J("color","import"==t.mod?"success":"danger"),d.xp6(1),d.Oqu(t.quantity),d.xp6(1),d.AsE(" ",t.unit," ",t.product_name," ")}}let q=(()=>{class t{constructor(t,e,i,o,a,l){this.translate=t,this.toastService=e,this.storeService=i,this.route=o,this.router=a,this.modalController=l,this.loadingFlag=new r.E,this.formSearch=new n.cw({from:new n.NI(s().subtract(180,"days").format("YYYY-MM-DD")),end:new n.NI(s().endOf("day").format("YYYY-MM-DD")),wcode:new n.NI(""),username:new n.NI(""),pond_id:new n.NI("")}),this.numRows=0,this.page=0,this.list=[],this.obStatus={pending:"Ch\u1edd x\u1eed l\xfd",confirm:"\u0110\xe3 x\xe1c nh\u1eadn",reject:"Sai ph\u1ea1m"}}ngOnInit(){let t=this.route.snapshot.paramMap.get("id");void 0===t?this.router.navigateByUrl("tabs"):(this.storeService.setFarmCode(t),this.getList())}doRefresh(t){this.resetData(),this.getList(),t.target.complete()}getList(){this.loadingFlag.setPending(!0);let t={from:s(this.formSearch.value.from).valueOf()/1e3,end:s(this.formSearch.value.end).endOf("day").valueOf()/1e3,wcode:this.formSearch.value.wcode,username:this.formSearch.value.username,pond_id:this.formSearch.value.pond_id};this.storeService.sendPost("list",t,"&page="+this.page+"&fcode="+this.storeService.getFarmCode(),"manager/warehouse-daily-api").subscribe(t=>{1==t.status?this.list=this.list.concat(t.data.list):this.toastService.warning(t.error),this.loadingFlag.setResult(!0)},()=>{this.toastService.danger(this.translate.instant("ERROR_CONNECT")),this.loadingFlag.setResult(!1)})}presentSearchLog(){return(0,o.mG)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:l.o,componentProps:{data:this.formSearch.value}});return t.onDidDismiss().then(t=>{console.log(t),t.data&&(this.resetData(),this.formSearch.setValue(t.data),this.getList())}),yield t.present()})}resetData(){this.list=[],this.numRows=0,this.page=0,this.formSearch.reset(),this.formSearch.patchValue({from:new n.NI(s().subtract(180,"days").format("YYYY-MM-DD")),end:new n.NI(s().endOf("day").format("YYYY-MM-DD"))})}presentDetail(t){return(0,o.mG)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:a.B,componentProps:{data:this.list[t]}});return e.onDidDismiss().then(t=>{t.data&&(this.resetData(),this.getList())}),yield e.present()})}loadMore(t){setTimeout(()=>{console.log("Done"),t.target.complete()},500),this.page+=1,this.getList()}}return t.\u0275fac=function(e){return new(e||t)(d.Y36(u.sK),d.Y36(m.k),d.Y36(c.d),d.Y36(g.gz),d.Y36(g.F0),d.Y36(h.IN))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-store-logs"]],decls:19,vars:6,consts:[["slot","start"],["text","","defaultHref","tabs/management"],["slot","end"],[3,"click"],["slot","icon-only","name","search-outline"],["type","indeterminate",4,"ngIf"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],["detail","",3,"click",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","dots"],["type","indeterminate"],["detail","",3,"click"],["color","danger","name","arrow-undo-circle-outline",4,"ngIf"],["color","success","name","arrow-redo-circle-outline",4,"ngIf"],[3,"innerHTML"],[3,"color"],["color","danger","name","arrow-undo-circle-outline"],["color","success","name","arrow-redo-circle-outline"]],template:function(t,e){1&t&&(d.TgZ(0,"ion-header"),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-buttons",0),d._UZ(3,"ion-back-button",1),d.qZA(),d.TgZ(4,"ion-title"),d._uU(5),d.ALo(6,"translate"),d.qZA(),d.TgZ(7,"ion-buttons",2),d.TgZ(8,"ion-button",3),d.NdJ("click",function(){return e.presentSearchLog()}),d._UZ(9,"ion-icon",4),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.YNc(10,Z,1,0,"ion-progress-bar",5),d.TgZ(11,"ion-content"),d.TgZ(12,"ion-refresher",6),d.NdJ("ionRefresh",function(t){return e.doRefresh(t)}),d._UZ(13,"ion-refresher-content"),d.qZA(),d.TgZ(14,"ion-list"),d.YNc(15,f,3,3,"ion-item",7),d.YNc(16,T,14,12,"ion-item",8),d.qZA(),d.TgZ(17,"ion-infinite-scroll",9),d.NdJ("ionInfinite",function(t){return e.loadMore(t)}),d._UZ(18,"ion-infinite-scroll-content",10),d.qZA(),d.qZA()),2&t&&(d.xp6(5),d.Oqu(d.lcZ(6,4,"WAREHOUSE_MOD.LOGS")),d.xp6(5),d.Q6J("ngIf",e.loadingFlag.pending),d.xp6(5),d.Q6J("ngIf",0===e.list.length),d.xp6(1),d.Q6J("ngForOf",e.list))},directives:[h.Gu,h.sr,h.Sm,h.oU,h.cs,h.wd,h.YG,h.gu,p.O5,h.W2,h.nJ,h.Wo,h.q_,p.sg,h.ju,h.MB,h.X7,h.Ie,h.Q$,h.yW],pipes:[u.X$],styles:[""]}),t})()}}]);