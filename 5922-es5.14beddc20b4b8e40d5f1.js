!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[5922],{25922:function(e,i,o){o.r(i),o.d(i,{LifeRatioPageModule:function(){return x}});var a=o(38583),s=o(90665),r=o(13619),l=o(47063),u=o(64762),c=o(27887),h=function(){function e(n,i){t(this,e);var o=Math.pow(i/2,2)*Math.PI;this.areaOfset=o*(100-5*n)/100}return n(e,[{key:"getAreaOfset",value:function(){return this.areaOfset?this.areaOfset:0}}]),e}(),p=o(37716),m=o(81780);function g(t,e){1&t&&(p.TgZ(0,"ion-grid",8),p.TgZ(1,"ion-row",9),p._UZ(2,"ion-spinner"),p.qZA(),p.qZA())}function f(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"ion-list"),p.TgZ(1,"ion-item"),p.TgZ(2,"ion-label"),p._uU(3),p.ALo(4,"translate"),p.qZA(),p.TgZ(5,"h4",10),p._uU(6),p.ALo(7,"number"),p.TgZ(8,"small",11),p._uU(9),p.ALo(10,"translate"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(11,"ion-item"),p.TgZ(12,"ion-label"),p._uU(13),p.ALo(14,"translate"),p.qZA(),p.TgZ(15,"h4",10),p._uU(16),p.ALo(17,"number"),p.TgZ(18,"small",11),p._uU(19),p.ALo(20,"translate"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(21,"ion-list-header"),p.TgZ(22,"ion-label"),p._uU(23),p.ALo(24,"translate"),p.qZA(),p.qZA(),p.TgZ(25,"ion-item"),p.TgZ(26,"ion-label"),p._uU(27),p.ALo(28,"translate"),p.qZA(),p.TgZ(29,"h4",10),p._uU(30),p.ALo(31,"number"),p.TgZ(32,"small",11),p._uU(33,"%"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(34,"ion-item"),p.TgZ(35,"ion-label"),p._uU(36),p.ALo(37,"translate"),p.qZA(),p.TgZ(38,"h4",10),p._uU(39),p.ALo(40,"number"),p.TgZ(41,"small",11),p._uU(42),p.ALo(43,"translate"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(44,"ion-item"),p.TgZ(45,"ion-label"),p._uU(46),p.ALo(47,"translate"),p.qZA(),p.TgZ(48,"h4",10),p._uU(49),p.ALo(50,"number"),p.TgZ(51,"small",11),p._uU(52),p.ALo(53,"translate"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(54,"ion-item"),p.TgZ(55,"ion-label"),p._uU(56),p.ALo(57,"translate"),p.qZA(),p.TgZ(58,"h4",10),p._uU(59),p.ALo(60,"number"),p.qZA(),p.qZA(),p.TgZ(61,"ion-item"),p.TgZ(62,"ion-label"),p._uU(63),p.ALo(64,"translate"),p.qZA(),p.TgZ(65,"h4",10),p._uU(66),p.ALo(67,"number"),p.TgZ(68,"small",11),p._uU(69),p.ALo(70,"translate"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(71,"ion-item",12),p.TgZ(72,"ion-label",13),p._uU(73),p.ALo(74,"translate"),p.TgZ(75,"small"),p._uU(76),p.ALo(77,"translate"),p.qZA(),p.qZA(),p.TgZ(78,"ion-input",14),p.NdJ("ngModelChange",function(t){return p.CHM(n),p.oxw().price=t}),p.qZA(),p.qZA(),p.qZA()}if(2&t){var i=p.oxw();p.xp6(3),p.Oqu(p.lcZ(4,23,"LIFE-RATIO.RATIO_RESULT.SIZE")),p.xp6(3),p.hij("",p.xi3(7,25,i.size,"0.0-1")," "),p.xp6(3),p.Oqu(p.lcZ(10,28,"LIFE-RATIO.RATIO_RESULT.PCS")),p.xp6(4),p.Oqu(p.lcZ(14,30,"LIFE-RATIO.RATIO_RESULT.WEIGHT")),p.xp6(3),p.hij("",p.xi3(17,32,1e3*i.weight,"0.0-2")," "),p.xp6(3),p.Oqu(p.lcZ(20,35,"LIFE-RATIO.RATIO_RESULT.PCS_WEIGHT")),p.xp6(4),p.Oqu(p.lcZ(24,37,"LIFE-RATIO.RATIO_RESULT.ESTIMATE")),p.xp6(4),p.Oqu(p.lcZ(28,39,"LIFE-RATIO.RATIO_RESULT.RATIO")),p.xp6(3),p.hij("",p.xi3(31,41,100*i.ratio,"0.0-0")," "),p.xp6(6),p.Oqu(p.lcZ(37,44,"LIFE-RATIO.RATIO_RESULT.SHRIMP")),p.xp6(3),p.hij("",p.xi3(40,46,i.quantity,"0.0-0")," "),p.xp6(3),p.Oqu(p.lcZ(43,49,"LIFE-RATIO.RATIO_RESULT.PCS_SHRIMP")),p.xp6(4),p.Oqu(p.lcZ(47,51,"LIFE-RATIO.RATIO_RESULT.BIOMASS")),p.xp6(3),p.hij("",p.xi3(50,53,i.biomass/1e3,"0.0-2")," "),p.xp6(3),p.Oqu(p.lcZ(53,56,"LIFE-RATIO.RATIO_RESULT.TON")),p.xp6(4),p.Oqu(p.lcZ(57,58,"LIFE-RATIO.RATIO_RESULT.FCR")),p.xp6(3),p.Oqu(p.xi3(60,60,i.fcr,"0.0-1")),p.xp6(4),p.Oqu(p.lcZ(64,63,"LIFE-RATIO.RATIO_RESULT.REVENUE")),p.xp6(3),p.hij("",p.xi3(67,65,i.biomass*i.price/1e6,"0.0-1")," "),p.xp6(3),p.Oqu(p.lcZ(70,68,"LIFE-RATIO.RATIO_RESULT.MIL_DONG")),p.xp6(4),p.hij("",p.lcZ(74,70,"LIFE-RATIO.RATIO_RESULT.PRICE")," "),p.xp6(3),p.hij("(",p.lcZ(77,72,"LIFE-RATIO.RATIO_RESULT.DONG"),")"),p.xp6(2),p.Q6J("ngModel",i.price)}}var Z,A=((Z=function(){function e(n,i,o){t(this,e),this.modalCtrl=n,this.navParams=i,this.translate=o,this.price=0,this.calculatingFlag=new c.E,this.ratioError=0}return n(e,[{key:"ngOnInit",value:function(){this.formValue=this.navParams.data.form,this.samples=this.navParams.data.samples,this.calculate()}},{key:"close",value:function(){this.modalCtrl.dismiss()}},{key:"calculate",value:function(){this.calculatingFlag.setPending(!0);var t=new h(this.formValue.pondInfoGroup.deep,this.formValue.sampleGroup.toolDiameter).getAreaOfset();console.log(t);var e=0,n=this.calculateFromBasic(),i=this.formValue.pondInfoGroup.area/(3*t)*this.calculateFormSample(),o=this.calculateFromFeed();this.samples.length>3?(e=i,this.message=this.translate.instant("LIFE-RATIO.RATIO_RESULT.SAMPLE_MES")):this.formValue.feedGroup.feed>0?(e=o,this.message=this.translate.instant("LIFE-RATIO.RATIO_RESULT.ERROR_MES")):this.samples.length>0?(e=i,this.message=this.translate.instant("LIFE-RATIO.RATIO_RESULT.ERROR_LARGE_MES")):this.formValue.pondInfoGroup.old>30?(e=n,this.message=this.translate.instant("LIFE-RATIO.RATIO_RESULT.NO_NET_FOOD")):this.message=this.translate.instant("LIFE-RATIO.RATIO_RESULT.NO_DATA"),this.biomass=e*this.weight,this.quantity=e,this.ratio=this.quantity/this.formValue.pondInfoGroup.quantity,this.fcr=this.formValue.feedGroup.feedTotal/this.biomass,this.revenue=this.biomass*this.price,this.calculatingFlag.setResult(!0)}},{key:"calculateFromBasic",value:function(){return this.formValue.pondInfoGroup.quantity>0&&this.formValue.pondInfoGroup.old>30?this.formValue.pondInfoGroup.quantity*(90-(this.formValue.pondInfoGroup.old-30)/4)/100:0}},{key:"calculateFormSample",value:function(){var t=0,e=0,n=0;return this.samples.length>0&&this.samples.forEach(function(i){e+=+i.quantity,t+=+i.weight,n+=+i.totalWeight}),this.weight=t/e,this.size=e/t,this.size*n}},{key:"calculateFromFeed",value:function(){var t=0,e=-116.905*this.weight+4.5445;return console.log(e),e=e<1.3?1.3:e,console.log(e),this.formValue.feedGroup.feed>0&&(t=100*this.formValue.feedGroup.feed/e),t/this.weight}}]),e}()).\u0275fac=function(t){return new(t||Z)(p.Y36(l.IN),p.Y36(l.X1),p.Y36(m.sK))},Z.\u0275cmp=p.Xpm({type:Z,selectors:[["app-life-ratio-result"]],decls:16,vars:6,consts:[["mode","ios"],["slot","primary"],[3,"click"],["name","close-outline"],["class","h-100",4,"ngIf"],[4,"ngIf"],[1,"ion-padding"],[1,"suggest"],[1,"h-100"],["align-items-center","",1,"h-100"],["slot","end"],["color","medium"],["lines","inset"],["position","fixed","color","primary"],["type","number",2,"text-align","end",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(p.TgZ(0,"ion-header",0),p.TgZ(1,"ion-toolbar"),p.TgZ(2,"ion-title"),p._uU(3),p.ALo(4,"translate"),p.qZA(),p.TgZ(5,"ion-buttons",1),p.TgZ(6,"ion-button",2),p.NdJ("click",function(){return e.close()}),p._UZ(7,"ion-icon",3),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(8,"ion-content"),p.YNc(9,g,3,0,"ion-grid",4),p.YNc(10,f,79,74,"ion-list",5),p.TgZ(11,"div",6),p.TgZ(12,"div",7),p.TgZ(13,"p"),p.TgZ(14,"em"),p._uU(15),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t&&(p.xp6(3),p.Oqu(p.lcZ(4,4,"LIFE-RATIO.RESULT")),p.xp6(6),p.Q6J("ngIf",e.calculatingFlag.pending),p.xp6(1),p.Q6J("ngIf",!e.calculatingFlag.pending),p.xp6(5),p.Oqu(e.message))},directives:[l.Gu,l.sr,l.wd,l.Sm,l.YG,l.gu,l.W2,a.O5,l.jY,l.Nd,l.PQ,l.q_,l.Ie,l.Q$,l.yh,l.pK,l.as,s.JJ,s.On],pipes:[m.X$,a.JJ],styles:["[_nghost-%COMP%]   .h-100[_ngcontent-%COMP%]{height:100%}"]}),Z),T=o(38605),d=function(){var e=function(){function e(n){t(this,e),this.storage=n}return n(e,[{key:"setLifeRatioData",value:function(t){this.storage.set("lifeRatio",t)}},{key:"getLifeRatioData",value:function(){return this.storage.get("lifeRatio")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.LFG(T.Ke))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),I=o(84465),q=["slides"];function O(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"ion-item"),p.TgZ(1,"ion-label",7),p._uU(2),p.ALo(3,"translate"),p.qZA(),p._UZ(4,"ion-input",25),p.TgZ(5,"ion-icon",26),p.NdJ("click",function(){return p.CHM(n),p.oxw(2).showHint()}),p.qZA(),p.qZA()}2&t&&(p.xp6(2),p.hij("",p.lcZ(3,1,"LIFE-RATIO.NET_DIA")," (m)"))}function R(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"ion-list-header",27),p.TgZ(1,"ion-label"),p._uU(2),p.ALo(3,"translate"),p.qZA(),p.TgZ(4,"div",28),p.TgZ(5,"ion-button",29),p.NdJ("click",function(){return p.CHM(n),p.oxw(2).removeASample()}),p._UZ(6,"ion-icon",30),p.qZA(),p.TgZ(7,"ion-button",31),p.NdJ("click",function(){return p.CHM(n),p.oxw(2).addASample()}),p._UZ(8,"ion-icon",32),p.qZA(),p.qZA(),p.qZA()}if(2&t){var i=p.oxw(2);p.xp6(2),p.AsE("",p.lcZ(3,3,"LIFE-RATIO.NET_COUNT")," (",i.samples.length,")"),p.xp6(3),p.Q6J("disabled",i.samples.length<2)}}function L(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"ion-row",34),p.NdJ("click",function(){var t=p.CHM(n).index;return p.oxw(3).presentWriteSample(t)}),p.TgZ(1,"ion-col",35),p.TgZ(2,"small"),p._uU(3),p.qZA(),p.qZA(),p.TgZ(4,"ion-col",36),p._uU(5),p.ALo(6,"number"),p.TgZ(7,"small"),p._uU(8,"kg"),p.qZA(),p.qZA(),p.TgZ(9,"ion-col",37),p.TgZ(10,"ion-text",38),p._uU(11),p.qZA(),p._uU(12,"/"),p.TgZ(13,"ion-text",39),p._uU(14),p.ALo(15,"number"),p.qZA(),p.qZA(),p.TgZ(16,"ion-col",37),p.TgZ(17,"ion-button",40),p._UZ(18,"ion-icon",41),p.qZA(),p.qZA(),p.qZA()}if(2&t){var i=e.$implicit,o=e.index;p.xp6(3),p.hij("#",o+1,""),p.xp6(2),p.hij("",p.xi3(6,4,i.totalWeight,"1.1-2")," "),p.xp6(6),p.Oqu(i.quantity),p.xp6(3),p.hij(" ",p.xi3(15,7,i.weight,"1.1-2"),"")}}function E(t,e){if(1&t&&(p.TgZ(0,"ion-grid"),p.YNc(1,L,19,10,"ion-row",33),p.qZA()),2&t){var n=p.oxw(2);p.xp6(1),p.Q6J("ngForOf",n.samples)}}function v(t,e){if(1&t){var n=p.EpF();p.TgZ(0,"ion-content",3),p.TgZ(1,"ion-slides",4,5),p.NdJ("ionSlideDidChange",function(){return p.CHM(n),p.oxw().slideChange()}),p.TgZ(3,"ion-slide"),p.TgZ(4,"ion-list",6),p.TgZ(5,"ion-item"),p.TgZ(6,"ion-label",7),p._uU(7),p.ALo(8,"translate"),p.TgZ(9,"sup"),p._uU(10,"2"),p.qZA(),p._uU(11,")"),p.qZA(),p._UZ(12,"ion-input",8),p.qZA(),p.TgZ(13,"ion-item"),p.TgZ(14,"ion-label",7),p._uU(15),p.ALo(16,"translate"),p.qZA(),p._UZ(17,"ion-input",9),p.qZA(),p.TgZ(18,"ion-item"),p.TgZ(19,"ion-label",7),p._uU(20),p.ALo(21,"translate"),p.qZA(),p._UZ(22,"ion-input",10),p.qZA(),p.TgZ(23,"ion-item"),p.TgZ(24,"ion-label",7),p._uU(25),p.ALo(26,"translate"),p.qZA(),p._UZ(27,"ion-input",11),p.qZA(),p.TgZ(28,"div",12),p.TgZ(29,"ion-button",13),p.NdJ("click",function(){return p.CHM(n),p.oxw().slideNext()}),p._uU(30),p.ALo(31,"translate"),p._UZ(32,"ion-icon",14),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(33,"ion-slide"),p.TgZ(34,"div",15),p.TgZ(35,"ion-list",16),p.TgZ(36,"ion-item"),p.TgZ(37,"ion-label"),p._uU(38),p.ALo(39,"translate"),p.qZA(),p._UZ(40,"ion-toggle",17),p.qZA(),p.YNc(41,O,6,3,"ion-item",18),p.qZA(),p.YNc(42,R,9,5,"ion-list-header",19),p.YNc(43,E,2,1,"ion-grid",18),p.TgZ(44,"div",12),p.TgZ(45,"ion-button",13),p.NdJ("click",function(){return p.CHM(n),p.oxw().slideNext()}),p._uU(46),p.ALo(47,"translate"),p._UZ(48,"ion-icon",14),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(49,"ion-slide"),p.TgZ(50,"div"),p.TgZ(51,"h2"),p._uU(52),p.ALo(53,"translate"),p.qZA(),p.TgZ(54,"ion-list",20),p.TgZ(55,"ion-item"),p.TgZ(56,"ion-label",21),p._uU(57),p.ALo(58,"translate"),p.qZA(),p._UZ(59,"ion-input",22),p.qZA(),p.TgZ(60,"ion-item"),p.TgZ(61,"ion-label",21),p._uU(62),p.ALo(63,"translate"),p.qZA(),p._UZ(64,"ion-input",23),p.qZA(),p.TgZ(65,"div",12),p.TgZ(66,"ion-button",24),p.NdJ("click",function(){return p.CHM(n),p.oxw().calculate()}),p._uU(67),p.ALo(68,"translate"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&t){var i=p.oxw();p.Q6J("formGroup",i.infoForm),p.xp6(1),p.Q6J("options",i.slideOpts),p.xp6(6),p.hij("",p.lcZ(8,18,"LIFE-RATIO.AREA")," (m"),p.xp6(8),p.hij("",p.lcZ(16,20,"LIFE-RATIO.DEPTH")," (m)"),p.xp6(5),p.hij("",p.lcZ(21,22,"LIFE-RATIO.SEED")," (con)"),p.xp6(5),p.Oqu(p.lcZ(26,24,"LIFE-RATIO.AGE")),p.xp6(4),p.Q6J("disabled",i.infoForm.controls.pondInfoGroup.invalid),p.xp6(1),p.hij(" ",p.lcZ(31,26,"LIFE-RATIO.NEXT")," "),p.xp6(8),p.Oqu(p.lcZ(39,28,"LIFE-RATIO.NET_SAMPLE")),p.xp6(3),p.Q6J("ngIf",i.infoForm.value.sampleGroup.isSample),p.xp6(1),p.Q6J("ngIf",i.infoForm.value.sampleGroup.isSample),p.xp6(1),p.Q6J("ngIf",i.infoForm.value.sampleGroup.isSample),p.xp6(2),p.Q6J("disabled",i.infoForm.controls.sampleGroup.invalid),p.xp6(1),p.hij(" ",p.lcZ(47,30,"LIFE-RATIO.NEXT")," "),p.xp6(6),p.Oqu(p.lcZ(53,32,"LIFE-RATIO.FOOD")),p.xp6(5),p.hij("",p.lcZ(58,34,"LIFE-RATIO.FOOD_TODAY")," (kg)"),p.xp6(5),p.hij("",p.lcZ(63,36,"LIFE-RATIO.FOOD_TOTAL")," (kg)"),p.xp6(5),p.Oqu(p.lcZ(68,38,"LIFE-RATIO.RESULT"))}}var _=[{path:"",component:function(){var e=function(){function e(n,i,o,a,s,r,l){t(this,e),this.lifeRatioService=n,this.fb=i,this.modalCtrl=o,this.navCtrl=a,this.alertCtrl=s,this.toastService=r,this.translate=l,this.slideOpts={effect:"flip"},this.samples=[]}return n(e,[{key:"back",value:function(){this.navCtrl.navigateBack("/tabs/tools")}},{key:"ngOnInit",value:function(){var t=this;this.lifeRatioService.getLifeRatioData().then(function(e){e?(t.formSaved=e,console.log(e)):t.formSaved={area:2e3,deep:1.2,quantity:0,toolDiameter:2.8,getTimes:5},console.log(t.formSaved),t.buildForms()},function(e){return console.error(t.translate.instant("LIFE-RATIO.GET_ERROR"),e)}),this.initSample()}},{key:"initSample",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e={totalWeight:0,weight:0,quantity:0},n=0;n<t;n++)this.samples.push(e)}},{key:"addASample",value:function(){if(this.samples.length>8)return this.toastService.warning(this.translate.instant("LIFE-RATIO.ADD_ERR")),!1;this.samples.push({totalWeight:0,weight:0,quantity:0})}},{key:"removeASample",value:function(){return this.samples.length<2?(this.toastService.warning(this.translate.instant("LIFE-RATIO.ADD_MIN")),!1):this.samples[this.samples.length-1].totalWeight>0?(this.toastService.warning(this.translate.instant("LIFE-RATIO.DEL_ERR")),!1):void this.samples.pop()}},{key:"slideChange",value:function(){console.log("changed")}},{key:"slideNext",value:function(){console.log(this.infoForm.value),this.slides.slideNext()}},{key:"buildForms",value:function(){this.infoForm=this.fb.group({pondInfoGroup:this.fb.group({area:[this.formSaved.area,[s.kI.required,s.kI.min(0)]],deep:[this.formSaved.deep,[s.kI.required,s.kI.min(0)]],quantity:[this.formSaved.quantity,[s.kI.required,s.kI.min(0)]],old:["",[s.kI.required,s.kI.min(0)]]}),sampleGroup:this.fb.group({toolDiameter:[this.formSaved.toolDiameter,[s.kI.required,s.kI.min(0)]],isSample:[!1]}),feedGroup:this.fb.group({feedTotal:["",[s.kI.required,s.kI.min(0)]],feed:["",[s.kI.required,s.kI.min(0)]]})})}},{key:"calculate",value:function(){this.lifeRatioService.setLifeRatioData({area:this.infoForm.value.pondInfoGroup.area,deep:this.infoForm.value.pondInfoGroup.deep,quantity:this.infoForm.value.pondInfoGroup.quantity,toolDiameter:this.infoForm.value.sampleGroup.toolDiameter,getTimes:this.samples.length}),this.samples=this.samples.filter(function(t){return t.totalWeight>0}),this.lifeRatioService.getLifeRatioData(),0==this.samples.length&&this.infoForm.value.feedGroup.feed>0?this.presentConfirmSize():this.presentModal()}},{key:"presentModal",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:A,componentProps:{form:this.infoForm.value,samples:this.samples}});case 2:return t.next=4,t.sent.present();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}))}},{key:"presentWriteSample",value:function(t){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertCtrl.create({header:this.translate.instant("LIFE-RATIO.NET_ID")+(t+1),inputs:[{name:"totalWeight",type:"number",min:0,value:0==this.samples[t].totalWeight?"":this.samples[t].totalWeight,placeholder:this.translate.instant("LIFE-RATIO.NET_KG")+(t+1)},{name:"weight",type:"number",min:0,value:0==this.samples[t].weight?"":this.samples[t].weight,placeholder:this.translate.instant("LIFE-RATIO.KG_SAMPLE")},{name:"quantity",type:"number",min:0,value:0==this.samples[t].quantity?"":this.samples[t].quantity,placeholder:this.translate.instant("LIFE-RATIO.QUANTITY_SAMPLE")}],buttons:[{text:this.translate.instant("LIFE-RATIO.CANCEL"),role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:this.translate.instant("LIFE-RATIO.CONFIRM"),handler:function(e){n.samples[t]=e}}]});case 2:return e.next=4,e.sent.present();case 4:case"end":return e.stop()}},e,this)}))}},{key:"presentConfirmSize",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertCtrl.create({header:this.translate.instant("LIFE-RATIO.HEADER"),subHeader:this.translate.instant("LIFE-RATIO.SUB_HEADER"),inputs:[{name:"size",type:"number",min:0,placeholder:this.translate.instant("LIFE-RATIO.SIZE")}],buttons:[{text:this.translate.instant("LIFE-RATIO.CANCEL"),role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:this.translate.instant("LIFE-RATIO.CONFIRM"),handler:function(t){e.samples[0]={totalWeight:1,weight:1,quantity:t.size}}}]});case 2:return t.next=4,t.sent.present();case 4:case"end":return t.stop()}},t,this)}))}},{key:"showHint",value:function(){this.toastService.success(this.translate.instant("LIFE-RATIO.HINT"))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.Y36(d),p.Y36(s.qu),p.Y36(l.IN),p.Y36(l.SH),p.Y36(l.Br),p.Y36(I.k),p.Y36(m.sK))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-life-ratio"]],viewQuery:function(t,e){var n;(1&t&&p.Gf(q,5),2&t)&&(p.iGM(n=p.CRH())&&(e.slides=n.first))},decls:8,vars:4,consts:[["slot","start"],["text","","defaultHref","tabs/more"],["padding","",3,"formGroup",4,"ngIf"],["padding","",3,"formGroup"],["pager","true",3,"options","ionSlideDidChange"],["slides",""],["formGroupName","pondInfoGroup"],["color","primary","position","stacked"],["type","text","mask","separator","formControlName","area"],["type","text","mask","separator","formControlName","deep"],["type","number","formControlName","quantity"],["type","number","formControlName","old"],[1,"ion-margin-top"],["shape","round",3,"disabled","click"],["slot","end","name","chevron-forward-outline"],[1,"w-100"],["formGroupName","sampleGroup"],["formControlName","isSample"],[4,"ngIf"],["class","ion-align-items-center ion-justify-content-between",4,"ngIf"],["formGroupName","feedGroup"],["position","stacked"],["type","number","formControlName","feed"],["type","number","formControlName","feedTotal"],["shape","round",3,"click"],["type","number","formControlName","toolDiameter"],["slot","end","name","help-circle-outline",3,"click"],[1,"ion-align-items-center","ion-justify-content-between"],[1,"ion-align-items-center"],["color","danger","size","small","fill","clear",3,"disabled","click"],["slot","end","name","remove-circle-outline"],["color","primary","size","small","fill","clear",3,"click"],["slot","end","name","add-circle-outline"],["class","ion-align-items-center",3,"click",4,"ngFor","ngForOf"],[1,"ion-align-items-center",3,"click"],["size","2"],["text-end","",1,"weightAll"],["text-end",""],[1,"quantity"],[1,"weight"],["size","small","fill","clear"],["name","create"]],template:function(t,e){1&t&&(p.TgZ(0,"ion-header"),p.TgZ(1,"ion-toolbar"),p.TgZ(2,"ion-buttons",0),p._UZ(3,"ion-back-button",1),p.qZA(),p.TgZ(4,"ion-title"),p._uU(5),p.ALo(6,"translate"),p.qZA(),p.qZA(),p.qZA(),p.YNc(7,v,69,40,"ion-content",2)),2&t&&(p.xp6(5),p.Oqu(p.lcZ(6,2,"LIFE-RATIO.TITLE")),p.xp6(2),p.Q6J("ngIf",e.formSaved))},directives:[l.Gu,l.sr,l.Sm,l.oU,l.cs,l.wd,a.O5,l.W2,s.JL,s.sg,l.Hr,l.A$,l.q_,s.x0,l.Ie,l.Q$,l.pK,l.j9,s.JJ,s.u,l.as,l.YG,l.gu,l.ho,l.w,l.yh,l.jY,a.sg,l.Nd,l.wI,l.yW],pipes:[m.X$,a.JJ],styles:["[_nghost-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   slide-zoom[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-size:.8em}[_nghost-%COMP%]   .w-100[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .weightAll[_ngcontent-%COMP%]{color:#004d40}[_nghost-%COMP%]   .weight[_ngcontent-%COMP%]{color:#00796b}[_nghost-%COMP%]   .quantity[_ngcontent-%COMP%]{color:#00c853}"]}),e}()}],x=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[a.ez,s.u5,s.UX,l.Pc,r.Bz.forChild(_),m.aw.forChild()]]}),e}()},27887:function(e,i,o){o.d(i,{E:function(){return a}});var a=function(){function e(){t(this,e),this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}return n(e,[{key:"setStart",value:function(t){this.start=t,!0===t&&(this.pending=!0,this.end=!1),this.result=null,this.count++}},{key:"setPending",value:function(t){this.pending=t,!1===t?this.start=!1:this.end=!0}},{key:"setResult",value:function(t){this.result=t,this.pending=!1,this.start=!1,this.end=!0}}]),e}()}}])}();