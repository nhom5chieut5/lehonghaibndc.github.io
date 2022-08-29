"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[4220],{76329:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=r(13409),s=r(25639),c=function(t){function e(e){var r=t.call(this)||this;return r._value=e,r}return n(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),e.prototype._subscribe=function(e){var r=t.prototype._subscribe.call(this,e);return r&&!r.closed&&e.next(this._value),r},e.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new s.ObjectUnsubscribedError;return this._value},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(i.Subject);e.BehaviorSubject=c},13409:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=r(93576),s=r(67241),c=r(43984),u=r(25639),a=r(45298),l=r(81476),p=function(t){function e(e){var r=t.call(this,e)||this;return r.destination=e,r}return n(e,t),e}(s.Subscriber);e.SubjectSubscriber=p;var h=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return n(e,t),e.prototype[l.rxSubscriber]=function(){return new p(this)},e.prototype.lift=function(t){var e=new b(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new u.ObjectUnsubscribedError;if(!this.isStopped)for(var e=this.observers,r=e.length,o=e.slice(),n=0;n<r;n++)o[n].next(t)},e.prototype.error=function(t){if(this.closed)throw new u.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,r=e.length,o=e.slice(),n=0;n<r;n++)o[n].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new u.ObjectUnsubscribedError;this.isStopped=!0;for(var t=this.observers,e=t.length,r=t.slice(),o=0;o<e;o++)r[o].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new u.ObjectUnsubscribedError;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new u.ObjectUnsubscribedError;return this.hasError?(t.error(this.thrownError),c.Subscription.EMPTY):this.isStopped?(t.complete(),c.Subscription.EMPTY):(this.observers.push(t),new a.SubjectSubscription(this,t))},e.prototype.asObservable=function(){var t=new i.Observable;return t.source=this,t},e.create=function(t,e){return new b(t,e)},e}(i.Observable);e.Subject=h;var b=function(t){function e(e,r){var o=t.call(this)||this;return o.destination=e,o.source=r,o}return n(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):c.Subscription.EMPTY},e}(h);e.AnonymousSubject=b},45298:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e,r){var o=t.call(this)||this;return o.subject=e,o.subscriber=r,o.closed=!1,o}return n(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var r=e.indexOf(this.subscriber);-1!==r&&e.splice(r,1)}}},e}(r(43984).Subscription);e.SubjectSubscription=i},25639:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}();e.ObjectUnsubscribedError=r},26979:function(t,e,r){r.r(e),r.d(e,{LabRootPageModule:function(){return O}});var o=r(38583),n=r(90665),i=r(47063),s=r(13619),c=r(64762),u=r(27887),a=r(31781),l=r(45869),p=r(1209),h=r(40044),b=r(37716),d=r(84465),f=r(81780);function g(t,e){1&t&&b._UZ(0,"ion-progress-bar",8)}function v(t,e){if(1&t&&(b.TgZ(0,"ion-col",10),b.TgZ(1,"ion-card",11),b.TgZ(2,"ion-grid"),b.TgZ(3,"ion-row",12),b.TgZ(4,"ion-col",13),b.TgZ(5,"div",14),b._UZ(6,"img",15),b.qZA(),b.qZA(),b.TgZ(7,"ion-col",16),b.TgZ(8,"ion-card-header"),b.TgZ(9,"ion-card-subtitle"),b._uU(10),b.qZA(),b.TgZ(11,"ion-card-title"),b._uU(12),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA()),2&t){const t=e.$implicit;b.xp6(1),b.MGl("routerLink","/lab/",t.code,""),b.xp6(9),b.Oqu(t.address),b.xp6(2),b.Oqu(t.name)}}function y(t,e){if(1&t&&(b.TgZ(0,"div"),b.TgZ(1,"ion-row"),b.YNc(2,v,13,3,"ion-col",9),b.qZA(),b.qZA()),2&t){const t=b.oxw();b.xp6(2),b.Q6J("ngForOf",t.infor.labs)}}function _(t,e){if(1&t){const t=b.EpF();b.TgZ(0,"div"),b.TgZ(1,"ion-card",17),b.TgZ(2,"ion-card-content",18),b.TgZ(3,"p",14),b._uU(4),b.ALo(5,"translate"),b.qZA(),b.TgZ(6,"ion-button",19),b.NdJ("click",function(){return b.CHM(t),b.oxw().presentAddLab()}),b._uU(7),b.ALo(8,"translate"),b.qZA(),b.qZA(),b.qZA(),b.qZA()}2&t&&(b.xp6(4),b.Oqu(b.lcZ(5,2,"LAB_MOD.LAB_EMPTY")),b.xp6(3),b.hij(" ",b.lcZ(8,4,"LAB_MOD.CREATE_LAB")," "))}const Z=[{path:"",component:(()=>{class t{constructor(t,e,r,o,n,i){this.modalController=t,this.labService=e,this.toastService=r,this.translate=o,this.alertController=n,this.loadingController=i,this.loadingFlag=new u.E}ngOnInit(){this.getListBranch()}getListBranch(){this.loadingFlag.setPending(!0),this.labService.loadLabRoot().subscribe(t=>{1==t.status?this.infor=t.data:this.toastService.warning(t.message),this.loadingFlag.setResult(!0)},()=>{this.toastService.danger(this.translate.instant("ERROR_CONNECT")),this.loadingFlag.setResult(!1)})}presentMapLab(){return(0,c.mG)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:l.y,componentProps:{data:this.infor.labs}})).present()})}presentAddLab(){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:a.S,componentProps:{typeAdd:"addLab"}});return t.onDidDismiss().then(t=>{t.data&&this.infor.labs.push(t.data)}),yield t.present()})}presentSetting(){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:p.V,componentProps:{data:this.infor,labRoot:!0}});return t.onDidDismiss().then(t=>{this.getListBranch()}),yield t.present()})}}return t.\u0275fac=function(e){return new(e||t)(b.Y36(i.IN),b.Y36(h.y),b.Y36(d.k),b.Y36(f.sK),b.Y36(i.Br),b.Y36(i.HT))},t.\u0275cmp=b.Xpm({type:t,selectors:[["app-lab-root"]],decls:16,vars:4,consts:[["slot","start"],["text","","defaultHref","tabs/subscription"],["slot","end"],[3,"click"],["name","location-outline"],["slot","icon-only","name","cog-outline"],["type","indeterminate",4,"ngIf"],[4,"ngIf"],["type","indeterminate"],["size","12","size-sm","6",4,"ngFor","ngForOf"],["size","12","size-sm","6"],["mode","ios",3,"routerLink"],[1,"ion-align-items-center"],["size","3"],[1,"ion-padding"],["src","/assets/img/laboratory-branch.png",1,"l-icon"],["size","9"],["mode","ios"],[1,"ion-text-center"],["shape","round","color","primary",3,"click"]],template:function(t,e){1&t&&(b.TgZ(0,"ion-header"),b.TgZ(1,"ion-toolbar"),b.TgZ(2,"ion-buttons",0),b.TgZ(3,"ion-buttons",0),b._UZ(4,"ion-back-button",1),b.qZA(),b.qZA(),b.TgZ(5,"ion-title"),b._uU(6),b.qZA(),b.TgZ(7,"ion-buttons",2),b.TgZ(8,"ion-button",3),b.NdJ("click",function(){return e.presentMapLab()}),b._UZ(9,"ion-icon",4),b.qZA(),b.TgZ(10,"ion-button",3),b.NdJ("click",function(){return e.presentSetting()}),b._UZ(11,"ion-icon",5),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.YNc(12,g,1,0,"ion-progress-bar",6),b.TgZ(13,"ion-content"),b.YNc(14,y,3,1,"div",7),b.YNc(15,_,9,6,"div",7),b.qZA()),2&t&&(b.xp6(6),b.Oqu(null==e.infor?null:e.infor.infor.name),b.xp6(6),b.Q6J("ngIf",e.loadingFlag.pending),b.xp6(2),b.Q6J("ngIf",e.infor),b.xp6(1),b.Q6J("ngIf",e.infor&&e.infor.labs&&0===e.infor.labs.length))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.YG,i.gu,o.O5,i.W2,i.X7,i.Nd,o.sg,i.wI,i.PM,i.YI,s.rH,i.jY,i.Zi,i.tO,i.gZ,i.FN],pipes:[f.X$],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.oAB({type:t}),t.\u0275inj=b.cJS({imports:[[s.Bz.forChild(Z)],s.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.oAB({type:t}),t.\u0275inj=b.cJS({providers:[h.y],imports:[[o.ez,n.u5,i.Pc,m]]}),t})()}}]);