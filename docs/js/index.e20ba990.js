(function(t){function n(n){for(var r,c,i=n[0],u=n[1],s=n[2],f=0,l=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(n);while(l.length)l.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,i=1;i<e.length;i++){var u=e[i];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},a={index:0},o=[];function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/cats/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var d=u;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("85ec"),a=e.n(r);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("transition-group",{staticClass:"cats",attrs:{tag:"div",name:"cats"}},t._l(t.cats,(function(t){return e("cat",{key:t.id,attrs:{char:t.char}})})),1),e("div",{staticClass:"random",attrs:{id:"touch"}})],1)},o=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"cat"},[t._v(t._s(t.char))])},i=[],u={name:"Cat",props:{char:String}},s=u,d=(e("9bbd"),e("2877")),f=Object(d["a"])(s,c,i,!1,null,null,null),l=f.exports,p={name:"App",components:{Cat:l},data:function(){return{cats:[],shift:!1}},methods:{addCat:function(t,n){this.cats.length>20&&this.cats.shift(),this.cats.push({id:Date.now(),char:String.fromCharCode(t+n)})},addRandomCat:function(){var t=Math.floor(21*Math.random())+65,n=32*Math.round(Math.random());this.addCat(t,n)}},created:function(){var t=this;document.addEventListener("keydown",(function(n){var e=n.keyCode;16===e&&(t.shift=!0),64<e&&e<86?t.addCat(e,t.shift?0:32):32==e&&t.addRandomCat()})),document.addEventListener("keyup",(function(n){var e=n.keyCode;16===e&&(t.shift=!1)}))},mounted:function(){var t=this;document.getElementById("touch").addEventListener("click",(function(){t.addRandomCat()}))}},h=p,v=(e("034f"),Object(d["a"])(h,a,o,!1,null,null,null)),b=v.exports;e("db39");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,n,e){},"9bbd":function(t,n,e){"use strict";var r=e("dd2b"),a=e.n(r);a.a},db39:function(t,n,e){},dd2b:function(t,n,e){}});
//# sourceMappingURL=index.e20ba990.js.map