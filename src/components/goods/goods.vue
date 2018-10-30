<template>
    <div class="app_goods">
       <header class="mui-bar mui-bar-nav mui-bar-nav-bg">
           <img class="img1" src="../../img/true.png" @click="back" alt="">
       
        <a class="mui-action-back mui-icon-extra mui-icon-extra-heart mui-pull-right mui-a-color"></a>
        <h1 class="mui-title">{{details.title}}</h1>
         
</header>
        <div class="title_box titlefixed">
        
            <img :src="details.img_url" alt=""><div>起送{{details.fee}}￥ | 配送{{details.freight
}}￥ | 送达{{details.ctime}}分钟</div>
            
        </div> 
        <div class="title_box2 titlefixed">
        
           <span>代金券、满减、折扣等优惠仅在app中使用</span>
           <mt-button type="danger" @click="togoods" size="small">立享优惠</mt-button>
            
        </div>  
        <div class="title_box3 titlefixed">
          
           <span @click="getbox1" :class="{'active':box==1}">商品</span>
           

           <span @click="getbox2" :class="{'active':box==2}">评价</span>
           

          
           <span @click="getbox3" :class="{'active':box==3}">商家</span>
           
        </div> 
        <div v-if="box==1" class="title_box4">
         <goodslist class="goodslist"></goodslist>
         </div> 
       <div v-else-if="box==2" class="title_box5">
            <discuss :nid="this.id"></discuss>
        </div>
        <div v-else class="title_box6">
            <merchant></merchant>
        </div>
        <div>
           
        </div>
        
        
    


    </div>
</template>
<script>

import goodslist from "../goods/goodslist.vue"
import discuss from "../goods/discuss.vue"
import merchant from "../goods/merchant.vue"

export default {
    data(){
        return {
           box:1,
           id:this.$route.params.id,//接传的值
           details:{}//存详情信息
            }
    },
    methods:{
        back(){
                this.$router.push({path:"/"})
           },
        getbox1(){
            this.box=1
            //console.log(this.box)
        },
        getbox2(){
            this.box=2
           // console.log(this.box)
        },
        getbox3(){
            this.box=3
            //console.log(this.box)
        },
        togoods(){
                this.$http.get("goods/list?id="+this.id).then(result=>{
                    //保存到this.details
                   // console.log(result);
                    this.details=result.body.msg[0]
                    //console.log(this.details);
                })
        }
    },
    created(){
        this.togoods()
    },
    components:{
        "goodslist":goodslist,
        "discuss":discuss,
        "merchant":merchant,
        
    }

}
</script> 
<style>
.app_goods .mui-bar .img1{
    margin:5px 0 0 5px;
    padding: 1px;
    width: 35px;
    height: 35px;
    border:3px solid #666;
    border-radius:50% 
}

.active{
    color: #fe2947 !important;
    border-bottom: solid 2.5px #fe2947 !important; 
   

}
.title_box3 span{
    
    border-bottom:0px solid #fff; 
    transition: all 0.2s;
}
.displaynone{
    display: none;
}
.app_goods .mui-title{
    color:bisque;
}
.app_goods .title_box{
    height:84px;
    background-color: #ed813e;
    
} 

.app_goods .title_box img{
    margin:5px 10px 10px 18px;
    width:58px;
    border-radius: 50%;
    height:58px;
    border:2px solid white;
}
.app_goods .mui-bar{
    background-color: #ed813e;
        box-shadow: 0 1px 6px #f1833e;
        -webkit-box-shadow: 0 1px 6px #ed813e;
}
.app_goods .title_box div:last-child{
    position: absolute;
    left:90px;
    top:9px;
    color:bisque;
    font-size: 13px;
}
.app_goods header :nth-child(2){
    margin:13px; 
}
.titlefixed{
     position: fixed;
     z-index: 10;
     right: 0;
     left: 0;
}
.app_goods .title_box2{
    padding:7px;
    height:46px;
    background-color: white;
    top: 120px;
}
.app_goods .title_box2 span{
    display:inline-block;
    color:#666;
    font-size: 13px;
    margin:0 10px;
    
}
.app_goods .title_box3{
    height:60px;
    top: 160px;
    background-color: white;
    text-align:center;
}
.app_goods .title_box3 span{
    font-size:20px;
    margin-top: 15px;
    padding: 12px 25px;
    display: inline-block;
    color:black;
}

.app_goods .title_box4{

    
    background-color: white;
    text-align:center;
}
.app_goods .title_box5{
    position:absolute;
    top:222px;
    width: 100%;

}
.app_goods .title_box6{
    position:absolute;
    top:230px;
    width: 100%;
}

</style>


