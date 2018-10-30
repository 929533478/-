import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"

import HoemContainer from "./components/tabbar/homeContainer.vue"
import goodsContainer from "./components/goods/goods.vue"
import merchantContainer from "./components/goods/merchant.vue"
import commentContainer from "./components/comment/comment.vue"
import prolist from "./components/prolist/prolist.vue"
import search from "./components/search/search.vue"
import searchList from "./components/search/searchList.vue"
import user from "./components/user/user.vue"
import register from "./components/user/register.vue"
import usercontent  from "./components/user/usercontent.vue"


//引入主页宫格
Vue.use(Router)
export default new Router({
  //路由字典
  routes: [
    {path:'/',redirect:"/home"},//重定向到home
    {path:'/home',component:HoemContainer},
    {path:'/goods/:id',component:goodsContainer},//创建一个变量叫id存传过来的值商品详情
    {path:'/comment',component:commentContainer},
    {path:'/merchant',component:merchantContainer},
    {path:'/prolist',component:prolist},//宫格商品列表
    {path:'/search',component:search}, //搜索商品的页面
    {path:'/searchList/:tname',component:searchList},//搜索商品的列表
    {path:'/user/',component:user},//用户登录
    {path:'/register/',component:register},//用户登录
    {path:'/usercontent/',component:usercontent},
    
    
  ]
})
