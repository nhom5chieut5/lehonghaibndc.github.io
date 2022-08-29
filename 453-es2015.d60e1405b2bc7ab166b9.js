"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[453],{27887:function(t,e,i){i.d(e,{E:function(){return n}});class n{constructor(){this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}setStart(t){this.start=t,!0===t&&(this.pending=!0,this.end=!1),this.result=null,this.count++}setPending(t){this.pending=t,!1===t?this.start=!1:this.end=!0}setResult(t){this.result=t,this.pending=!1,this.start=!1,this.end=!0}}},50453:function(t,e,i){i.r(e),i.d(e,{StoreAddPageModule:function(){return l}});var n=i(38583),s=i(90665),o=i(47063),r=i(13619),a=i(2151),c=i(37716);const d=[{path:"",component:a.b}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.Bz.forChild(d)],r.Bz]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.ez,s.u5,o.Pc,u]]}),t})()},2151:function(t,e,i){i.d(e,{b:function(){return g}});var n=i(90665),s=i(28049),o=i(27887),r=i(22923),a=i(37716),c=i(47063),d=i(81780),u=i(71239),l=i(38583);function h(t,e){if(1&t&&(a.TgZ(0,"div",13),a.TgZ(1,"ion-text",14),a.TgZ(2,"i"),a._uU(3),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.oxw();a.xp6(3),a.Oqu(t.message)}}function p(t,e){1&t&&(a.TgZ(0,"div"),a._UZ(1,"ion-spinner",15),a.qZA())}let g=(()=>{class t{constructor(t,e,i,s){this.modalController=t,this.translate=e,this.storeService=i,this.dbLocalService=s,this.form=new n.cw({name:new n.NI("",n.kI.required),area:new n.NI("",n.kI.required),description:new n.NI("")}),this.savingFlag=new o.E}ngOnInit(){}onSubmit(){this.savingFlag.setPending(!0),this.storeService.sendPost("add",this.form.value,"&fcode="+this.storeService.getFarmCode(),"manager/store-api-mobie").pipe((0,s.P)()).subscribe(t=>{1===t.status?(this.dbLocalService.stores.push({infor:t.data,store:[]}),this.dbLocalService.setLocalData("stores",this.dbLocalService.stores),this.modalController.dismiss(t.data)):this.message=t.error,this.savingFlag.setResult(!0)},t=>{this.savingFlag.setResult(!1),this.message=this.translate.instant("ERROR_CONNECT")})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c.IN),a.Y36(d.sK),a.Y36(r.d),a.Y36(u.T))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-store-add"]],decls:32,vars:19,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["class","ion-padding ion-text-center",4,"ngIf"],[3,"formGroup","ngSubmit"],["lines","inset"],["position","floating"],["type","text","formControlName","name","inputmode","text"],["type","number","formControlName","area","inputmode","text"],["type","text","formControlName","description","inputmode","text"],[1,"ion-text-center","ion-padding"],[4,"ngIf"],["type","submit","color","primary","shape","round",3,"disabled"],[1,"ion-padding","ion-text-center"],["color","danger"],["name","dots"]],template:function(t,e){1&t&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",0),a.TgZ(3,"ion-button",1),a.NdJ("click",function(){return e.modalController.dismiss()}),a._UZ(4,"ion-icon",2),a.qZA(),a.qZA(),a.TgZ(5,"ion-title"),a._uU(6),a.ALo(7,"translate"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"ion-content"),a.YNc(9,h,4,1,"div",3),a.TgZ(10,"form",4),a.NdJ("ngSubmit",function(){return e.onSubmit()}),a.TgZ(11,"ion-list"),a.TgZ(12,"ion-item",5),a.TgZ(13,"ion-label",6),a._uU(14),a.ALo(15,"translate"),a.qZA(),a._UZ(16,"ion-input",7),a.qZA(),a.TgZ(17,"ion-item",5),a.TgZ(18,"ion-label",6),a._uU(19),a.ALo(20,"translate"),a.qZA(),a._UZ(21,"ion-input",8),a.qZA(),a.TgZ(22,"ion-item",5),a.TgZ(23,"ion-label",6),a._uU(24),a.ALo(25,"translate"),a.qZA(),a._UZ(26,"ion-textarea",9),a.qZA(),a.qZA(),a.TgZ(27,"div",10),a.YNc(28,p,2,0,"div",11),a.TgZ(29,"ion-button",12),a._uU(30),a.ALo(31,"translate"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(6),a.Oqu(a.lcZ(7,9,"WAREHOUSE_MOD.ADD_NEW")),a.xp6(3),a.Q6J("ngIf",e.message),a.xp6(1),a.Q6J("formGroup",e.form),a.xp6(4),a.Oqu(a.lcZ(15,11,"WAREHOUSE_MOD.NAME")),a.xp6(5),a.Oqu(a.lcZ(20,13,"AREA")),a.xp6(5),a.Oqu(a.lcZ(25,15,"PHOTO_MOD.DESCRIPTION")),a.xp6(4),a.Q6J("ngIf",e.savingFlag.pending),a.xp6(1),a.Q6J("disabled",e.form.invalid||e.savingFlag.pending),a.xp6(1),a.hij("",a.lcZ(31,17,"WAREHOUSE_MOD.SAVE")," "))},directives:[c.Gu,c.sr,c.Sm,c.YG,c.gu,c.wd,c.W2,l.O5,n._Y,n.JL,n.sg,c.q_,c.Ie,c.Q$,c.pK,c.j9,n.JJ,n.u,c.as,c.g2,c.yW,c.PQ],pipes:[d.X$],styles:[""]}),t})()},22923:function(t,e,i){i.d(e,{d:function(){return a}});var n=i(88002),s=i(26215),o=i(15189),r=i(37716);let a=(()=>{class t{constructor(t){this.reqAPIService=t,this.urlApi="/manager/store-api-mobie",this.NEW_URL_API="/manager/warehouse-api",this.changeDataStore=!1,this.onLoaded$=new s.X(0)}destroy(){this.fcode=null,this.store=null}setFarmCode(t){this.fcode=t}getFarmCode(){return this.fcode}setStoreCode(t){this.wcode=t}getStoreCode(){return this.wcode}setStore(t){this.store=t}getStore(){return this.store}itemChanged(t,e){void 0!==this.store[t]&&Object.assign(this.store[t],e)}getApiStore(t="",e="",i=""){let s;return s=""===i?this.NEW_URL_API+"?action="+t+"&wcode="+this.wcode+e:`/${i}?action=`+t+e,this.reqAPIService.get(s).pipe((0,n.U)(t=>t))}sendPost(t="",e={},i="",s=""){let o;return o=""===s?this.NEW_URL_API+"?action="+t+"&wcode="+this.wcode+i:`/${s}?action=`+t+i,this.reqAPIService.post(o,e).pipe((0,n.U)(t=>t))}sendPostWithFile(t="",e={},i="",n=""){return this.reqAPIService.postApiWithFile(t,e,"&wcode="+this.wcode+i,this.NEW_URL_API)}postEdit(t,e){return this.reqAPIService.post(this.urlApi+"?action=edit-product-private&fcode="+this.fcode+"&id="+t,e)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(o.$))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);