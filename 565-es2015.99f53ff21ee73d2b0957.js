"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[565],{20565:function(t,n,o){o.r(n),o.d(n,{ShopProductsPageModule:function(){return k}});var e=o(38583),i=o(90665),r=o(47063),c=o(81780),s=o(13619),a=o(64762),g=o(27887),l=o(92803),d=o(83111),p=o(59308),h=o(15085),u=o(37716),m=o(71239),P=o(84465),f=o(4015);function x(t,n){1&t&&u._UZ(0,"ion-icon",13)}function _(t,n){1&t&&u._UZ(0,"ion-icon",14)}function C(t,n){if(1&t&&(u.TgZ(0,"div",24),u.TgZ(1,"span"),u._uU(2),u.ALo(3,"number"),u.qZA(),u.qZA()),2&t){const t=u.oxw().$implicit;u.xp6(2),u.hij("-",u.xi3(3,1,100*t.ratio,"0.0-0"),"%")}}function O(t,n){if(1&t&&u._UZ(0,"img",25),2&t){const t=u.oxw().$implicit,n=u.oxw();u.Q6J("src",n.shopService.SITE_PATH+"/upload/eventeshop/"+t.banner,u.LSH)}}function b(t,n){if(1&t&&u._UZ(0,"ion-icon",28),2&t){const t=n.$implicit,o=u.oxw(2).$implicit;u.Q6J("name",t<=o.rate_score?"star":"star-outline")("color",o.rate_count>0?"primary":"medium")}}const M=function(){return[1,2,3,4,5]};function Z(t,n){1&t&&(u.TgZ(0,"div",26),u.YNc(1,b,1,2,"ion-icon",27),u.qZA()),2&t&&(u.xp6(1),u.Q6J("ngForOf",u.DdM(1,M)))}function T(t,n){if(1&t&&(u.TgZ(0,"div",29),u.TgZ(1,"small",30),u._uU(2),u.ALo(3,"number"),u.qZA(),u.qZA()),2&t){const t=u.oxw().$implicit;u.xp6(2),u.hij("",u.xi3(3,1,t.maxFullPrice,"1.0-0"),"\u0111")}}function w(t,n){if(1&t&&(u.TgZ(0,"div",31),u._uU(1),u.ALo(2,"number"),u.qZA()),2&t){const t=u.oxw().$implicit;u.xp6(1),u.hij(" ",u.xi3(2,1,t.maxPrice,"1.0-0")," \u0111 ")}}function A(t,n){if(1&t&&(u.TgZ(0,"div",31),u._uU(1),u.ALo(2,"number"),u.ALo(3,"number"),u.qZA()),2&t){const t=u.oxw().$implicit;u.xp6(1),u.AsE(" ",u.xi3(2,2,t.minPrice,"1.0")," ~ ",u.xi3(3,5,t.maxPrice,"1.0-0")," \u0111 ")}}function v(t,n){if(1&t&&(u.TgZ(0,"ion-col",15),u.YNc(1,C,4,4,"div",16),u.TgZ(2,"div",17),u._UZ(3,"img",18),u.YNc(4,O,1,1,"img",19),u.qZA(),u.TgZ(5,"div",20),u._uU(6),u.qZA(),u.YNc(7,Z,2,2,"div",21),u.YNc(8,T,4,4,"div",22),u.YNc(9,w,3,4,"div",23),u.YNc(10,A,4,8,"div",23),u.qZA()),2&t){const t=n.$implicit,o=u.oxw();u.MGl("routerLink","../product/",t.id,""),u.xp6(1),u.Q6J("ngIf",t.ratio&&0!=t.ratio),u.xp6(2),u.Q6J("src",o.shopService.SITE_PATH+t.img_default,u.LSH),u.xp6(1),u.Q6J("ngIf",t.banner),u.xp6(2),u.Oqu(t.alias),u.xp6(1),u.Q6J("ngIf",t.rate_count>0),u.xp6(1),u.Q6J("ngIf",t.ratio&&0!=t.ratio),u.xp6(1),u.Q6J("ngIf",t.minPrice==t.maxPrice),u.xp6(1),u.Q6J("ngIf",t.minPrice!=t.maxPrice)}}function S(t,n){1&t&&(u.TgZ(0,"ion-item"),u._uU(1),u.ALo(2,"translate"),u.qZA()),2&t&&(u.xp6(1),u.hij(" ",u.lcZ(2,1,"SHOP.TERM_PRODUCT.EMPTY")," "))}function q(t,n){1&t&&(u.TgZ(0,"ion-card"),u.TgZ(1,"ion-card-content"),u.TgZ(2,"div",32),u._UZ(3,"ion-spinner",33),u.qZA(),u.qZA(),u.qZA())}const I=[{path:"",component:(()=>{class t{constructor(t,n,o,e,i,r){this.modalController=t,this.shopService=n,this.localDb=o,this.translate=e,this.toastService=i,this.router=r,this.page=0,this.loadingFlag=new g.E,this.filterTerms={},this.productList=[],this.currentSortDir="DESC",this.term=this.router.getCurrentNavigation().extras.state}ngOnInit(){return(0,a.mG)(this,void 0,void 0,function*(){this.selectedRegion=this.localDb.eShopRegion?this.localDb.eShopRegion:{id:"",name:this.translate.instant("SHOP.LOCATION.ALL")},yield this.localDb.getDataCart(),this.getTermProducts()})}getTermProducts(){let t=this.selectedRegion.id,n=this.page;this.loadingFlag.setPending(!0);let o=[this.term.id];Object.keys(this.filterTerms).forEach(t=>{this.filterTerms[t].forEach(t=>{t.selected&&o.push(t.id)})});const e=Object.assign(Object.assign(Object.assign(Object.assign({},this.selectedShipping&&{ship:this.selectedShipping}),o&&{terms:o}),this.selectedCompany&&{company_id:this.selectedCompany}),{sort:this.currentSortDir});this.shopService.getTermProducts(t,n,e).pipe().subscribe(t=>{"error"==t.status?this.toastService.warning(t.error.message):(this.numRows=t.data.numRows,0==this.page&&0==Object.keys(this.filterTerms).length&&this.prepareTerm(t.data.terms_child),this.productList=this.productList.concat(this.prepareProductPrice(t.data.list))),this.loadingFlag.setResult(!0)},t=>{this.loadingFlag.setResult(!1),this.toastService.danger(this.translate.instant("ERROR_CONNECT"))})}prepareTerm(t){this.filterTerms={},t.forEach(t=>{let n=[];t.terms=t.terms.split(".lhh_lv1."),t.terms.forEach(t=>{let o=t.split(".lhh_lv2."),e=["id","name"];o=o.reduce(function(t,n,o){return t[e[o]]=n,t},{}),o.selected=!1,n.push(o)}),this.filterTerms[t.type]=n})}prepareProductPrice(t){let n=[];return t.forEach(t=>{let o=t.label_price.split("~");t.minPrice=o[0],t.maxPrice=o[1],t.maxFullPrice=t.maxPrice/(1-t.ratio),n.push(t)}),n}loadMoreProducts(t){this.page+=1,this.getTermProducts(),setTimeout(()=>{t.target.complete()},500)}refreshProductData(){this.page=0,this.productList=[],this.getTermProducts()}changeSortDirection(){this.currentSortDir="DESC"==this.currentSortDir?"ASC":"DESC",this.refreshProductData()}presentLocation(){return(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:d.o});return t.onDidDismiss().then(t=>{t.data&&(this.selectedRegion=t.data,this.selectedCompany="",this.selectedShipping="",this.filterTerms={},this.refreshProductData())}),yield t.present()})}presentFilter(){return(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:l.R,componentProps:{terms:this.filterTerms,selectedShipping:this.selectedShipping,selectedCompany:this.selectedCompany}});return t.onDidDismiss().then(t=>{t.data&&(this.selectedCompany=t.data.company_id,this.selectedShipping=t.data.shipping,this.filterTerms=t.data.terms,this.refreshProductData())}),yield t.present()})}presentSearch(){return(0,a.mG)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:p.w})).present()})}}return t.\u0275fac=function(n){return new(n||t)(u.Y36(r.IN),u.Y36(h.d),u.Y36(m.T),u.Y36(c.sK),u.Y36(P.k),u.Y36(s.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-shop-products"]],decls:32,vars:14,consts:[["slot","start"],["text","","defaultHref","tabs/shop"],["slot","end"],[3,"click"],["slot","end","name","caret-down-outline"],["slot","end","name","arrow-down-outline",4,"ngIf"],["slot","end","name","arrow-up-outline",4,"ngIf"],["slot","end","name","filter-outline"],[1,"containt"],[1,"grid-product"],["size","6","size-sm","3",3,"routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],["threshold","100px",3,"disabled","ionInfinite"],["slot","end","name","arrow-down-outline"],["slot","end","name","arrow-up-outline"],["size","6","size-sm","3",3,"routerLink"],["class","discount-label",4,"ngIf"],[1,"img-box"],["onError","this.src='assets/img/1235.jpg'",1,"m-auto",3,"src"],["class","bannerProduct",3,"src",4,"ngIf"],[1,"product-alias"],["class","product-rate",4,"ngIf"],["class","promotion-box",4,"ngIf"],["class","price-box",4,"ngIf"],[1,"discount-label"],[1,"bannerProduct",3,"src"],[1,"product-rate"],[3,"name","color",4,"ngFor","ngForOf"],[3,"name","color"],[1,"promotion-box"],[1,"strike"],[1,"price-box"],[1,"ion-text-center"],["name","dots"]],template:function(t,n){1&t&&(u.TgZ(0,"ion-header"),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-buttons",0),u._UZ(3,"ion-back-button",1),u.qZA(),u.TgZ(4,"ion-title"),u._uU(5),u.qZA(),u.TgZ(6,"ion-buttons",2),u._UZ(7,"app-shop-toolbar"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(8,"ion-content"),u.TgZ(9,"ion-toolbar"),u.TgZ(10,"ion-buttons",0),u.TgZ(11,"ion-button",3),u.NdJ("click",function(){return n.presentLocation()}),u._uU(12),u._UZ(13,"ion-icon",4),u.qZA(),u.qZA(),u.TgZ(14,"ion-buttons",2),u.TgZ(15,"ion-button",3),u.NdJ("click",function(){return n.changeSortDirection()}),u._uU(16),u.ALo(17,"translate"),u.YNc(18,x,1,0,"ion-icon",5),u.YNc(19,_,1,0,"ion-icon",6),u.qZA(),u.TgZ(20,"ion-button",3),u.NdJ("click",function(){return n.presentFilter()}),u._uU(21),u.ALo(22,"translate"),u._UZ(23,"ion-icon",7),u.qZA(),u.qZA(),u.qZA(),u.TgZ(24,"div",8),u.TgZ(25,"ion-grid",9),u.TgZ(26,"ion-row"),u.YNc(27,v,11,9,"ion-col",10),u.qZA(),u.qZA(),u.qZA(),u.YNc(28,S,3,3,"ion-item",11),u.YNc(29,q,4,0,"ion-card",11),u.TgZ(30,"ion-infinite-scroll",12),u.NdJ("ionInfinite",function(t){return n.loadMoreProducts(t)}),u._UZ(31,"ion-infinite-scroll-content"),u.qZA(),u.qZA()),2&t&&(u.xp6(5),u.Oqu(n.term.name),u.xp6(7),u.hij(" ",n.selectedRegion.name," "),u.xp6(4),u.hij(" ",u.lcZ(17,10,"SHOP.PRICE")," "),u.xp6(2),u.Q6J("ngIf","DESC"==n.currentSortDir),u.xp6(1),u.Q6J("ngIf","ASC"==n.currentSortDir),u.xp6(2),u.hij("",u.lcZ(22,12,"SHOP.FILTER_ACTION")," "),u.xp6(6),u.Q6J("ngForOf",n.productList),u.xp6(1),u.Q6J("ngIf",0==n.productList.length&&!n.loadingFlag.pending),u.xp6(1),u.Q6J("ngIf",n.loadingFlag.pending&&0==n.page),u.xp6(1),u.Q6J("disabled",n.numRows==n.productList.length))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,f.g,r.W2,r.YG,r.gu,e.O5,r.jY,r.Nd,e.sg,r.ju,r.MB,r.wI,r.YI,s.rH,r.Ie,r.PM,r.FN,r.PQ],pipes:[c.X$,e.JJ],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-bottom: 3em}",'[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-bottom: 3em}[_nghost-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:"Averta";font-size:.8em}[_nghost-%COMP%]   .boxTimeFlashsale[_ngcontent-%COMP%]{padding-left:12px;padding-right:12px;margin-top:29px;margin-bottom:6px;font-family:"Averta";font-size:.8em;display:flex;margin-right:16px}[_nghost-%COMP%]   .boxTimeFlashsale[_ngcontent-%COMP%]   .boxTime[_ngcontent-%COMP%]{color:#fff;background-color:#000;padding-left:2px;padding-right:2px;margin-right:2px;margin-left:2px;border-radius:2px;max-width:27px;width:27px;text-align:center}[_nghost-%COMP%]   .boxSpecial[_ngcontent-%COMP%]{min-height:150px}[_nghost-%COMP%]   .boxSpecial[_ngcontent-%COMP%]   .bannerSpecial[_ngcontent-%COMP%]{max-height:50px}[_nghost-%COMP%]   .boxSpecial[_ngcontent-%COMP%]   .imgProductSpecial[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .arrowButton[_ngcontent-%COMP%]{vertical-align:middle;margin-right:16px}[_nghost-%COMP%]   .bag-cart[_ngcontent-%COMP%]{color:#de2525;font-weight:bold;position:absolute;top:1em;font-size:.8em}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:240px;width:100%}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{border-top:1px solid rgba(192,192,192,.2);border-left:1px solid rgba(192,192,192,.2)}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{border-right:1px solid rgba(192,192,192,.2);border-bottom:1px solid rgba(192,192,192,.2)}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{flex:auto;text-align:center;margin:0 auto;overflow:hidden;position:relative}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:80x!important;margin-bottom:5px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   .bannerProduct[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;max-height:60px;max-width:80%;width:auto}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .product-alias[_ngcontent-%COMP%]{line-height:1.2em;font-size:.9em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;height:2.4em;-webkit-box-orient:vertical}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .promotion-box[_ngcontent-%COMP%]{margin:3px 0}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .promotion-box[_ngcontent-%COMP%]   .mr[_ngcontent-%COMP%]{margin-left:3px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .promotion-box[_ngcontent-%COMP%]   .strike[_ngcontent-%COMP%]{text-decoration:line-through}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]{margin:3px 0;font-size:.9em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;height:1.3em;-webkit-box-orient:vertical;color:var(--ion-color-danger)}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]{padding:5px;position:absolute;right:5px;top:10px;float:left;width:43px;background-color:#de2525;z-index:9999;transform:rotate(20deg);border-radius:4px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]:after{right:42px;border:solid transparent;content:" ";height:0;width:0;position:absolute;border-color:#88b7d500;border-right-color:#de2525;border-width:13.5px;top:50%;margin-top:-13.6px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]:before{content:"";z-index:2;position:absolute;top:44%;right:100%;width:5px;height:5px;opacity:.95;background:#fff;border-radius:5px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:12px;text-align:center;font-family:"Averta"}']}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[s.Bz.forChild(I)],s.Bz]}),t})();var D=o(26177);let k=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[e.ez,i.u5,r.Pc,y,c.aw.forChild(),D.t]]}),t})()}}]);