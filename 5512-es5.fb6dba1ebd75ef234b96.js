!function(){"use strict";function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[5512],{27887:function(e,i,u){u.d(i,{E:function(){return r}});var r=function(){function e(){n(this,e),this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}var i,u,r;return i=e,(u=[{key:"setStart",value:function(n){this.start=n,!0===n&&(this.pending=!0,this.end=!1),this.result=null,this.count++}},{key:"setPending",value:function(n){this.pending=n,!1===n?this.start=!1:this.end=!0}},{key:"setResult",value:function(n){this.result=n,this.pending=!1,this.start=!1,this.end=!0}}])&&t(i.prototype,u),r&&t(i,r),e}()},32632:function(t,e,i){i.r(e),i.d(e,{PondLabPageModule:function(){return d}});var u,r=i(38583),o=i(90665),a=i(47063),s=i(13619),c=i(59419),l=i(37716),h=[{path:"",component:c.r},{path:"pond-lab-daily",loadChildren:function(){return i.e(1572).then(i.bind(i,11572)).then(function(n){return n.PondLabDailyPageModule})}}],f=((u=function t(){n(this,t)}).\u0275fac=function(n){return new(n||u)},u.\u0275mod=l.oAB({type:u}),u.\u0275inj=l.cJS({imports:[[s.Bz.forChild(h)],s.Bz]}),u),d=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[r.ez,o.u5,a.Pc,f]]}),t}()}}])}();