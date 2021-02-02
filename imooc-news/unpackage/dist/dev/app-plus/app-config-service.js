
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabbar/index/index","pages/tabbar/follow/follow","pages/tabbar/my/my","pages/home-search/home-search","pages/home-label/home-label","pages/home-detail/home-detail","pages/detail-comments/detail-comments","pages/my-article/my-article","pages/feedback/feedback"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#666","selectedColor":"#f07373","backgroundColor":"#fff","list":[{"pagePath":"pages/tabbar/index/index","iconPath":"static/home.png","selectedIconPath":"static/home-active.png","text":"首页"},{"pagePath":"pages/tabbar/follow/follow","iconPath":"static/follow.png","selectedIconPath":"static/follow-active.png","text":"关注"},{"pagePath":"pages/tabbar/my/my","iconPath":"static/my.png","selectedIconPath":"static/my-active.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"omppc-news","compilerVersion":"3.0.7","entryPagePath":"pages/tabbar/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabbar/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"uni-app","navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/tabbar/follow/follow","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"关注","enablePullDownRefresh":false}},{"path":"/pages/tabbar/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/home-search/home-search","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/home-label/home-label","meta":{},"window":{"navigationBarTitleText":"标签管理","enablePullDownRefresh":false}},{"path":"/pages/home-detail/home-detail","meta":{},"window":{"navigationBarTitleText":"页面详情","enablePullDownRefresh":false}},{"path":"/pages/detail-comments/detail-comments","meta":{},"window":{"navigationBarTitleText":"评论列表","enablePullDownRefresh":false}},{"path":"/pages/my-article/my-article","meta":{},"window":{"navigationBarTitleText":"我的文章","enablePullDownRefresh":false}},{"path":"/pages/feedback/feedback","meta":{},"window":{"navigationBarTitleText":"意见反馈","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
