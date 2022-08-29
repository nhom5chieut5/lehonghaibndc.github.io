!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[453],{27887:function(e,i,o){o.d(i,{E:function(){return r}});var r=function(){function e(){t(this,e),this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}return n(e,[{key:"setStart",value:function(t){this.start=t,!0===t&&(this.pending=!0,this.end=!1),this.result=null,this.count++}},{key:"setPending",value:function(t){this.pending=t,!1===t?this.start=!1:this.end=!0}},{key:"setResult",value:function(t){this.result=t,this.pending=!1,this.start=!1,this.end=!0}}]),e}()},50453:function(e,n,i){i.r(n),i.d(n,{StoreAddPageModule:function(){return h}});var o,r=i(38583),s=i(90665),a=i(47063),u=i(13619),c=i(2151),l=i(37716),d=[{path:"",component:c.b}],f=((o=function e(){t(this,e)}).\u0275fac=function(t){return new(t||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[[u.Bz.forChild(d)],u.Bz]}),o),h=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[r.ez,s.u5,a.Pc,f]]}),e}()},2151:function(e,i,o){o.d(i,{b:function(){return m}});var r=o(90665),s=o(28049),a=o(27887),u=o(22923),c=o(37716),l=o(47063),d=o(81780),f=o(71239),h=o(38583);function g(t,e){if(1&t&&(c.TgZ(0,"div",13),c.TgZ(1,"ion-text",14),c.TgZ(2,"i"),c._uU(3),c.qZA(),c.qZA(),c.qZA()),2&t){var n=c.oxw();c.xp6(3),c.Oqu(n.message)}}function p(t,e){1&t&&(c.TgZ(0,"div"),c._UZ(1,"ion-spinner",15),c.qZA())}var v,m=((v=function(){function e(n,i,o,s){t(this,e),this.modalController=n,this.translate=i,this.storeService=o,this.dbLocalService=s,this.form=new r.cw({name:new r.NI("",r.kI.required),area:new r.NI("",r.kI.required),description:new r.NI("")}),this.savingFlag=new a.E}return n(e,[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(){var t=this;this.savingFlag.setPending(!0),this.storeService.sendPost("add",this.form.value,"&fcode="+this.storeService.getFarmCode(),"manager/store-api-mobie").pipe((0,s.P)()).subscribe(function(e){1===e.status?(t.dbLocalService.stores.push({infor:e.data,store:[]}),t.dbLocalService.setLocalData("stores",t.dbLocalService.stores),t.modalController.dismiss(e.data)):t.message=e.error,t.savingFlag.setResult(!0)},function(e){t.savingFlag.setResult(!1),t.message=t.translate.instant("ERROR_CONNECT")})}}]),e}()).\u0275fac=function(t){return new(t||v)(c.Y36(l.IN),c.Y36(d.sK),c.Y36(u.d),c.Y36(f.T))},v.\u0275cmp=c.Xpm({type:v,selectors:[["app-store-add"]],decls:32,vars:19,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["class","ion-padding ion-text-center",4,"ngIf"],[3,"formGroup","ngSubmit"],["lines","inset"],["position","floating"],["type","text","formControlName","name","inputmode","text"],["type","number","formControlName","area","inputmode","text"],["type","text","formControlName","description","inputmode","text"],[1,"ion-text-center","ion-padding"],[4,"ngIf"],["type","submit","color","primary","shape","round",3,"disabled"],[1,"ion-padding","ion-text-center"],["color","danger"],["name","dots"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",0),c.TgZ(3,"ion-button",1),c.NdJ("click",function(){return e.modalController.dismiss()}),c._UZ(4,"ion-icon",2),c.qZA(),c.qZA(),c.TgZ(5,"ion-title"),c._uU(6),c.ALo(7,"translate"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"ion-content"),c.YNc(9,g,4,1,"div",3),c.TgZ(10,"form",4),c.NdJ("ngSubmit",function(){return e.onSubmit()}),c.TgZ(11,"ion-list"),c.TgZ(12,"ion-item",5),c.TgZ(13,"ion-label",6),c._uU(14),c.ALo(15,"translate"),c.qZA(),c._UZ(16,"ion-input",7),c.qZA(),c.TgZ(17,"ion-item",5),c.TgZ(18,"ion-label",6),c._uU(19),c.ALo(20,"translate"),c.qZA(),c._UZ(21,"ion-input",8),c.qZA(),c.TgZ(22,"ion-item",5),c.TgZ(23,"ion-label",6),c._uU(24),c.ALo(25,"translate"),c.qZA(),c._UZ(26,"ion-textarea",9),c.qZA(),c.qZA(),c.TgZ(27,"div",10),c.YNc(28,p,2,0,"div",11),c.TgZ(29,"ion-button",12),c._uU(30),c.ALo(31,"translate"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(6),c.Oqu(c.lcZ(7,9,"WAREHOUSE_MOD.ADD_NEW")),c.xp6(3),c.Q6J("ngIf",e.message),c.xp6(1),c.Q6J("formGroup",e.form),c.xp6(4),c.Oqu(c.lcZ(15,11,"WAREHOUSE_MOD.NAME")),c.xp6(5),c.Oqu(c.lcZ(20,13,"AREA")),c.xp6(5),c.Oqu(c.lcZ(25,15,"PHOTO_MOD.DESCRIPTION")),c.xp6(4),c.Q6J("ngIf",e.savingFlag.pending),c.xp6(1),c.Q6J("disabled",e.form.invalid||e.savingFlag.pending),c.xp6(1),c.hij("",c.lcZ(31,17,"WAREHOUSE_MOD.SAVE")," "))},directives:[l.Gu,l.sr,l.Sm,l.YG,l.gu,l.wd,l.W2,h.O5,r._Y,r.JL,r.sg,l.q_,l.Ie,l.Q$,l.pK,l.j9,r.JJ,r.u,l.as,l.g2,l.yW,l.PQ],pipes:[d.X$],styles:[""]}),v)},22923:function(e,i,o){o.d(i,{d:function(){return l}});var r,s=o(88002),a=o(26215),u=o(15189),c=o(37716),l=((r=function(){function e(n){t(this,e),this.reqAPIService=n,this.urlApi="/manager/store-api-mobie",this.NEW_URL_API="/manager/warehouse-api",this.changeDataStore=!1,this.onLoaded$=new a.X(0)}return n(e,[{key:"destroy",value:function(){this.fcode=null,this.store=null}},{key:"setFarmCode",value:function(t){this.fcode=t}},{key:"getFarmCode",value:function(){return this.fcode}},{key:"setStoreCode",value:function(t){this.wcode=t}},{key:"getStoreCode",value:function(){return this.wcode}},{key:"setStore",value:function(t){this.store=t}},{key:"getStore",value:function(){return this.store}},{key:"itemChanged",value:function(t,e){void 0!==this.store[t]&&Object.assign(this.store[t],e)}},{key:"getApiStore",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t=""===i?this.NEW_URL_API+"?action="+e+"&wcode="+this.wcode+n:"/".concat(i,"?action=")+e+n,this.reqAPIService.get(t).pipe((0,s.U)(function(t){return t}))}},{key:"sendPost",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return t=""===o?this.NEW_URL_API+"?action="+e+"&wcode="+this.wcode+i:"/".concat(o,"?action=")+e+i,this.reqAPIService.post(t,n).pipe((0,s.U)(function(t){return t}))}},{key:"sendPostWithFile",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return this.reqAPIService.postApiWithFile(t,e,"&wcode="+this.wcode+n,this.NEW_URL_API)}},{key:"postEdit",value:function(t,e){return this.reqAPIService.post(this.urlApi+"?action=edit-product-private&fcode="+this.fcode+"&id="+t,e)}}]),e}()).\u0275fac=function(t){return new(t||r)(c.LFG(u.$))},r.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r)}}])}();