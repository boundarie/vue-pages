(function(){"use strict";var e={7088:function(e,t,n){var o=n(144),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-container",[o("el-header",[o("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[o("el-menu-item",{attrs:{index:"1"}},[e._v("Home")]),o("el-submenu",{attrs:{index:"2"}},[o("template",{slot:"title"},[e._v("Blogs")]),o("el-menu-item",{attrs:{index:"2-1"}},[e._v("Machine Learning")]),o("el-menu-item",{attrs:{index:"2-2"}},[e._v("Probability and Statistics")]),o("el-menu-item",{attrs:{index:"2-3"}},[e._v("tbd.")])],2),o("el-menu-item",{attrs:{index:"3"}},[e._v("Music")])],1),o("div",{staticClass:"line"})],1),o("el-main",[o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:n(5722),width:"200"}}),o("HelloWorld",{attrs:{msg:"Welcome to Cleverctz's Blog!"}}),o("div",{staticClass:"MUSIC"},[o("TestComp",{attrs:{msg:"Welcome to Cleverctz's Blog!"}})],1)],1)])],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v(" Notes/Musics/Thoughts ")]),n("h3",[e._v("Contents")]),n("ul",[n("el-row",[n("el-link",{staticClass:"el-button el-button",attrs:{href:"https://www.zhihu.com/people/ctz-99/posts"}},[e._v("Notes for Machine Learning")]),n("el-link",{staticClass:"el-button el-button",attrs:{herf:"MUSIC"}},[e._v("Highly Recommended Music")]),n("el-link",{staticClass:"el-button el-button",attrs:{herf:"thoughts"}},[e._v("Random Thoughts")]),n("el-link",{staticClass:"el-button el-button",attrs:{href:"http://live.bilibili.com/23746325"}},[e._v("Live")])],1)],1),n("h3",[e._v("Contact the Author")]),n("ul",[e._v(" No Way! ")])])},l=[],s={name:"HelloWorld",props:{msg:String}},c=s,u=n(1001),m=(0,u.Z)(c,i,l,!1,null,"30d72b74",null),d=m.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-header",[n("span",{},[e._v("Music Part")]),n("p",[e._v("Introduction to classic music")])]),n("el-main",[n("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"肖  邦",name:"first"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"type",label:"类别",width:"180"}}),n("el-table-column",{attrs:{prop:"name",label:"曲目",width:"300"}}),n("el-table-column",{attrs:{prop:"artist",label:"演奏者",width:"180"}}),n("el-table-column",{attrs:{prop:"time",label:"时长",width:"100"}}),n("el-table-column",{attrs:{prop:"comments",label:"cleverctz的评价"}})],1)],1),n("el-tab-pane",{attrs:{label:"拉赫玛尼诺夫",name:"second"}},[e._v("tbd.")]),n("el-tab-pane",{attrs:{label:"贝多芬",name:"third"}},[e._v("tbd.")]),n("el-tab-pane",{attrs:{label:"",name:"fourth"}},[e._v("定时任务补偿")])],1)],1)],1)},p=[],v={data(){const e=this.$createElement;return{activeName:"TestComp",tableData:[{type:"钢琴协奏曲",name:"Piano Concerto No.1 in E minor, Op.11",artist:e("el-link",{attrs:{herf:"https://www.bilibili.com/video/BV1CQ4y1i7cz?spm_id_from=333.337.search-card.all.click"}},["刘晓禹-华沙爱乐乐团"]),time:"40min+",comments:"肖赛冠军的演绎"},{type:"叙事曲",name:"Ballade No.1 in G minor, Op.23",artist:e("el-link",{attrs:{herf:"https://www.bilibili.com/video/BV19b411U7Uk/?spm_id_from=333.788.recommend_more_video.13"}},["鲁宾斯坦"]),time:"9min30s",comments:"尾杀"},{type:"--",name:"Andante spianato et Grande polonaise brillante, Op.22",artist:e("el-link",{attrs:{herf:"https://www.bilibili.com/video/BV1Vy4y1M7ee?spm_id_from=333.337.search-card.all.click"}},["李云迪"]),time:"14min-",comments:"丝滑"},{type:"--",name:'Polonaise No.6 in A flat, Op.53 "Heroic"',artist:e("el-link",{attrs:{herf:"https://www.bilibili.com/video/BV1ys411X7Ue?spm_id_from=333.337.search-card.all.click"}},["霍洛维茨"]),time:"7min+",comments:"震撼"}]}},methods:{handleClick(e,t){console.log(e,t)}}},h=v,b=(0,u.Z)(h,f,p,!1,null,"a7d618a0",null),g=b.exports,_={name:"App",components:{HelloWorld:d,TestComp:g}},w=_,y=(0,u.Z)(w,r,a,!1,null,null,null),k=y.exports,C=n(8345);o["default"].use(C.Z);const O=[{path:"/music",name:"TestComp",component:g},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5830))}],x=new C.Z({mode:"hash",base:"/cleverctz/",routes:O});var T=x,N=n(4720),j=n.n(N);o["default"].use(j()),o["default"].config.productionTip=!1,o["default"].use(C.Z),new o["default"]({router:T,render:e=>e(k)}).$mount("#app")},5722:function(e,t,n){e.exports=n.p+"img/homepage.883ca07c.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.fcf681de.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cleverctz:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==t+a){l=m;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[r];var d=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/cleverctz/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var u=s(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkcleverctz"]=self["webpackChunkcleverctz"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7088)}));o=n.O(o)})();
//# sourceMappingURL=app.2af8a77b.js.map