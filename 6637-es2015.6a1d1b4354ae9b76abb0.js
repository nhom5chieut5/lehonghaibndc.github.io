"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[6637],{27887:function(t,n,e){e.d(n,{E:function(){return i}});class i{constructor(){this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}setStart(t){this.start=t,!0===t&&(this.pending=!0,this.end=!1),this.result=null,this.count++}setPending(t){this.pending=t,!1===t?this.start=!1:this.end=!0}setResult(t){this.result=t,this.pending=!1,this.start=!1,this.end=!0}}},46637:function(t,n,e){e.r(n),e.d(n,{TraceabilityPageModule:function(){return N}});var i=e(38583),o=e(90665),s=e(13619),l=e(47063),r=e(64762),u=e(62166),a=e(37716),Z=e(81780);let A=(()=>{class t{constructor(t,n){this.modalController=t,this.translate=n}ngOnInit(){}presentScan(){return(0,r.mG)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:u.M})).present()})}}return t.\u0275fac=function(n){return new(n||t)(a.Y36(l.IN),a.Y36(Z.sK))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-traceability"]],decls:11,vars:3,consts:[["slot","start"],["slot","end"],[3,"click"],["name","scan-outline"]],template:function(t,n){1&t&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",0),a._UZ(3,"ion-menu-button"),a.qZA(),a.TgZ(4,"ion-title"),a._uU(5),a.ALo(6,"translate"),a.qZA(),a.TgZ(7,"ion-buttons",1),a.TgZ(8,"ion-button",2),a.NdJ("click",function(){return n.presentScan()}),a._UZ(9,"ion-icon",3),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a._UZ(10,"ion-content")),2&t&&(a.xp6(5),a.Oqu(a.lcZ(6,1,"TRACEABILITY")))},directives:[l.Gu,l.sr,l.Sm,l.fG,l.wd,l.YG,l.gu,l.W2],pipes:[Z.X$],styles:[""]}),t})();var c=e(81933),g=e(27887),T=e(84465);function p(t,n){1&t&&(a.TgZ(0,"div"),a._UZ(1,"ion-spinner",5),a.qZA())}function q(t,n){if(1&t&&(a.TgZ(0,"div"),a.TgZ(1,"p"),a.TgZ(2,"ion-text",6),a._uU(3),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.oxw();a.xp6(3),a.Oqu(t.message)}}function _(t,n){if(1&t&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"translate"),a.ALo(3,"number"),a.ALo(4,"translate"),a.qZA()),2&t){const t=a.oxw(2);a.xp6(1),a.lnq("",a.lcZ(2,3,"TRACEABILITY_MOD.STOCKING")," ",a.xi3(3,5,(t.now-t.result.info.seed_date)/86400,"0.0-0")," ",a.lcZ(4,8,"TRACEABILITY_MOD.DAY_OLD"),"")}}function d(t,n){1&t&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"translate"),a.qZA()),2&t&&(a.xp6(1),a.Oqu(a.lcZ(2,1,"TRACEABILITY_MOD.CANCELED")))}function h(t,n){if(1&t&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"translate"),a.ALo(3,"translate"),a.qZA()),2&t){const t=a.oxw(2);a.xp6(1),a.lnq("",a.lcZ(2,3,"TRACEABILITY_MOD.HARVESTED")," ",null==t.result.buyer?null:t.result.buyer.length," ",a.lcZ(3,5,"TRACEABILITY_MOD.TIMES"),"")}}function f(t,n){if(1&t&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-label"),a.TgZ(2,"h2"),a._uU(3),a.ALo(4,"translate"),a.qZA(),a.TgZ(5,"p"),a._uU(6),a.ALo(7,"number"),a.ALo(8,"translate"),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.oxw(2);a.xp6(3),a.Oqu(a.lcZ(4,3,"POND_MOD.STOCKING_TIME")),a.xp6(3),a.AsE("",a.xi3(7,5,(t.result.info.end_time-t.result.info.seed_date)/86400,"0.0-0")," ",a.lcZ(8,8,"DAY"),"")}}function O(t,n){if(1&t&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-label"),a.TgZ(2,"h2"),a._uU(3),a.ALo(4,"translate"),a.qZA(),a.TgZ(5,"p"),a._uU(6),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.oxw(2);a.xp6(3),a.Oqu(a.lcZ(4,2,"POND_MOD.PROCEDURE")),a.xp6(3),a.Oqu(t.result.procedure.name)}}function x(t,n){if(1&t&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-note",0),a._uU(2),a.qZA(),a.TgZ(3,"ion-label"),a.TgZ(4,"h2"),a._uU(5),a.ALo(6,"number"),a.ALo(7,"date"),a.ALo(8,"translate"),a.qZA(),a.TgZ(9,"p"),a._uU(10),a.qZA(),a.qZA(),a.qZA()),2&t){const t=n.$implicit,e=n.index;a.xp6(2),a.Oqu(e+1),a.xp6(3),a.AsE("",a.xi3(6,4,t.harvest_quantity,".0-1")," kg (",a.xi3(7,7,1e3*t.add_time,a.lcZ(8,10,"FORMAT_DATE")),")"),a.xp6(5),a.Oqu(t.buyer)}}function m(t,n){if(1&t&&(a.TgZ(0,"ion-list",7),a.TgZ(1,"ion-list-header",8),a.TgZ(2,"ion-label"),a._uU(3),a.ALo(4,"translate"),a.qZA(),a.qZA(),a.YNc(5,x,11,12,"ion-item",10),a.qZA()),2&t){const t=a.oxw(2);a.xp6(3),a.Oqu(a.lcZ(4,2,"POND_MOD.HARVEST")),a.xp6(2),a.Q6J("ngForOf",t.result.buyer)}}function I(t,n){if(1&t&&(a.TgZ(0,"p"),a._uU(1),a.qZA()),2&t){const t=n.$implicit;a.xp6(1),a.Oqu(t.supplier)}}function L(t,n){if(1&t&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-label"),a.TgZ(2,"h2"),a._uU(3),a.ALo(4,"translate"),a.qZA(),a.YNc(5,I,2,1,"p",10),a.qZA(),a.qZA()),2&t){const t=a.oxw(2);a.xp6(3),a.Oqu(a.lcZ(4,2,"TRACEABILITY_MOD.FINGERLING")),a.xp6(2),a.Q6J("ngForOf",t.result.seed)}}function U(t,n){if(1&t&&(a.TgZ(0,"ion-chip",13),a.TgZ(1,"ion-label"),a._uU(2),a.qZA(),a.qZA()),2&t){const t=n.$implicit;a.xp6(2),a.Oqu(t.name)}}function b(t,n){if(1&t&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-label",11),a.TgZ(2,"h2"),a._uU(3),a.ALo(4,"translate"),a.qZA(),a.TgZ(5,"p"),a.YNc(6,U,3,1,"ion-chip",12),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.oxw(2);a.xp6(3),a.Oqu(a.lcZ(4,2,"TRACEABILITY_MOD.FEED_WATER_TREATMENT")),a.xp6(3),a.Q6J("ngForOf",t.result.manufacturer)}}function E(t,n){if(1&t&&(a.TgZ(0,"div"),a.TgZ(1,"ion-list",7),a.TgZ(2,"ion-list-header",8),a.TgZ(3,"ion-label"),a._uU(4),a.ALo(5,"translate"),a.qZA(),a.qZA(),a.TgZ(6,"ion-item"),a.TgZ(7,"ion-label"),a.TgZ(8,"h2"),a._uU(9),a.ALo(10,"translate"),a.qZA(),a.TgZ(11,"p"),a._uU(12),a.qZA(),a.qZA(),a.qZA(),a.TgZ(13,"ion-item"),a.TgZ(14,"ion-label"),a.TgZ(15,"h2"),a._uU(16),a.ALo(17,"translate"),a.qZA(),a.TgZ(18,"p"),a._uU(19),a.ALo(20,"date"),a.ALo(21,"translate"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(22,"ion-item"),a.TgZ(23,"ion-label"),a.TgZ(24,"h2"),a._uU(25),a.ALo(26,"translate"),a.qZA(),a.YNc(27,_,5,10,"p",4),a.YNc(28,d,3,3,"p",4),a.YNc(29,h,4,7,"p",4),a.qZA(),a.qZA(),a.TgZ(30,"ion-item"),a.TgZ(31,"ion-label"),a.TgZ(32,"h2"),a._uU(33),a.ALo(34,"translate"),a.qZA(),a.TgZ(35,"p"),a._uU(36),a.ALo(37,"number"),a.ALo(38,"translate"),a.ALo(39,"number"),a.ALo(40,"translate"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(41,"ion-item"),a.TgZ(42,"ion-label"),a.TgZ(43,"h2"),a._uU(44),a.ALo(45,"translate"),a.qZA(),a.TgZ(46,"p"),a._uU(47),a.ALo(48,"number"),a.qZA(),a.qZA(),a.qZA(),a.YNc(49,f,9,10,"ion-item",4),a.YNc(50,O,7,4,"ion-item",4),a.qZA(),a.YNc(51,m,6,4,"ion-list",9),a.TgZ(52,"ion-list",7),a.TgZ(53,"ion-list-header",8),a.TgZ(54,"ion-label"),a._uU(55),a.ALo(56,"translate"),a.qZA(),a.qZA(),a.YNc(57,L,6,4,"ion-item",4),a.YNc(58,b,7,4,"ion-item",4),a.qZA(),a.TgZ(59,"ion-list",7),a.TgZ(60,"ion-list-header",8),a.TgZ(61,"ion-label"),a._uU(62),a.ALo(63,"translate"),a.qZA(),a.qZA(),a.TgZ(64,"ion-item"),a.TgZ(65,"ion-label"),a.TgZ(66,"h2"),a._uU(67),a.ALo(68,"translate"),a.qZA(),a.TgZ(69,"p"),a._uU(70),a.qZA(),a.qZA(),a.qZA(),a.TgZ(71,"ion-item"),a.TgZ(72,"ion-label"),a.TgZ(73,"h2"),a._uU(74),a.ALo(75,"translate"),a.qZA(),a.TgZ(76,"p"),a._uU(77),a.qZA(),a.TgZ(78,"p"),a._uU(79),a.qZA(),a.qZA(),a.qZA(),a.TgZ(80,"ion-item"),a.TgZ(81,"ion-label"),a.TgZ(82,"h2"),a._uU(83),a.ALo(84,"translate"),a.qZA(),a.TgZ(85,"p"),a._uU(86),a.ALo(87,"number"),a.TgZ(88,"sup"),a._uU(89,"2"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.oxw();a.xp6(4),a.Oqu(a.lcZ(5,32,"TRACEABILITY_MOD.CROP_INFORMATION")),a.xp6(5),a.Oqu(a.lcZ(10,34,"TRACEABILITY_MOD.SPECIES")),a.xp6(3),a.Oqu(t.result.info.species_name),a.xp6(4),a.Oqu(a.lcZ(17,36,"TRACEABILITY_MOD.START_TIME")),a.xp6(3),a.Oqu(a.xi3(20,38,1e3*t.result.info.start_time,a.lcZ(21,41,"FORMAT_DATE"))),a.xp6(6),a.Oqu(a.lcZ(26,43,"TRACEABILITY_MOD.STATUS")),a.xp6(2),a.Q6J("ngIf",0==t.result.info.end_time),a.xp6(1),a.Q6J("ngIf",t.result.info.end_time>0&&null==t.result.buyer),a.xp6(1),a.Q6J("ngIf",null==t.result.buyer?null:t.result.buyer.length),a.xp6(4),a.Oqu(a.lcZ(34,45,"POND_MOD.SIZE")),a.xp6(3),a.HOy("",a.xi3(37,47,null==t.result.info?null:t.result.info.harvest_size,".0-2")," gr/",a.lcZ(38,50,"PCS")," (",a.xi3(39,52,1e3/(null==t.result.info?null:t.result.info.harvest_size),".0-2")," ",a.lcZ(40,55,"PCS"),"/kg)"),a.xp6(8),a.Oqu(a.lcZ(45,57,"TRACEABILITY_MOD.QUANTITY")),a.xp6(3),a.hij("",a.xi3(48,59,t.result.info.harvest_quantity,".0-1")," kg"),a.xp6(2),a.Q6J("ngIf",t.result.info.end_time>0),a.xp6(1),a.Q6J("ngIf",t.result.procedure),a.xp6(1),a.Q6J("ngIf",t.result.buyer),a.xp6(4),a.Oqu(a.lcZ(56,62,"TRACEABILITY_MOD.SUPPLIER")),a.xp6(2),a.Q6J("ngIf",t.result.seed),a.xp6(1),a.Q6J("ngIf",t.result.manufacturer),a.xp6(4),a.Oqu(a.lcZ(63,64,"TRACEABILITY_MOD.FARM_INFORMATION")),a.xp6(5),a.Oqu(a.lcZ(68,66,"FARM_OWNER")),a.xp6(3),a.Oqu(t.result.owner.farm.fullname),a.xp6(4),a.Oqu(a.lcZ(75,68,"POND_MOD.FARM")),a.xp6(3),a.Oqu(t.result.owner.farm.name),a.xp6(2),a.Oqu(t.result.owner.farm.address),a.xp6(4),a.Oqu(a.lcZ(84,70,"POND_MOD.POND")),a.xp6(3),a.lnq("",t.result.owner.pond.name," : ",a.xi3(87,72,t.result.owner.pond.area,".0-1"),"x",t.result.owner.pond.deep,"m")}}let R=(()=>{class t{constructor(t,n,e,i){this.route=t,this.toastService=n,this.traceabilityService=e,this.translate=i,this.loadingFlag=new g.E,this.now=(new Date).valueOf()/1e3,this.message="",this.code=""}ngOnInit(){this.code=this.route.snapshot.paramMap.get("code"),this.responseTrace()}responseTrace(){this.loadingFlag.setStart(!0),this.traceabilityService.getCrop(this.code).subscribe(t=>{console.log(t),1==t.status?this.result=t.data:this.message=t.message,this.loadingFlag.setResult(!0)},()=>{this.loadingFlag.setResult(!1),this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}}return t.\u0275fac=function(n){return new(n||t)(a.Y36(s.gz),a.Y36(T.k),a.Y36(c.X),a.Y36(Z.sK))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-traceability-result"]],decls:16,vars:8,consts:[["slot","start"],["text","","defaultHref","tabs/management"],[1,"ion-text-center","ion-padding"],[3,"src"],[4,"ngIf"],["name","dots"],["color","danger"],["lines","none"],["lines","inset"],["lines","none",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"ion-text-wrap"],["color","secondary",4,"ngFor","ngForOf"],["color","secondary"]],template:function(t,n){1&t&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",0),a._UZ(3,"ion-back-button",1),a.qZA(),a.TgZ(4,"ion-title"),a._uU(5),a.ALo(6,"translate"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(7,"ion-content"),a.TgZ(8,"div",2),a._UZ(9,"img",3),a._UZ(10,"br"),a.TgZ(11,"span"),a._uU(12),a.qZA(),a.YNc(13,p,2,0,"div",4),a.YNc(14,q,4,1,"div",4),a.qZA(),a.YNc(15,E,90,75,"div",4),a.qZA()),2&t&&(a.xp6(5),a.Oqu(a.lcZ(6,6,"TRACE.RESULT")),a.xp6(4),a.Q6J("src","https://chart.googleapis.com/chart?chs=160x160&cht=qr&chl=crop:"+n.code+"&choe=UTF-8",a.LSH),a.xp6(3),a.hij("#",n.code,""),a.xp6(1),a.Q6J("ngIf",n.loadingFlag.pending),a.xp6(1),a.Q6J("ngIf",n.loadingFlag.result&&""!=n.message),a.xp6(1),a.Q6J("ngIf",n.loadingFlag.result&&n.result))},directives:[l.Gu,l.sr,l.Sm,l.oU,l.cs,l.wd,l.W2,i.O5,l.PQ,l.yW,l.q_,l.yh,l.Q$,l.Ie,i.sg,l.uN,l.hM],pipes:[Z.X$,i.uU,i.JJ],styles:[""]}),t})();const Y=[{path:"",component:A},{path:"result",component:R},{path:"result/:code",component:R}];let N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez,o.u5,l.Pc,s.Bz.forChild(Y),Z.aw.forChild()]]}),t})()}}]);