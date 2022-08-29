!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[4045],{27887:function(t,n,r){r.d(n,{E:function(){return s}});var s=function(){function t(){e(this,t),this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}return i(t,[{key:"setStart",value:function(e){this.start=e,!0===e&&(this.pending=!0,this.end=!1),this.result=null,this.count++}},{key:"setPending",value:function(e){this.pending=e,!1===e?this.start=!1:this.end=!0}},{key:"setResult",value:function(e){this.result=e,this.pending=!1,this.start=!1,this.end=!0}}]),t}()},25557:function(t,i,n){n.r(i),n.d(i,{UpdateTimerPageModule:function(){return d}});var r,s=n(38583),o=n(90665),u=n(47063),c=n(13619),a=n(38800),p=n(37716),v=[{path:"",component:a.K}],h=((r=function t(){e(this,t)}).\u0275fac=function(e){return new(e||r)},r.\u0275mod=p.oAB({type:r}),r.\u0275inj=p.cJS({imports:[[c.Bz.forChild(v)],c.Bz]}),r),d=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[s.ez,o.u5,u.Pc,h]]}),t}()},82629:function(t,n,r){r.d(n,{d:function(){return c}});var s,o=r(15189),u=r(37716),c=((s=function(){function t(i){e(this,t),this.reqApiService=i,this.PATH_FT="http://35.240.204.122:8882/farmext",this.PATH_DEVICE="/manager/device-api",this.PATH_ADD_DEVICE="/manager/add-device-api",this.SITE_PATH_API="http://35.240.204.122:8882/api",this.listPermision=["company_manager","farm_manager","pond_manager"]}return i(t,[{key:"checkPermission",value:function(e){return!!this.listPermision.includes(e)}},{key:"setPondCode",value:function(e){this.pcode=e}},{key:"list",value:function(){return this.reqApiService.get(this.PATH_DEVICE+"?action=list&pcode="+this.pcode).toPromise()}},{key:"get",value:function(e){return this.reqApiService.get(this.PATH_DEVICE+"?action=get&device_id_fb="+e+"&pcode="+this.pcode).toPromise()}},{key:"update",value:function(e,t){return this.reqApiService.post(this.PATH_DEVICE+"?action=update&id="+t+"&pcode="+this.pcode,{name:e,pond_code:this.pcode}).toPromise()}},{key:"add",value:function(e){return this.reqApiService.post(this.PATH_ADD_DEVICE,e).toPromise()}},{key:"move",value:function(e,t,i){return this.reqApiService.post(this.PATH_DEVICE+"?action=update&id="+i+"&pcode="+this.pcode,{name:e,pond_code:t}).toPromise()}},{key:"remove",value:function(e){return this.reqApiService.get(this.PATH_DEVICE+"?action=remove&id="+e+"&pcode="+this.pcode).toPromise()}},{key:"check",value:function(e){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/qr/"+e).toPromise()}},{key:"active",value:function(e){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/qr/"+e,{}).toPromise()}},{key:"changeStatusContactor",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+i+"/peripherals/"+t+"/control",e)}},{key:"getInforDevice",value:function(e){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+e).toPromise()}},{key:"getListCondition",value:function(e,t){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/subscribes")}},{key:"removeCondition",value:function(e,t,i){return this.reqApiService.deleteTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/subscribes/"+i)}},{key:"addCondition",value:function(e,t,i){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/subscribes",i)}},{key:"updateNameContactor",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e,i)}},{key:"updateTimer",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/timer",i)}},{key:"updateSetting",value:function(e,t){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e+"/setting",t).toPromise()}},{key:"addConditonPub",value:function(e,t,i){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+e+"/peripherals/"+t+"/conditions",i)}},{key:"updateConditonPub",value:function(e,t,i,n){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e+"/peripherals/"+t+"/conditions/"+i,n)}},{key:"removeConditionPub",value:function(e,t,i){return this.reqApiService.deleteTokenFt(this.PATH_FT+"/v2/devices/"+e+"/peripherals/"+t+"/conditions/"+i)}},{key:"saveAutoRecord",value:function(e,t){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e+"/third-setting",t)}},{key:"commandFeeding",value:function(e,t){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+e+"/command",t)}},{key:"removeTimer",value:function(e,t,i){return this.reqApiService.deleteTokenFt(this.PATH_FT+"/v2/devices/"+i+"/peripherals/"+t+"/timer/"+e)}},{key:"addTimer",value:function(e,t,i){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/timer",i)}},{key:"updateTimerFeed",value:function(e,t,i,n){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+i+"/peripherals/"+t+"/timer/"+e,n)}},{key:"plus_analyze",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/plus_analyze",i)}},{key:"abstract_analyze",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/abstract_analyze",i)}},{key:"asyncData",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/sync",i)}},{key:"removeDataFeed",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/clear",i)}},{key:"updateCommonSetting",value:function(e,t){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e,t)}},{key:"getListRepast",value:function(e,t){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/data")}},{key:"getSuggestCalib",value:function(e,t,i,n){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+n+"/get-suggest-calib?feed="+i+"&start="+e+"&end="+t)}},{key:"quickAddRepast",value:function(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/timer/feed",i)}}]),t}()).\u0275fac=function(e){return new(e||s)(u.LFG(o.$))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s)}}])}();