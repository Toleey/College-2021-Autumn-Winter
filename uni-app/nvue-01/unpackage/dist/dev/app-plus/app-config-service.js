
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index3/index3","pages/scroller/scroller","pages/list/list","pages/index/index","pages/index/index","pages/test/test","pages/test2/test2","pages/map/map","pages/class/class","pages/index2/index2","pages/lunbotu/lunbotu","pages/lunbotu2/lunbotu2","component/carousel/carousel","components/menu/menu","components/promotion/promotion","components/scroller/scroller"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"list":[{"text":"class","pagePath":"pages/class/class"},{"text":"index2","pagePath":"pages/index2/index2"}]},"nvueCompiler":"weex","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"nvue-01","compilerVersion":"3.2.16","entryPagePath":"pages/index3/index3","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index3/index3","meta":{"isQuit":true,"isNVue":true},"window":{"onReachBottomDistance":100,"titleNView":{"searchInput":{"align":"left","backgroundColor":"#f7f7f7","borderRadius":"4px","placeholder":"智能积木，越野车","placeholderColor":"#ccc","disabled":"fasle"},"buttons":[{"color":"#989898","colorPressed":"#f5f5f5","float":"left","fontSize":"22px","fontSrc":"/static/iconfonts/iconfont.ttf","text":""},{"color":"#989898","colorPressed":"#f5f5f5","float":"right","fontSize":"22px","fontSrc":"/static/iconfonts/iconfont.ttf","text":""}]}}},{"path":"/pages/scroller/scroller","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/list/list","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/index","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/test/test","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/test2/test2","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/map/map","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/class/class","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index2/index2","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/lunbotu/lunbotu","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/lunbotu2/lunbotu2","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/component/carousel/carousel","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/menu/menu","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/promotion/promotion","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/scroller/scroller","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});