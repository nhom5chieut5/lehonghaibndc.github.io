!function(){"use strict";function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[7046],{97046:function(e,i,o){o.r(i),o.d(i,{FollowPageModule:function(){return F}});var r=o(38583),s=o(90665),a=o(13619),l=o(47063),c=o(64762),u=o(40300),g=o(27887),f=o(87498),p=o(37716),Z=o(84465),d=o(81780),h=o(23211);function m(n,t){if(1&n&&(p.TgZ(0,"span"),p._uU(1),p.ALo(2,"number"),p.TgZ(3,"small"),p._uU(4),p.ALo(5,"translate"),p.qZA(),p.qZA()),2&n){var e=p.oxw(3).$implicit,i=p.oxw();p.xp6(1),p.hij("",p.xi3(2,2,(i.now-e.start_time)/86400,"0.0-0")," "),p.xp6(3),p.Oqu(p.lcZ(5,5,"FOLLOW_MOD.DAY"))}}function O(n,t){if(1&n&&(p.TgZ(0,"span"),p._uU(1),p.ALo(2,"number"),p.TgZ(3,"small"),p._uU(4),p.ALo(5,"translate"),p.qZA(),p.qZA()),2&n){var e=p.oxw(3).$implicit,i=p.oxw();p.xp6(1),p.hij("",p.xi3(2,2,(i.now-e.seed_date)/86400,"0.0-0")," "),p.xp6(3),p.hij("ng\xe0y ",p.lcZ(5,5,"FOLLOW_MOD.DAY_OLD"),"")}}function v(n,t){if(1&n&&(p.TgZ(0,"div"),p.TgZ(1,"span",16),p._uU(2),p.qZA(),p.YNc(3,m,6,7,"span",13),p.YNc(4,O,6,7,"span",13),p.qZA()),2&n){var e=p.oxw(2).$implicit;p.xp6(2),p.hij("",e.species," "),p.xp6(1),p.Q6J("ngIf",0==e.seed_date),p.xp6(1),p.Q6J("ngIf",e.seed_date>0)}}function w(n,t){if(1&n&&(p.TgZ(0,"div"),p.YNc(1,v,5,3,"div",13),p.qZA()),2&n){var e=p.oxw().$implicit;p.xp6(1),p.Q6J("ngIf","0"!=e.current_season)}}function x(n,t){if(1&n){var e=p.EpF();p.TgZ(0,"ion-col",6),p.TgZ(1,"ion-card"),p.TgZ(2,"ion-grid",7),p.TgZ(3,"ion-row",8),p.TgZ(4,"ion-col",9),p.TgZ(5,"div",10),p._UZ(6,"ion-icon",11),p.qZA(),p.qZA(),p.TgZ(7,"ion-col",12),p.TgZ(8,"ion-card-header"),p.TgZ(9,"ion-card-subtitle"),p._uU(10),p.qZA(),p.TgZ(11,"ion-card-title"),p._uU(12),p.qZA(),p.YNc(13,w,2,1,"div",13),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(14,"ion-button",14),p.NdJ("click",function(){var n=p.CHM(e).$implicit;return p.oxw().presentUnfollow(n.code)}),p._UZ(15,"ion-icon",15),p._uU(16),p.ALo(17,"translate"),p.qZA(),p.qZA(),p.qZA()}if(2&n){var i=t.$implicit;p.xp6(2),p.MGl("routerLink","/pond/",i.code,""),p.xp6(4),p.Q6J("color",1==i.existSeason&&0==i.warning?"primary":1==i.existSeason&&1==i.warning?"danger":"medium"),p.xp6(4),p.hij("",i.farm_name," "),p.xp6(2),p.Oqu(i.name),p.xp6(1),p.Q6J("ngIf",0!=i.existSeason),p.xp6(3),p.hij(" ",p.lcZ(17,6,"UNFOLLOW")," ")}}function A(n,t){if(1&n){var e=p.EpF();p.TgZ(0,"div",17),p.TgZ(1,"p"),p.TgZ(2,"ion-text",18),p._uU(3),p.ALo(4,"translate"),p.qZA(),p.qZA(),p.TgZ(5,"ion-button",19),p.NdJ("click",function(){return p.CHM(e),p.oxw().presentSearch()}),p._uU(6),p.ALo(7,"translate"),p.qZA(),p.qZA()}2&n&&(p.xp6(3),p.hij(" ",p.lcZ(4,2,"FOLLOW_MOD.YOU_HAVE_NOT_POND")," "),p.xp6(3),p.Oqu(p.lcZ(7,4,"FOLLOW_MOD.FIND")))}function L(n,t){if(1&n&&(p.TgZ(0,"div",17),p.TgZ(1,"p"),p.TgZ(2,"ion-text",18),p._uU(3),p.qZA(),p.qZA(),p.qZA()),2&n){var e=p.oxw();p.xp6(3),p.hij(" ",e.message," ")}}function _(n,t){1&n&&(p.TgZ(0,"div",20),p._UZ(1,"ion-spinner",21),p.qZA())}var q,T=[{path:"",component:(q=function(){function e(t,i,o,r,s,a){n(this,e),this.modalController=t,this.followService=i,this.toastService=o,this.translate=r,this.tour=s,this.alertController=a,this.loadingFlag=new g.E,this.followingList=[],this.message="",this.now=(new Date).valueOf()/1e3}var i,o,r;return i=e,(o=[{key:"ngOnInit",value:function(){this.getFollowingList()}},{key:"ionViewWillEnter",value:function(){this.tour.show("follow")}},{key:"presentSearch",value:function(){return(0,c.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:u._});case 2:return n.next=4,n.sent.present();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}},n,this)}))}},{key:"getFollowingList",value:function(){var n=this;this.loadingFlag.setPending(!0),this.followService.getFollowingList().pipe().subscribe(function(t){t.error||1!=t.status?n.message=t.error:n.followingList=t.data,n.loadingFlag.setResult(!0)},function(t){n.loadingFlag.setResult(!1),n.toastService.danger(n.translate.instant("ERROR_CONNECT"))})}},{key:"presentUnfollow",value:function(n){return(0,c.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({cssClass:"my-custom-class",header:this.translate.instant("FOLLOW_MOD.CONFIRM"),message:this.translate.instant("FOLLOW_MOD.CONFIRM_UNFOLLOW"),buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(n){console.log("Confirm Cancel: blah")}},{text:"Ok",handler:function(){e.unfollow(n)}}]});case 2:return t.next=4,t.sent.present();case 4:case"end":return t.stop()}},t,this)}))}},{key:"unfollow",value:function(n){var t=this;this.followService.unFollow(n).subscribe(function(n){1==n.status?(t.toastService.success(t.translate.instant("FOLLOW_MOD.UNFOLLOW_SUCCESS")),t.getFollowingList()):t.toastService.warning(n.error)},function(){t.toastService.danger(t.translate.instant("ERROR_CONNECT"))})}}])&&t(i.prototype,o),r&&t(i,r),e}(),q.\u0275fac=function(n){return new(n||q)(p.Y36(l.IN),p.Y36(f.R),p.Y36(Z.k),p.Y36(d.sK),p.Y36(h.M),p.Y36(l.Br))},q.\u0275cmp=p.Xpm({type:q,selectors:[["app-follow"]],decls:18,vars:10,consts:[["slot","start"],["slot","end"],["id","follow0",3,"click"],["size","12","size-sm","6",4,"ngFor","ngForOf"],["class","ion-padding ion-text-center",4,"ngIf"],["class","spiner-loading",4,"ngIf"],["size","12","size-sm","6"],[3,"routerLink"],["align-items-center",""],["size","4"],[1,"ion-padding"],["src","/assets/icon/pond.svg",1,"l-icon",3,"color"],["size","8"],[4,"ngIf"],["expand","block","size","small","fill","clear",3,"click"],["slot","start","name","close-circle-outline"],[1,"sm-text"],[1,"ion-padding","ion-text-center"],["color","medium"],["shape","round",3,"click"],[1,"spiner-loading"],["name","dots"]],template:function(n,t){1&n&&(p.TgZ(0,"ion-header"),p.TgZ(1,"ion-toolbar"),p.TgZ(2,"ion-buttons",0),p._UZ(3,"ion-menu-button"),p.qZA(),p.TgZ(4,"ion-title"),p._uU(5),p.ALo(6,"translate"),p.qZA(),p.TgZ(7,"ion-buttons",1),p.TgZ(8,"ion-button",2),p.NdJ("click",function(){return t.presentSearch()}),p._uU(9),p.ALo(10,"translate"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(11,"ion-content"),p.TgZ(12,"ion-grid"),p.TgZ(13,"ion-row"),p.YNc(14,x,18,8,"ion-col",3),p.qZA(),p.qZA(),p.YNc(15,A,8,6,"div",4),p.YNc(16,L,4,1,"div",4),p.YNc(17,_,2,0,"div",5),p.qZA()),2&n&&(p.xp6(5),p.Oqu(p.lcZ(6,6,"FOLLOW")),p.xp6(4),p.Oqu(p.lcZ(10,8,"FOLLOW_MOD.FIND")),p.xp6(5),p.Q6J("ngForOf",t.followingList),p.xp6(1),p.Q6J("ngIf",0==t.followingList.length&&t.loadingFlag.result),p.xp6(1),p.Q6J("ngIf",t.message),p.xp6(1),p.Q6J("ngIf",t.loadingFlag.pending))},directives:[l.Gu,l.sr,l.Sm,l.fG,l.wd,l.YG,l.W2,l.jY,l.Nd,r.sg,r.O5,l.wI,l.PM,l.YI,a.rH,l.gu,l.Zi,l.tO,l.gZ,l.yW,l.PQ],pipes:[d.X$,r.JJ],styles:[".l-icon[_ngcontent-%COMP%]{font-size:5em}"]}),q)}],F=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({providers:[f.R],imports:[[r.ez,s.u5,l.Pc,a.Bz.forChild(T),d.aw.forChild()]]}),t}()}}])}();