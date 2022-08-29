"use strict";(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[8007],{8007:function(t,e,i){i.r(e),i.d(e,{MineralPageModule:function(){return G}});var n=i(38583),o=i(90665),s=i(13619),a=i(47063),l=i(64762),r=i(27887),c=i(15189),u=i(92340),m=i(37716),h=i(38605);let g=(()=>{class t{constructor(t,e){this.storage=t,this.RequestApiService=e,this.PATH=u.h_.SITE_PATH}setMineralData(t){this.storage.set("mineral",t)}getMineralData(){return this.storage.get("mineral")}reqCalculate(t){return this.RequestApiService.postOutSiteNoneToken(this.PATH+"/chemical/chemical-api?a=multisearch",t)}getSearchMolecule(t){return this.RequestApiService.getOutSite(this.PATH+"/chemical/chemical-api?a=searchMolecule&keyword="+t)}getMolecule(t,e){return this.RequestApiService.getOutSite(this.PATH+"/chemical/chemical-api?a=getMolecule&id="+t+"&species_id="+e)}}return t.\u0275fac=function(e){return new(e||t)(m.LFG(h.Ke),m.LFG(c.$))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Z=i(84465),A=i(81780);function d(t,e){1&t&&(m.TgZ(0,"ion-grid",6),m.TgZ(1,"ion-row",7),m._UZ(2,"ion-spinner",8),m.qZA(),m.qZA())}function p(t,e){if(1&t&&(m.TgZ(0,"ion-item",10),m.TgZ(1,"ion-label"),m.TgZ(2,"ion-text",11),m.TgZ(3,"h3"),m._uU(4),m.qZA(),m.qZA(),m.TgZ(5,"p"),m._uU(6),m.ALo(7,"translate"),m.ALo(8,"number"),m.TgZ(9,"small"),m._uU(10,"\u0111/kg"),m.qZA(),m._uU(11),m.ALo(12,"number"),m.qZA(),m.TgZ(13,"p"),m._uU(14),m.ALo(15,"translate"),m.TgZ(16,"ion-text",12),m._uU(17),m.ALo(18,"number"),m.qZA(),m.TgZ(19,"small"),m._uU(20," kg/1000m"),m.TgZ(21,"sup"),m._uU(22,"3"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(23,"p"),m._uU(24),m.ALo(25,"translate"),m.TgZ(26,"ion-text",13),m._uU(27),m.ALo(28,"number"),m.qZA(),m.TgZ(29,"small"),m._uU(30," \u0111/1000m"),m.TgZ(31,"sup"),m._uU(32,"3"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&t){const t=e.$implicit,i=m.oxw(2);m.xp6(4),m.Oqu(t.name),m.xp6(2),m.AsE("",m.lcZ(7,8,"MINERAL.MINERAL_RES.PRICE")," ",m.lcZ(8,10,t.cost)," "),m.xp6(5),m.hij(" (",m.lcZ(12,12,t.purity),"%)"),m.xp6(3),m.hij("",m.lcZ(15,14,"MINERAL.MINERAL_RES.TREATMENT_AMOUNT"),": "),m.xp6(3),m.hij(" ",m.xi3(18,16,100*i.atomSelect[i.atomFocusKey].miss/(t.ratio*t.purity),"0.0-0"),""),m.xp6(7),m.hij("",m.lcZ(25,19,"MINERAL.MINERAL_RES.TREATMENT_COST"),": "),m.xp6(3),m.hij(" ",m.xi3(28,21,i.atomSelect[i.atomFocusKey].miss*t.cost/(t.ratio*t.purity*10),"0.0-0"),",000 ")}}function T(t,e){if(1&t&&(m.TgZ(0,"ion-list"),m.TgZ(1,"ion-list-header"),m.TgZ(2,"ion-label"),m._uU(3),m.ALo(4,"translate"),m.qZA(),m.qZA(),m.YNc(5,p,33,24,"ion-item",9),m.qZA()),2&t){const t=m.oxw();m.xp6(3),m.Oqu(m.lcZ(4,2,"MINERAL.MINERAL_RES.SINGLE_TREAT")),m.xp6(2),m.Q6J("ngForOf",t.chemicalResMix)}}function f(t,e){1&t&&(m.TgZ(0,"ion-list-header"),m.TgZ(1,"ion-label"),m._uU(2),m.ALo(3,"translate"),m.qZA(),m.qZA()),2&t&&(m.xp6(2),m.Oqu(m.lcZ(3,1,"MINERAL.MINERAL_RES.COMBINED_TREAT")))}function q(t,e){if(1&t&&(m.TgZ(0,"ion-item",10),m.TgZ(1,"ion-label"),m.TgZ(2,"ion-text",11),m.TgZ(3,"h3"),m._uU(4),m.qZA(),m.qZA(),m.TgZ(5,"p"),m._uU(6),m.ALo(7,"translate"),m.ALo(8,"number"),m.TgZ(9,"small"),m._uU(10,"\u0111/kg"),m.qZA(),m._uU(11),m.ALo(12,"number"),m.qZA(),m.TgZ(13,"p"),m._uU(14),m.ALo(15,"translate"),m.TgZ(16,"ion-text",12),m._uU(17),m.ALo(18,"number"),m.qZA(),m.TgZ(19,"small"),m._uU(20," kg/1000m"),m.TgZ(21,"sup"),m._uU(22,"3"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(23,"p"),m._uU(24),m.ALo(25,"translate"),m.TgZ(26,"ion-text",13),m._uU(27),m.ALo(28,"number"),m.qZA(),m.TgZ(29,"small"),m._uU(30," \u0111/1000m"),m.TgZ(31,"sup"),m._uU(32,"3"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&t){const t=e.$implicit,i=m.oxw(2);m.xp6(4),m.Oqu(t.name),m.xp6(2),m.AsE("",m.lcZ(7,8,"MINERAL.MINERAL_RES.PRICE")," ",m.lcZ(8,10,t.cost)," "),m.xp6(5),m.hij(" (",m.lcZ(12,12,t.purity),"%)"),m.xp6(3),m.hij("",m.lcZ(15,14,"MINERAL.MINERAL_RES.TREATMENT_AMOUNT"),": "),m.xp6(3),m.hij(" ",m.xi3(18,16,100*i.atomSelect[i.atomFocusKey].miss/(t.ratio*t.purity),"0.0-0"),""),m.xp6(7),m.hij("",m.lcZ(25,19,"MINERAL.MINERAL_RES.TREATMENT_COST"),": "),m.xp6(3),m.hij(" ",m.xi3(28,21,i.atomSelect[i.atomFocusKey].miss*t.cost/(t.ratio*t.purity*10),"0.0-0"),",000 ")}}function E(t,e){if(1&t&&(m.TgZ(0,"ion-list"),m.YNc(1,f,4,3,"ion-list-header",5),m.YNc(2,q,33,24,"ion-item",9),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",t.chemicalResMix.length>0),m.xp6(1),m.Q6J("ngForOf",t.chemicalRes)}}let M=(()=>{class t{constructor(t,e,i,n,o){this.modalCtrl=t,this.navParams=e,this.mineralService=i,this.toastService=n,this.translate=o,this.chemicalRes=[],this.chemicalResMix=[],this.atomOfDemand=[],this.atomFocusKey=0,this.calculatingFlag=new r.E}ngOnInit(){this.info=this.navParams.data.info,this.mineral=this.navParams.data.mineral,this.atomSelect=this.navParams.data.mineralSelect,this.atomSelect.forEach((t,e)=>{this.atomSelect[e].value=this.mineral[t.name]}),this.calculate()}close(){this.modalCtrl.dismiss()}calculate(){let t="";this.navParams.data.mineralSelect.forEach(e=>{t+='{"id":'+e.id+', "mass": '+this.navParams.data.mineral[e.name]+"},"}),this.calculatingFlag.setPending(!0);let e={id_species:this.info.species,salinity:this.info.salinity,atom:"["+t.slice(0,-1)+"]"};this.mineralService.reqCalculate(e).subscribe(t=>{"success"==t.status?(this.chemicalRes=t.data.chemical_single,this.chemicalResMix=t.data.chemical_mix,this.atomOfDemand=t.data.demand,this.processAtomMiss()):this.message=t.error.message[0],this.calculatingFlag.setResult(!0)},()=>{this.toastService.danger(this.translate.instant("ERROR_CONNECT")),this.calculatingFlag.setResult(!1)})}processAtomMiss(){let t=[];this.atomSelect.map(e=>{let i=this.atomOfDemand.find(t=>t.atom_id==e.id);void 0===i?(e.miss=0,e.ratioMiss=0,e.demand=0,t.push(0)):(e.miss=i.ingredient*this.info.salinity-e.value,e.ratioMiss=e.miss/i.ingredient,e.demand=i.ingredient,t.push(e.ratioMiss))});const e=Math.max(...t);this.atomFocusKey=t.indexOf(e)}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(a.IN),m.Y36(a.X1),m.Y36(g),m.Y36(Z.k),m.Y36(A.sK))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-mineral-result"]],decls:12,vars:6,consts:[["mode","ios"],["slot","primary"],[3,"click"],["name","close-outline"],["padding","",4,"ngIf"],[4,"ngIf"],["padding",""],[1,"ion-align-items-center","ion-justify-content-center"],["name","crescent"],["detail","true","text-wrap","",4,"ngFor","ngForOf"],["detail","true","text-wrap",""],["color","primary"],["color","secondary"],["color","danger"]],template:function(t,e){1&t&&(m.TgZ(0,"ion-header",0),m.TgZ(1,"ion-toolbar"),m.TgZ(2,"ion-title"),m._uU(3),m.ALo(4,"translate"),m.qZA(),m.TgZ(5,"ion-buttons",1),m.TgZ(6,"ion-button",2),m.NdJ("click",function(){return e.close()}),m._UZ(7,"ion-icon",3),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(8,"ion-content"),m.YNc(9,d,3,0,"ion-grid",4),m.YNc(10,T,6,4,"ion-list",5),m.YNc(11,E,3,2,"ion-list",5),m.qZA()),2&t&&(m.xp6(3),m.Oqu(m.lcZ(4,4,"MINERAL.MINERAL_RES.TITLE")),m.xp6(6),m.Q6J("ngIf",e.calculatingFlag.pending),m.xp6(1),m.Q6J("ngIf",e.chemicalResMix.length>0),m.xp6(1),m.Q6J("ngIf",e.chemicalRes.length>0))},directives:[a.Gu,a.sr,a.wd,a.Sm,a.YG,a.gu,a.W2,n.O5,a.jY,a.Nd,a.PQ,a.q_,a.yh,a.Q$,n.sg,a.Ie,a.yW],pipes:[A.X$,n.JJ],styles:[""]}),t})();function R(t,e){1&t&&(m.TgZ(0,"ion-grid",14),m.TgZ(1,"ion-row",15),m._UZ(2,"ion-spinner",16),m.qZA(),m.qZA())}function x(t,e){if(1&t&&(m.TgZ(0,"ion-row"),m.TgZ(1,"ion-col",18),m._uU(2),m.qZA(),m.TgZ(3,"ion-col",23),m._uU(4),m.ALo(5,"number"),m.qZA(),m.TgZ(6,"ion-col",21),m._uU(7),m.ALo(8,"number"),m.qZA(),m.TgZ(9,"ion-col",21),m.TgZ(10,"ion-text"),m._uU(11),m.ALo(12,"number"),m.qZA(),m.qZA(),m.qZA()),2&t){const t=e.$implicit,i=m.oxw(2);m.xp6(2),m.AsE("",t.name," (",t.label,")"),m.xp6(2),m.Oqu(m.xi3(5,5,t.value,"0.0-0")),m.xp6(3),m.Oqu(m.xi3(8,8,t.demand*i.info.salinity,"0.0-0")),m.xp6(4),m.hij(" ",m.xi3(12,11,t.ratio*i.chemicalGram+t.value,"0.0-0")," ")}}function _(t,e){if(1&t&&(m.TgZ(0,"ion-grid",17),m.TgZ(1,"ion-row"),m.TgZ(2,"ion-col",18),m.TgZ(3,"ion-text",19),m._uU(4),m.ALo(5,"translate"),m.qZA(),m.qZA(),m.TgZ(6,"ion-col",20),m.TgZ(7,"ion-text",19),m._uU(8),m.ALo(9,"translate"),m.qZA(),m.qZA(),m.TgZ(10,"ion-col",21),m.TgZ(11,"ion-text",19),m._uU(12),m.ALo(13,"translate"),m.qZA(),m.qZA(),m.TgZ(14,"ion-col",21),m.TgZ(15,"ion-text",19),m._uU(16),m.ALo(17,"translate"),m.qZA(),m.qZA(),m.qZA(),m.YNc(18,x,13,14,"ion-row",22),m.qZA()),2&t){const t=m.oxw();m.xp6(4),m.Oqu(m.lcZ(5,5,"MINERAL.MINERAL_RES_CHOICE.MINERAL")),m.xp6(4),m.Oqu(m.lcZ(9,7,"MINERAL.MINERAL_RES_CHOICE.CURRENT")),m.xp6(4),m.Oqu(m.lcZ(13,9,"MINERAL.MINERAL_RES_CHOICE.SUGGESTED")),m.xp6(4),m.Oqu(m.lcZ(17,11,"MINERAL.MINERAL_RES_CHOICE.PREDICTED")),m.xp6(2),m.Q6J("ngForOf",t.atomResult)}}function L(t,e){1&t&&(m.TgZ(0,"div",11),m.TgZ(1,"ion-text",24),m._uU(2),m.ALo(3,"translate"),m.qZA(),m.qZA()),2&t&&(m.xp6(2),m.Oqu(m.lcZ(3,1,"MINERAL.MINERAL_RES_CHOICE.CHEM_WARN")))}let I=(()=>{class t{constructor(t,e,i,n,o){this.modalCtrl=t,this.navParams=e,this.mineralService=i,this.toastService=n,this.translate=o,this.chemicalGram=0,this.chemicalGramReal=0,this.atomOfMol=[],this.atomResult=[],this.atomFocusKey=0,this.calculatingFlag=new r.E}ngOnInit(){this.info=this.navParams.data.info,this.moleculeChoice=this.navParams.data.info.chemicalChoice,this.mineral=this.navParams.data.mineral,this.atomSelect=this.navParams.data.mineralSelect,this.atomSelect.forEach((t,e)=>{this.atomSelect[e].value=this.mineral[t.name]}),this.getMolecule(this.moleculeChoice.name.id)}close(){this.modalCtrl.dismiss()}calculate(){console.log(this.atomResult[this.atomFocusKey]),this.atomResult[this.atomFocusKey].miss<0||0==this.atomResult[this.atomFocusKey].ratio||(this.chemicalGram=this.atomResult[this.atomFocusKey].miss/this.atomResult[this.atomFocusKey].ratio,this.chemicalGramReal=this.chemicalGram*(100/this.moleculeChoice.ratio))}getMolecule(t){this.calculatingFlag.setPending(!0),this.mineralService.getMolecule(t,this.info.species).subscribe(t=>{if("success"==t.status){this.atomOfMol=t.data.atoms,this.atomOfDemand=t.data.demand,console.log(this.atomOfDemand);let e=[];this.atomSelect.forEach(t=>{console.log(t);let i=this.atomOfDemand.find(e=>e.atom_id==t.id);void 0===i?(t.miss=0,t.ratioMiss=0,t.demand=0):(t.miss=i.ingredient*this.info.salinity-t.value,t.ratioMiss=t.miss/i.ingredient,t.demand=i.ingredient);let n=this.atomOfMol.find(e=>e.id==t.id);void 0===n?(t.ratio=0,e.push(0)):(t.ratio=n.ratio,e.push(t.ratioMiss)),this.atomResult.push(t)});const i=Math.max(...e);console.log(i),this.atomFocusKey=e.indexOf(i),console.log(this.atomFocusKey),this.calculate()}else this.toastService.warning(t.error.message[0]);this.calculatingFlag.setResult(!0)},()=>{this.toastService.danger(this.translate.instant("ERROR_CONNECT")),this.calculatingFlag.setResult(!1)})}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(a.IN),m.Y36(a.X1),m.Y36(g),m.Y36(Z.k),m.Y36(A.sK))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-mineral-result-choice"]],decls:69,vars:39,consts:[["mode","ios"],["slot","primary"],[3,"click"],["name","close-outline"],["padding","",4,"ngIf"],["color","tertiary"],["slot","end"],["lines","inset"],["type","number","placeholder","m3",2,"text-align","end",3,"ngModel","ngModelChange"],["class","ion-padding-horizontal",4,"ngIf"],["class","ion-padding",4,"ngIf"],[1,"ion-padding"],[1,"suggest"],["color","dark"],["padding",""],[1,"ion-align-items-center","ion-justify-content-center"],["name","crescent"],[1,"ion-padding-horizontal"],["size","4"],["color","medium tb-title"],["size","2","text-right",""],["size","3","text-right",""],[4,"ngFor","ngForOf"],["size","2","text-right","",1,"weightAll"],["color","danger"]],template:function(t,e){1&t&&(m.TgZ(0,"ion-header",0),m.TgZ(1,"ion-toolbar"),m.TgZ(2,"ion-title"),m._uU(3),m.ALo(4,"translate"),m.qZA(),m.TgZ(5,"ion-buttons",1),m.TgZ(6,"ion-button",2),m.NdJ("click",function(){return e.close()}),m._UZ(7,"ion-icon",3),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(8,"ion-content"),m.YNc(9,R,3,0,"ion-grid",4),m.TgZ(10,"ion-list"),m.TgZ(11,"ion-list-header"),m.TgZ(12,"ion-label"),m._uU(13),m.ALo(14,"translate"),m.qZA(),m.qZA(),m.TgZ(15,"ion-item"),m.TgZ(16,"ion-label",5),m._uU(17),m.qZA(),m.TgZ(18,"span",6),m._uU(19),m.TgZ(20,"small"),m._uU(21,"%"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(22,"ion-item"),m.TgZ(23,"ion-label"),m._uU(24),m.ALo(25,"translate"),m.qZA(),m.TgZ(26,"span",6),m._uU(27),m.TgZ(28,"small"),m._uU(29,"\u2030"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(30,"ion-item"),m.TgZ(31,"ion-label"),m._uU(32),m.ALo(33,"translate"),m.qZA(),m.TgZ(34,"span",6),m._uU(35),m.ALo(36,"number"),m.TgZ(37,"small"),m._uU(38,"kg/1.000m"),m.TgZ(39,"sup"),m._uU(40,"3"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(41,"ion-item",7),m.TgZ(42,"ion-label"),m._uU(43),m.ALo(44,"translate"),m.qZA(),m.TgZ(45,"ion-input",8),m.NdJ("ngModelChange",function(t){return e.volume=t}),m.qZA(),m.qZA(),m.TgZ(46,"ion-item"),m.TgZ(47,"ion-label"),m._uU(48),m.ALo(49,"translate"),m.qZA(),m.TgZ(50,"span",6),m._uU(51),m.ALo(52,"number"),m.TgZ(53,"small"),m._uU(54,"kg"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(55,"ion-list"),m.TgZ(56,"ion-list-header"),m.TgZ(57,"ion-label"),m._uU(58),m.ALo(59,"translate"),m.qZA(),m.qZA(),m.qZA(),m.YNc(60,_,19,13,"ion-grid",9),m.YNc(61,L,4,3,"div",10),m.TgZ(62,"div",11),m.TgZ(63,"div",12),m.TgZ(64,"p"),m._uU(65,"L\u01b0u \xfd: "),m.TgZ(66,"ion-text",13),m._uU(67),m.ALo(68,"translate"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&t&&(m.xp6(3),m.Oqu(m.lcZ(4,17,"MINERAL.MINERAL_RES_CHOICE.TITLE")),m.xp6(6),m.Q6J("ngIf",e.calculatingFlag.pending),m.xp6(4),m.Oqu(m.lcZ(14,19,"MINERAL.MINERAL_RES_CHOICE.TREATMENT")),m.xp6(4),m.Oqu(e.moleculeChoice.name.formula),m.xp6(2),m.hij("",e.moleculeChoice.ratio," "),m.xp6(5),m.Oqu(m.lcZ(25,21,"MINERAL.MINERAL_RES_CHOICE.SALINITY")),m.xp6(3),m.hij("",e.info.salinity," "),m.xp6(5),m.Oqu(m.lcZ(33,23,"MINERAL.MINERAL_RES_CHOICE.TREATMENT_DOSAGE")),m.xp6(3),m.hij("",m.xi3(36,25,e.chemicalGramReal,"0.0-0")," "),m.xp6(8),m.Oqu(m.lcZ(44,28,"MINERAL.MINERAL_RES_CHOICE.POND_WATER")),m.xp6(2),m.Q6J("ngModel",e.volume),m.xp6(3),m.Oqu(m.lcZ(49,30,"MINERAL.MINERAL_RES_CHOICE.TREATMENT_AMOUNT")),m.xp6(3),m.hij("",m.xi3(52,32,e.chemicalGramReal*e.volume/1e3,"0.0-0")," "),m.xp6(7),m.hij("",m.lcZ(59,35,"MINERAL.MINERAL_RES_CHOICE.AFTER")," (mg/l)"),m.xp6(2),m.Q6J("ngIf",e.atomResult.length>0),m.xp6(1),m.Q6J("ngIf",0==e.chemicalGram),m.xp6(6),m.Oqu(m.lcZ(68,37,"MINERAL.MINERAL_RES_CHOICE.NOTE")))},directives:[a.Gu,a.sr,a.wd,a.Sm,a.YG,a.gu,a.W2,n.O5,a.q_,a.yh,a.Q$,a.Ie,a.pK,a.as,o.JJ,o.On,a.yW,a.jY,a.Nd,a.PQ,a.wI,n.sg],pipes:[A.X$,n.JJ],styles:["[_nghost-%COMP%]   .tb-title[_ngcontent-%COMP%]{font-size:.8em}"]}),t})();var N=i(51739),C=i(86804);function S(t,e){if(1&t&&(m.TgZ(0,"div",23),m._uU(1),m.qZA()),2&t){const t=m.oxw(3);m.xp6(1),m.hij(" ",t.chemicalSearchMes," ")}}function O(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"ion-item"),m.TgZ(1,"ion-label",11),m._uU(2),m.ALo(3,"translate"),m.qZA(),m.TgZ(4,"ionic-selectable",21),m.NdJ("onSearch",function(e){return m.CHM(t),m.oxw(2).searchMolecule(e)})("onChange",function(e){return m.CHM(t),m.oxw(2).moleculeChange(e)}),m.YNc(5,S,2,1,"ng-template",22),m.qZA(),m.qZA()}if(2&t){const t=m.oxw(2);m.xp6(2),m.Oqu(m.lcZ(3,4,"MINERAL.CHOOSE_CHEM")),m.xp6(2),m.Q6J("shouldFocusSearchbar",!0)("items",t.molecules)("canSearch",!0)}}function b(t,e){1&t&&(m.TgZ(0,"ion-item"),m.TgZ(1,"ion-label",11),m._uU(2),m.ALo(3,"translate"),m.qZA(),m._UZ(4,"ion-input",24),m.qZA()),2&t&&(m.xp6(2),m.hij("",m.lcZ(3,1,"MINERAL.COMPOSITION")," %"))}function U(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"ion-item"),m.TgZ(1,"ion-icon",25),m.NdJ("click",function(){const e=m.CHM(t),i=e.index,n=e.$implicit;return m.oxw(2).removeParameter(i,n)}),m.qZA(),m.TgZ(2,"ion-label",26),m._uU(3),m.qZA(),m._UZ(4,"ion-input",27),m.qZA()}if(2&t){const t=e.$implicit;m.xp6(3),m.Oqu(t.name),m.xp6(1),m.Q6J("formControlName",t.name)}}function v(t,e){1&t&&(m.TgZ(0,"span"),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.Oqu(m.lcZ(2,1,"MINERAL.CALC")))}function y(t,e){1&t&&(m.TgZ(0,"span"),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.Oqu(m.lcZ(2,1,"MINERAL.GET_CHEM")))}const F=function(){return{standalone:!0}};function w(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"ion-content",3),m.TgZ(1,"ion-list"),m.TgZ(2,"ion-item"),m.TgZ(3,"ion-label",4),m._uU(4),m.ALo(5,"translate"),m.qZA(),m.TgZ(6,"ion-select",5),m.TgZ(7,"ion-select-option",6),m._uU(8,"Th\u1ebb ch\xe2n tr\u1eafng"),m.qZA(),m.TgZ(9,"ion-select-option",7),m._uU(10,"T\xf4m s\xfa"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(11,"ion-item"),m.TgZ(12,"ion-label",4),m._uU(13),m.ALo(14,"translate"),m.qZA(),m._UZ(15,"ion-input",8),m.qZA(),m.qZA(),m.TgZ(16,"ion-list",9),m.TgZ(17,"ion-item",10),m.TgZ(18,"ion-label",11),m._uU(19),m.ALo(20,"translate"),m.qZA(),m.TgZ(21,"ion-toggle",12),m.NdJ("ngModelChange",function(e){return m.CHM(t),m.oxw().isChoise=e}),m.qZA(),m.qZA(),m.YNc(22,O,6,6,"ion-item",13),m.YNc(23,b,5,3,"ion-item",13),m.qZA(),m.TgZ(24,"ion-list"),m.TgZ(25,"ion-list-header",14),m.TgZ(26,"ion-label"),m._uU(27),m.ALo(28,"translate"),m.qZA(),m.TgZ(29,"ion-button",15),m.NdJ("click",function(){return m.CHM(t),m.oxw().presentAlertParameter()}),m._uU(30),m.ALo(31,"translate"),m._UZ(32,"ion-icon",16),m.qZA(),m.qZA(),m.TgZ(33,"ion-item-group",17),m.YNc(34,U,5,2,"ion-item",18),m.qZA(),m.qZA(),m.TgZ(35,"div",19),m.TgZ(36,"ion-button",20),m.NdJ("click",function(){return m.CHM(t),m.oxw().calculate()}),m.YNc(37,v,3,3,"span",13),m.YNc(38,y,3,3,"span",13),m.qZA(),m.qZA(),m.qZA()}if(2&t){const t=m.oxw();m.Q6J("formGroup",t.infoForm),m.xp6(4),m.Oqu(m.lcZ(5,15,"MINERAL.SPECIES")),m.xp6(9),m.hij("",m.lcZ(14,17,"MINERAL.SALINITY")," (\u2030)"),m.xp6(6),m.Oqu(m.lcZ(20,19,"MINERAL.CHEMICAL")),m.xp6(2),m.Q6J("ngModel",t.isChoise)("ngModelOptions",m.DdM(25,F)),m.xp6(1),m.Q6J("ngIf",t.isChoise),m.xp6(1),m.Q6J("ngIf",t.isChoise),m.xp6(4),m.Oqu(m.lcZ(28,21,"MINERAL.POND_STATUS")),m.xp6(3),m.hij(" ",m.lcZ(31,23,"MINERAL.ADD")," "),m.xp6(4),m.Q6J("ngForOf",t.listMineralSelected),m.xp6(2),m.Q6J("color",t.isChoise?"tertiary":"success")("disabled",!t.infoForm.controls.mineralList.valid||0==t.listMineralSelected.length),m.xp6(1),m.Q6J("ngIf",t.isChoise),m.xp6(1),m.Q6J("ngIf",!t.isChoise)}}let P=(()=>{class t{constructor(t,e,i,n,o,s){this.fb=t,this.modalCtrl=e,this.alertCtrl=i,this.NavControllor=n,this.mineralService=o,this.translate=s,this.isChoise=!1,this.listMineral=[{name:"Ca",id:1,label:this.translate.instant("MINERAL.Ca")},{name:"Mg",id:2,label:this.translate.instant("MINERAL.Mg")},{name:"K",id:3,label:this.translate.instant("MINERAL.K")},{name:"Na",id:4,label:this.translate.instant("MINERAL.Na")},{name:"P",id:5,label:this.translate.instant("MINERAL.P")}],this.listMineralSelected=[],this.formGroupMineral={}}ngOnInit(){this.mineralService.getMineralData().then(t=>{this.formSaved=t||{species:"1",salinity:15},this.buildForms()},t=>console.error(this.translate.instant("MINERAL.GET_ERROR"),t))}buildForms(){this.infoForm=this.fb.group({species:[this.formSaved.species,[o.kI.required]],salinity:[this.formSaved.salinity,[o.kI.required,o.kI.min(0)]],mineralList:o.cw,chemicalChoice:this.fb.group({name:[""],ratio:["",[o.kI.min(0),o.kI.max(100)]]})})}presentAlertParameter(){return(0,l.mG)(this,void 0,void 0,function*(){let t=[];this.listMineral.forEach(e=>{t.push({name:e.name,label:e.name,type:"radio",value:e.id})}),yield(yield this.alertCtrl.create({header:this.translate.instant("MINERAL.PARAM"),inputs:t,buttons:[{text:this.translate.instant("MINERAL.CANCEL"),role:"cancel",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:this.translate.instant("MINERAL.CONFIRM"),handler:t=>{if(!t)return!1;let e=this.listMineral.findIndex(e=>e.id===t);this.formGroupMineral[this.listMineral[e].name]=new o.NI("",o.kI.required),this.infoForm.controls.mineralList=new o.cw(this.formGroupMineral),this.listMineralSelected.push(this.listMineral[e]),this.listMineral.splice(e,1)}}]})).present()})}removeParameter(t,e){delete this.formGroupMineral[e.name],this.infoForm.controls.mineralList=new o.cw(this.formGroupMineral),this.listMineralSelected.splice(t,1),this.listMineral.push(e)}calculate(){this.mineralService.setMineralData({species:this.infoForm.value.species,salinity:this.infoForm.value.salinity}),this.presentModalResult()}presentModalResult(){return(0,l.mG)(this,void 0,void 0,function*(){return this.isChoise?yield(yield this.modalCtrl.create({component:I,componentProps:{info:this.infoForm.value,mineral:this.infoForm.controls.mineralList.value,mineralSelect:this.listMineralSelected}})).present():yield(yield this.modalCtrl.create({component:M,componentProps:{info:this.infoForm.value,mineral:this.infoForm.controls.mineralList.value,mineralSelect:this.listMineralSelected}})).present()})}onChoice(){this.isChoise=!this.isChoise,this.infoForm.controls.isChoise.setValue(this.isChoise)}moleculeChange(t){console.log("port:",t.value)}filterMolecules(t,e){if(t)return t.filter(t=>-1!==t.name.toLowerCase().indexOf(e)||-1!==t.id.toString().toLowerCase().indexOf(e)||-1!==t.formula.toString().toLowerCase().indexOf(e))}searchMolecule(t){console.log(t.text),this.chemicalSearchMes=this.translate.instant("MINERAL.SEARCH_MES");let e=t.text.trim().toLowerCase();if(t.component.startSearch(),this.moleculesSubscription&&this.moleculesSubscription.unsubscribe(),!e)return this.moleculesSubscription&&this.moleculesSubscription.unsubscribe(),t.component.items=[],void t.component.endSearch();this.moleculesSubscription=this.mineralService.getSearchMolecule(e).subscribe(i=>{this.moleculesSubscription.closed||(t.component.items=this.filterMolecules(i.data,e),void 0===t.component.items&&(this.chemicalSearchMes=this.translate.instant("MINERAL.SEARCH_NULL")),t.component.endSearch())})}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(o.qu),m.Y36(a.IN),m.Y36(a.Br),m.Y36(a.SH),m.Y36(g),m.Y36(A.sK))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-mineral"]],decls:8,vars:4,consts:[["slot","start"],["text","","defaultHref","tabs/more"],["padding","",3,"formGroup",4,"ngIf"],["padding","",3,"formGroup"],["color","medium","position","fixed"],["formControlName","species","slot","end"],["value","1","selected",""],["value","2"],["type","number","formControlName","salinity",2,"text-align","end"],["formGroupName","chemicalChoice"],["lines","none"],["color","medium"],["slot","end",3,"ngModel","ngModelOptions","ngModelChange"],[4,"ngIf"],[1,"ion-align-items-center","ion-justify-content-between"],["color","primary","size","small","fill","clear",3,"click"],["slot","end","name","add-circle-outline"],["formGroupName","mineralList"],[4,"ngFor","ngForOf"],["margin-top","",1,"ion-text-center"],["shape","round",3,"color","disabled","click"],["formControlName","name","itemValueField","id","itemTextField","formula",3,"shouldFocusSearchbar","items","canSearch","onSearch","onChange"],["ionicSelectableSearchFailTemplate",""],[1,"ion-padding"],["type","number","formControlName","ratio",2,"text-align","end"],["name","remove-circle","slot","start","color","danger",3,"click"],["position","fixed"],["type","number","placeholder","mg/l",3,"formControlName"]],template:function(t,e){1&t&&(m.TgZ(0,"ion-header"),m.TgZ(1,"ion-toolbar"),m.TgZ(2,"ion-buttons",0),m._UZ(3,"ion-back-button",1),m.qZA(),m.TgZ(4,"ion-title"),m._uU(5),m.ALo(6,"translate"),m.qZA(),m.qZA(),m.qZA(),m.YNc(7,w,39,26,"ion-content",2)),2&t&&(m.xp6(5),m.Oqu(m.lcZ(6,2,"MINERAL.TITLE")),m.xp6(2),m.Q6J("ngIf",e.infoForm))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,n.O5,a.W2,o.JL,o.sg,a.q_,a.Ie,a.Q$,a.t9,a.QI,o.JJ,o.u,a.n0,a.pK,a.as,o.x0,a.ho,a.w,o.On,a.yh,a.YG,a.gu,a.Ub,n.sg,N.R,C.i],pipes:[A.X$],styles:[""]}),t})();var Y=i(93319);const J=[{path:"",component:P}];let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[n.ez,o.u5,o.UX,a.Pc,Y.UV,s.Bz.forChild(J),A.aw.forChild()]]}),t})()},27887:function(t,e,i){i.d(e,{E:function(){return n}});class n{constructor(){this.start=null,this.end=null,this.pending=null,this.result=null,this.count=0}setStart(t){this.start=t,!0===t&&(this.pending=!0,this.end=!1),this.result=null,this.count++}setPending(t){this.pending=t,!1===t?this.start=!1:this.end=!0}setResult(t){this.result=t,this.pending=!1,this.start=!1,this.end=!0}}}}]);