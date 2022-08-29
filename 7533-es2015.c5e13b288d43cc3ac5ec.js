"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[7533],{76329:function(e,t,r){var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var s=r(13409),n=r(25639),c=function(e){function t(t){var r=e.call(this)||this;return r._value=t,r}return o(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),t.prototype._subscribe=function(t){var r=e.prototype._subscribe.call(this,t);return r&&!r.closed&&t.next(this._value),r},t.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new n.ObjectUnsubscribedError;return this._value},t.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},t}(s.Subject);t.BehaviorSubject=c},13409:function(e,t,r){var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var s=r(93576),n=r(67241),c=r(43984),u=r(25639),a=r(45298),p=r(81476),h=function(e){function t(t){var r=e.call(this,t)||this;return r.destination=t,r}return o(t,e),t}(n.Subscriber);t.SubjectSubscriber=h;var d=function(e){function t(){var t=e.call(this)||this;return t.observers=[],t.closed=!1,t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return o(t,e),t.prototype[p.rxSubscriber]=function(){return new h(this)},t.prototype.lift=function(e){var t=new f(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.closed)throw new u.ObjectUnsubscribedError;if(!this.isStopped)for(var t=this.observers,r=t.length,i=t.slice(),o=0;o<r;o++)i[o].next(e)},t.prototype.error=function(e){if(this.closed)throw new u.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,r=t.length,i=t.slice(),o=0;o<r;o++)i[o].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.closed)throw new u.ObjectUnsubscribedError;this.isStopped=!0;for(var e=this.observers,t=e.length,r=e.slice(),i=0;i<t;i++)r[i].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},t.prototype._trySubscribe=function(t){if(this.closed)throw new u.ObjectUnsubscribedError;return e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){if(this.closed)throw new u.ObjectUnsubscribedError;return this.hasError?(e.error(this.thrownError),c.Subscription.EMPTY):this.isStopped?(e.complete(),c.Subscription.EMPTY):(this.observers.push(e),new a.SubjectSubscription(this,e))},t.prototype.asObservable=function(){var e=new s.Observable;return e.source=this,e},t.create=function(e,t){return new f(e,t)},t}(s.Observable);t.Subject=d;var f=function(e){function t(t,r){var i=e.call(this)||this;return i.destination=t,i.source=r,i}return o(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){return this.source?this.source.subscribe(e):c.Subscription.EMPTY},t}(d);t.AnonymousSubject=f},45298:function(e,t,r){var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t,r){var i=e.call(this)||this;return i.subject=t,i.subscriber=r,i.closed=!1,i}return o(t,e),t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var r=t.indexOf(this.subscriber);-1!==r&&t.splice(r,1)}}},t}(r(43984).Subscription);t.SubjectSubscription=s},25639:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e}();t.ObjectUnsubscribedError=r},51937:function(e,t,r){r.d(t,{D:function(){return c}});var i=r(76329),o=r(15189),s=r(88002),n=r(37716);let c=(()=>{class e{constructor(e){this.reqAPIService=e,this.urlApi="/manager/farm-api",this.urlApiAdress="/manager/address-api",this.reload$=new i.BehaviorSubject(0),this.numberOfPonds=0}setCode(e){this.fcode=e}setFarm(e){this.farm=e,this.permission=e.permission}loadPonds(){return this.reqAPIService.get("/manager/farm-api-mobie?fcode="+this.fcode+"&action=get-item-pond").pipe((0,s.U)(e=>e))}listAddress(e){return this.reqAPIService.get(this.urlApiAdress+"?action=listUnit&id="+e)}loadFarm(){return this.reqAPIService.get("/manager/farm-api-info?fcode="+this.fcode).pipe((0,s.U)(e=>(this.setFarm(e.data),e)))}getSeting(){return this.reqAPIService.get("/manager/farm-api-mobie?action=get-farm-setting&fcode="+this.fcode).pipe((0,s.U)(e=>e))}updatePrivate(e){return this.reqAPIService.post("/manager/farm-api-mobie?action=add-farm-setting&fcode="+this.fcode,e).pipe((0,s.U)(e=>e))}removePermission(e,t){return this.reqAPIService.get("/manager/farm-api-mobie?action=remove-manager&fcode="+this.fcode+"&user_id="+e+"&position="+t).pipe((0,s.U)(e=>e))}updateFarm(e){return this.reqAPIService.post("/manager/farm-edit-api-mobie?action=edit&fcode="+this.fcode,e).pipe((0,s.U)(e=>e))}destroyValue(){this.farm=null,this.fcode=null,this.permission=null,this.numberOfPonds=null}getSpecies(){return this.reqAPIService.get("/manager/farm-create-api?action=get-species").pipe((0,s.U)(e=>e))}insertPond(e){return this.reqAPIService.post("/manager/farm-api-mobie?action=add-pond&fcode="+this.fcode,e).pipe((0,s.U)(e=>e))}insertOnePond(e){return this.reqAPIService.post("/manager/farm-api-mobie?action=add-a-pond&fcode="+this.fcode,e).pipe((0,s.U)(e=>e))}loadReport(){return this.reqAPIService.get("/manager/farm-api-report?fcode="+this.fcode)}listStore(){return this.reqAPIService.get("/manager/farm-api-mobie?fcode="+this.fcode+"&action=list-store")}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(o.$))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},41923:function(e,t,r){r.r(t),r.d(t,{MoneyEstimatePageModule:function(){return h}});var i=r(38583),o=r(90665),s=r(47063),n=r(13619),c=r(60271),u=r(37716);const a=[{path:"",component:c.u}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[n.Bz.forChild(a)],n.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[i.ez,o.u5,s.Pc,p]]}),e})()},19228:function(e,t,r){r.d(t,{r:function(){return n}});var i=r(15189),o=r(88002),s=r(37716);let n=(()=>{class e{constructor(e){this.reqAPIService=e,this.urlApi="/manager/money-api-mobie",this.urlApiNew="/manager/finance-api"}setCode(e){this.fcode=e,console.log(this.fcode)}loadMoney(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=list&page="+e).pipe((0,o.U)(e=>e))}search(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=search&keyword="+e.keyword+"&type="+e.type+"&timeFrom="+e.timeFrom+"&timeTo="+e.timeTo+"&page=0&numRow=20").pipe((0,o.U)(e=>e))}quickSearch(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=quick-search&type="+e.type+"&keyword="+e.keyword).pipe((0,o.U)(e=>e))}add(e){return this.reqAPIService.postApiWithFile("add",e,"&fcode="+this.fcode,this.urlApiNew)}edit(e){return this.reqAPIService.postApiWithFile("edit",e,"&fcode="+this.fcode+"&item="+e.get("id")+"&cr="+e.get("type"),this.urlApiNew)}editGroup(e){return this.reqAPIService.postApiWithFile("editTypeAll",e,"&fcode="+this.fcode+"&item="+e.get("id")+"&cr="+e.get("type"),this.urlApiNew)}delete(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=detele&item="+e.item+"&cr="+e.cr)}getAnalyst(e){return this.reqAPIService.post(this.urlApiNew+"?fcode="+this.fcode+"&action=analyst",e)}getGroup(e,t){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=getItemByCode&code="+e+"&cr="+t)}getCategories(){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=listCategory")}confirmMoney(e,t,r,i){return this.reqAPIService.get(this.urlApiNew+"?action=confirm&ccode="+r+"&cr="+t+"&id="+e+"&confirm="+i)}updateFund(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=updateFund&fcode="+e+"&value="+t)}addCategory(e){return this.reqAPIService.post(this.urlApiNew+"?action=addCategory&fcode="+this.fcode,e)}searchCustomer(e,t){return this.reqAPIService.post(this.urlApiNew+"?action=searchCustomer&fcode="+this.fcode,{name:e,type:t})}getBill(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=get&fcode="+this.fcode+"&type="+t+"&id="+e)}getCustomers(){return this.reqAPIService.get(this.urlApiNew+"?action=getCustomers&fcode="+this.fcode)}getACustomer(e){return this.reqAPIService.get(this.urlApiNew+"?action=getACustomer&fcode="+this.fcode+"&customer_slug="+e)}getDebtCustomer(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getDebtCustomer&type="+t+"&fcode="+this.fcode+"&customer_slug="+e)}addMultiDebtRecord(e){return this.reqAPIService.post(this.urlApiNew+"?action=addMultiDebt&fcode="+this.fcode,e)}getBillByAlias(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getByAlias&fcode="+this.fcode+"&alias="+e+"&type="+t)}getListMoneyByGroup(){return this.reqAPIService.get(this.urlApiNew+"?action=getListMoneyByGroup&fcode="+this.fcode)}getDetailByGroup(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getDetailByGroup&fcode="+this.fcode+"&group="+e+"&type="+t)}getDebtByGroup(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getDebtByGroup&type="+t+"&fcode="+this.fcode+"&group="+e)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(i.$))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);