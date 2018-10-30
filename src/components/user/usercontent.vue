<template>
    <div class="app_usercontent">
    <searchtitle></searchtitle>
    <div class="mohubj">
    <div class="headimg">
       <img src="../../img/shuijiao.jpg" alt=""><br>
       <span class="headspan">{{$store.getters.opCount}}</span>
       </div>
    </div>   
    <div class="tablist">
        <ul>
            <li>
                <a href="#">
                    <img src="../../img/menu06.png" alt="">
                    <p>购物车</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../img/menu09.png" alt="">
                    <p>我的订单</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../img/menu04.png" alt="">
                    <p>地址管理</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../img/menu10.png" alt="">
                    <p>我的积分</p>
                </a>
            </li>
            
        </ul>
      
    </div>
    <div class="mylisy">
        <ul>
            <li>我的等级</li>
            <li>我的金币</li>
            <li>我的优惠券</li>
            
        </ul>
    </div>
    <div class="table-top">
       <mt-button type="danger" size="large" @click="exit">退出登录</mt-button>
    </div>

    </div>
</template>
<script>
import searchtitle from "../search/searchtitle.vue"
import {Toast} from "mint-ui";

   export default{

        
        data(){
            return{
              
            }
        },
        methods:{
            exit(){
                this.$store.commit('next')//
                this.$router.push({path:"/"})
                $Toast("退出成功")
            },
            
        },
        components:{
        "searchtitle":searchtitle
        }, 
            
          watch:{
              userinp(){
                 
        console.log(this.userinp)
              }
          }  
        
    }
</script>

<style>
.mylisy{
    position: relative;
   top:150px;
}
.mylisy li{
    margin-top: 10px;
    padding: 8px 0px 0 20px;
    width: 100%;
    height: 40px;
    background-color: rgb(253, 253, 253);
    border: 1px solid rgb(204, 204, 204);
}
.tablist li{
    width: 25%;

}
.tablist li a img{
    width: 50px;
    display:block;
    margin: 0 auto;
        }
.tablist li p{
    margin-top:5px; 
    font-size:14px;
    color:rgb(2, 22, 2);
        }
.tablist li a{
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; /*水平居中*/
    align-items: center; 
}
.tablist ul{
    width: 100%;
    position:relative;
    top:130px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}
.table-top{
    position:relative;
    top: 215px;
}
.headspan{
        position: fixed;
    left: 88px;
    top: 214px;
    width: 200px;
    font-size: 16px;
    color: #4ABD96;
    text-align: center;
}
.headimg{
    position: absolute;
    top: 50%;
    left: 50%;
}
.headimg img{
    margin-left: -45px;
    width:90px;
    height:90px;
    border-radius:50%;
}
.mohubj{
    position: relative;
    top:15px;
    background-image: url("../../img/mohubj.jpg");
    background-size: 100%;
    width: 100%;
    height:100px;
}
.app_usercontent{
    width: 100%;
    height: 595px;
    position:fixed;
}

</style>

