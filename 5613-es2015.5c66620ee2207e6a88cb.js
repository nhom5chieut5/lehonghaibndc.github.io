"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[5613],{35613:function(t,n,o){o.r(n),o.d(n,{ProductCompanyPageModule:function(){return S}});var i=o(38583),e=o(90665),r=o(47063),c=o(13619),s=o(64762),a=o(27887),g=o(15085),l=o(95631),d=o(37716),p=o(71239),h=o(84465),m=o(81780);function u(t,n){1&t&&(d.TgZ(0,"div",11),d._UZ(1,"ion-spinner",12),d.qZA())}function x(t,n){1&t&&(d.TgZ(0,"p",13),d._uU(1),d.ALo(2,"translate"),d.qZA()),2&t&&(d.xp6(1),d.Oqu(d.lcZ(2,1,"SHOP.COMP_PRODUCT.EMPTY")))}function P(t,n){if(1&t&&(d.TgZ(0,"div",23),d.TgZ(1,"span"),d._uU(2),d.ALo(3,"number"),d.qZA(),d.qZA()),2&t){const t=d.oxw().$implicit;d.xp6(2),d.hij("-",d.xi3(3,1,100*t.ratio,"0.0-0"),"%")}}function _(t,n){if(1&t&&d._UZ(0,"img",24),2&t){const t=d.oxw().$implicit,n=d.oxw();d.Q6J("src",n.service.SITE_PATH+"/upload/eventeshop/"+t.banner,d.LSH)}}function C(t,n){if(1&t&&d._UZ(0,"ion-icon",27),2&t){const t=n.$implicit,o=d.oxw(2).$implicit;d.Q6J("name",t<=o.rate_score?"star":"star-outline")("color",o.rate_count>0?"primary":"medium")}}const f=function(){return[1,2,3,4,5]};function O(t,n){1&t&&(d.TgZ(0,"div",25),d.YNc(1,C,1,2,"ion-icon",26),d.qZA()),2&t&&(d.xp6(1),d.Q6J("ngForOf",d.DdM(1,f)))}function M(t,n){if(1&t&&(d.TgZ(0,"div",28),d.TgZ(1,"small",29),d._uU(2),d.ALo(3,"number"),d.qZA(),d.qZA()),2&t){const t=d.oxw().$implicit;d.xp6(2),d.hij("",d.xi3(3,1,t.maxFullPrice,"1.0-0"),"\u0111")}}function b(t,n){if(1&t&&(d.TgZ(0,"div",30),d._uU(1),d.ALo(2,"number"),d.qZA()),2&t){const t=d.oxw().$implicit;d.xp6(1),d.hij(" ",d.xi3(2,1,t.maxPrice,"1.0-0")," \u0111 ")}}function Z(t,n){if(1&t&&(d.TgZ(0,"div",30),d._uU(1),d.ALo(2,"number"),d.ALo(3,"number"),d.qZA()),2&t){const t=d.oxw().$implicit;d.xp6(1),d.AsE(" ",d.xi3(2,2,t.minPrice,"1.0")," ~ ",d.xi3(3,5,t.maxPrice,"1.0-0")," \u0111 ")}}function A(t,n){if(1&t&&(d.TgZ(0,"ion-col",14),d.YNc(1,P,4,4,"div",15),d.TgZ(2,"div",16),d._UZ(3,"img",17),d.YNc(4,_,1,1,"img",18),d.qZA(),d.TgZ(5,"div",19),d._uU(6),d.qZA(),d.YNc(7,O,2,2,"div",20),d.YNc(8,M,4,4,"div",21),d.YNc(9,b,3,4,"div",22),d.YNc(10,Z,4,8,"div",22),d.qZA()),2&t){const t=n.$implicit,o=d.oxw();d.Q6J("routerLink","../../../product/"+t.id),d.xp6(1),d.Q6J("ngIf",t.ratio&&0!=t.ratio),d.xp6(2),d.Q6J("src",o.service.SITE_PATH+t.img_default,d.LSH),d.xp6(1),d.Q6J("ngIf",t.banner),d.xp6(2),d.Oqu(t.alias),d.xp6(1),d.Q6J("ngIf",t.rate_count>0),d.xp6(1),d.Q6J("ngIf",t.ratio&&0!=t.ratio),d.xp6(1),d.Q6J("ngIf",t.minPrice==t.maxPrice),d.xp6(1),d.Q6J("ngIf",t.minPrice!=t.maxPrice)}}function w(t,n){if(1&t){const t=d.EpF();d.TgZ(0,"ion-infinite-scroll",31),d.NdJ("ionInfinite",function(n){return d.CHM(t),d.oxw().loadMore(n)}),d._UZ(1,"ion-infinite-scroll-content",32),d.qZA()}}const v=[{path:"",component:(()=>{class t{constructor(t,n,o,i,e,r,c){this.dbLocalService=t,this.service=n,this.toastService=o,this.translate=i,this.modalController=e,this.alertController=r,this.route=c,this.paramFilter={ship:2,company_id:0,province_id:0,rate_score:0,sort:"DESC",terms:[]},this.list=[],this.numRows=0,this.page=0,this.termsChild={USES:[],MATERIAL:[],USEFOR:[]},this.loadingFlag=new a.E}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.paramFilter.company_id=this.id,this.getList()}getList(){this.loadingFlag.setPending(!0),this.service.listProductPerCompany(this.paramFilter,this.page).subscribe(t=>{"success"==t.status?(this.list=this.list.concat(this.prepareProductPrice(t.data.list)),this.numRows=t.data.numRows,"terms_child"in t.data&&0==this.termsChild.USEFOR.length&&0==this.termsChild.USES.length&&0==this.termsChild.MATERIAL.length&&this.convertTermChild(t.data.terms_child),"infor"in t.data&&(this.infor=t.data.infor)):this.toastService.warning(t.error.message),this.loadingFlag.setResult(!0)},t=>{this.loadingFlag.setResult(!1),this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}numberWithCommas(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}prepareProductPrice(t){let n=[];return t.forEach(t=>{let o=t.label_price.split("~");t.minPrice=o[0],t.maxPrice=o[1],t.maxFullPrice=t.maxPrice/(1-t.ratio),n.push(t)}),n}convertTermChild(t){this.termsChild={USES:[],MATERIAL:[],USEFOR:[]},t.forEach(t=>{t.terms.split(".lhh_lv1.").forEach(n=>{let o=n.split(".lhh_lv2.");this.termsChild[t.type].push({id:o[0],name:o[1],filter:!1})})})}presentFiler(){return(0,s.mG)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:l.y,componentProps:{terms:this.termsChild,data:this.paramFilter}});return t.onDidDismiss().then(t=>{t.data&&(this.paramFilter=t.data.data,this.termsChild=t.data.terms,this.page=0,this.list=[],this.getList())}),yield t.present()})}loadMore(t){this.list.length%25==0?(this.page+=1,this.getList(),setTimeout(()=>{t.target.complete()},500)):t.target.complete()}changeSort(t){t!=this.paramFilter.sort&&(this.paramFilter.sort=t,this.page=0,this.list=[],this.getList())}}return t.\u0275fac=function(n){return new(n||t)(d.Y36(p.T),d.Y36(g.d),d.Y36(h.k),d.Y36(m.sK),d.Y36(r.IN),d.Y36(r.Br),d.Y36(c.gz))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-product-company"]],decls:27,vars:17,consts:[["slot","start"],["text","","defaultHref","tabs/shop"],["class","spiner-loading",4,"ngIf"],[3,"color","click"],["slot","end"],["slot","end","name","filter-outline"],[1,"containt"],["class","ion-text-center",4,"ngIf"],[1,"grid-product"],["size","6","size-sm","4",3,"routerLink",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite",4,"ngIf"],[1,"spiner-loading"],["name","dots"],[1,"ion-text-center"],["size","6","size-sm","4",3,"routerLink"],["class","discount-label",4,"ngIf"],[1,"img-box"],["onError","this.src='assets/img/1235.jpg'",1,"m-auto",3,"src"],["class","bannerProduct",3,"src",4,"ngIf"],[1,"product-alias"],["class","product-rate",4,"ngIf"],["class","promotion-box",4,"ngIf"],["class","price-box",4,"ngIf"],[1,"discount-label"],[1,"bannerProduct",3,"src"],[1,"product-rate"],[3,"name","color",4,"ngFor","ngForOf"],[3,"name","color"],[1,"promotion-box"],[1,"strike"],[1,"price-box"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","dots"]],template:function(t,n){1&t&&(d.TgZ(0,"ion-header"),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-buttons",0),d._UZ(3,"ion-back-button",1),d.qZA(),d.TgZ(4,"ion-title"),d._uU(5),d.qZA(),d.qZA(),d.qZA(),d.TgZ(6,"ion-content"),d.YNc(7,u,2,0,"div",2),d.TgZ(8,"ion-toolbar"),d.TgZ(9,"ion-buttons",0),d.TgZ(10,"ion-button",3),d.NdJ("click",function(){return n.changeSort("DESC")}),d._uU(11),d.ALo(12,"translate"),d.qZA(),d.TgZ(13,"ion-button",3),d.NdJ("click",function(){return n.changeSort("ASC")}),d._uU(14),d.ALo(15,"translate"),d.qZA(),d.qZA(),d.TgZ(16,"ion-buttons",4),d.TgZ(17,"ion-button",3),d.NdJ("click",function(){return n.presentFiler()}),d._uU(18),d.ALo(19,"translate"),d._UZ(20,"ion-icon",5),d.qZA(),d.qZA(),d.qZA(),d.TgZ(21,"div",6),d.YNc(22,x,3,3,"p",7),d.TgZ(23,"ion-grid",8),d.TgZ(24,"ion-row"),d.YNc(25,A,11,9,"ion-col",9),d.qZA(),d.qZA(),d.qZA(),d.YNc(26,w,2,0,"ion-infinite-scroll",10),d.qZA()),2&t&&(d.xp6(5),d.Oqu(null==n.infor?null:n.infor.name),d.xp6(2),d.Q6J("ngIf",n.loadingFlag.pending),d.xp6(3),d.Q6J("color","DESC"==n.paramFilter.sort?"primary":""),d.xp6(1),d.Oqu(d.lcZ(12,11,"SHOP.HIGH_PRICE")),d.xp6(2),d.Q6J("color","ASC"==n.paramFilter.sort?"primary":""),d.xp6(1),d.Oqu(d.lcZ(15,13,"SHOP.LOW_PRICE")),d.xp6(3),d.Q6J("color",n.paramFilter.terms.length>0?"success":""),d.xp6(1),d.hij("",d.lcZ(19,15,"SHOP.FILTER_ACTION")," "),d.xp6(4),d.Q6J("ngIf",0==n.list.length),d.xp6(3),d.Q6J("ngForOf",n.list),d.xp6(1),d.Q6J("ngIf",n.list.length<n.numRows))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,i.O5,r.YG,r.gu,r.jY,r.Nd,i.sg,r.PQ,r.wI,r.YI,c.rH,r.ju,r.MB],pipes:[m.X$,i.JJ],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-bottom: 3em}",'[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-bottom: 3em}[_nghost-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:"Averta";font-size:.8em}[_nghost-%COMP%]   .boxTimeFlashsale[_ngcontent-%COMP%]{padding-left:12px;padding-right:12px;margin-top:29px;margin-bottom:6px;font-family:"Averta";font-size:.8em;display:flex;margin-right:16px}[_nghost-%COMP%]   .boxTimeFlashsale[_ngcontent-%COMP%]   .boxTime[_ngcontent-%COMP%]{color:#fff;background-color:#000;padding-left:2px;padding-right:2px;margin-right:2px;margin-left:2px;border-radius:2px;max-width:27px;width:27px;text-align:center}[_nghost-%COMP%]   .boxSpecial[_ngcontent-%COMP%]{min-height:150px}[_nghost-%COMP%]   .boxSpecial[_ngcontent-%COMP%]   .bannerSpecial[_ngcontent-%COMP%]{max-height:50px}[_nghost-%COMP%]   .boxSpecial[_ngcontent-%COMP%]   .imgProductSpecial[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .arrowButton[_ngcontent-%COMP%]{vertical-align:middle;margin-right:16px}[_nghost-%COMP%]   .bag-cart[_ngcontent-%COMP%]{color:#de2525;font-weight:bold;position:absolute;top:1em;font-size:.8em}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:240px;width:100%}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{border-top:1px solid rgba(192,192,192,.2);border-left:1px solid rgba(192,192,192,.2)}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{border-right:1px solid rgba(192,192,192,.2);border-bottom:1px solid rgba(192,192,192,.2)}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{flex:auto;text-align:center;margin:0 auto;overflow:hidden;position:relative}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:80x!important;margin-bottom:5px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   .bannerProduct[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;max-height:60px;max-width:80%;width:auto}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .product-alias[_ngcontent-%COMP%]{line-height:1.2em;font-size:.9em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;height:2.4em;-webkit-box-orient:vertical}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .promotion-box[_ngcontent-%COMP%]{margin:3px 0}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .promotion-box[_ngcontent-%COMP%]   .mr[_ngcontent-%COMP%]{margin-left:3px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .promotion-box[_ngcontent-%COMP%]   .strike[_ngcontent-%COMP%]{text-decoration:line-through}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]{margin:3px 0;font-size:.9em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;height:1.3em;-webkit-box-orient:vertical;color:var(--ion-color-danger)}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]{padding:5px;position:absolute;right:5px;top:10px;float:left;width:43px;background-color:#de2525;z-index:9999;transform:rotate(20deg);border-radius:4px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]:after{right:42px;border:solid transparent;content:" ";height:0;width:0;position:absolute;border-color:#88b7d500;border-right-color:#de2525;border-width:13.5px;top:50%;margin-top:-13.6px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]:before{content:"";z-index:2;position:absolute;top:44%;right:100%;width:5px;height:5px;opacity:.95;background:#fff;border-radius:5px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:12px;text-align:center;font-family:"Averta"}']}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[c.Bz.forChild(v)],c.Bz]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[i.ez,e.u5,r.Pc,T,m.aw.forChild()]]}),t})()}}]);