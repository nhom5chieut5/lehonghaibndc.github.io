"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[5728],{27887:function(t,e,i){i.d(e,{E:function(){return s}});class s{constructor(){this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}setStart(t){this.start=t,!0===t&&(this.pending=!0,this.end=!1),this.result=null,this.count++}setPending(t){this.pending=t,!1===t?this.start=!1:this.end=!0}setResult(t){this.result=t,this.pending=!1,this.start=!1,this.end=!0}}},25728:function(t,e,i){i.r(e),i.d(e,{StoreReportPageModule:function(){return d}});var s=i(38583),o=i(90665),n=i(47063),r=i(13619),a=i(96351),c=i(37716);const l=[{path:"",component:a.E}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.Bz.forChild(l)],r.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.ez,o.u5,n.Pc,h]]}),t})()},96351:function(t,e,i){i.d(e,{E:function(){return u}});var s=i(27887),o=i(22923),n=i(37716),r=i(47063),a=i(81780),c=i(84465),l=i(56209),h=i(38583);function d(t,e){1&t&&(n.TgZ(0,"div"),n._UZ(1,"ion-spinner",6),n.qZA())}let u=(()=>{class t{constructor(t,e,i,o){this.modalControler=t,this.translate=e,this.storeService=i,this.toastService=o,this.loadingFlag=new s.E}ngOnInit(){this.loadData()}loadData(){this.loadingFlag.setPending(!0),this.storeService.getApiStore("analyze","&fcode="+this.storeService.getFarmCode(),"manager/store-api-mobie").subscribe(t=>{1==t.status?this.initChart(t.data):this.toastService.warning(t.error),this.loadingFlag.setResult(!0)},()=>{this.toastService.danger(this.translate.instant("ERROR_CONNECT")),this.loadingFlag.setResult(!1)})}initChart(t){let e=[],i=[],s=[];for(let r in t.usePerDay){e.push(r);for(let e in t.usePerDay[r])-1==s.indexOf(e)&&(s.push(e),i.push({name:e,type:"bar",stack:"total",label:{show:!1},emphasis:{focus:"series"},data:[]}))}e.forEach(e=>{for(var o=0;o<s.length;o++){var n=0;t.usePerDay[e][s[o]]&&(n=+(+t.usePerDay[e][s[o]]).toFixed(0)),i[o].data.push(n)}});let o=[],n=[{name:this.translate.instant("COST"),type:"bar",stack:"total",label:{show:!1},emphasis:{focus:"series"},data:[]}];t.costPerDay.forEach(t=>{o.push(t.date),n[0].data.push((+t.total).toFixed(0))}),this.optionDay={title:{text:this.translate.instant("WAREHOUSE_MOD.TOTAL_QUANTITY"),padding:0,left:"center",textStyle:{fontFamily:"averta",fontSize:17,fontWeight:600}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:"0"},grid:{left:"3%",right:"4%",bottom:"10%",containLabel:!0},yAxis:{type:"value"},xAxis:{type:"category",data:e},series:i},this.optionCost={title:{text:this.translate.instant("WAREHOUSE_MOD.TOTAL_COST"),padding:0,left:"center",textStyle:{fontFamily:"averta",fontSize:17,fontWeight:600}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:"0"},grid:{left:"3%",right:"4%",bottom:"10%",containLabel:!0},yAxis:{type:"value"},xAxis:{type:"category",data:o},series:n}}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(r.IN),n.Y36(a.sK),n.Y36(o.d),n.Y36(c.k))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-store-report"]],decls:13,vars:6,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],["echarts","",1,"ion-margin-top",3,"options"],[1,"ion-text-center"],[4,"ngIf"],["name","dots"]],template:function(t,e){1&t&&(n.TgZ(0,"ion-header"),n.TgZ(1,"ion-toolbar"),n.TgZ(2,"ion-buttons",0),n.TgZ(3,"ion-button",1),n.NdJ("click",function(){return e.modalControler.dismiss()}),n._UZ(4,"ion-icon",2),n.qZA(),n.qZA(),n.TgZ(5,"ion-title"),n._uU(6),n.ALo(7,"translate"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(8,"ion-content"),n._UZ(9,"div",3),n._UZ(10,"div",3),n.TgZ(11,"div",4),n.YNc(12,d,2,0,"div",5),n.qZA(),n.qZA()),2&t&&(n.xp6(6),n.Oqu(n.lcZ(7,4,"WAREHOUSE_MOD.REPORT")),n.xp6(3),n.Q6J("options",e.optionDay),n.xp6(1),n.Q6J("options",e.optionCost),n.xp6(2),n.Q6J("ngIf",e.loadingFlag.pending))},directives:[r.Gu,r.sr,r.Sm,r.YG,r.gu,r.wd,r.W2,l._w,h.O5,r.PQ],pipes:[a.X$],styles:[""]}),t})()},22923:function(t,e,i){i.d(e,{d:function(){return a}});var s=i(88002),o=i(26215),n=i(15189),r=i(37716);let a=(()=>{class t{constructor(t){this.reqAPIService=t,this.urlApi="/manager/store-api-mobie",this.NEW_URL_API="/manager/warehouse-api",this.changeDataStore=!1,this.onLoaded$=new o.X(0)}destroy(){this.fcode=null,this.store=null}setFarmCode(t){this.fcode=t}getFarmCode(){return this.fcode}setStoreCode(t){this.wcode=t}getStoreCode(){return this.wcode}setStore(t){this.store=t}getStore(){return this.store}itemChanged(t,e){void 0!==this.store[t]&&Object.assign(this.store[t],e)}getApiStore(t="",e="",i=""){let o;return o=""===i?this.NEW_URL_API+"?action="+t+"&wcode="+this.wcode+e:`/${i}?action=`+t+e,this.reqAPIService.get(o).pipe((0,s.U)(t=>t))}sendPost(t="",e={},i="",o=""){let n;return n=""===o?this.NEW_URL_API+"?action="+t+"&wcode="+this.wcode+i:`/${o}?action=`+t+i,this.reqAPIService.post(n,e).pipe((0,s.U)(t=>t))}sendPostWithFile(t="",e={},i="",s=""){return this.reqAPIService.postApiWithFile(t,e,"&wcode="+this.wcode+i,this.NEW_URL_API)}postEdit(t,e){return this.reqAPIService.post(this.urlApi+"?action=edit-product-private&fcode="+this.fcode+"&id="+t,e)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(n.$))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);