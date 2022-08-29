"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[4045],{27887:function(e,t,i){i.d(t,{E:function(){return r}});class r{constructor(){this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}setStart(e){this.start=e,!0===e&&(this.pending=!0,this.end=!1),this.result=null,this.count++}setPending(e){this.pending=e,!1===e?this.start=!1:this.end=!0}setResult(e){this.result=e,this.pending=!1,this.start=!1,this.end=!0}}},25557:function(e,t,i){i.r(t),i.d(t,{UpdateTimerPageModule:function(){return a}});var r=i(38583),s=i(90665),n=i(47063),o=i(13619),c=i(38800),p=i(37716);const h=[{path:"",component:c.K}];let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[o.Bz.forChild(h)],o.Bz]}),e})(),a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[r.ez,s.u5,n.Pc,d]]}),e})()},82629:function(e,t,i){i.d(t,{d:function(){return n}});var r=i(15189),s=i(37716);let n=(()=>{class e{constructor(e){this.reqApiService=e,this.PATH_FT="http://35.240.204.122:8882/farmext",this.PATH_DEVICE="/manager/device-api",this.PATH_ADD_DEVICE="/manager/add-device-api",this.SITE_PATH_API="http://35.240.204.122:8882/api",this.listPermision=["company_manager","farm_manager","pond_manager"]}checkPermission(e){return!!this.listPermision.includes(e)}setPondCode(e){this.pcode=e}list(){return this.reqApiService.get(this.PATH_DEVICE+"?action=list&pcode="+this.pcode).toPromise()}get(e){return this.reqApiService.get(this.PATH_DEVICE+"?action=get&device_id_fb="+e+"&pcode="+this.pcode).toPromise()}update(e,t){return this.reqApiService.post(this.PATH_DEVICE+"?action=update&id="+t+"&pcode="+this.pcode,{name:e,pond_code:this.pcode}).toPromise()}add(e){return this.reqApiService.post(this.PATH_ADD_DEVICE,e).toPromise()}move(e,t,i){return this.reqApiService.post(this.PATH_DEVICE+"?action=update&id="+i+"&pcode="+this.pcode,{name:e,pond_code:t}).toPromise()}remove(e){return this.reqApiService.get(this.PATH_DEVICE+"?action=remove&id="+e+"&pcode="+this.pcode).toPromise()}check(e){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/qr/"+e).toPromise()}active(e){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/qr/"+e,{}).toPromise()}changeStatusContactor(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+i+"/peripherals/"+t+"/control",e)}getInforDevice(e){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+e).toPromise()}getListCondition(e,t){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/subscribes")}removeCondition(e,t,i){return this.reqApiService.deleteTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/subscribes/"+i)}addCondition(e,t,i){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/subscribes",i)}updateNameContactor(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e,i)}updateTimer(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/timer",i)}updateSetting(e,t){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e+"/setting",t).toPromise()}addConditonPub(e,t,i){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+e+"/peripherals/"+t+"/conditions",i)}updateConditonPub(e,t,i,r){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e+"/peripherals/"+t+"/conditions/"+i,r)}removeConditionPub(e,t,i){return this.reqApiService.deleteTokenFt(this.PATH_FT+"/v2/devices/"+e+"/peripherals/"+t+"/conditions/"+i)}saveAutoRecord(e,t){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e+"/third-setting",t)}commandFeeding(e,t){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+e+"/command",t)}removeTimer(e,t,i){return this.reqApiService.deleteTokenFt(this.PATH_FT+"/v2/devices/"+i+"/peripherals/"+t+"/timer/"+e)}addTimer(e,t,i){return this.reqApiService.postTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/timer",i)}updateTimerFeed(e,t,i,r){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+i+"/peripherals/"+t+"/timer/"+e,r)}plus_analyze(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/plus_analyze",i)}abstract_analyze(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/abstract_analyze",i)}asyncData(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/sync",i)}removeDataFeed(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/clear",i)}updateCommonSetting(e,t){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+e,t)}getListRepast(e,t){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/data")}getSuggestCalib(e,t,i,r){return this.reqApiService.getTokenFt(this.PATH_FT+"/v2/devices/"+r+"/get-suggest-calib?feed="+i+"&start="+e+"&end="+t)}quickAddRepast(e,t,i){return this.reqApiService.putTokenFt(this.PATH_FT+"/v2/devices/"+t+"/peripherals/"+e+"/timer/feed",i)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(r.$))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);