(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-feedback-feedback"],{"0995":function(e,t,i){"use strict";i.r(t);var n=i("c9a3"),a=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,(function(){return n[e]}))}(c);t["default"]=a.a},"25c2":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return n}));var n={uniIcons:i("e60e").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"feedback-title"},[e._v("意见反馈")]),i("v-uni-view",{staticClass:"feedback-content"},[i("v-uni-textarea",{staticClass:"feedback-textarea",attrs:{placeholder:"请输入您要反馈的问题"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),i("v-uni-view",{staticClass:"feedback-title"},[e._v("反馈图片:")]),i("v-uni-view",{staticClass:"feedback-image-box"},[e._l(e.imageList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"feedback-image-item"},[i("v-uni-view",{staticClass:"close-icon",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.del(n)}}},[i("uni-icons",{attrs:{type:"closeempty",size:"18",color:"#fff"}})],1),i("v-uni-view",{staticClass:"image-box"},[i("v-uni-image",{attrs:{src:t.url,mode:"aspectFill"}})],1)],1)})),e.imageList.length<5?i("v-uni-view",{staticClass:"feedback-image-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addImage.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"image-box"},[i("uni-icons",{attrs:{type:"plusempty",size:"50",color:"#eee"}})],1)],1):e._e()],2),i("v-uni-button",{staticClass:"feedback-bt",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交反馈意见")])],1)},c=[]},"520c":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.feedback-title[data-v-5b1293cc]{font-size:14px;margin:15px;margin-bottom:0;color:#666}.feedback-content[data-v-5b1293cc]{margin:15px;padding:10px;box-sizing:border-box;border:1px #eee solid}.feedback-content .feedback-textarea[data-v-5b1293cc]{font-size:12px;width:100%;height:100px}.feedback-image-box[data-v-5b1293cc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:10px}.feedback-image-box .feedback-image-item[data-v-5b1293cc]{position:relative;width:33.33%;height:0;padding-top:33.33%;box-sizing:border-box}.feedback-image-box .feedback-image-item .close-icon[data-v-5b1293cc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;right:0;top:0;width:22px;height:22px;border-radius:50%;background-color:#f07373;z-index:2}.feedback-image-box .feedback-image-item .image-box[data-v-5b1293cc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:5px;right:5px;bottom:5px;left:5px;border:1px #eee solid;border-radius:5px;overflow:hidden}.feedback-image-box .feedback-image-item .image-box uni-image[data-v-5b1293cc]{width:100%;height:100%}.feedback-bt[data-v-5b1293cc]{margin:0 15px;background-color:#f07373}',""]),e.exports=t},"8f57":function(e,t,i){var n=i("520c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("1d8e9c44",n,!0,{sourceMap:!1,shadowMode:!1})},abbd:function(e,t,i){"use strict";var n=i("8f57"),a=i.n(n);a.a},c9a3:function(e,t,i){"use strict";(function(e,n){var a=i("4ea4");i("4160"),i("a434"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var c=a(i("1da1")),o={data:function(){return{content:"",imageList:[]}},methods:{addImage:function(){var t=this,i=5-this.imageList.length;uni.chooseImage({count:i,success:function(n){var a=n.tempFiles;a.forEach((function(e,n){n<i&&t.imageList.push({url:e.path,name:e.name})})),e.log(n)}})},del:function(e){this.imageList.splice(e,1)},submit:function(){var e=this;return(0,c.default)(regeneratorRuntime.mark((function t(){var i,n,a,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=[],uni.showLoading(),n=0;case 3:if(!(n<e.imageList.length)){t.next=14;break}return a=e.imageList[n].url,c=e.imageList[n].name,c||(c=(new Date).getTime()+".jpg"),t.next=9,e.uploadFiles(c,a);case 9:o=t.sent,i.push(o);case 11:n++,t.next=3;break;case 14:e.updateFeedback(e.content,i);case 15:case"end":return t.stop()}}),t)})))()},uploadFiles:function(e,t){return(0,c.default)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,n.uploadFile({cloudPath:e,filePath:t});case 2:return a=i.sent,i.abrupt("return",a.fileID);case 4:case"end":return i.stop()}}),i)})))()},updateFeedback:function(t,i){var n={content:t,feedbackImages:i};this.$api.update_feedback(n).then((function(t){e.log(t),uni.hideLoading(),uni.showToast({title:"反馈提交成功",icon:"none"}),setTimeout((function(){uni.switchTab({url:"/pages/tabbar/my/my"})}),1500)})).catch((function(e){uni.hideLoading(),uni.showToast({title:"反馈提交失败",icon:"none"})}))}}};t.default=o}).call(this,i("5a52")["default"],i("a9ff")["default"])},dd37:function(e,t,i){"use strict";i.r(t);var n=i("25c2"),a=i("0995");for(var c in a)"default"!==c&&function(e){i.d(t,e,(function(){return a[e]}))}(c);i("abbd");var o,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5b1293cc",null,!1,n["a"],o);t["default"]=r.exports}}]);