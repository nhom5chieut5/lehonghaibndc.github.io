!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[2166],{62166:function(t,n,r){r.d(n,{M:function(){return C}});var o=r(64762),s=r(27887),a=r(92760),c=r(81933),u=r(82629),l=r(50384),d=r(37716),p=r(47063),v=r(81780),h=r(13619),T=r(84465),A=r(38583);function f(e,t){1&e&&(d.TgZ(0,"div"),d._UZ(1,"ion-spinner",9),d.qZA())}function g(e,t){if(1&e&&(d.TgZ(0,"ion-item"),d.TgZ(1,"ion-label"),d._uU(2),d.ALo(3,"translate"),d.qZA(),d.TgZ(4,"span",3),d._uU(5),d.ALo(6,"date"),d.ALo(7,"translate"),d.qZA(),d.qZA()),2&e){var i=d.oxw(2);d.xp6(2),d.Oqu(d.lcZ(3,2,"CROP")),d.xp6(3),d.Oqu(d.xi3(6,4,1e3*i.item.start_time,d.lcZ(7,7,"FORMAT_DATE")))}}function m(e,t){if(1&e&&(d.TgZ(0,"ion-item"),d.TgZ(1,"ion-label"),d._uU(2),d.ALo(3,"translate"),d.qZA(),d.TgZ(4,"span",3),d._uU(5),d.qZA(),d.qZA()),2&e){var i=d.oxw(2);d.xp6(2),d.Oqu(d.lcZ(3,2,"POND")),d.xp6(3),d.Oqu(i.item.pond_name)}}function _(e,t){if(1&e&&(d.TgZ(0,"ion-item"),d.TgZ(1,"ion-label"),d._uU(2),d.ALo(3,"translate"),d.qZA(),d.TgZ(4,"span",3),d._uU(5),d.qZA(),d.qZA()),2&e){var i=d.oxw(2);d.xp6(2),d.Oqu(d.lcZ(3,2,"FARM")),d.xp6(3),d.Oqu(i.item.farm_name)}}function k(e,t){if(1&e&&(d.TgZ(0,"ion-item"),d.TgZ(1,"ion-label"),d._uU(2),d.ALo(3,"translate"),d.qZA(),d.TgZ(4,"span",3),d._uU(5),d.qZA(),d.qZA()),2&e){var i=d.oxw(2);d.xp6(2),d.Oqu(d.lcZ(3,2,"TRACEABILITY_MOD.OWNER")),d.xp6(3),d.Oqu(i.item.company_name)}}function q(e,t){1&e&&(d.TgZ(0,"div",10),d.TgZ(1,"p"),d.TgZ(2,"ion-text",11),d._uU(3),d.ALo(4,"translate"),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(3),d.Oqu(d.lcZ(4,1,"TRACEABILITY_MOD.YOU_NOT_HAVE_PERMISSION")))}function Z(e,t){if(1&e&&(d.TgZ(0,"ion-list"),d.YNc(1,g,8,9,"ion-item",6),d.YNc(2,m,6,4,"ion-item",6),d.YNc(3,_,6,4,"ion-item",6),d.YNc(4,k,6,4,"ion-item",6),d.YNc(5,q,5,3,"div",8),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngIf","CROP"==i.obj&&i.item.start_time),d.xp6(1),d.Q6J("ngIf",i.item.pond_name),d.xp6(1),d.Q6J("ngIf",i.item.farm_name),d.xp6(1),d.Q6J("ngIf",i.item.company_name),d.xp6(1),d.Q6J("ngIf",!i.showBrow&&i.notPermisson)}}function F(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"div",4),d.TgZ(1,"ion-button",12),d.NdJ("click",function(){d.CHM(i);var e=d.oxw();return e.toManagent(e.item)}),d._uU(2),d.ALo(3,"translate"),d.qZA(),d.qZA()}2&e&&(d.xp6(2),d.hij(" ",d.lcZ(3,1,"TRACEABILITY_MOD.BROWSE"),""))}function y(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"div",4),d.TgZ(1,"ion-button",12),d.NdJ("click",function(){return d.CHM(i),d.oxw().toTrace()}),d._uU(2),d.ALo(3,"translate"),d.qZA(),d.qZA()}2&e&&(d.xp6(2),d.hij("",d.lcZ(3,1,"TRACEABILITY")," "))}function P(e,t){1&e&&(d.TgZ(0,"div",10),d.TgZ(1,"p"),d.TgZ(2,"ion-text",11),d._uU(3),d.ALo(4,"translate"),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(3),d.Oqu(d.lcZ(4,1,"TRACEABILITY_MOD.NOT_HAVE_CODE")))}var S,C=((S=function(){function t(i,n,r,o,a,c,u,l){e(this,t),this.modalController=i,this.translate=n,this.router=r,this.traceAbility=o,this.toastService=a,this.barcodeScanner=c,this.iotService=u,this.authService=l,this.code="",this.obj="TRAC",this.message="",this.loadingFlag=new s.E,this.showBrow=!1,this.notPermisson=!0}return i(t,[{key:"ngOnInit",value:function(){this.qrScan()}},{key:"qrScan",value:function(){var e=this;this.code="",this.barcodeScanner.scan().then(function(t){e.processCode(t.text)}).catch(function(t){e.toastService.warning(e.translate.instant("ERROR_CAMERA"))})}},{key:"processCode",value:function(e){var t=this,i=e.slice(0,4).toUpperCase();"FARM"===i||"POND"===i||"CROP"===i||"IOTS"==i?(this.obj=i,this.code=e.slice(5,e.length)):this.code=e,"TRAC"===this.obj?this.toTrace():"IOTS"==this.obj?this.processDevice():(this.loadingFlag.setStart(!0),this.traceAbility.getInfo(this.code,this.obj).subscribe(function(e){1==e.status?(console.log(e),t.item=e.data.data,e.data.permission.length>0?(t.showBrow=!0,t.notPermisson=!1):t.notPermisson=!0):t.message=e.message,t.loadingFlag.setResult(!0)},function(){t.loadingFlag.setResult(!1),t.toastService.danger(t.translate.instant("ERROR_CONNECT"))}))}},{key:"toTrace",value:function(){this.modalController.dismiss(),this.router.navigateByUrl("/traceability/result/"+this.code)}},{key:"processDevice",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadingFlag.setPending(!0),e.next=3,this.getDevice();case 3:if(!this.inforDevice){e.next=8;break}t={queryParams:this.inforDevice},console.log(this.inforDevice),this.loadingFlag.setResult(!0),this.modalController.dismiss(),this.router.navigate(["add-device"],t),e.next=9;break;case 8:this.loadingFlag.setResult(!0),this.modalController.dismiss(),this.toastService.warning(this.translate.instant("DEVICE_MOD.NOT_RECEIVE"));case 9:case"end":return e.stop()}},e,this)}))}},{key:"getDevice",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.inforDevice=null,e.next=3,this.iotService.check(this.code).catch(function(){i.loadingFlag.setResult(!1),i.modalController.dismiss(),i.toastService.danger(i.translate.instant("ERROR_CONNECT"))});case 3:(t=e.sent)&&1==t.status?this.inforDevice={device_id:t.data.id,type:t.data.type,code:this.code}:t&&0==t.status&&this.toastService.warning(t.messages);case 5:case"end":return e.stop()}},e,this)}))}},{key:"toManagent",value:function(e){this.modalController.dismiss();var t=this.obj.toLowerCase();this.router.navigateByUrl("farm"===t||"pond"===t?"/"+t+"/"+this.code:"/pond/"+e.pond_code+"/history/"+this.code)}}]),t}()).\u0275fac=function(e){return new(e||S)(d.Y36(p.IN),d.Y36(v.sK),d.Y36(h.F0),d.Y36(c.X),d.Y36(T.k),d.Y36(a.m),d.Y36(u.d),d.Y36(l.e))},S.\u0275cmp=d.Xpm({type:S,selectors:[["app-scan"]],inputs:{pondsOb:"pondsOb"},decls:22,vars:12,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["slot","end"],[1,"ion-padding","ion-text-center"],[1,"ion-padding"],[4,"ngIf"],["class","ion-padding ion-text-center",4,"ngIf"],["class","ion-text-center ion-padding","lines","none",4,"ngIf"],["name","dots"],["lines","none",1,"ion-text-center","ion-padding"],["color","danger"],["shape","round","fill","outline","color","primary",3,"click"]],template:function(e,t){1&e&&(d.TgZ(0,"ion-header"),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-buttons",0),d.TgZ(3,"ion-button",1),d.NdJ("click",function(){return t.modalController.dismiss()}),d._UZ(4,"ion-icon",2),d.qZA(),d.qZA(),d.TgZ(5,"ion-title"),d._uU(6),d.ALo(7,"translate"),d.qZA(),d.TgZ(8,"ion-buttons",3),d.TgZ(9,"ion-button",1),d.NdJ("click",function(){return t.qrScan()}),d._uU(10),d.ALo(11,"translate"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(12,"ion-content"),d.TgZ(13,"div",4),d.TgZ(14,"div",5),d.TgZ(15,"h3"),d._uU(16),d.qZA(),d.qZA(),d.YNc(17,f,2,0,"div",6),d.qZA(),d.YNc(18,Z,6,5,"ion-list",6),d.YNc(19,F,4,3,"div",7),d.YNc(20,y,4,3,"div",7),d.YNc(21,P,5,3,"div",8),d.qZA()),2&e&&(d.xp6(6),d.Oqu(d.lcZ(7,8,"SCAN")),d.xp6(4),d.Oqu(d.lcZ(11,10,"RE_SCAN")),d.xp6(6),d.hij("#",t.code,""),d.xp6(1),d.Q6J("ngIf",t.loadingFlag.pending),d.xp6(1),d.Q6J("ngIf",t.loadingFlag.result&&t.item),d.xp6(1),d.Q6J("ngIf",t.showBrow),d.xp6(1),d.Q6J("ngIf","TRAC"==t.obj&&""!=t.code),d.xp6(1),d.Q6J("ngIf",""==t.code))},directives:[p.Gu,p.sr,p.Sm,p.YG,p.gu,p.wd,p.W2,A.O5,p.PQ,p.q_,p.Ie,p.Q$,p.yW],pipes:[v.X$,A.uU],styles:[""]}),S)},82629:function(t,n,r){r.d(n,{d:function(){return c}});var o,s=r(15189),a=r(37716),c=((o=function(){function t(i){e(this,t),this.reqApiService=i,this.PATH_FT="http://35.240.204.122:8882/farmext",this.PATH_DEVICE="/manager/device-api",this.PATH_ADD_DEVICE="/manager/add-device-api",this.SITE_PATH_API="http://35.240.204.122:8882/api",this.listPermision=["company_manager","farm_manager","pond_manager"]}return i(t,[{key:"checkPermission",value:function(e){return!!this.listPermision.includes(e)}},{key:"setPondCode",value:function(e){this.pcode=e}},{key:"list",value:function(){return this.reqApiService.get(this.PATH_DEVICE+"?action=list&pcode="+this.pcode).toPromise()}},{key:"get",value:function(e){return this.reqApiService.get(this.PATH_DEVICE+"?action=get&device_id_fb="+e+"&pcode="+this.pcode).toPromise()}},{key:"update",value:function(e,t){return this.reqApiService.post(this.PATH_DEVICE+"?action=update&id="+t+"&pcode="+this.pcode,{name:e,pond_code:this.pcode}).toPromise()}},{key:"add",value:function(e){return this.reqApiService.post(this.PATH_ADD_DEVICE,e).toPromise()}},{key:"move",value:function(e,t,i){return this.reqApiService.post(this.PATH_DEVICE+"?action=update&id="+i+"&pcode="+this.pcode,{name:e,pond_code:t}).toPromise()}},{key:"remove",value:function(e){return this.reqApiService.get(this.PATH_DEVICE+"?action=remove&id="+e+"&pcode="+this.pcode).toPromise()}},{key:"check",value:function(e){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/qr/"+e).toPromise()}},{key:"active",value:function(e){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/qr/"+e,{}).toPromise()}},{key:"changeStatusContactor",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+i+"/peripherals/"+t+"/control",e)}},{key:"getInforDevice",value:function(e){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+e).toPromise()}},{key:"getListCondition",value:function(e,t){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/subscribes")}},{key:"removeCondition",value:function(e,t,i){return this.reqApiService.deleteTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/subscribes/"+i)}},{key:"addCondition",value:function(e,t,i){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/subscribes",i)}},{key:"updateNameContactor",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e,i)}},{key:"updateTimer",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/timer",i)}},{key:"updateSetting",value:function(e,t){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e+"/setting",t).toPromise()}},{key:"addConditonPub",value:function(e,t,i){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+e+"/peripherals/"+t+"/conditions",i)}},{key:"updateConditonPub",value:function(e,t,i,n){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e+"/peripherals/"+t+"/conditions/"+i,n)}},{key:"removeConditionPub",value:function(e,t,i){return this.reqApiService.deleteTokenFt(this.PATH_FT+"/v2/devices/"+e+"/peripherals/"+t+"/conditions/"+i)}},{key:"saveAutoRecord",value:function(e,t){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e+"/third-setting",t)}},{key:"commandFeeding",value:function(e,t){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+e+"/command",t)}},{key:"removeTimer",value:function(e,t,i){return this.reqApiService.deleteTokenFt(this.PATH_FT+"/v2/devices/"+i+"/peripherals/"+t+"/timer/"+e)}},{key:"addTimer",value:function(e,t,i){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/timer",i)}},{key:"updateTimerFeed",value:function(e,t,i,n){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+i+"/peripherals/"+t+"/timer/"+e,n)}},{key:"plus_analyze",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/plus_analyze",i)}},{key:"abstract_analyze",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/abstract_analyze",i)}},{key:"asyncData",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/sync",i)}},{key:"removeDataFeed",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/clear",i)}},{key:"updateCommonSetting",value:function(e,t){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e,t)}},{key:"getListRepast",value:function(e,t){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/data")}},{key:"getSuggestCalib",value:function(e,t,i,n){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+n+"/get-suggest-calib?feed="+i+"&start="+e+"&end="+t)}},{key:"quickAddRepast",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/timer/feed",i)}}]),t}()).\u0275fac=function(e){return new(e||o)(a.LFG(s.$))},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o)},81933:function(t,n,r){r.d(n,{X:function(){return c}});var o,s=r(15189),a=r(37716),c=((o=function(){function t(i){e(this,t),this.reqAPIService=i,this.URL_API="/traceability/traceability-api"}return i(t,[{key:"getCrop",value:function(e){return this.reqAPIService.get(this.URL_API+"?action=trace&code="+e)}},{key:"getInfo",value:function(e,t){return this.reqAPIService.get(this.URL_API+"?action=scan&object="+t+"&code="+e)}}]),t}()).\u0275fac=function(e){return new(e||o)(a.LFG(s.$))},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o)}}])}();