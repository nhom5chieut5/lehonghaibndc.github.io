"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[3304],{27887:function(e,t,i){i.d(t,{E:function(){return o}});class o{constructor(){this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}setStart(e){this.start=e,!0===e&&(this.pending=!0,this.end=!1),this.result=null,this.count++}setPending(e){this.pending=e,!1===e?this.start=!1:this.end=!0}setResult(e){this.result=e,this.pending=!1,this.start=!1,this.end=!0}}},33304:function(e,t,i){i.r(t),i.d(t,{MoneyGroupDetailPageModule:function(){return p}});var o=i(38583),n=i(90665),r=i(47063),s=i(13619),c=i(30084),u=i(37716);const l=[{path:"",component:c.K}];let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[s.Bz.forChild(l)],s.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[o.ez,n.u5,r.Pc,a]]}),e})()},30084:function(e,t,i){i.d(t,{K:function(){return q}});var o=i(27887),n=i(19228),r=i(37716),s=i(84465),c=i(81780),u=i(47063),l=i(90665),a=i(38583);function p(e,t){1&e&&r._UZ(0,"ion-progress-bar",8)}function d(e,t){if(1&e&&(r.TgZ(0,"ion-text",16),r._uU(1),r.ALo(2,"translate"),r.ALo(3,"number"),r.qZA()),2&e){const e=r.oxw(2).$implicit;r.xp6(1),r.AsE(" ",r.lcZ(2,2,"MONEY_MOD.NEED_PAY")," ",r.lcZ(3,4,e.amounts-e.amounts_payed),"\u0111 ")}}function g(e,t){if(1&e&&(r.TgZ(0,"ion-text",17),r._uU(1),r.ALo(2,"translate"),r.ALo(3,"number"),r.qZA()),2&e){const e=r.oxw(2).$implicit;r.xp6(1),r.AsE(" ",r.lcZ(2,2,"MONEY_MOD.NEED_COLLECT")," ",r.lcZ(3,4,e.amounts-e.amounts_payed),"\u0111 ")}}function h(e,t){if(1&e&&(r.TgZ(0,"ion-item"),r.TgZ(1,"ion-label"),r.TgZ(2,"p"),r.TgZ(3,"b"),r._uU(4),r.qZA(),r._UZ(5,"ion-icon",10),r.qZA(),r.TgZ(6,"p"),r._uU(7),r.ALo(8,"date"),r.qZA(),r.TgZ(9,"h3"),r._uU(10),r.qZA(),r.qZA(),r.TgZ(11,"ion-label",11),r.TgZ(12,"p",12),r.TgZ(13,"ion-text",13),r._uU(14),r.ALo(15,"number"),r.qZA(),r.qZA(),r.TgZ(16,"p",12),r.YNc(17,d,4,6,"ion-text",14),r.YNc(18,g,4,6,"ion-text",15),r.qZA(),r.qZA(),r.qZA()),2&e){const e=r.oxw().$implicit;r.xp6(4),r.AsE("#",e.id," ",e.group_name?e.group_name:"None",""),r.xp6(1),r.Q6J("name",1==+e.confirm?"checkbox":"help-circle")("color",1==+e.confirm?"success":"danger"),r.xp6(2),r.hij(" ",r.xi3(8,10,1e3*e.add_time,"d-MM-Y")," "),r.xp6(3),r.hij(" ",e.title," "),r.xp6(3),r.Q6J("color","in"==e.type?"success":"danger"),r.xp6(1),r.hij(" ",r.lcZ(15,13,e.amounts),"\u0111 "),r.xp6(3),r.Q6J("ngIf","out"==e.type&&+e.amounts_payed<+e.amounts),r.xp6(1),r.Q6J("ngIf","in"==e.type&&+e.amounts_payed<+e.amounts)}}function A(e,t){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,h,19,15,"ion-item",7),r.qZA()),2&e){const e=t.$implicit;r.xp6(1),r.Q6J("ngIf",4!=+e.group_id)}}function f(e,t){if(1&e&&(r.TgZ(0,"ion-list"),r.YNc(1,A,2,1,"div",9),r.qZA()),2&e){const e=r.oxw();r.xp6(1),r.Q6J("ngForOf",e.list)}}function m(e,t){if(1&e&&(r.TgZ(0,"ion-item"),r._UZ(1,"ion-icon",10),r.TgZ(2,"ion-label"),r.TgZ(3,"p"),r.TgZ(4,"b"),r._uU(5),r.qZA(),r.qZA(),r.TgZ(6,"p"),r._uU(7),r.ALo(8,"date"),r.qZA(),r.TgZ(9,"h3"),r._uU(10),r.qZA(),r.qZA(),r.TgZ(11,"ion-text",18),r._uU(12),r.ALo(13,"number"),r.qZA(),r.qZA()),2&e){const e=r.oxw().$implicit;r.xp6(1),r.Q6J("name",1==+e.confirm?"checkbox":"help-circle")("color",1==+e.confirm?"success":"danger"),r.xp6(4),r.AsE("#",e.bill_id," ",e.group_name?e.group_name:"None",""),r.xp6(2),r.hij(" ",r.xi3(8,7,1e3*e.add_time,"d-MM-Y")," "),r.xp6(3),r.hij(" ",e.title," "),r.xp6(2),r.hij(" ",r.lcZ(13,10,e.amounts_payed),"\u0111 ")}}function Z(e,t){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,m,14,12,"ion-item",7),r.qZA()),2&e){const e=t.$implicit;r.xp6(1),r.Q6J("ngIf",4==+e.group_id)}}function y(e,t){if(1&e&&(r.TgZ(0,"ion-list"),r.YNc(1,Z,2,1,"div",9),r.qZA()),2&e){const e=r.oxw();r.xp6(1),r.Q6J("ngForOf",e.list)}}let q=(()=>{class e{constructor(e,t,i,n){this.moneyService=e,this.toastService=t,this.translate=i,this.modalController=n,this.list=[],this.loadingFlag=new o.E,this.typeShow="money"}ngOnInit(){console.log(this.item),this.loadingFlag.setPending(!0),this.moneyService.getDetailByGroup(this.item.group_id,this.item.cr).subscribe(e=>{0==e.status?this.toastService.warning(e.error):this.list=e.data,this.loadingFlag.setResult(!0)},()=>{this.loadingFlag.setResult(!1),this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}segmentChanged(e){}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(n.r),r.Y36(s.k),r.Y36(c.sK),r.Y36(u.IN))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-money-group-detail"]],inputs:{item:"item"},decls:21,vars:13,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["mode","ios",3,"ngModel","ngModelChange","ionChange"],["value","money"],["value","debt"],["type","indeterminate",4,"ngIf"],[4,"ngIf"],["type","indeterminate"],[4,"ngFor","ngForOf"],["slot","start",3,"name","color"],["slot","end"],[1,"ion-text-end"],[3,"color"],["color","danger",4,"ngIf"],["color","success",4,"ngIf"],["color","danger"],["color","success"],["slot","end","color","warning"]],template:function(e,t){1&e&&(r.TgZ(0,"ion-header"),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-buttons",0),r.TgZ(3,"ion-button",1),r.NdJ("click",function(){return t.modalController.dismiss(!1)}),r._UZ(4,"ion-icon",2),r.qZA(),r.qZA(),r.TgZ(5,"ion-title"),r._uU(6),r.ALo(7,"translate"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(8,"ion-content"),r.TgZ(9,"ion-segment",3),r.NdJ("ngModelChange",function(e){return t.typeShow=e})("ionChange",function(e){return t.segmentChanged(e)}),r.TgZ(10,"ion-segment-button",4),r.TgZ(11,"ion-label"),r._uU(12),r.ALo(13,"translate"),r.qZA(),r.qZA(),r.TgZ(14,"ion-segment-button",5),r.TgZ(15,"ion-label"),r._uU(16),r.ALo(17,"translate"),r.qZA(),r.qZA(),r.qZA(),r.YNc(18,p,1,0,"ion-progress-bar",6),r.YNc(19,f,2,1,"ion-list",7),r.YNc(20,y,2,1,"ion-list",7),r.qZA()),2&e&&(r.xp6(6),r.Oqu(r.lcZ(7,7,"SHOP.DETAIL")),r.xp6(3),r.Q6J("ngModel",t.typeShow),r.xp6(3),r.Oqu(r.lcZ(13,9,"MONEY")),r.xp6(4),r.Oqu(r.lcZ(17,11,"MONEY_MOD.DEBT")),r.xp6(2),r.Q6J("ngIf",t.loadingFlag.pending),r.xp6(1),r.Q6J("ngIf","money"==t.typeShow),r.xp6(1),r.Q6J("ngIf","debt"==t.typeShow))},directives:[u.Gu,u.sr,u.Sm,u.YG,u.gu,u.wd,u.W2,u.cJ,u.QI,l.JJ,l.On,u.GO,u.Q$,a.O5,u.X7,u.q_,a.sg,u.Ie,u.yW],pipes:[c.X$,a.uU,a.JJ],styles:[""]}),e})()},19228:function(e,t,i){i.d(t,{r:function(){return s}});var o=i(15189),n=i(88002),r=i(37716);let s=(()=>{class e{constructor(e){this.reqAPIService=e,this.urlApi="/manager/money-api-mobie",this.urlApiNew="/manager/finance-api"}setCode(e){this.fcode=e,console.log(this.fcode)}loadMoney(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=list&page="+e).pipe((0,n.U)(e=>e))}search(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=search&keyword="+e.keyword+"&type="+e.type+"&timeFrom="+e.timeFrom+"&timeTo="+e.timeTo+"&page=0&numRow=20").pipe((0,n.U)(e=>e))}quickSearch(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=quick-search&type="+e.type+"&keyword="+e.keyword).pipe((0,n.U)(e=>e))}add(e){return this.reqAPIService.postApiWithFile("add",e,"&fcode="+this.fcode,this.urlApiNew)}edit(e){return this.reqAPIService.postApiWithFile("edit",e,"&fcode="+this.fcode+"&item="+e.get("id")+"&cr="+e.get("type"),this.urlApiNew)}editGroup(e){return this.reqAPIService.postApiWithFile("editTypeAll",e,"&fcode="+this.fcode+"&item="+e.get("id")+"&cr="+e.get("type"),this.urlApiNew)}delete(e){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=detele&item="+e.item+"&cr="+e.cr)}getAnalyst(e){return this.reqAPIService.post(this.urlApiNew+"?fcode="+this.fcode+"&action=analyst",e)}getGroup(e,t){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=getItemByCode&code="+e+"&cr="+t)}getCategories(){return this.reqAPIService.get(this.urlApiNew+"?fcode="+this.fcode+"&action=listCategory")}confirmMoney(e,t,i,o){return this.reqAPIService.get(this.urlApiNew+"?action=confirm&ccode="+i+"&cr="+t+"&id="+e+"&confirm="+o)}updateFund(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=updateFund&fcode="+e+"&value="+t)}addCategory(e){return this.reqAPIService.post(this.urlApiNew+"?action=addCategory&fcode="+this.fcode,e)}searchCustomer(e,t){return this.reqAPIService.post(this.urlApiNew+"?action=searchCustomer&fcode="+this.fcode,{name:e,type:t})}getBill(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=get&fcode="+this.fcode+"&type="+t+"&id="+e)}getCustomers(){return this.reqAPIService.get(this.urlApiNew+"?action=getCustomers&fcode="+this.fcode)}getACustomer(e){return this.reqAPIService.get(this.urlApiNew+"?action=getACustomer&fcode="+this.fcode+"&customer_slug="+e)}getDebtCustomer(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getDebtCustomer&type="+t+"&fcode="+this.fcode+"&customer_slug="+e)}addMultiDebtRecord(e){return this.reqAPIService.post(this.urlApiNew+"?action=addMultiDebt&fcode="+this.fcode,e)}getBillByAlias(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getByAlias&fcode="+this.fcode+"&alias="+e+"&type="+t)}getListMoneyByGroup(){return this.reqAPIService.get(this.urlApiNew+"?action=getListMoneyByGroup&fcode="+this.fcode)}getDetailByGroup(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getDetailByGroup&fcode="+this.fcode+"&group="+e+"&type="+t)}getDebtByGroup(e,t){return this.reqAPIService.get(this.urlApiNew+"?action=getDebtByGroup&type="+t+"&fcode="+this.fcode+"&group="+e)}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(o.$))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);