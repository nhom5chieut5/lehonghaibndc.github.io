"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[550],{30550:function(t,e,i){i.r(e),i.d(e,{StoreLogDetailPageModule:function(){return u}});var o=i(38583),n=i(90665),s=i(47063),r=i(13619),a=i(31786),c=i(37716);const l=[{path:"",component:a.B}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.Bz.forChild(l)],r.Bz]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.ez,n.u5,s.Pc,d]]}),t})()},31786:function(t,e,i){i.d(e,{B:function(){return p}});var o=i(64762),n=i(22923),s=i(37716),r=i(47063),a=i(84465),c=i(81780),l=i(38583),d=i(13619);function u(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"ion-button",8),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw(2).openConfirm(e.key)}),s._uU(1),s.qZA()}if(2&t){const t=e.$implicit,i=s.oxw(2);s.Q6J("fill",t.key==i.item.infor.status?"solid":"outline"),s.xp6(1),s.Oqu(t.value)}}function h(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"ion-list"),s.TgZ(1,"ion-item",5),s.NdJ("click",function(){s.CHM(t);const e=s.oxw();return e.modalController.dismiss(e.flagLoad)}),s.TgZ(2,"ion-text"),s._uU(3),s.ALo(4,"translate"),s.qZA(),s.TgZ(5,"ion-text",6),s._uU(6),s.qZA(),s.qZA(),s.TgZ(7,"ion-item",5),s.NdJ("click",function(){s.CHM(t);const e=s.oxw();return e.modalController.dismiss(e.flagLoad)}),s.TgZ(8,"ion-text"),s._uU(9),s.ALo(10,"translate"),s.qZA(),s.TgZ(11,"ion-text",6),s._uU(12),s.qZA(),s.qZA(),s.TgZ(13,"ion-item"),s.TgZ(14,"ion-text"),s._uU(15),s.qZA(),s.TgZ(16,"ion-text",6),s._uU(17),s.ALo(18,"date"),s.qZA(),s.qZA(),s.TgZ(19,"ion-item"),s.TgZ(20,"ion-text"),s._uU(21),s.ALo(22,"translate"),s.qZA(),s.TgZ(23,"ion-text",6),s._uU(24),s.qZA(),s.qZA(),s.TgZ(25,"ion-item"),s.TgZ(26,"ion-text"),s._uU(27),s.ALo(28,"translate"),s.qZA(),s.TgZ(29,"ion-text",6),s._uU(30),s.qZA(),s.qZA(),s.TgZ(31,"ion-item"),s.TgZ(32,"ion-text"),s._uU(33),s.ALo(34,"translate"),s.qZA(),s.TgZ(35,"ion-text",6),s._uU(36),s.qZA(),s.qZA(),s.TgZ(37,"ion-item"),s.YNc(38,u,2,2,"ion-button",7),s.ALo(39,"keyvalue"),s.qZA(),s.qZA()}if(2&t){const t=s.oxw();s.xp6(1),s.MGl("routerLink","/store/",t.item.warehouse.code,""),s.xp6(2),s.hij(" ",s.lcZ(4,15,"STORE")," "),s.xp6(3),s.hij(" ",t.item.warehouse.name," "),s.xp6(1),s.MGl("routerLink","/pond/",t.item.pond.code,""),s.xp6(2),s.hij(" ",s.lcZ(10,17,"POND")," "),s.xp6(3),s.hij(" ",t.item.pond.name," "),s.xp6(3),s.hij(" ",t.item.infor.user_name," "),s.xp6(2),s.hij(" ",s.xi3(18,19,1e3*t.item.infor.time,"HH:mm dd-MM-YYYY")," "),s.xp6(4),s.hij(" ",s.lcZ(22,22,"DEVICE_MOD.STATUS")," "),s.xp6(3),s.hij(" ","export"==t.item.infor.mod?"Xu\u1ea5t":"Nh\u1eadp l\u1ea1i"," "),s.xp6(3),s.hij(" ",s.lcZ(28,24,"POND_MOD.PRODUCT")," "),s.xp6(3),s.hij(" ",t.item.infor.product_name," "),s.xp6(3),s.hij(" ",s.lcZ(34,26,"NOTE")," "),s.xp6(3),s.hij(" ",t.item.infor.note," "),s.xp6(2),s.Q6J("ngForOf",s.lcZ(39,28,t.obStatus))}}let p=(()=>{class t{constructor(t,e,i,o,n){this.modalController=t,this.storeService=e,this.toastService=i,this.translate=o,this.alertController=n,this.obStatus={pending:"Ch\u1edd x\u1eed l\xfd",confirm:"\u0110\xe3 x\xe1c nh\u1eadn",reject:"Sai ph\u1ea1m"},this.flagLoad=!1}ngOnInit(){console.log(this.data),this.getDetail()}getDetail(){this.storeService.getApiStore("get","&id="+this.data.id+"&fcode="+this.storeService.getFarmCode(),"manager/warehouse-daily-api").subscribe(t=>{1==t.status?this.item=t.data:this.toastService.warning(t.error)},()=>{this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}openConfirm(t){return(0,o.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:this.translate.instant("NOTE"),inputs:[{name:"note",id:"note",type:"textarea",placeholder:this.translate.instant("NOTE")}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"Ok",handler:e=>{console.log(e),this.storeService.sendPost("confirm",{status:t,note:e.note},"&id="+this.data.id+"&fcode="+this.storeService.getFarmCode(),"manager/warehouse-daily-api").subscribe(i=>{1==i.status?(this.toastService.success(this.translate.instant("WALL.UPDATE_SUCCESS")),this.item.infor.status=t,this.item.infor.note=e.note,this.flagLoad=!0):this.toastService.warning(i.error)},()=>{this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}}]})).present()})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(r.IN),s.Y36(n.d),s.Y36(a.k),s.Y36(c.sK),s.Y36(r.Br))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-store-log-detail"]],inputs:{data:"data"},decls:10,vars:4,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],[1,"ion-padding"],[4,"ngIf"],["detail","",3,"routerLink","click"],["slot","end"],[3,"fill","click",4,"ngFor","ngForOf"],[3,"fill","click"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-buttons",0),s.TgZ(3,"ion-button",1),s.NdJ("click",function(){return e.modalController.dismiss(e.flagLoad)}),s._UZ(4,"ion-icon",2),s.qZA(),s.qZA(),s.TgZ(5,"ion-title"),s._uU(6),s.ALo(7,"translate"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(8,"ion-content",3),s.YNc(9,h,40,30,"ion-list",4),s.qZA()),2&t&&(s.xp6(6),s.Oqu(s.lcZ(7,2,"SHOP.DETAIL")),s.xp6(3),s.Q6J("ngIf",e.item))},directives:[r.Gu,r.sr,r.Sm,r.YG,r.gu,r.wd,r.W2,l.O5,r.q_,r.Ie,r.YI,d.rH,r.yW,l.sg],pipes:[c.X$,l.uU,l.Nd],styles:[""]}),t})()},22923:function(t,e,i){i.d(e,{d:function(){return a}});var o=i(88002),n=i(26215),s=i(15189),r=i(37716);let a=(()=>{class t{constructor(t){this.reqAPIService=t,this.urlApi="/manager/store-api-mobie",this.NEW_URL_API="/manager/warehouse-api",this.changeDataStore=!1,this.onLoaded$=new n.X(0)}destroy(){this.fcode=null,this.store=null}setFarmCode(t){this.fcode=t}getFarmCode(){return this.fcode}setStoreCode(t){this.wcode=t}getStoreCode(){return this.wcode}setStore(t){this.store=t}getStore(){return this.store}itemChanged(t,e){void 0!==this.store[t]&&Object.assign(this.store[t],e)}getApiStore(t="",e="",i=""){let n;return n=""===i?this.NEW_URL_API+"?action="+t+"&wcode="+this.wcode+e:`/${i}?action=`+t+e,this.reqAPIService.get(n).pipe((0,o.U)(t=>t))}sendPost(t="",e={},i="",n=""){let s;return s=""===n?this.NEW_URL_API+"?action="+t+"&wcode="+this.wcode+i:`/${n}?action=`+t+i,this.reqAPIService.post(s,e).pipe((0,o.U)(t=>t))}sendPostWithFile(t="",e={},i="",o=""){return this.reqAPIService.postApiWithFile(t,e,"&wcode="+this.wcode+i,this.NEW_URL_API)}postEdit(t,e){return this.reqAPIService.post(this.urlApi+"?action=edit-product-private&fcode="+this.fcode+"&id="+t,e)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(s.$))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);