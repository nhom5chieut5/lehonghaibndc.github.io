!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[9935],{27887:function(e,i,o){o.d(i,{E:function(){return r}});var r=function(){function e(){t(this,e),this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}return n(e,[{key:"setStart",value:function(t){this.start=t,!0===t&&(this.pending=!0,this.end=!1),this.result=null,this.count++}},{key:"setPending",value:function(t){this.pending=t,!1===t?this.start=!1:this.end=!0}},{key:"setResult",value:function(t){this.result=t,this.pending=!1,this.start=!1,this.end=!0}}]),e}()},90315:function(e,n,i){i.r(n),i.d(n,{OptionsProductPageModule:function(){return f}});var o,r=i(38583),u=i(90665),s=i(47063),c=i(13619),a=i(1965),h=i(37716),l=[{path:"",component:a.z}],d=((o=function e(){t(this,e)}).\u0275fac=function(t){return new(t||o)},o.\u0275mod=h.oAB({type:o}),o.\u0275inj=h.cJS({imports:[[c.Bz.forChild(l)],c.Bz]}),o),f=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[r.ez,u.u5,s.Pc,d]]}),e}()},22923:function(e,i,o){o.d(i,{d:function(){return h}});var r,u=o(88002),s=o(26215),c=o(15189),a=o(37716),h=((r=function(){function e(n){t(this,e),this.reqAPIService=n,this.urlApi="/manager/store-api-mobie",this.NEW_URL_API="/manager/warehouse-api",this.changeDataStore=!1,this.onLoaded$=new s.X(0)}return n(e,[{key:"destroy",value:function(){this.fcode=null,this.store=null}},{key:"setFarmCode",value:function(t){this.fcode=t}},{key:"getFarmCode",value:function(){return this.fcode}},{key:"setStoreCode",value:function(t){this.wcode=t}},{key:"getStoreCode",value:function(){return this.wcode}},{key:"setStore",value:function(t){this.store=t}},{key:"getStore",value:function(){return this.store}},{key:"itemChanged",value:function(t,e){void 0!==this.store[t]&&Object.assign(this.store[t],e)}},{key:"getApiStore",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t=""===i?this.NEW_URL_API+"?action="+e+"&wcode="+this.wcode+n:"/".concat(i,"?action=")+e+n,this.reqAPIService.get(t).pipe((0,u.U)(function(t){return t}))}},{key:"sendPost",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return t=""===o?this.NEW_URL_API+"?action="+e+"&wcode="+this.wcode+i:"/".concat(o,"?action=")+e+i,this.reqAPIService.post(t,n).pipe((0,u.U)(function(t){return t}))}},{key:"sendPostWithFile",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return this.reqAPIService.postApiWithFile(t,e,"&wcode="+this.wcode+n,this.NEW_URL_API)}},{key:"postEdit",value:function(t,e){return this.reqAPIService.post(this.urlApi+"?action=edit-product-private&fcode="+this.fcode+"&id="+t,e)}}]),e}()).\u0275fac=function(t){return new(t||r)(a.LFG(c.$))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r)}}])}();