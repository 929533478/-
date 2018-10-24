import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"

import HoemContainer from "./components/tabbar/homeContainer.vue"
import goodsContainer from "./components/goods/goods.vue"
import merchantContainer from "./components/goods/merchant.vue"
import commentContainer from "./components/comment/comment.vue"


//引入主页宫格
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},//重定向到home
    {path:'/home',component:HoemContainer},
    {path:'/goods/:id',component:goodsContainer},//创建一个变量叫id存传过来的值
    {path:'/comment',component:commentContainer},
    {path:'/merchant',component:merchantContainer},
    
  ]
})
