(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-article-my-article"],{"0c6e":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{lists:[],loading:!0}},onLoad:function(){this.getMyArticle()},methods:{getMyArticle:function(){var n=this;this.$api.get_my_article().then((function(t){var e=t.data;n.lists=e,n.loading=!1})).catch((function(t){})),t.log("测试")}}};n.default=e}).call(this,e("5a52")["default"])},"88de":function(t,n,e){"use strict";e.r(n);var a=e("e32c"),i=e("ca3a");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);var r,c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"055c5125",null,!1,a["a"],r);n["default"]=o.exports},ca3a:function(t,n,e){"use strict";e.r(n);var a=e("0c6e"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},e32c:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var a={uniLoadMore:e("4b91").default,listCard:e("fbfa").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[0===t.lists.length&&t.loading?e("uni-load-more",{attrs:{status:"loading"}}):t._e(),t._l(t.lists,(function(t){return e("list-card",{key:t._id,attrs:{item:t}})}))],2)},u=[]}}]);