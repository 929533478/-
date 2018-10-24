import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'

import Vuex from 'vuex';
import vuex_store from './store';


Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css';
import './lib/mui/css/app.css'
import './lib/mui/js/mui.js';
import './lib/toucher.js';
//import './assets/js/flexble.js';//屏幕适应插件
//引入header
import { Header,Swipe,SwipeItem,Button} from "mint-ui";
Vue.component(Header.name,Header);//加载
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);

//3引入vueresource
import VueResource from "vue-resource";
Vue.use(VueResource)//加载
Vue.use(Vuex);
//时间过滤器filter
Vue.filter("dateFormat",function(datestr,pattern="YYYY-MM-DD"){
  return new Date(datestr).toLocaleString();
})

Vue.http.options.root = "http://127.0.0.1:3000/";
//设置一个全局的ajax post访问格式
Vue.http.options.emulateJSON=true

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: vuex_store(Vuex)
});