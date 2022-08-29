!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}(self.webpackChunkFarmext2=self.webpackChunkFarmext2||[]).push([[8810],{8810:function(r,e,n){n.r(e),n.d(e,{scopeCss:function(){return E}});var c="-shadowcsshost",o="-shadowcssslotted",s="-shadowcsscontext",a=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",i=new RegExp("("+c+a,"gim"),u=new RegExp("("+s+a,"gim"),l=new RegExp("("+o+a,"gim"),f=c+"-no-combinator",p=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,v=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,b=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,_=/([{}])/g,y="%BLOCK%",S=function(t,r){var e=O(t),n=0;return e.escapedString.replace(w,function(){var t=arguments.length<=2?void 0:arguments[2],c="",o=arguments.length<=4?void 0:arguments[4],s="";o&&o.startsWith("{"+y)&&(c=e.blocks[n++],o=o.substring(y.length+1),s="{");var a=r({selector:t,content:c});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(a.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(s).concat(a.content).concat(o)})},O=function(t){for(var r=t.split(_),e=[],n=[],c=0,o=[],s=0;s<r.length;s++){var a=r[s];"}"===a&&c--,c>0?o.push(a):(o.length>0&&(n.push(o.join("")),e.push(y),o=[]),e.push(a)),"{"===a&&c++}return o.length>0&&(n.push(o.join("")),e.push(y)),{escapedString:e.join(""),blocks:n}},j=function(t,r,e){return t.replace(r,function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(r[2]){for(var c=r[2].split(","),o=[],s=0;s<c.length;s++){var a=c[s].trim();if(!a)break;o.push(e(f,a,r[3]))}return o.join(",")}return f+r[3]})},A=function(t,r,e){return t+r.replace(c,"")+e},W=function(t,r,e){return r.indexOf(c)>-1?A(t,r,e):t+r+e+", "+r+" "+t+e},k=function t(r,e,n,c,o){return S(r,function(r){var o=r.selector,s=r.content;return"@"!==r.selector[0]?o=function(t,r,e,n){return t.split(",").map(function(t){return n&&t.indexOf("."+n)>-1?t.trim():function(t,r){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(r).test(t)}(t,r)?function(t,r,e){for(var n,c="."+(r=r.replace(/\[is=([^\]]*)\]/g,function(t){return arguments.length<=1?void 0:arguments[1]})),o=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(f)>-1)n=function(t,r,e){if(g.lastIndex=0,g.test(t)){var n=".".concat(e);return t.replace(p,function(t,r){return r.replace(/([^:]*)(:*)(.*)/,function(t,r,e,c){return r+n+e+c})}).replace(g,n+" ")}return r+" "+t}(t,r,e);else{var o=t.replace(g,"");if(o.length>0){var s=o.match(/([^:]*)(:*)(.*)/);s&&(n=s[1]+c+s[2]+s[3])}}return n},s=function(t){var r=[],e=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,function(t,n){var c="__ph-".concat(e,"__");return r.push(n),e++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(t,n,c){var o="__ph-".concat(e,"__");return r.push(c),e++,n+o}),placeholders:r}}(t),a="",i=0,u=/( |>|\+|~(?!=))\s*/g,l=!((t=s.content).indexOf(f)>-1);null!==(n=u.exec(t));){var h=n[1],d=t.slice(i,n.index).trim();l=l||d.indexOf(f)>-1,a+="".concat(l?o(d):d," ").concat(h," "),i=u.lastIndex}var m=t.substring(i);return a+=(l=l||m.indexOf(f)>-1)?o(m):m,function(t,r){return r.replace(/__ph-(\d+)__/g,function(r,e){return t[+e]})}(s.placeholders,a)}(t,r,e).trim():t.trim()}).join(", ")}(r.selector,e,n,c):(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document"))&&(s=t(r.content,e,n,c)),{selector:o.replace(/\s{2,}/g," ").trim(),content:s}})},E=function(r,e,n){var a=e+"-h",p=e+"-s",g=function(t){return t.match(b)||[]}(r);r=function(t){return t.replace(x,"")}(r);var w=[];if(n){var _=function(t){var r="/*!@___".concat(w.length,"___*/");return w.push({placeholder:r,comment:"/*!@".concat(t.selector,"*/")}),t.selector=r+t.selector,t};r=S(r,function(t){return"@"!==t.selector[0]?_(t):((t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(t.content=S(t.content,_)),t)})}var y=function(t,r,e,n,a){var p=function(t,r){var e="."+r+" > ",n=[];return t=t.replace(l,function(){for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];if(r[2]){for(var o=r[2].trim(),s=e+o+r[3],a="",i=r[4]-1;i>=0;i--){var u=r[5][i];if("}"===u||","===u)break;a=u+a}var l=a+s,p="".concat(a.trimRight()).concat(s.trim());return l.trim()!==p.trim()&&n.push({orgSelector:l,updatedSelector:"".concat(p,", ").concat(l)}),s}return f+r[3]}),{selectors:n,cssText:t}}(t=function(t){return j(t,u,W)}(t=function(t){return j(t,i,A)}(t=function(t){return t.replace(v,s).replace(d,c).replace(m,o)}(t))),n);return t=function(t){return h.reduce(function(t,r){return t.replace(r," ")},t)}(t=p.cssText),r&&(t=k(t,r,e,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(e))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:p.selectors}}(r,e,a,p);return r=[y.cssText].concat(t(g)).join("\n"),n&&w.forEach(function(t){var e=t.placeholder,n=t.comment;r=r.replace(e,n)}),y.slottedSelectors.forEach(function(t){r=r.replace(t.orgSelector,t.updatedSelector)}),r}}}])}();