!function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[565],{20565:function(e,o,i){i.r(o),i.d(o,{ShopProductsPageModule:function(){return J}});var r=i(38583),c=i(90665),a=i(47063),s=i(81780),g=i(13619),l=i(64762),u=i(27887),d=i(92803),p=i(83111),h=i(59308),m=i(15085),f=i(37716),x=i(71239),P=i(84465),_=i(4015);function b(t,n){1&t&&f._UZ(0,"ion-icon",13)}function C(t,n){1&t&&f._UZ(0,"ion-icon",14)}function O(t,n){if(1&t&&(f.TgZ(0,"div",24),f.TgZ(1,"span"),f._uU(2),f.ALo(3,"number"),f.qZA(),f.qZA()),2&t){var e=f.oxw().$implicit;f.xp6(2),f.hij("-",f.xi3(3,1,100*e.ratio,"0.0-0"),"%")}}function M(t,n){if(1&t&&f._UZ(0,"img",25),2&t){var e=f.oxw().$implicit,o=f.oxw();f.Q6J("src",o.shopService.SITE_PATH+"/upload/eventeshop/"+e.banner,f.LSH)}}function v(t,n){if(1&t&&f._UZ(0,"ion-icon",28),2&t){var e=n.$implicit,o=f.oxw(2).$implicit;f.Q6J("name",e<=o.rate_score?"star":"star-outline")("color",o.rate_count>0?"primary":"medium")}}var Z=function(){return[1,2,3,4,5]};function w(t,n){1&t&&(f.TgZ(0,"div",26),f.YNc(1,v,1,2,"ion-icon",27),f.qZA()),2&t&&(f.xp6(1),f.Q6J("ngForOf",f.DdM(1,Z)))}function T(t,n){if(1&t&&(f.TgZ(0,"div",29),f.TgZ(1,"small",30),f._uU(2),f.ALo(3,"number"),f.qZA(),f.qZA()),2&t){var e=f.oxw().$implicit;f.xp6(2),f.hij("",f.xi3(3,1,e.maxFullPrice,"1.0-0"),"\u0111")}}function A(t,n){if(1&t&&(f.TgZ(0,"div",31),f._uU(1),f.ALo(2,"number"),f.qZA()),2&t){var e=f.oxw().$implicit;f.xp6(1),f.hij(" ",f.xi3(2,1,e.maxPrice,"1.0-0")," \u0111 ")}}function S(t,n){if(1&t&&(f.TgZ(0,"div",31),f._uU(1),f.ALo(2,"number"),f.ALo(3,"number"),f.qZA()),2&t){var e=f.oxw().$implicit;f.xp6(1),f.AsE(" ",f.xi3(2,2,e.minPrice,"1.0")," ~ ",f.xi3(3,5,e.maxPrice,"1.0-0")," \u0111 ")}}function k(t,n){if(1&t&&(f.TgZ(0,"ion-col",15),f.YNc(1,O,4,4,"div",16),f.TgZ(2,"div",17),f._UZ(3,"img",18),f.YNc(4,M,1,1,"img",19),f.qZA(),f.TgZ(5,"div",20),f._uU(6),f.qZA(),f.YNc(7,w,2,2,"div",21),f.YNc(8,T,4,4,"div",22),f.YNc(9,A,3,4,"div",23),f.YNc(10,S,4,8,"div",23),f.qZA()),2&t){var e=n.$implicit,o=f.oxw();f.MGl("routerLink","../product/",e.id,""),f.xp6(1),f.Q6J("ngIf",e.ratio&&0!=e.ratio),f.xp6(2),f.Q6J("src",o.shopService.SITE_PATH+e.img_default,f.LSH),f.xp6(1),f.Q6J("ngIf",e.banner),f.xp6(2),f.Oqu(e.alias),f.xp6(1),f.Q6J("ngIf",e.rate_count>0),f.xp6(1),f.Q6J("ngIf",e.ratio&&0!=e.ratio),f.xp6(1),f.Q6J("ngIf",e.minPrice==e.maxPrice),f.xp6(1),f.Q6J("ngIf",e.minPrice!=e.maxPrice)}}function y(t,n){1&t&&(f.TgZ(0,"ion-item"),f._uU(1),f.ALo(2,"translate"),f.qZA()),2&t&&(f.xp6(1),f.hij(" ",f.lcZ(2,1,"SHOP.TERM_PRODUCT.EMPTY")," "))}function q(t,n){1&t&&(f.TgZ(0,"ion-card"),f.TgZ(1,"ion-card-content"),f.TgZ(2,"div",32),f._UZ(3,"ion-spinner",33),f.qZA(),f.qZA(),f.qZA())}var I,D=[{path:"",component:(I=function(){function e(n,o,i,r,c,a){t(this,e),this.modalController=n,this.shopService=o,this.localDb=i,this.translate=r,this.toastService=c,this.router=a,this.page=0,this.loadingFlag=new u.E,this.filterTerms={},this.productList=[],this.currentSortDir="DESC",this.term=this.router.getCurrentNavigation().extras.state}var o,i,r;return o=e,(i=[{key:"ngOnInit",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.selectedRegion=this.localDb.eShopRegion?this.localDb.eShopRegion:{id:"",name:this.translate.instant("SHOP.LOCATION.ALL")},t.next=3,this.localDb.getDataCart();case 3:this.getTermProducts();case 4:case"end":return t.stop()}},t,this)}))}},{key:"getTermProducts",value:function(){var t=this,n=this.selectedRegion.id,e=this.page;this.loadingFlag.setPending(!0);var o=[this.term.id];Object.keys(this.filterTerms).forEach(function(n){t.filterTerms[n].forEach(function(t){t.selected&&o.push(t.id)})});var i=Object.assign(Object.assign(Object.assign(Object.assign({},this.selectedShipping&&{ship:this.selectedShipping}),o&&{terms:o}),this.selectedCompany&&{company_id:this.selectedCompany}),{sort:this.currentSortDir});this.shopService.getTermProducts(n,e,i).pipe().subscribe(function(n){"error"==n.status?t.toastService.warning(n.error.message):(t.numRows=n.data.numRows,0==t.page&&0==Object.keys(t.filterTerms).length&&t.prepareTerm(n.data.terms_child),t.productList=t.productList.concat(t.prepareProductPrice(n.data.list))),t.loadingFlag.setResult(!0)},function(n){t.loadingFlag.setResult(!1),t.toastService.danger(t.translate.instant("ERROR_CONNECT"))})}},{key:"prepareTerm",value:function(t){var n=this;this.filterTerms={},t.forEach(function(t){var e=[];t.terms=t.terms.split(".lhh_lv1."),t.terms.forEach(function(t){var n=t.split(".lhh_lv2."),o=["id","name"];(n=n.reduce(function(t,n,e){return t[o[e]]=n,t},{})).selected=!1,e.push(n)}),n.filterTerms[t.type]=e})}},{key:"prepareProductPrice",value:function(t){var n=[];return t.forEach(function(t){var e=t.label_price.split("~");t.minPrice=e[0],t.maxPrice=e[1],t.maxFullPrice=t.maxPrice/(1-t.ratio),n.push(t)}),n}},{key:"loadMoreProducts",value:function(t){this.page+=1,this.getTermProducts(),setTimeout(function(){t.target.complete()},500)}},{key:"refreshProductData",value:function(){this.page=0,this.productList=[],this.getTermProducts()}},{key:"changeSortDirection",value:function(){this.currentSortDir="DESC"==this.currentSortDir?"ASC":"DESC",this.refreshProductData()}},{key:"presentLocation",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:p.o});case 2:return(n=t.sent).onDidDismiss().then(function(t){t.data&&(e.selectedRegion=t.data,e.selectedCompany="",e.selectedShipping="",e.filterTerms={},e.refreshProductData())}),t.next=6,n.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}))}},{key:"presentFilter",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:d.R,componentProps:{terms:this.filterTerms,selectedShipping:this.selectedShipping,selectedCompany:this.selectedCompany}});case 2:return(n=t.sent).onDidDismiss().then(function(t){t.data&&(e.selectedCompany=t.data.company_id,e.selectedShipping=t.data.shipping,e.filterTerms=t.data.terms,e.refreshProductData())}),t.next=6,n.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}))}},{key:"presentSearch",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:h.w});case 2:return t.next=4,t.sent.present();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}))}}])&&n(o.prototype,i),r&&n(o,r),e}(),I.\u0275fac=function(t){return new(t||I)(f.Y36(a.IN),f.Y36(m.d),f.Y36(x.T),f.Y36(s.sK),f.Y36(P.k),f.Y36(g.F0))},I.\u0275cmp=f.Xpm({type:I,selectors:[["app-shop-products"]],decls:32,vars:14,consts:[["slot","start"],["text","","defaultHref","tabs/shop"],["slot","end"],[3,"click"],["slot","end","name","caret-down-outline"],["slot","end","name","arrow-down-outline",4,"ngIf"],["slot","end","name","arrow-up-outline",4,"ngIf"],["slot","end","name","filter-outline"],[1,"containt"],[1,"grid-product"],["size","6","size-sm","3",3,"routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],["threshold","100px",3,"disabled","ionInfinite"],["slot","end","name","arrow-down-outline"],["slot","end","name","arrow-up-outline"],["size","6","size-sm","3",3,"routerLink"],["class","discount-label",4,"ngIf"],[1,"img-box"],["onError","this.src='assets/img/1235.jpg'",1,"m-auto",3,"src"],["class","bannerProduct",3,"src",4,"ngIf"],[1,"product-alias"],["class","product-rate",4,"ngIf"],["class","promotion-box",4,"ngIf"],["class","price-box",4,"ngIf"],[1,"discount-label"],[1,"bannerProduct",3,"src"],[1,"product-rate"],[3,"name","color",4,"ngFor","ngForOf"],[3,"name","color"],[1,"promotion-box"],[1,"strike"],[1,"price-box"],[1,"ion-text-center"],["name","dots"]],template:function(t,n){1&t&&(f.TgZ(0,"ion-header"),f.TgZ(1,"ion-toolbar"),f.TgZ(2,"ion-buttons",0),f._UZ(3,"ion-back-button",1),f.qZA(),f.TgZ(4,"ion-title"),f._uU(5),f.qZA(),f.TgZ(6,"ion-buttons",2),f._UZ(7,"app-shop-toolbar"),f.qZA(),f.qZA(),f.qZA(),f.TgZ(8,"ion-content"),f.TgZ(9,"ion-toolbar"),f.TgZ(10,"ion-buttons",0),f.TgZ(11,"ion-button",3),f.NdJ("click",function(){return n.presentLocation()}),f._uU(12),f._UZ(13,"ion-icon",4),f.qZA(),f.qZA(),f.TgZ(14,"ion-buttons",2),f.TgZ(15,"ion-button",3),f.NdJ("click",function(){return n.changeSortDirection()}),f._uU(16),f.ALo(17,"translate"),f.YNc(18,b,1,0,"ion-icon",5),f.YNc(19,C,1,0,"ion-icon",6),f.qZA(),f.TgZ(20,"ion-button",3),f.NdJ("click",function(){return n.presentFilter()}),f._uU(21),f.ALo(22,"translate"),f._UZ(23,"ion-icon",7),f.qZA(),f.qZA(),f.qZA(),f.TgZ(24,"div",8),f.TgZ(25,"ion-grid",9),f.TgZ(26,"ion-row"),f.YNc(27,k,11,9,"ion-col",10),f.qZA(),f.qZA(),f.qZA(),f.YNc(28,y,3,3,"ion-item",11),f.YNc(29,q,4,0,"ion-card",11),f.TgZ(30,"ion-infinite-scroll",12),f.NdJ("ionInfinite",function(t){return n.loadMoreProducts(t)}),f._UZ(31,"ion-infinite-scroll-content"),f.qZA(),f.qZA()),2&t&&(f.xp6(5),f.Oqu(n.term.name),f.xp6(7),f.hij(" ",n.selectedRegion.name," "),f.xp6(4),f.hij(" ",f.lcZ(17,10,"SHOP.PRICE")," "),f.xp6(2),f.Q6J("ngIf","DESC"==n.currentSortDir),f.xp6(1),f.Q6J("ngIf","ASC"==n.currentSortDir),f.xp6(2),f.hij("",f.lcZ(22,12,"SHOP.FILTER_ACTION")," "),f.xp6(6),f.Q6J("ngForOf",n.productList),f.xp6(1),f.Q6J("ngIf",0==n.productList.length&&!n.loadingFlag.pending),f.xp6(1),f.Q6J("ngIf",n.loadingFlag.pending&&0==n.page),f.xp6(1),f.Q6J("disabled",n.numRows==n.productList.length))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,_.g,a.W2,a.YG,a.gu,r.O5,a.jY,a.Nd,r.sg,a.ju,a.MB,a.wI,a.YI,g.rH,a.Ie,a.PM,a.FN,a.PQ],pipes:[s.X$,r.JJ],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-bottom: 3em}",'[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-bottom: 3em}[_nghost-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:"Averta";font-size:.8em}[_nghost-%COMP%]   .boxTimeFlashsale[_ngcontent-%COMP%]{padding-left:12px;padding-right:12px;margin-top:29px;margin-bottom:6px;font-family:"Averta";font-size:.8em;display:flex;margin-right:16px}[_nghost-%COMP%]   .boxTimeFlashsale[_ngcontent-%COMP%]   .boxTime[_ngcontent-%COMP%]{color:#fff;background-color:#000;padding-left:2px;padding-right:2px;margin-right:2px;margin-left:2px;border-radius:2px;max-width:27px;width:27px;text-align:center}[_nghost-%COMP%]   .boxSpecial[_ngcontent-%COMP%]{min-height:150px}[_nghost-%COMP%]   .boxSpecial[_ngcontent-%COMP%]   .bannerSpecial[_ngcontent-%COMP%]{max-height:50px}[_nghost-%COMP%]   .boxSpecial[_ngcontent-%COMP%]   .imgProductSpecial[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .arrowButton[_ngcontent-%COMP%]{vertical-align:middle;margin-right:16px}[_nghost-%COMP%]   .bag-cart[_ngcontent-%COMP%]{color:#de2525;font-weight:bold;position:absolute;top:1em;font-size:.8em}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:240px;width:100%}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{border-top:1px solid rgba(192,192,192,.2);border-left:1px solid rgba(192,192,192,.2)}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{border-right:1px solid rgba(192,192,192,.2);border-bottom:1px solid rgba(192,192,192,.2)}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{flex:auto;text-align:center;margin:0 auto;overflow:hidden;position:relative}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:80x!important;margin-bottom:5px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   .bannerProduct[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;max-height:60px;max-width:80%;width:auto}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .product-alias[_ngcontent-%COMP%]{line-height:1.2em;font-size:.9em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;height:2.4em;-webkit-box-orient:vertical}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .promotion-box[_ngcontent-%COMP%]{margin:3px 0}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .promotion-box[_ngcontent-%COMP%]   .mr[_ngcontent-%COMP%]{margin-left:3px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .promotion-box[_ngcontent-%COMP%]   .strike[_ngcontent-%COMP%]{text-decoration:line-through}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]{margin:3px 0;font-size:.9em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;height:1.3em;-webkit-box-orient:vertical;color:var(--ion-color-danger)}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]{padding:5px;position:absolute;right:5px;top:10px;float:left;width:43px;background-color:#de2525;z-index:9999;transform:rotate(20deg);border-radius:4px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]:after{right:42px;border:solid transparent;content:" ";height:0;width:0;position:absolute;border-color:#88b7d500;border-right-color:#de2525;border-width:13.5px;top:50%;margin-top:-13.6px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]:before{content:"";z-index:2;position:absolute;top:44%;right:100%;width:5px;height:5px;opacity:.95;background:#fff;border-radius:5px}[_nghost-%COMP%]   .grid-product[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .discount-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:12px;text-align:center;font-family:"Averta"}']}),I)}],R=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=f.oAB({type:n}),n.\u0275inj=f.cJS({imports:[[g.Bz.forChild(D)],g.Bz]}),n}(),L=i(26177),J=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=f.oAB({type:n}),n.\u0275inj=f.cJS({imports:[[r.ez,c.u5,a.Pc,R,s.aw.forChild(),L.t]]}),n}()}}])}();