(function(e){function t(t){for(var r,n,l=t[0],c=t[1],s=t[2],u=0,d=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o={app:0},i=[];function l(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5ce4e39a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"ab16d5b2"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var s=i[l],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){s=d[l],u=s.getAttribute("data-href");if(u===r||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],p.parentNode.removeChild(p),a(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=l(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{staticStyle:{"background-color":"#e7e4d6"},attrs:{app:""}},[r("p",{staticClass:"mt-4 mx-auto"},[e._v(" Sleep: "),r("v-btn",[e._v(e._s(e.timeTrigger1))]),e._v(" Wake Up: "),r("v-btn",[e._v(e._s(e.timeTrigger2))])],1)]),r("v-main",{staticClass:"mb-15"},[r("router-view",{attrs:{username:e.uname,sleepdata:e.sleepData},on:{loggedIn:function(t){return e.getData()}}})],1),"Login"!=e.$route.name?r("v-footer",{staticStyle:{"background-color":"#e7e4d6"},attrs:{fixed:!0,elevation:"3"}},[r("v-btn",{staticClass:"white rounded-circle ml-auto",attrs:{to:"Home"==e.$route.name?"/about":"/",elevation:"4",fab:"",outlined:""}},[r("img",{staticStyle:{width:"4%"},attrs:{src:a("cf05"),alt:""}})])],1):e._e()],1)},o=[],i=a("1da1"),l=(a("96cf"),a("99af"),a("b0c0"),a("a9e3"),a("ac1f"),a("1276"),a("bc3a")),c=a.n(l),s={name:"App",data:function(){return{sleepData:[],uname:"",serverAddress:"",timeTrigger1:"",timeTrigger2:""}},methods:{getData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c()({url:"".concat(e.serverAddress,"/sleepdata/").concat(localStorage.getItem("user")),method:"GET"});case 2:a=t.sent,console.log(a.data),e.sleepData=a.data;case 5:case"end":return t.stop()}}),t)})))()},checkForLogin:function(){var e=localStorage.getItem("user");return!!e||(this.$router.push({path:"/login"}),!1)},getUser:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=localStorage.getItem("user"),t.next=3,c()({url:"".concat(e.serverAddress,"/user/").concat(a),method:"GET"});case 3:r=t.sent,e.uname=r.data.name,console.log(r);case 6:case"end":return t.stop()}}),t)})))()},scheduleTimer:function(e){var t=this,a=Number(e.split(":")[0]),r=Number(e.split(":")[1]),n=new Date;n.setHours(Number(this.timeTrigger2.split(":")[0]));var o=new Date;o.setHours(a,r);var i=new Date,l=24-i.getHours()+n.getHours();o.getTime()<i.getTime()&&o.setHours(o.getHours()+24);var c=o.getTime()-i.getTime();console.log(c),setTimeout((function(){t.callNotify(),setTimeout((function(){t.callNotify()}),60*l*60*1e3)}),c)},callNotify:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c()({url:"".concat("","/notify"),method:"POST","Content-Type":"application/json",data:{message:"This is your daily sleeptracker reminder"}});case 2:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;this.checkForLogin()&&(this.getData(),this.getUser(),setTimeout((function(){var t=e.sleepData[e.sleepData.length-1].sleep,a=e.sleepData[e.sleepData.length-1].wakeup;e.timeTrigger1=t,e.timeTrigger2=a,e.scheduleTimer(e.timeTrigger1)}),300))}},u=s,d=a("2877"),p=a("6544"),f=a.n(p),m=a("7496"),g=a("40dc"),v=a("8336"),h=a("553a"),b=a("f6c4"),w=Object(d["a"])(u,n,o,!1,null,null,null),k=w.exports;f()(w,{VApp:m["a"],VAppBar:g["a"],VBtn:v["a"],VFooter:h["a"],VMain:b["a"]});var x=a("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7"),a("3ca3"),a("ddb0");var y=a("8c4f"),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("div",{staticClass:"mx-auto mt-5 text-center d-flex justify-center"},[0!=e.sleepdata.length?a("apexchart",{attrs:{width:"330",type:"area",options:e.chartOptions,series:e.series}}):e._e()],1)]),a("v-row",{staticClass:"d-flex justify-center mx-auto ml-15"},[a("v-col",[a("v-text-field",{attrs:{label:"Wake Up"},model:{value:e.dialogCreateWakeup,callback:function(t){e.dialogCreateWakeup=t},expression:"dialogCreateWakeup"}}),a("v-text-field",{attrs:{label:"Sleep"},model:{value:e.dialogCreateSleep,callback:function(t){e.dialogCreateSleep=t},expression:"dialogCreateSleep"}}),a("v-text-field",{attrs:{label:"Date"},model:{value:e.dialogCreateDate,callback:function(t){e.dialogCreateDate=t},expression:"dialogCreateDate"}})],1),a("v-col",[a("v-btn",{staticClass:"white--text mt-10",staticStyle:{"background-color":"#96909a"},attrs:{fab:""},on:{click:function(t){return e.createTime()}}},[a("v-icon",[e._v(" mdi-file-plus ")])],1)],1)],1),a("v-row",{staticClass:"d-flex justify-center"},[a("v-col",{staticClass:"mb-10"},[a("v-data-table",{staticClass:"mt-4 mx-15",attrs:{items:e.sleepdata,width:"330","item-key":"name",headers:e.headers},scopedSlots:e._u([{key:"item.del",fn:function(t){var r=t.item;return[a("v-icon",{on:{click:function(t){return e.deleteSleep(r)}}},[e._v("mdi-delete")])]}},{key:"item.edit",fn:function(t){var r=t.item;return[a("v-icon",{on:{click:function(t){return e.editSleep(r)}}},[e._v("mdi-pencil")])]}}])})],1)],1),e.dialogEdit?a("v-row",{staticClass:"d-flex justify-center mx-auto ml-15"},[a("v-col",{attrs:{id:"editDialogFrame"}},[a("v-text-field",{attrs:{label:"Wake Up"},model:{value:e.dialogEditWakeup,callback:function(t){e.dialogEditWakeup=t},expression:"dialogEditWakeup"}}),a("v-text-field",{attrs:{label:"Sleep"},model:{value:e.dialogEditSleep,callback:function(t){e.dialogEditSleep=t},expression:"dialogEditSleep"}})],1),a("v-col",[a("v-btn",{staticClass:"white--text mt-10",staticStyle:{"background-color":"#96909a"},attrs:{fab:""},on:{click:function(t){return e.changeTime()}}},[a("v-icon",[e._v(" mdi-content-save ")])],1)],1)],1):e._e()],1)},S=[],C=(a("d81d"),{name:"Home",props:{sleepdata:{type:Array}},methods:{editSleep:function(e){this.editId=e.id,this.dialogEdit=!0,this.dialogEditWakeup=e.wakeup,this.dialogEditSleep=e.sleep,setTimeout((function(){return window.scrollTo(0,document.body.scrollHeight)}),200)},createTime:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c()({url:"".concat("","/time"),method:"POST",ContentType:"application/json",data:{sleep:e.dialogCreateSleep,wakeup:e.dialogCreateWakeup,date:e.dialogCreateDate,userId:localStorage.getItem("user")}});case 2:e.$emit("loggedIn");case 3:case"end":return t.stop()}}),t)})))()},deleteSleep:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,c()({url:"".concat("","/time/").concat(e.id),method:"DELETE"});case 2:t.$emit("loggedIn");case 3:case"end":return a.stop()}}),a)})))()},changeTime:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dialogEdit=!1,t.next=3,c()({url:"".concat("","/time/").concat(e.editId),method:"PATCH",ContentType:"application/json",data:{sleep:e.dialogEditSleep,wakeup:e.dialogEditWakeup}});case 3:e.$emit("loggedIn");case 4:case"end":return t.stop()}}),t)})))()}},computed:{series:function(){return[{name:"wakeup",data:this.sleepdata.map((function(e){return e.wakeup}))},{name:"sleep",data:this.sleepdata.map((function(e){return e.sleep}))}]}},data:function(){return{editId:0,dialogEdit:!1,dialogEditWakeup:"",dialogEditSleep:"",dialogCreateWakeup:"",dialogCreateSleep:"",dialogCreateDate:"",chartOptions:{colors:["#96909A","#E7E4D6"],chart:{id:"vuechart-example",toolbar:{show:!1}},xaxis:{categories:this.sleepdata.map((function(e){return e.date}))}},headers:[{text:"Wake Up",value:"wakeup"},{text:"Sleep",value:"sleep"},{text:"Date",value:"date"},{text:"Del",value:"del"},{text:"Edit",value:"edit"}]}}}),E=C,j=a("62ad"),D=a("8fea"),_=a("132d"),O=a("0fd9"),A=a("8654"),W=Object(d["a"])(E,T,S,!1,null,null,null),I=W.exports;f()(W,{VBtn:v["a"],VCol:j["a"],VDataTable:D["a"],VIcon:_["a"],VRow:O["a"],VTextField:A["a"]}),r["a"].use(y["a"]);var N=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return a.e("about").then(a.bind(null,"a55b"))}}],P=new y["a"]({routes:N}),R=P,H=a("f309");r["a"].use(H["a"]);var V=new H["a"]({}),L=a("1321"),$=a.n(L);r["a"].use($.a),r["a"].component("apexchart",$.a),r["a"].config.productionTip=!1,new r["a"]({router:R,vuetify:V,render:function(e){return e(k)}}).$mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.2bfb89ea.png"}});
//# sourceMappingURL=app.2d0d883d.js.map