!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[9e3],{76329:function(t,e,n){var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(13409),o=n(25639),s=function(t){function e(e){var n=t.call(this)||this;return n._value=e,n}return i(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),e.prototype._subscribe=function(e){var n=t.prototype._subscribe.call(this,e);return n&&!n.closed&&e.next(this._value),n},e.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new o.ObjectUnsubscribedError;return this._value},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(a.Subject);e.BehaviorSubject=s},13409:function(t,e,n){var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(93576),o=n(67241),s=n(43984),c=n(25639),u=n(45298),l=n(81476),d=function(t){function e(e){var n=t.call(this,e)||this;return n.destination=e,n}return i(e,t),e}(o.Subscriber);e.SubjectSubscriber=d;var p=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return i(e,t),e.prototype[l.rxSubscriber]=function(){return new d(this)},e.prototype.lift=function(t){var e=new f(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;if(!this.isStopped)for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].next(t)},e.prototype.error=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new c.ObjectUnsubscribedError;this.isStopped=!0;for(var t=this.observers,e=t.length,n=t.slice(),r=0;r<e;r++)n[r].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new c.ObjectUnsubscribedError;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;return this.hasError?(t.error(this.thrownError),s.Subscription.EMPTY):this.isStopped?(t.complete(),s.Subscription.EMPTY):(this.observers.push(t),new u.SubjectSubscription(this,t))},e.prototype.asObservable=function(){var t=new a.Observable;return t.source=this,t},e.create=function(t,e){return new f(t,e)},e}(a.Observable);e.Subject=p;var f=function(t){function e(e,n){var r=t.call(this)||this;return r.destination=e,r.source=n,r}return i(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):s.Subscription.EMPTY},e}(p);e.AnonymousSubject=f},45298:function(t,e,n){var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e,n){var r=t.call(this)||this;return r.subject=e,r.subscriber=n,r.closed=!1,r}return i(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}},e}(n(43984).Subscription);e.SubjectSubscription=a},25639:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}();e.ObjectUnsubscribedError=n},87498:function(e,r,i){i.d(r,{R:function(){return c}});var a,o=i(15189),s=i(37716),c=((a=function(){function e(n){t(this,e),this.reqAPIService=n}return n(e,[{key:"getFollowingList",value:function(){return this.reqAPIService.get("/follow/follow-api?action=list")}},{key:"searchFarm",value:function(t){return this.reqAPIService.post("/follow/follow-api?action=search",t)}},{key:"getPondsByFarmCode",value:function(t){return this.reqAPIService.get("/follow/follow-api?action=pondlist&fcode="+t)}},{key:"submitFollowerRequest",value:function(t){return this.reqAPIService.get("/manager/follow-api?action=request&pcode="+t)}},{key:"unFollow",value:function(t){return this.reqAPIService.post("/follow/follow-api?action=unfollow",{item_code:t})}}]),e}()).\u0275fac=function(t){return new(t||a)(s.LFG(o.$))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac}),a)},75446:function(e,r,i){i.d(r,{e:function(){return y}});var a=i(64762),o=i(25917),s=i(88002),c=i(87498),u=i(27887),l=i(40044),d=i(37716),p=i(47063),f=i(84465),h=i(81780),g=i(90665),m=i(38583);function v(t,e){1&t&&d._UZ(0,"ion-progress-bar",7)}function Z(t,e){if(1&t){var n=d.EpF();d.TgZ(0,"ion-item"),d._UZ(1,"ion-icon",8),d.TgZ(2,"ion-label"),d.TgZ(3,"h3"),d._uU(4),d.qZA(),d.TgZ(5,"p"),d._uU(6),d.qZA(),d.TgZ(7,"p"),d._uU(8),d.qZA(),d.qZA(),d.TgZ(9,"ion-button",9),d.NdJ("click",function(){var t=d.CHM(n).$implicit;return d.oxw().selectFarm(t)}),d._uU(10),d.ALo(11,"translate"),d.qZA(),d.qZA()}if(2&t){var r=e.$implicit,i=d.oxw();d.xp6(4),d.Oqu(r.name),d.xp6(2),d.Oqu(r.company_name),d.xp6(2),d.Oqu(r.address),d.xp6(1),d.Q6J("disabled",i.checkExist(r)),d.xp6(1),d.hij(" ",d.lcZ(11,5,"ADD")," ")}}function b(t,e){if(1&t&&(d.TgZ(0,"ion-item",10),d.TgZ(1,"ion-label"),d.TgZ(2,"p"),d._uU(3),d.qZA(),d.qZA(),d.qZA()),2&t){var n=d.oxw();d.xp6(3),d.Oqu(n.searchMessage)}}var A,y=((A=function(){function e(n,r,i,a,o,s){t(this,e),this.modalController=n,this.labService=r,this.toastService=i,this.translate=a,this.followService=o,this.alertController=s,this.loadingFlag=new u.E,this.keyword="",this.listAdded=[]}return n(e,[{key:"ngOnInit",value:function(){}},{key:"inputSearch",value:function(){var t=this;this.loadingFlag.setPending(!0),this.farms=this.getFarmList(this.keyword),this.farms.subscribe(function(e){e?(0==e.length&&(t.searchMessage=t.translate.instant("FOLLOW_MOD.NOT_FIND")),t.loadingFlag.setResult(!0)):(t.loadingFlag.setResult(!1),t.searchMessage=t.translate.instant("FOLLOW_MOD.NOT_FIND_FARM"))})}},{key:"getFarmList",value:function(t){return""!=t.trim()?this.followService.searchFarm({keyword:t}).pipe((0,s.U)(function(t){return t.data})):(0,o.of)([])}},{key:"selectFarm",value:function(t){return(0,a.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"my-custom-class",header:this.translate.instant("CONFIRM"),message:this.translate.instant("ADD")+" "+t.name,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(t){console.log("Confirm Cancel: blah")}},{text:"Okay",handler:function(){n.addFarm(t)}}]});case 2:return e.next=4,e.sent.present();case 4:case"end":return e.stop()}},e,this)}))}},{key:"addFarm",value:function(t){var e=this;this.labService.addFarm(t.code).subscribe(function(n){1==n.status?(e.listAdded.push(t),e.toastService.success(e.translate.instant("SHOP.CART.ADDRESS.UPDATE_SUCCESS"))):e.toastService.warning(n.message)},function(){e.toastService.danger(e.translate.instant("ERROR_CONNECT"))})}},{key:"checkExist",value:function(t){return this.listAdded.filter(function(e){return e.id===t.id}).length>0}}]),e}()).\u0275fac=function(t){return new(t||A)(d.Y36(p.IN),d.Y36(l.y),d.Y36(f.k),d.Y36(h.sK),d.Y36(c.R),d.Y36(p.Br))},A.\u0275cmp=d.Xpm({type:A,selectors:[["app-add-farm"]],decls:17,vars:15,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["mode","ios","debounce","300",3,"placeholder","ngModel","ngModelChange","ionChange"],["type","indeterminate",4,"ngIf"],[4,"ngFor","ngForOf"],["lines","none",4,"ngIf"],["type","indeterminate"],["slot","start","src","/assets/icon/001-flooded-house.svg"],["slot","end","shape","round","fill","outline",3,"disabled","click"],["lines","none"]],template:function(t,e){1&t&&(d.TgZ(0,"ion-header"),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-buttons",0),d.TgZ(3,"ion-button",1),d.NdJ("click",function(){return e.modalController.dismiss()}),d._UZ(4,"ion-icon",2),d.qZA(),d.qZA(),d.TgZ(5,"ion-title"),d._uU(6),d.ALo(7,"translate"),d.ALo(8,"translate"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(9,"ion-content"),d.TgZ(10,"ion-searchbar",3),d.NdJ("ngModelChange",function(t){return e.keyword=t})("ionChange",function(){return e.inputSearch()}),d.ALo(11,"translate"),d.qZA(),d.YNc(12,v,1,0,"ion-progress-bar",4),d.TgZ(13,"ion-list"),d.YNc(14,Z,12,7,"ion-item",5),d.ALo(15,"async"),d.YNc(16,b,4,1,"ion-item",6),d.qZA(),d.qZA()),2&t&&(d.xp6(6),d.AsE("",d.lcZ(7,7,"ADD")," ",d.lcZ(8,9,"FARM"),""),d.xp6(4),d.s9C("placeholder",d.lcZ(11,11,"LAB_MOD.SEARCH_FARM")),d.Q6J("ngModel",e.keyword),d.xp6(2),d.Q6J("ngIf",e.loadingFlag.pending),d.xp6(2),d.Q6J("ngForOf",d.lcZ(15,13,e.farms)),d.xp6(2),d.Q6J("ngIf",e.searchMessage))},directives:[p.Gu,p.sr,p.Sm,p.YG,p.gu,p.wd,p.W2,p.VI,p.j9,g.JJ,g.On,m.O5,p.q_,m.sg,p.X7,p.Ie,p.Q$],pipes:[h.X$,m.Ov],styles:[""]}),A)},29111:function(e,r,i){i.d(r,{k:function(){return _}});var a=i(64762),o=i(16738),s=i(27887),c=i(90559),u=i(40044),l=i(37716),d=i(47063),p=i(81780),f=i(84465),h=i(38583),g=i(56209);function m(t,e){1&t&&(l.TgZ(0,"div",7),l._UZ(1,"ion-spinner",8),l.qZA())}function v(t,e){if(1&t&&(l.TgZ(0,"div"),l._UZ(1,"div",12),l.qZA()),2&t){var n=e.index,r=l.oxw(3);l.xp6(1),l.Q6J("options",r.getOptionBac(n))}}function Z(t,e){if(1&t&&(l.TgZ(0,"div"),l.TgZ(1,"p",10),l._uU(2),l.ALo(3,"translate"),l.qZA(),l.YNc(4,v,2,1,"div",11),l.qZA()),2&t){var n=l.oxw(2);l.xp6(2),l.hij(" ",l.lcZ(3,2,"LAB_MOD.BACTERIA")," "),l.xp6(2),l.Q6J("ngForOf",n.dataBacte.arr)}}function b(t,e){if(1&t&&l._UZ(0,"div",12),2&t){var n=l.oxw(2);l.Q6J("options",n.getOptionBar(n.result.antibiotic.data,n.result.antibiotic.group))}}function A(t,e){if(1&t&&(l.TgZ(0,"div"),l.YNc(1,Z,5,4,"div",6),l.YNc(2,b,1,1,"div",9),l.qZA()),2&t){var n=l.oxw();l.xp6(1),l.Q6J("ngIf",n.dataBacte.arr.length>0),l.xp6(1),l.Q6J("ngIf",n.result.antibiotic)}}var y,_=((y=function(){function e(n,r,i,a){t(this,e),this.modalController=n,this.translate=r,this.toastService=i,this.labService=a,this.dataFilter={species_id:"",startDate:o().subtract(180,"days"),endDate:o()},this.dataBacte={label:[],data:[]},this.loadingFlag=new s.E}return n(e,[{key:"ngOnInit",value:function(){this.loadData()}},{key:"loadData",value:function(){var t=this,e={species_id:this.dataFilter.species_id,startDate:this.dataFilter.startDate.valueOf()/1e3,endDate:this.dataFilter.endDate.valueOf()/1e3};this.loadingFlag.setPending(!0),this.labService.loadAnalyze(e).subscribe(function(e){1==+e.status?(t.result=e.data.analyze,t.dataFilter.startDate=o(e.data.rangeTime.start),t.dataFilter.endDate=o(e.data.rangeTime.end),t.processData(e.data.analyze)):t.toastService.warning(e.message),t.loadingFlag.setResult(!0)},function(){t.loadingFlag.setResult(!1),t.toastService.danger(t.translate.instant("ERROR_CONNECT"))})}},{key:"presentSearch",value:function(){return(0,a.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:c.O,componentProps:{data:{species_id:this.dataFilter.species_id,startDate:this.dataFilter.startDate.format("YYYY-MM-DD"),endDate:this.dataFilter.endDate.format("YYYY-MM-DD")}}});case 2:return(e=t.sent).onDidDismiss().then(function(t){t.data&&(n.dataFilter={species_id:t.data.species_id,startDate:o(t.data.startDate),endDate:o(t.data.endDate)},n.loadData())}),t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}))}},{key:"getJson",value:function(t){var e;try{e=JSON.parse(t)}catch(n){e={min:1e3,max:3e3}}return e}},{key:"getPondByString",value:function(t){var e=this,n=[];return t.split(",,,").forEach(function(t){var r=t.split(":::");0==n.filter(function(t){return t.pcode===r[2]}).length&&n.push({key:r[0],name:r[1],pcode:r[2],pname:r[3],fcode:r[4],fname:r[5],value:r[6],calculator:r[7]?e.getJson(r[7]):""})}),n}},{key:"getDailyByString",value:function(t){var e=this,n=[];return t.split(",,,").forEach(function(t){var r=t.split(":::");n.push({key:r[0],name:r[1],pcode:r[2],pname:r[3],fcode:r[4],fname:r[5],value:r[6],calculator:r[7]?e.getJson(r[7]):""})}),n}},{key:"getStatusBacte",value:function(t){return console.log(t),+t.value<+t.calculator.min?0:+t.value>+t.calculator.max?2:1}},{key:"getOptionBac",value:function(t){return{legend:{top:"bottom"},toolbox:{show:!0},tooltip:{trigger:"item"},series:[{name:this.dataBacte.arr[t].name,type:"pie",radius:[50,80],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:8},data:[{value:this.dataBacte.data[t][0],name:this.translate.instant("LAB_MOD.GOOD")},{value:this.dataBacte.data[t][1],name:this.translate.instant("WARNING")},{value:this.dataBacte.data[t][2],name:this.translate.instant("LAB_MOD.DANGER")}]}]}}},{key:"getOptionBar",value:function(t,e){var n=this.getDailyByString(t),r=[];n.forEach(function(t){r.findIndex(function(e){return e.code===t.fcode})<0&&r.push({code:t.fcode,name:t.fname})});var i=[];n.forEach(function(t){i.findIndex(function(e){return e.id===t.key})<0&&i.push({id:t.key,name:t.name})});var a=[];n.forEach(function(t){a.findIndex(function(e){return e.key==t.key&&e.pcode==t.pcode})<0&&a.push(t)});var o=[];return i.forEach(function(t){var e={name:t.name,type:"bar",data:[]};r.forEach(function(n){var r=a.filter(function(e){return e.key==t.id&&e.fcode==n.code}).length;e.data.push(0==r?"":r)}),o.push(e)}),{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:{type:"value",boundaryGap:[0,.01]},xAxis:{type:"category",data:r.map(function(t){return t.name})},series:o}}},{key:"processData",value:function(t){var e=this,n=[],r=[];if(t.bacteria){var i=this.getPondByString(t.bacteria.data);console.log(i),i.forEach(function(t){var i=n.findIndex(function(e){return e.key===t.key});i>=0?r[i][e.getStatusBacte(t)]=+r[i][e.getStatusBacte(t)]+1:(n.push(t),r.push([0,0,0]),r[r.length-1][e.getStatusBacte(t)]=+r[r.length-1][e.getStatusBacte(t)]+1)})}this.dataBacte.arr=n,this.dataBacte.data=r}}]),e}()).\u0275fac=function(t){return new(t||y)(l.Y36(d.IN),l.Y36(p.sK),l.Y36(f.k),l.Y36(u.y))},y.\u0275cmp=l.Xpm({type:y,selectors:[["app-lab-analyze"]],decls:14,vars:5,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["slot","end"],["slot","icon-only","name","search-outline"],["class","spiner-loading",4,"ngIf"],[4,"ngIf"],[1,"spiner-loading"],["name","dots"],["echarts","","class","ion-margin-top",3,"options",4,"ngIf"],[1,"ion-text-center"],[4,"ngFor","ngForOf"],["echarts","",1,"ion-margin-top",3,"options"]],template:function(t,e){1&t&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",0),l.TgZ(3,"ion-button",1),l.NdJ("click",function(){return e.modalController.dismiss()}),l._UZ(4,"ion-icon",2),l.qZA(),l.qZA(),l.TgZ(5,"ion-title"),l._uU(6),l.ALo(7,"translate"),l.qZA(),l.TgZ(8,"ion-buttons",3),l.TgZ(9,"ion-button",1),l.NdJ("click",function(){return e.presentSearch()}),l._UZ(10,"ion-icon",4),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(11,"ion-content"),l.YNc(12,m,2,0,"div",5),l.YNc(13,A,3,2,"div",6),l.qZA()),2&t&&(l.xp6(6),l.Oqu(l.lcZ(7,3,"LAB_MOD.ANALYZE")),l.xp6(6),l.Q6J("ngIf",e.loadingFlag.pending),l.xp6(1),l.Q6J("ngIf",!e.loadingFlag.pending))},directives:[d.Gu,d.sr,d.Sm,d.YG,d.gu,d.wd,d.W2,h.O5,d.PQ,h.sg,g._w],pipes:[p.X$],styles:[""]}),y)},90559:function(e,r,i){i.d(r,{O:function(){return m}});var a=i(64762),o=i(90665),s=i(16738),c=i(40044),u=i(37716),l=i(47063),d=i(81780),p=i(84465),f=i(38583);function h(t,e){if(1&t&&(u.TgZ(0,"ion-select-option",11),u._uU(1),u.qZA()),2&t){var n=e.$implicit;u.Q6J("value",n.id),u.xp6(1),u.Oqu(n.name)}}var g,m=((g=function(){function e(n,r,i,a){t(this,e),this.modalController=n,this.labService=r,this.translate=i,this.toastService=a,this.form=new o.cw({species_id:new o.NI(""),startDate:new o.NI(""),endDate:new o.NI("")}),this.listSpecies=[],this.maxDate=s(),this.minDate=s().subtract(180,"days")}return n(e,[{key:"ngOnInit",value:function(){return(0,a.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(this.data),t.next=3,this.loadSpecies();case 3:this.form.setValue(this.data);case 4:case"end":return t.stop()}},t,this)}))}},{key:"loadSpecies",value:function(){return(0,a.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.labService.loadSpecies().toPromise().catch(function(){n.toastService.danger(n.translate.instant("ERROR_CONNECT"))});case 2:1==+(e=t.sent).status?this.listSpecies=e.data:this.toastService.warning(e.message);case 4:case"end":return t.stop()}},t,this)}))}},{key:"save",value:function(){this.modalController.dismiss(this.form.value)}}]),e}()).\u0275fac=function(t){return new(t||g)(u.Y36(l.IN),u.Y36(c.y),u.Y36(d.sK),u.Y36(p.k))},g.\u0275cmp=u.Xpm({type:g,selectors:[["app-lab-filter"]],inputs:{data:"data"},decls:36,vars:30,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["slot","end"],[3,"formGroup"],["lines","inset"],["formControlName","species_id","interface","action-sheet"],["value",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","startDate",3,"displayFormat","min","max"],["formControlName","endDate",3,"displayFormat","min","max"],[3,"value"]],template:function(t,e){1&t&&(u.TgZ(0,"ion-header"),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-buttons",0),u.TgZ(3,"ion-button",1),u.NdJ("click",function(){return e.modalController.dismiss()}),u._UZ(4,"ion-icon",2),u.qZA(),u.qZA(),u.TgZ(5,"ion-title"),u._uU(6),u.ALo(7,"translate"),u.qZA(),u.TgZ(8,"ion-buttons",3),u.TgZ(9,"ion-button",1),u.NdJ("click",function(){return e.save()}),u._uU(10),u.ALo(11,"translate"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(12,"ion-content"),u.TgZ(13,"form",4),u.TgZ(14,"ion-list"),u.TgZ(15,"ion-item",5),u.TgZ(16,"ion-label"),u._uU(17),u.ALo(18,"translate"),u.qZA(),u.TgZ(19,"ion-select",6),u.TgZ(20,"ion-select-option",7),u._uU(21),u.ALo(22,"translate"),u.qZA(),u.YNc(23,h,2,2,"ion-select-option",8),u.qZA(),u.qZA(),u.TgZ(24,"ion-item",5),u.TgZ(25,"ion-label"),u._uU(26),u.ALo(27,"translate"),u.qZA(),u._UZ(28,"ion-datetime",9),u.ALo(29,"translate"),u.qZA(),u.TgZ(30,"ion-item",5),u.TgZ(31,"ion-label"),u._uU(32),u.ALo(33,"translate"),u.qZA(),u._UZ(34,"ion-datetime",10),u.ALo(35,"translate"),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(6),u.Oqu(u.lcZ(7,14,"SHOP.FILTER.TITLE")),u.xp6(4),u.Oqu(u.lcZ(11,16,"FARM_MOD.SAVE")),u.xp6(3),u.Q6J("formGroup",e.form),u.xp6(4),u.Oqu(u.lcZ(18,18,"SPECIES")),u.xp6(4),u.Oqu(u.lcZ(22,20,"FARM_MOD.ALL")),u.xp6(2),u.Q6J("ngForOf",e.listSpecies),u.xp6(3),u.Oqu(u.lcZ(27,22,"FARM_MOD.FROM")),u.xp6(2),u.Q6J("displayFormat",u.lcZ(29,24,"FORMAT_DATE_MOMENT"))("min",e.minDate.format("YYYY-MM-DD"))("max",e.maxDate.format("YYYY-MM-DD")),u.xp6(4),u.Oqu(u.lcZ(33,26,"FARM_MOD.TO")),u.xp6(2),u.Q6J("displayFormat",u.lcZ(35,28,"FORMAT_DATE_MOMENT"))("min",e.form.value.startDate)("max",e.maxDate.format("YYYY-MM-DD")))},directives:[l.Gu,l.sr,l.Sm,l.YG,l.gu,l.wd,l.W2,o._Y,o.JL,o.sg,l.q_,l.Ie,l.Q$,l.t9,l.QI,o.JJ,o.u,l.n0,f.sg,l.x4],pipes:[d.X$],styles:[""]}),g)},44577:function(e,r,i){i.d(r,{b:function(){return y}});var a=i(64762),o=i(16738),s=i(27887),c=i(90559),u=i(40044),l=i(37716),d=i(47063),p=i(81780),f=i(84465),h=i(38583),g=i(56209);function m(t,e){1&t&&(l.TgZ(0,"div",7),l._UZ(1,"ion-spinner",8),l.qZA())}function v(t,e){if(1&t&&(l.TgZ(0,"ion-item"),l.TgZ(1,"ion-label"),l.TgZ(2,"p"),l._uU(3),l.ALo(4,"translate"),l.qZA(),l.TgZ(5,"ion-text"),l._uU(6),l.ALo(7,"translate"),l.qZA(),l.qZA(),l.TgZ(8,"ion-text",12),l._uU(9),l.ALo(10,"translate"),l.qZA(),l.qZA()),2&t){var n=e.$implicit;l.xp6(3),l.AsE("",l.lcZ(4,6,"FARM")," ",n.name,""),l.xp6(3),l.AsE(" ",n.pond," ",l.lcZ(7,8,"POND")," "),l.xp6(3),l.AsE(" ",l.lcZ(10,10,"LAB_MOD.VACCINATED")," ",n.total," ")}}function Z(t,e){if(1&t&&(l.TgZ(0,"ion-item"),l.TgZ(1,"ion-label"),l.TgZ(2,"p"),l._uU(3),l.ALo(4,"translate"),l.qZA(),l.TgZ(5,"ion-text"),l._uU(6),l.qZA(),l.qZA(),l.TgZ(7,"ion-text",12),l._uU(8),l.ALo(9,"translate"),l.qZA(),l.qZA()),2&t){var n=e.$implicit;l.xp6(3),l.lnq("",n.farm_name," | ",l.lcZ(4,6,"POND")," ",n.name,""),l.xp6(3),l.hij(" ",n.seed," "),l.xp6(2),l.AsE(" ",l.lcZ(9,8,"POND_MOD.LOSS")," ",n.loss," ")}}function b(t,e){if(1&t&&(l.TgZ(0,"div"),l.TgZ(1,"p",9),l._uU(2),l.ALo(3,"translate"),l.qZA(),l._UZ(4,"div",10),l.TgZ(5,"ion-list"),l.YNc(6,v,11,12,"ion-item",11),l.qZA(),l.TgZ(7,"p",9),l._uU(8),l.ALo(9,"translate"),l.qZA(),l._UZ(10,"div",10),l.TgZ(11,"ion-list"),l.TgZ(12,"ion-list-header"),l._uU(13),l.ALo(14,"translate"),l.qZA(),l.YNc(15,Z,10,10,"ion-item",11),l.qZA(),l.qZA()),2&t){var n=l.oxw();l.xp6(2),l.Oqu(l.lcZ(3,7,"LAB_MOD.TIME_OLD")),l.xp6(2),l.Q6J("options",n.optionSeedOld),l.xp6(2),l.Q6J("ngForOf",n.result.pondVaccinated),l.xp6(2),l.Oqu(l.lcZ(9,9,"LAB_MOD.LOSS_RANGE")),l.xp6(2),l.Q6J("options",n.optionLoss),l.xp6(3),l.hij(" ",l.lcZ(14,11,"LAB_MOD.ACTUAL_LOSS")," "),l.xp6(2),l.Q6J("ngForOf",n.result.pondVaccinatedInLab)}}var A,y=((A=function(){function e(n,r,i,a){t(this,e),this.modalController=n,this.translate=r,this.toastService=i,this.labService=a,this.dataFilter={species_id:"",startDate:o().subtract(180,"days"),endDate:o()},this.loadingFlag=new s.E}return n(e,[{key:"ngOnInit",value:function(){this.loadData()}},{key:"loadData",value:function(){var t=this,e={species_id:this.dataFilter.species_id,startDate:this.dataFilter.startDate.valueOf()/1e3,endDate:this.dataFilter.endDate.valueOf()/1e3};this.loadingFlag.setPending(!0),this.labService.loadReport(e).subscribe(function(e){1==+e.status?(t.result=e.data,t.dataFilter.startDate=o(e.data.rangeTime.start),t.dataFilter.endDate=o(e.data.rangeTime.end),t.processData(e.data)):t.toastService.warning(e.message),t.loadingFlag.setResult(!0)},function(){t.loadingFlag.setResult(!1),t.toastService.danger(t.translate.instant("ERROR_CONNECT"))})}},{key:"presentSearch",value:function(){return(0,a.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:c.O,componentProps:{data:{species_id:this.dataFilter.species_id,startDate:this.dataFilter.startDate.format("YYYY-MM-DD"),endDate:this.dataFilter.endDate.format("YYYY-MM-DD")}}});case 2:return(e=t.sent).onDidDismiss().then(function(t){t.data&&(n.dataFilter={species_id:t.data.species_id,startDate:o(t.data.startDate),endDate:o(t.data.endDate)},n.loadData())}),t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}))}},{key:"processData",value:function(t){var e=this,n=[],r=[{name:"< 30 "+this.translate.instant("FARM_MOD.OLD_DAY"),type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:[]},{name:"30-60 "+this.translate.instant("FARM_MOD.OLD_DAY"),type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:[]},{name:">60 "+this.translate.instant("FARM_MOD.OLD_DAY"),type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:[]}];t.listSeedOldInFarm&&(t.listSeedOldInFarm.forEach(function(t){var i=["","",""];t.data.split(",").forEach(function(t){var n=t.split(":::"),r=+n[1]>60?2:e.float2int(+n[1]/30);i[r.toString()]=+i[r]+1}),r[0].data.push(i[0]),r[1].data.push(i[1]),r[2].data.push(i[2]),n.push(t.farm_name)}),console.log(r)),this.optionSeedOld={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:{type:"value"},xAxis:{type:"category",data:n},series:r};var i=[],a=[{name:"< 30 "+this.translate.instant("FARM_MOD.OLD_DAY"),type:"bar",data:[]},{name:"30-60 "+this.translate.instant("FARM_MOD.OLD_DAY"),type:"bar",data:[]},{name:">60 "+this.translate.instant("FARM_MOD.OLD_DAY"),type:"bar",data:[]}];t.lossInFarm&&t.lossInFarm.forEach(function(t){var n=[0,0,0],r=[0,0,0];t.data.split(",").forEach(function(t){var i=t.split(":::"),a=+i[1]>60?2:e.float2int(+i[1]/30);n[a]+=+i[2],r[a]+=+i[3]}),[0,1,2].forEach(function(t){a[t].data.push(0==n[t]||0==r[t]?"":(100*n[t]/r[t]).toFixed(2))}),i.push(t.farm_name)}),this.optionLoss={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:{type:"value",boundaryGap:[0,.01]},xAxis:{type:"category",data:i},series:a},console.log(a)}},{key:"float2int",value:function(t){return 0|t}},{key:"getListLoss",value:function(t){var e=[];t.split(",").forEach(function(t){e.push({})})}}]),e}()).\u0275fac=function(t){return new(t||A)(l.Y36(d.IN),l.Y36(p.sK),l.Y36(f.k),l.Y36(u.y))},A.\u0275cmp=l.Xpm({type:A,selectors:[["app-lab-report"]],decls:14,vars:5,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["slot","end"],["slot","icon-only","name","search-outline"],["class","spiner-loading",4,"ngIf"],[4,"ngIf"],[1,"spiner-loading"],["name","dots"],[1,"ion-text-center"],["echarts","",1,"ion-margin-top",3,"options"],[4,"ngFor","ngForOf"],["color","danger","slot","end"]],template:function(t,e){1&t&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",0),l.TgZ(3,"ion-button",1),l.NdJ("click",function(){return e.modalController.dismiss()}),l._UZ(4,"ion-icon",2),l.qZA(),l.qZA(),l.TgZ(5,"ion-title"),l._uU(6),l.ALo(7,"translate"),l.qZA(),l.TgZ(8,"ion-buttons",3),l.TgZ(9,"ion-button",1),l.NdJ("click",function(){return e.presentSearch()}),l._UZ(10,"ion-icon",4),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(11,"ion-content"),l.YNc(12,m,2,0,"div",5),l.YNc(13,b,16,13,"div",6),l.qZA()),2&t&&(l.xp6(6),l.Oqu(l.lcZ(7,3,"LAB_MOD.REPORT")),l.xp6(6),l.Q6J("ngIf",e.loadingFlag.pending),l.xp6(1),l.Q6J("ngIf",!e.loadingFlag.pending))},directives:[d.Gu,d.sr,d.Sm,d.YG,d.gu,d.wd,d.W2,h.O5,d.PQ,g._w,d.q_,h.sg,d.yh,d.Ie,d.Q$,d.yW],pipes:[p.X$],styles:[""]}),A)},64557:function(e,r,i){i.r(r),i.d(r,{LabPageModule:function(){return w}});var a=i(38583),o=i(90665),s=i(47063),c=i(13619),u=i(64762),l=i(27887),d=i(75446),p=i(29111),f=i(44577),h=i(1209),g=i(40044),m=i(37716),v=i(81780),Z=i(84465);function b(t,e){1&t&&m._UZ(0,"ion-progress-bar",14)}function A(t,e){if(1&t&&(m.ynx(0),m.TgZ(1,"ion-item",15),m.TgZ(2,"ion-label"),m.TgZ(3,"ion-text"),m.TgZ(4,"h3"),m._uU(5),m.qZA(),m.qZA(),m.TgZ(6,"p"),m._uU(7),m.qZA(),m.qZA(),m.qZA(),m.BQk()),2&t){var n=e.$implicit;m.xp6(1),m.MGl("routerLink","/farm/",null==n?null:n.code,""),m.xp6(4),m.Oqu(n.name),m.xp6(2),m.Oqu(n.address)}}function y(t,e){if(1&t){var n=m.EpF();m.TgZ(0,"div"),m.TgZ(1,"ion-card",16),m.TgZ(2,"ion-card-content",17),m.TgZ(3,"p",18),m._uU(4),m.ALo(5,"translate"),m.qZA(),m.TgZ(6,"ion-button",19),m.NdJ("click",function(){return m.CHM(n),m.oxw().presentAddFarm()}),m._uU(7),m.ALo(8,"translate"),m.qZA(),m.qZA(),m.qZA(),m.qZA()}2&t&&(m.xp6(4),m.Oqu(m.lcZ(5,2,"LAB_MOD.LAB_EMPTY")),m.xp6(3),m.hij(" ",m.lcZ(8,4,"LAB_MOD.FARM_EMPTY")," "))}var _,O=[{path:"",component:(_=function(){function e(n,r,i,a,o){t(this,e),this.translate=n,this.toastService=r,this.labService=i,this.route=a,this.modalController=o,this.keyword="",this.farms=[],this.loadingFlag=new l.E}return n(e,[{key:"ngOnInit",value:function(){this.code=this.route.snapshot.paramMap.get("code"),this.labService.setCode(this.code),this.inputSearch()}},{key:"inputSearch",value:function(){var t=this;this.loadingFlag.setPending(!0),this.labService.loadFarm(this.keyword).subscribe(function(e){1==e.status?t.farms=e.data:t.toastService.warning(e.message),t.loadingFlag.setResult(!0)},function(){t.toastService.danger(t.translate.instant("ERROR_CONNECT")),t.loadingFlag.setResult(!1)})}},{key:"presentAddFarm",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:d.e});case 2:return(e=t.sent).onDidDismiss().then(function(t){n.keyword="",n.inputSearch()}),t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}))}},{key:"presentSetting",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:h.V});case 2:return(e=t.sent).onDidDismiss().then(function(t){}),t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}))}},{key:"openReport",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:f.b});case 2:return t.next=4,t.sent.present();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}))}},{key:"openAnalyze",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:p.k});case 2:return t.next=4,t.sent.present();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}))}}]),e}(),_.\u0275fac=function(t){return new(t||_)(m.Y36(v.sK),m.Y36(Z.k),m.Y36(g.y),m.Y36(c.gz),m.Y36(s.IN))},_.\u0275cmp=m.Xpm({type:_,selectors:[["app-lab"]],decls:34,vars:16,consts:[["slot","start"],["text","","defaultHref","tabs/subscription"],["slot","end"],[3,"click"],["name","add"],["slot","icon-only","name","cog-outline"],["mode","ios",1,"menu-icon-square",3,"click"],["color","primary","src","assets/img/chemical-report.svg",1,"icon-large"],["color","primary","src","assets/img/lab-analyze.svg",1,"icon-large"],["id","line"],["mode","ios","debounce","300",3,"placeholder","ngModel","ngModelChange","ionChange"],["type","indeterminate",4,"ngIf"],[4,"ngFor","ngForOf"],[4,"ngIf"],["type","indeterminate"],["detail","",3,"routerLink"],["mode","ios"],[1,"ion-text-center"],[1,"ion-padding"],["shape","round","color","primary",3,"click"]],template:function(t,e){1&t&&(m.TgZ(0,"ion-header"),m.TgZ(1,"ion-toolbar"),m.TgZ(2,"ion-buttons",0),m.TgZ(3,"ion-buttons",0),m._UZ(4,"ion-back-button",1),m.qZA(),m.qZA(),m.TgZ(5,"ion-title"),m._uU(6),m.ALo(7,"translate"),m.qZA(),m.TgZ(8,"ion-buttons",2),m.TgZ(9,"ion-button",3),m.NdJ("click",function(){return e.presentAddFarm()}),m._UZ(10,"ion-icon",4),m.qZA(),m.TgZ(11,"ion-button",3),m.NdJ("click",function(){return e.presentSetting()}),m._UZ(12,"ion-icon",5),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(13,"ion-content"),m.TgZ(14,"div"),m.TgZ(15,"ion-grid"),m.TgZ(16,"ion-row"),m.TgZ(17,"ion-col"),m.TgZ(18,"ion-card",6),m.NdJ("click",function(){return e.openReport()}),m._UZ(19,"ion-icon",7),m._uU(20),m.ALo(21,"translate"),m.qZA(),m.qZA(),m.TgZ(22,"ion-col"),m.TgZ(23,"ion-card",6),m.NdJ("click",function(){return e.openAnalyze()}),m._UZ(24,"ion-icon",8),m._uU(25),m.ALo(26,"translate"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m._UZ(27,"div",9),m.TgZ(28,"ion-searchbar",10),m.NdJ("ngModelChange",function(t){return e.keyword=t})("ionChange",function(){return e.inputSearch()}),m.ALo(29,"translate"),m.qZA(),m.YNc(30,b,1,0,"ion-progress-bar",11),m.TgZ(31,"ion-list"),m.YNc(32,A,8,3,"ng-container",12),m.qZA(),m.YNc(33,y,9,6,"div",13),m.qZA()),2&t&&(m.xp6(6),m.Oqu(m.lcZ(7,8,"MANAGEMENT")),m.xp6(14),m.hij(" ",m.lcZ(21,10,"LAB_MOD.REPORT")," "),m.xp6(5),m.hij(" ",m.lcZ(26,12,"LAB_MOD.ANALYZE")," "),m.xp6(3),m.s9C("placeholder",m.lcZ(29,14,"LAB_MOD.SEARCH_FARM")),m.Q6J("ngModel",e.keyword),m.xp6(2),m.Q6J("ngIf",e.loadingFlag.pending),m.xp6(2),m.Q6J("ngForOf",e.farms),m.xp6(1),m.Q6J("ngIf",0===e.farms.length&&""===e.keyword&&!e.loadingFlag.pending))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.YG,s.gu,s.W2,s.jY,s.Nd,s.wI,s.PM,s.VI,s.j9,o.JJ,o.On,a.O5,s.q_,a.sg,s.X7,s.Ie,s.YI,c.rH,s.Q$,s.yW,s.FN],pipes:[v.X$],styles:["#line[_ngcontent-%COMP%]{border:.7px solid #f5f6f9}"]}),_)},{path:"add-farm",loadChildren:function(){return i.e(1178).then(i.bind(i,81178)).then(function(t){return t.AddFarmPageModule})}},{path:"lab-setting",loadChildren:function(){return i.e(5028).then(i.bind(i,75028)).then(function(t){return t.LabSettingPageModule})}},{path:"lab-manager",loadChildren:function(){return i.e(2857).then(i.bind(i,92857)).then(function(t){return t.LabManagerPageModule})}},{path:"lab-edit",loadChildren:function(){return i.e(5649).then(i.bind(i,75649)).then(function(t){return t.LabEditPageModule})}},{path:"lab-create",loadChildren:function(){return i.e(5524).then(i.bind(i,15524)).then(function(t){return t.LabCreatePageModule})}},{path:"lab-map",loadChildren:function(){return Promise.all([i.e(5869),i.e(8418)]).then(i.bind(i,58418)).then(function(t){return t.LabMapPageModule})}},{path:"lab-report",loadChildren:function(){return i.e(4480).then(i.bind(i,94480)).then(function(t){return t.LabReportPageModule})}},{path:"lab-analyze",loadChildren:function(){return i.e(2121).then(i.bind(i,32121)).then(function(t){return t.LabAnalyzePageModule})}},{path:"lab-filter",loadChildren:function(){return i.e(3464).then(i.bind(i,3464)).then(function(t){return t.LabFilterPageModule})}}],x=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[c.Bz.forChild(O)],c.Bz]}),e}(),T=i(87498),D=i(66341),q=i(56209),w=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({providers:[g.y,T.R,D.n],imports:[[a.ez,o.u5,o.UX,s.Pc,x,v.aw.forChild(),q.Ns]]}),e}()}}])}();