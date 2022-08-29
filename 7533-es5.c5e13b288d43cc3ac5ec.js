!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[7533],{76329:function(e,t,r){var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var n=r(13409),c=r(25639),s=function(e){function t(t){var r=e.call(this)||this;return r._value=t,r}return o(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),t.prototype._subscribe=function(t){var r=e.prototype._subscribe.call(this,t);return r&&!r.closed&&t.next(this._value),r},t.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new c.ObjectUnsubscribedError;return this._value},t.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},t}(n.Subject);t.BehaviorSubject=s},13409:function(e,t,r){var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var n=r(93576),c=r(67241),s=r(43984),u=r(25639),a=r(45298),f=r(81476),p=function(e){function t(t){var r=e.call(this,t)||this;return r.destination=t,r}return o(t,e),t}(c.Subscriber);t.SubjectSubscriber=p;var h=function(e){function t(){var t=e.call(this)||this;return t.observers=[],t.closed=!1,t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return o(t,e),t.prototype[f.rxSubscriber]=function(){return new p(this)},t.prototype.lift=function(e){var t=new l(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.closed)throw new u.ObjectUnsubscribedError;if(!this.isStopped)for(var t=this.observers,r=t.length,i=t.slice(),o=0;o<r;o++)i[o].next(e)},t.prototype.error=function(e){if(this.closed)throw new u.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,r=t.length,i=t.slice(),o=0;o<r;o++)i[o].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.closed)throw new u.ObjectUnsubscribedError;this.isStopped=!0;for(var e=this.observers,t=e.length,r=e.slice(),i=0;i<t;i++)r[i].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},t.prototype._trySubscribe=function(t){if(this.closed)throw new u.ObjectUnsubscribedError;return e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){if(this.closed)throw new u.ObjectUnsubscribedError;return this.hasError?(e.error(this.thrownError),s.Subscription.EMPTY):this.isStopped?(e.complete(),s.Subscription.EMPTY):(this.observers.push(e),new a.SubjectSubscription(this,e))},t.prototype.asObservable=function(){var e=new n.Observable;return e.source=this,e},t.create=function(e,t){return new l(e,t)},t}(n.Observable);t.Subject=h;var l=function(e){function t(t,r){var i=e.call(this)||this;return i.destination=t,i.source=r,i}return o(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){return this.source?this.source.subscribe(e):s.Subscription.EMPTY},t}(h);t.AnonymousSubject=l},45298:function(e,t,r){var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(t,r){var i=e.call(this)||this;return i.subject=t,i.subscriber=r,i.closed=!1,i}return o(t,e),t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var r=t.indexOf(this.subscriber);-1!==r&&t.splice(r,1)}}},t}(r(43984).Subscription);t.SubjectSubscription=n},25639:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e}();t.ObjectUnsubscribedError=r},51937:function(t,i,o){o.d(i,{D:function(){return f}});var n,c=o(76329),s=o(15189),u=o(88002),a=o(37716),f=((n=function(){function t(r){e(this,t),this.reqAPIService=r,this.urlApi="/manager/farm-api",this.urlApiAdress="/manager/address-api",this.reload$=new c.BehaviorSubject(0),this.numberOfPonds=0}return r(t,[{key:"setCode",value:function(e){this.fcode=e}},{key:"setFarm",value:function(e){this.farm=e,this.permission=e.permission}},{key:"loadPonds",value:function(){return this.reqAPIService.get("/manager/farm-api-mobie?fcode="+this.fcode+"&action=get-item-pond").pipe((0,u.U)(function(e){return e}))}},{key:"listAddress",value:function(e){return this.reqAPIService.get(this.urlApiAdress+"?action=listUnit&id="+e)}},{key:"loadFarm",value:function(){var e=this;return this.reqAPIService.get("/manager/farm-api-info?fcode="+this.fcode).pipe((0,u.U)(function(t){return e.setFarm(t.data),t}))}},{key:"getSeting",value:function(){return this.reqAPIService.get("/manager/farm-api-mobie?action=get-farm-setting&fcode="+this.fcode).pipe((0,u.U)(function(e){return e}))}},{key:"updatePrivate",value:function(e){return this.reqAPIService.post("/manager/farm-api-mobie?action=add-farm-setting&fcode="+this.fcode,e).pipe((0,u.U)(function(e){return e}))}},{key:"removePermission",value:function(e,t){return this.reqAPIService.get("/manager/farm-api-mobie?action=remove-manager&fcode="+this.fcode+"&user_id="+e+"&position="+t).pipe((0,u.U)(function(e){return e}))}},{key:"updateFarm",value:function(e){return this.reqAPIService.post("/manager/farm-edit-api-mobie?action=edit&fcode="+this.fcode,e).pipe((0,u.U)(function(e){return e}))}},{key:"destroyValue",value:function(){this.farm=null,this.fcode=null,this.permission=null,this.numberOfPonds=null}},{key:"getSpecies",value:function(){return this.reqAPIService.get("/manager/farm-create-api?action=get-species").pipe((0,u.U)(function(e){return e}))}},{key:"insertPond",value:function(e){return this.reqAPIService.post("/manager/farm-api-mobie?action=add-pond&fcode="+this.fcode,e).pipe((0,u.U)(function(e){return e}))}},{key:"insertOnePond",value:function(e){return this.reqAPIService.post("/manager/farm-api-mobie?action=add-a-pond&fcode="+this.fcode,e).pipe((0,u.U)(function(e){return e}))}},{key:"loadReport",value:function(){return this.reqAPIService.get("/manager/farm-api-report?fcode="+this.fcode)}},{key:"listStore",value:function(){return this.reqAPIService.get("/manager/farm-api-mobie?fcode="+this.fcode+"&action=list-store")}}]),t}()).\u0275fac=function(e){return new(e||n)(a.LFG(s.$))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n)},41923:function(t,r,i){i.r(r),i.d(r,{MoneyEstimatePageModule:function(){return l}});var o,n=i(38583),c=i(90665),s=i(47063),u=i(13619),a=i(60271),f=i(37716),p=[{path:"",component:a.u}],h=((o=function t(){e(this,t)}).\u0275fac=function(e){return new(e||o)},o.\u0275mod=f.oAB({type:o}),o.\u0275inj=f.cJS({imports:[[u.Bz.forChild(p)],u.Bz]}),o),l=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({imports:[[n.ez,c.u5,s.Pc,h]]}),t}()},19228:function(t,i,o){o.d(i,{r:function(){return a}});var n,c=o(15189),s=o(88002),u=o(37716),a=((n=function(){function t(r){e(this,t),this.reqAPIService=r,this.urlApi="/manager/money-api-mobie",this.urlApiNew="/manager/finance-api"}return r(t,[{key:"setCode",value:function(e){this.fcode=e,console.log(this.fcode)}},{key:"loadMoney",value:function(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=list&page="+e).pipe((0,s.U)(function(e){return e}))}},{key:"search",value:function(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=search&keyword="+e.keyword+"&type="+e.type+"&timeFrom="+e.timeFrom+"&timeTo="+e.timeTo+"&page=0&numRow=20").pipe((0,s.U)(function(e){return e}))}},{key:"quickSearch",value:function(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=quick-search&type="+e.type+"&keyword="+e.keyword).pipe((0,s.U)(function(e){return e}))}},{key:"add",value:function(e){return this.reqAPIService.postApiWithFile("add",e,"&fcode="+this.fcode,this.urlApiNew)}},{key:"edit",value:function(e){return this.reqAPIService.postApiWithFile("edit",e,"&fcode="+this.fcode+"&item="+e.get("id")+"&cr="+e.get("type"),this.urlApiNew)}},{key:"editGroup",value:function(e){return this.reqAPIService.postApiWithFile("editTypeAll",e,"&fcode="+this.fcode+"&item="+e.get("id")+"&cr="+e.get("type"),this.urlApiNew)}},{key:"delete",value:function(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=detele&item="+e.item+"&cr="+e.cr)}},{key:"getAnalyst",value:function(e){return this.reqAPIService.post(this.urlApiNew+"?fcode="+this.fcode+"&action=analyst",e)}},{key:"getGroup",value:function(e,t){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=getItemByCode&code="+e+"&cr="+t)}},{key:"getCategories",value:function(){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=listCategory")}},{key:"confirmMoney",value:function(e,t,r,i){return this.reqAPIService.get(this.urlApiNew+"?action=confirm&ccode="+r+"&cr="+t+"&id="+e+"&confirm="+i)}},{key:"updateFund",value:function(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=updateFund&fcode="+e+"&value="+t)}},{key:"addCategory",value:function(e){return this.reqAPIService.post(this.urlApiNew+"?action=addCategory&fcode="+this.fcode,e)}},{key:"searchCustomer",value:function(e,t){return this.reqAPIService.post(this.urlApiNew+"?action=searchCustomer&fcode="+this.fcode,{name:e,type:t})}},{key:"getBill",value:function(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=get&fcode="+this.fcode+"&type="+t+"&id="+e)}},{key:"getCustomers",value:function(){return this.reqAPIService.get(this.urlApiNew+"?action=getCustomers&fcode="+this.fcode)}},{key:"getACustomer",value:function(e){return this.reqAPIService.get(this.urlApiNew+"?action=getACustomer&fcode="+this.fcode+"&customer_slug="+e)}},{key:"getDebtCustomer",value:function(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getDebtCustomer&type="+t+"&fcode="+this.fcode+"&customer_slug="+e)}},{key:"addMultiDebtRecord",value:function(e){return this.reqAPIService.post(this.urlApiNew+"?action=addMultiDebt&fcode="+this.fcode,e)}},{key:"getBillByAlias",value:function(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getByAlias&fcode="+this.fcode+"&alias="+e+"&type="+t)}},{key:"getListMoneyByGroup",value:function(){return this.reqAPIService.get(this.urlApiNew+"?action=getListMoneyByGroup&fcode="+this.fcode)}},{key:"getDetailByGroup",value:function(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getDetailByGroup&fcode="+this.fcode+"&group="+e+"&type="+t)}},{key:"getDebtByGroup",value:function(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getDebtByGroup&type="+t+"&fcode="+this.fcode+"&group="+e)}}]),t}()).\u0275fac=function(e){return new(e||n)(u.LFG(c.$))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n)}}])}();