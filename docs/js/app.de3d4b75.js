(function(t){function e(e){for(var a,i,l=e[0],o=e[1],c=e[2],p=0,v=[];p<l.length;p++)i=l[p],r[i]&&v.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,l=1;l<n.length;l++){var o=n[l];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",[n("v-toolbar-title",{staticClass:"headline"},[t._v("\n            Les réseaux entre les éléments de l'Encyclopédie\n        ")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{flat:""}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"material-icons"},[t._v("home")])])],1)],1)],1),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{dark:"",height:"auto"}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("v-card-actions",{staticClass:"grey darken-3 justify-center my-5 text-xs-center"},[t._v("\n                Tokyo Digital History. / Société d’étude sur l’Encyclopédie et les Lumières.\n            ")])],1)],1)],1)},i=[],l=n("2877"),o=n("6544"),c=n.n(o),u=n("7496"),p=n("8336"),v=n("b0af"),f=n("99d9"),d=n("549c"),h=n("553a"),b=n("9910"),m=n("71d9"),_=n("2a7f"),y={},V=Object(l["a"])(y,s,i,!1,null,null,null),C=V.exports;c()(V,{VApp:u["a"],VBtn:p["a"],VCard:v["a"],VCardActions:f["a"],VContent:d["a"],VFooter:h["a"],VSpacer:b["a"],VToolbar:m["a"],VToolbarItems:_["a"],VToolbarTitle:_["b"]});var g=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("v-container",[n("v-list",{staticClass:"elevation-1",attrs:{"two-line":""}},[t._l(t.items,function(e){return[n("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:function(n){return t.move(e.title)}}},[n("v-list-tile-avatar",[n("v-icon",[t._v("person")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1),e.selected?n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""}},[n("v-icon",[t._v("check_box")])],1)],1):t._e()],1)]})],2)],1)],1)],1)},x=[],w=n("bc3a"),j=n.n(w),T={data:function(){return{items:[]}},watch:{$route(t,e){this.search()}},created:function(){this.list()},methods:{move(t){this.$router.push({path:"check",query:{q:t}})},list(){j.a.get("https://api.myjson.com/bins/uo2mf").then(t=>{let e=this.items,n=t.data;for(let a in n){let t=n[a],r=t.viaf,s=!1;for(let e in r)if(r[e].selected){s=!0;break}let i={title:a,selected:s};e.push(i)}}).catch(t=>{console.log(t)})}}},O=T,S=n("a523"),L=n("132d"),$=n("8860"),A=n("ba95"),P=n("40fe"),E=n("c954"),M=n("5d23"),q=Object(l["a"])(O,k,x,!1,null,null,null),B=q.exports;c()(q,{VApp:u["a"],VBtn:p["a"],VContainer:S["a"],VContent:d["a"],VIcon:L["a"],VList:$["a"],VListTile:A["a"],VListTileAction:P["a"],VListTileAvatar:E["a"],VListTileContent:M["a"],VListTileTitle:M["b"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("v-container",[n("h1",{staticClass:"mb-4"},[t._v(t._s(t.person))]),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"hide-actions":"","hide-headers":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("th",[t._v(t._s(e.item.key))]),n("td",{staticClass:"py-2"},[t._v(t._s(e.item.value))])]}}])}),n("v-card",{staticClass:"mt-5 px-4 py-4"},[n("h2",{staticClass:"mb-4"},[t._v("Choose appropriate names (Multiple answers allowed)")]),t._l(t.list,function(e){return[n("hr",{staticClass:"my-4"}),n("v-checkbox",{key:e.title,attrs:{label:e.title,value:e.title},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._l(e.references,function(e,a){return[n("span",[t._v("["+t._s(a+1)+"] "),n("a",{attrs:{href:e}},[t._v(t._s(e))])]),n("br")]})]})],2),n("v-btn",{staticClass:"my-5",attrs:{color:"primary"},on:{click:t.save}},[t._v("Save")])],1)],1)],1)},I=[];let J="https://api.myjson.com/bins/uo2mf";var F={data:function(){return{items:[],headers:[],list:[],person:"",selected:[],result:{},selected:[]}},created:function(){let t=Object.assign({},this.$route.query);this.person=t.q,this.list2()},methods:{save(){let t=this.selected,e=this.result,n=e[this.person].viaf;for(let a in n){let e=n[a],r=!1;-1!=t.indexOf(a)&&(r=!0),e.selected=r}j.a.put(J,e).then(t=>{console.log("saved.")}).catch(t=>{console.log(t)})},list2(){j.a.get(J).then(t=>{let e=this.items,n=this.headers,a=this.list,r=[];this.selected=r;let s=t.data;this.result=s,s=s[this.person];for(let i in s.enccre){let t={key:i,value:s.enccre[i]};n.push(i),e.push(t)}for(let i in s.viaf){let t=s.viaf[i],e={title:i,references:t.references};a.push(e),t.selected&&r.push(i)}}).catch(t=>{console.log(t)})}}},H=F,z=n("ac7c"),G=n("8fea"),K=Object(l["a"])(H,D,I,!1,null,null,null),N=K.exports;c()(K,{VApp:u["a"],VBtn:p["a"],VCard:v["a"],VCheckbox:z["a"],VContainer:S["a"],VContent:d["a"],VDataTable:G["a"]}),a["a"].use(g["a"]);var Q=new g["a"]({routes:[{path:"/",name:"index",component:B},{path:"/check",name:"check",component:N}]});a["a"].config.productionTip=!1,new a["a"]({router:Q,render:function(t){return t(C)}}).$mount("#app")}});
//# sourceMappingURL=app.de3d4b75.js.map