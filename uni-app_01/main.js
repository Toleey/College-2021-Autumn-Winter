import App from './App'

//挂在成全局的方法
import {myRequest} from './util/api.js'
Vue.prototype.$myRequest=myRequest

import helper from './common/helper.js'
Vue.prototype.$helper=helper

//挂载 全局使用 加个$避免和系统变量混了，好区分是否是全局变量
// Vue.prototype.$websiteUrl = 'http://uniapp.dcloud.io';  
// Vue.prototype.$now = Date.now || function () {  
//     return new Date().getTime();  
// };  
// Vue.prototype.$isArray = Array.isArray || function (obj) {  
//     return obj instanceof Array;  
// };

//引入store 默认会读index.js
import store from './store'
//把Vuex定义成全局组件
Vue.prototype.$store=store

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif