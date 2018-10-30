<template>
    <div class="app_searchtitlt">
    <div class="wailogo">
       <img class="img5" src="../../img/true.png" @click="back" alt="">
             <input type="text" placeholder="请输入搜索的商品" @click="search" ref="mytxt">
        <img class="img6" src="../../img/search.jpg" @click="ser" alt="">
    </div>
    </div>
</template>
<script>
import {Toast} from "mint-ui";

   export default{

        
        data(){
            return{
                
            }
        },
        methods:{
            ser(){
                if(this.$refs.mytxt.value.length==0){
                    Toast('请输入店铺名');
                    return;
                }
            },
            search(){
             this.$router.push({path:"/search"})
           },
           back(){
                this.$router.push({path:"/"})
           },
           
            
            }
            
            
        
    }
</script>

<style>
.img6{
    margin-left:6px;
    padding-top: 6px;
    width: 13%;
    height: 50px
    }
.img5{
    margin:8px 15px 0 5px;
    padding: 1px;
    width: 10%;
    height: 40px;
    border:3px solid #666;
    border-radius:50% 
}

.pro_ment{
    margin-top: 15px;
}
.wailogo{
        width:100%;
        height:60px;
        background: #fff;
        display: flex;
        position: fixed;
        z-index: 50;
        top: -1px;
    }

    .wailogo input{
        margin-top:12px; 
        width: 70%;
        height:33px;
        border-radius: 15px;
        background: #eeee;
        font-size: 15px;
    }
</style>

