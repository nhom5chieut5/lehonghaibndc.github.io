"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[300],{54395:function(t,e,n){n.d(e,{b:function(){return o}});var s=n(77393),i=n(33637);function o(t,e=i.P){return n=>n.lift(new r(t,e))}class r{constructor(t,e){this.dueTime=t,this.scheduler=e}call(t,e){return e.subscribe(new l(t,this.dueTime,this.scheduler))}}class l extends s.L{constructor(t,e,n){super(t),this.dueTime=e,this.scheduler=n,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(a,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:t}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}clearDebounce(){const t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}function a(t){t.debouncedNext()}},40300:function(t,e,n){n.d(e,{_:function(){return S}});var s=n(64762),i=n(27887),o=n(79765),r=n(25917),l=n(54395),a=n(87519),c=n(43190),u=n(88002),d=n(87498),h=n(16738),g=n(37716),p=n(47063),Z=n(84465),m=n(81780),f=n(71239),O=n(38583);function q(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"ion-item"),g._UZ(1,"ion-icon",7),g.TgZ(2,"ion-label"),g.TgZ(3,"h3"),g._uU(4),g.qZA(),g.TgZ(5,"p"),g._uU(6),g.qZA(),g.TgZ(7,"p"),g._uU(8),g.qZA(),g.qZA(),g.TgZ(9,"ion-button",8),g.NdJ("click",function(){g.CHM(t);const e=g.oxw();return e.selectedFarm=null,e.keyword=""}),g._uU(10),g.ALo(11,"translate"),g.qZA(),g.qZA()}if(2&t){const t=g.oxw();g.xp6(4),g.Oqu(t.selectedFarm.name),g.xp6(2),g.Oqu(t.selectedFarm.company_name),g.xp6(2),g.Oqu(t.selectedFarm.address),g.xp6(2),g.hij(" ",g.lcZ(11,4,"FOLLOW_MOD.DELETE")," ")}}function F(t,e){1&t&&(g.TgZ(0,"ion-list-header"),g.TgZ(1,"ion-label"),g._uU(2),g.ALo(3,"translate"),g.qZA(),g.qZA()),2&t&&(g.xp6(2),g.Oqu(g.lcZ(3,1,"FOLLOW_MOD.RESULT")))}function A(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"ion-item"),g._UZ(1,"ion-icon",7),g.TgZ(2,"ion-label"),g.TgZ(3,"h3"),g._uU(4),g.qZA(),g.TgZ(5,"p"),g._uU(6),g.qZA(),g.TgZ(7,"p"),g._uU(8),g.qZA(),g.qZA(),g.TgZ(9,"ion-button",11),g.NdJ("click",function(){const e=g.CHM(t).$implicit;return g.oxw(2).selectFarm(e)}),g._uU(10),g.ALo(11,"translate"),g.qZA(),g.qZA()}if(2&t){const t=e.$implicit;g.xp6(4),g.Oqu(t.name),g.xp6(2),g.Oqu(t.company_name),g.xp6(2),g.Oqu(t.address),g.xp6(2),g.hij(" ",g.lcZ(11,4,"FOLLOW_MOD.SEE")," ")}}function x(t,e){if(1&t&&(g.TgZ(0,"ion-item",12),g.TgZ(1,"ion-label"),g.TgZ(2,"p"),g._uU(3),g.qZA(),g.qZA(),g.qZA()),2&t){const t=g.oxw(2);g.xp6(3),g.Oqu(t.searchMessage)}}function T(t,e){if(1&t&&(g.TgZ(0,"ion-list"),g.YNc(1,F,4,3,"ion-list-header",5),g.YNc(2,A,12,6,"ion-item",9),g.ALo(3,"async"),g.YNc(4,x,4,1,"ion-item",10),g.qZA()),2&t){const t=g.oxw();g.xp6(1),g.Q6J("ngIf",""!=t.keyword),g.xp6(1),g.Q6J("ngForOf",g.lcZ(3,3,t.farms)),g.xp6(2),g.Q6J("ngIf",t.searchMessage)}}function _(t,e){if(1&t&&(g.TgZ(0,"p"),g._uU(1),g.ALo(2,"number"),g.qZA()),2&t){const t=g.oxw().$implicit;g.xp6(1),g.AsE("Th\u1ea3 ",g.xi3(2,2,t.seed_quantity,"0.0-0")," con gi\u1ed1ng ",t.moment.fromNow(),"")}}function L(t,e){1&t&&(g.TgZ(0,"p"),g._uU(1),g.ALo(2,"translate"),g.qZA()),2&t&&(g.xp6(1),g.Oqu(g.lcZ(2,1,"FOLLOW_MOD.NULL")))}function w(t,e){1&t&&g._UZ(0,"ion-icon",20)}function b(t,e){1&t&&g._UZ(0,"ion-icon",21)}function N(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"ion-item"),g._UZ(1,"ion-icon",13),g.TgZ(2,"ion-label",14),g.TgZ(3,"ion-text",15),g.TgZ(4,"h3"),g._uU(5),g.qZA(),g.qZA(),g.YNc(6,_,3,5,"p",5),g.YNc(7,L,3,3,"p",5),g.TgZ(8,"ion-text",16),g.TgZ(9,"small"),g._uU(10),g.TgZ(11,"sup"),g._uU(12,"2"),g.qZA(),g._uU(13),g.qZA(),g.qZA(),g.qZA(),g.TgZ(14,"ion-button",17),g.NdJ("click",function(){const e=g.CHM(t),n=e.$implicit,s=e.index;return g.oxw(2).presentFollowConfirm(n,s)}),g.YNc(15,w,1,0,"ion-icon",18),g.YNc(16,b,1,0,"ion-icon",19),g.qZA(),g.qZA()}if(2&t){const t=e.$implicit;g.xp6(5),g.Oqu(t.name),g.xp6(1),g.Q6J("ngIf","0"!=t.existSeason&&t.seed_quantity>0),g.xp6(1),g.Q6J("ngIf","0"==t.existSeason),g.xp6(3),g.hij("",t.area,"m"),g.xp6(3),g.hij(" X ",t.deep,"m"),g.xp6(2),g.Q6J("ngIf",!t.marked),g.xp6(1),g.Q6J("ngIf",t.marked)}}function v(t,e){1&t&&(g.TgZ(0,"ion-item"),g.TgZ(1,"ion-label",14),g.TgZ(2,"p"),g._uU(3),g.ALo(4,"translate"),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(3),g.Oqu(g.lcZ(4,1,"FOLLOW_MOD.PERMIT")))}function k(t,e){if(1&t&&(g.TgZ(0,"ion-list"),g.TgZ(1,"ion-list-header"),g.TgZ(2,"ion-label"),g._uU(3),g.ALo(4,"translate"),g.qZA(),g.qZA(),g.YNc(5,N,17,7,"ion-item",9),g.YNc(6,v,5,3,"ion-item",5),g.qZA()),2&t){const t=g.oxw();g.xp6(3),g.Oqu(g.lcZ(4,3,"FOLLOW_MOD.POND_LIST")),g.xp6(2),g.Q6J("ngForOf",t.ponds),g.xp6(1),g.Q6J("ngIf",0==t.ponds.length)}}function I(t,e){if(1&t&&(g.TgZ(0,"p"),g._uU(1),g.qZA()),2&t){const t=g.oxw();g.xp6(1),g.Oqu(t.searchMessage)}}function U(t,e){1&t&&(g.TgZ(0,"p"),g._uU(1),g.ALo(2,"translate"),g.qZA()),2&t&&(g.xp6(1),g.Oqu(g.lcZ(2,1,"FOLLOW_MOD.ENTER_FARM_FOLLOW")))}function M(t,e){1&t&&(g.TgZ(0,"div"),g._UZ(1,"ion-spinner",22),g.qZA())}let S=(()=>{class t{constructor(t,e,n,s,r,l){this.modalController=t,this.followService=e,this.toastService=n,this.alertController=s,this.translate=r,this.dbLocalSerive=l,this.searchTerms=new o.xQ,this.loadingFlag=new i.E,this.ponds=[],this.pondsLoading=new i.E,this.keyword=""}ngOnInit(){let t=this.searchTerms.pipe((0,l.b)(300),(0,a.x)(),(0,c.w)(t=>this.getFarmList(t)));this.farms=t,this.farms.subscribe(t=>{t?(0==t.length&&(this.searchMessage=this.translate.instant("FOLLOW_MOD.NOT_FIND")),this.loadingFlag.setResult(!0),console.log(t)):(this.loadingFlag.setResult(!1),this.searchMessage=this.translate.instant("FOLLOW_MOD.NOT_FIND_FARM"))})}search(t){this.loadingFlag.setPending(!0),this.keyword=t.target.value,this.searchTerms.next(this.keyword),this.searchMessage=""}getFarmList(t){return""!=t.trim()?this.followService.searchFarm({keyword:t}).pipe((0,u.U)(t=>t.data)):(0,r.of)([])}selectFarm(t){this.selectedFarm=t,this.getPondsByFarmCode(t.code)}getPondsByFarmCode(t){this.pondsLoading.setPending(!0),this.followService.getPondsByFarmCode(t).pipe().subscribe(t=>{t.error||1!=t.status?this.toastService.warning(t.error):this.ponds=t.data.map(t=>{let e={};return e=t,e.moment=h(1e3*t.seed_date),e.marked=!1,e}),this.pondsLoading.setResult(!0)},()=>{this.pondsLoading.setResult(!1),this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}removeFarm(){this.selectedFarm=null,this.ponds=null}presentFollowConfirm(t,e){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:this.translate.instant("FOLLOW_MOD.CONFIRM")+"!",message:this.translate.instant("FOLLOW_MOD.CONFIRM_FOLLOW")+" <strong>"+t.name+"</strong>?",buttons:[{text:this.translate.instant("FOLLOW_MOD.NO"),role:"cancel",cssClass:"secondary"},{text:this.translate.instant("FOLLOW_MOD.YES"),handler:()=>{this.submitFollowerRequest(t.code,e)}}]})).present()})}submitFollowerRequest(t,e){this.followService.submitFollowerRequest(t).pipe().subscribe(t=>{if(t.error||1!=t.status)this.toastService.warning(t.error);else{this.toastService.success(t.message),this.ponds[e].marked=!0;let n=this.ponds[e];n.permission="pond_follow",this.dbLocalSerive.addItem("ponds",{infor:n})}},()=>{this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}}return t.\u0275fac=function(e){return new(e||t)(g.Y36(p.IN),g.Y36(d.R),g.Y36(Z.k),g.Y36(p.Br),g.Y36(m.sK),g.Y36(f.T))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-follow-search"]],decls:20,vars:13,consts:[["mode","ios"],["slot","start"],[3,"click"],["slot","icon-only","name","close"],[3,"placeholder","value","ionChange"],[4,"ngIf"],[1,"ion-text-center"],["slot","start","src","/assets/icon/001-flooded-house.svg"],["shape","round","fill","outline","slot","end","color","danger",3,"click"],[4,"ngFor","ngForOf"],["lines","none",4,"ngIf"],["slot","end","shape","round","fill","outline",3,"click"],["lines","none"],["slot","start","src","/assets/icon/pond.svg"],[1,"ion-text-wrap"],["color","primary"],["color","medium"],["slot","end","fill","clear",3,"click"],["name","bookmark-outline",4,"ngIf"],["name","bookmark",4,"ngIf"],["name","bookmark-outline"],["name","bookmark"],["name","dots"]],template:function(t,e){if(1&t&&(g.TgZ(0,"ion-header",0),g.TgZ(1,"ion-toolbar"),g.TgZ(2,"ion-buttons",1),g.TgZ(3,"ion-button",2),g.NdJ("click",function(){return e.modalController.dismiss()}),g._UZ(4,"ion-icon",3),g.qZA(),g.qZA(),g.TgZ(5,"ion-title"),g._uU(6),g.ALo(7,"translate"),g.qZA(),g.qZA(),g.TgZ(8,"ion-toolbar"),g.TgZ(9,"ion-searchbar",4),g.NdJ("ionChange",function(t){return e.search(t)}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(10,"ion-content"),g.TgZ(11,"ion-list"),g.YNc(12,q,12,6,"ion-item",5),g.qZA(),g.YNc(13,T,5,5,"ion-list",5),g.YNc(14,k,7,5,"ion-list",5),g.TgZ(15,"div",6),g.YNc(16,I,2,1,"p",5),g.ALo(17,"async"),g.YNc(18,U,3,3,"p",5),g.YNc(19,M,2,0,"div",5),g.qZA(),g.qZA()),2&t){let t;g.xp6(6),g.Oqu(g.lcZ(7,9,"FOLLOW_MOD.FIND")),g.xp6(3),g.Q6J("placeholder",e.translate.instant("FOLLOW_MOD.ENTER_FARM"))("value",e.keyword),g.xp6(3),g.Q6J("ngIf",e.selectedFarm),g.xp6(1),g.Q6J("ngIf",!e.selectedFarm),g.xp6(1),g.Q6J("ngIf",e.selectedFarm),g.xp6(2),g.Q6J("ngIf",e.loadingFlag.result&&0==(null==(t=g.lcZ(17,11,e.farms))?null:t.length)&&""!=e.keyword),g.xp6(2),g.Q6J("ngIf",""==e.keyword),g.xp6(1),g.Q6J("ngIf",e.loadingFlag.pending||e.pondsLoading.pending)}},directives:[p.Gu,p.sr,p.Sm,p.YG,p.gu,p.wd,p.VI,p.j9,p.W2,p.q_,O.O5,p.Ie,p.Q$,O.sg,p.yh,p.yW,p.PQ],pipes:[m.X$,O.Ov,O.JJ],styles:[""]}),t})()},87498:function(t,e,n){n.d(e,{R:function(){return o}});var s=n(15189),i=n(37716);let o=(()=>{class t{constructor(t){this.reqAPIService=t}getFollowingList(){return this.reqAPIService.get("/follow/follow-api?action=list")}searchFarm(t){return this.reqAPIService.post("/follow/follow-api?action=search",t)}getPondsByFarmCode(t){return this.reqAPIService.get("/follow/follow-api?action=pondlist&fcode="+t)}submitFollowerRequest(t){return this.reqAPIService.get("/manager/follow-api?action=request&pcode="+t)}unFollow(t){return this.reqAPIService.post("/follow/follow-api?action=unfollow",{item_code:t})}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(s.$))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})()},27887:function(t,e,n){n.d(e,{E:function(){return s}});class s{constructor(){this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}setStart(t){this.start=t,!0===t&&(this.pending=!0,this.end=!1),this.result=null,this.count++}setPending(t){this.pending=t,!1===t?this.start=!1:this.end=!0}setResult(t){this.result=t,this.pending=!1,this.start=!1,this.end=!0}}}}]);