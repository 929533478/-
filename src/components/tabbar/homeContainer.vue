<template>
<div class="app_home_list">
   
    <div class="mui-content">
			<div class="mui-content-padded" style="margin: 5px;">
            <div>登录 <span>百度外卖</span> </div>
				 
				<div class="mui-input-row mui-search ">
					<input type="search" class="mui-input-clear" placeholder="">
				</div>
                </div>
                </div>

    
     

    <!--六宫格-->
    <div class="gong">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                         
                            <router-link to="/home/news">
		                       <img src="../../img/menu01.png" />
                               <div class="mui-media-body">餐饮</div>
                            </router-link>
                            
                            </li>
                            
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/goodlist">
		                    <img src="../../img/menu02.png" />
                            <div class="mui-media-body">早餐</div>
                            </router-link>
                            </li>
                            
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/shop">
		                    <img src="../../img/menu03.png" />
                            <div class="mui-media-body">下午茶</div>
                            </router-link>
                            </li>
                            
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
		                    <img src="../../img/menu04.png" />
                            <div class="mui-media-body">夜宵</div>
                            </a>
                            </li>
                            
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/search">
		                   <img src="../../img/menu05.png" />
                            <div class="mui-media-body">专送</div>
                            </router-link>
                            </li>
                            
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                            <img src="../../img/menu06.png" />
		                    <div class="mui-media-body">超市购</div>
                            </a>
                            </li>

                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                            <img src="../../img/menu07.png" />
		                    <div class="mui-media-body">果生鲜</div>
                            </a>
                            </li>

                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                            <img src="../../img/menu08.png" />
		                    <div class="mui-media-body">药上门</div>
                            </a>
                            </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                            <img src="../../img/menu09.png" />
		                    <div class="mui-media-body">品牌馆</div>
                            </a>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                            <img src="../../img/menu10.png" />
		                    <div class="mui-media-body"><span>新店惠</span></div>
                            </a>
                            </li>
		           
		        </ul> 
                
    </div>
    <!--主页轮播列表-->
<!--
<mt-swipe :auto="4000">
        <mt-swipe-item v-for="itme in list" :key="itme.id">
        <img :src="itme.img_url"><img>
        </mt-swipe-item>
    </mt-swipe>
-->
 <div class="contents"  ref="trans">
            <div class="content1s"> </div>
            <div class="content2s"> </div>
            <div class="content3s"> </div>
            <div class="content4s"> </div>
 </div>
<h5 class="hsj">常用商家</h5>


<comment-box :comlist="commentlist"></comment-box>
<mt-button type="primary" size="large" @click="getMore">加载更多.....</mt-button>


</div>
</template>
<script>
import {Toast} from "mint-ui";
import comment from '../comment/comment.vue';
    export default{

        
        data(){
            return{
                trans:{},
                list:[],
                commentlist:[],
                pageInedx:0
            }
        },
        methods:{
            
            d3(){
                
               var d3=document.querySelector(".contents")
                   //console.log(d3)
                   
                   
                   var sum=0;
                   setInterval(function(){
                       sum+=-90
                       d3.style.transform=`rotateX(${sum}deg)`;
                       if(sum==-450){
                           sum=0;
                       }
                   },2000)
        var toucher=Toucher(".contents");
          toucher.on("swipeDown",function(ev){
            sum+=-90;
            d3.style.transform=`rotateX(${sum}deg)`;
            if(sum==-360){
                sum=0;
            }
            }) 
          toucher.on("swipeUp",function(ev){
            sum+=90;
            d3.style.transform=`rotateX(${sum}deg)`
            if(sum==-360){
                sum=0;
            }
        })
              
            },
            getMore(){
                
                this.pageInedx++;
                var url="comment/list?pno="+this.pageInedx;
                this.$http.get(url).then(result=>{
                this.commentlist=this.commentlist.concat(result.body.msg.data);
                this.sum=result.body.sum;
                if(this.commentlist.length==this.sum){
                 Toast('已加载全部')
                }else Toast('加载成功')
                
                })
            },
            /*商品列表*/
            /*getcomment(){
                var url="comment/list";
                this.$http.get(url).then(result=>{
                    this.commentlist=result.body.msg.data
                    
                    console.log(this.commentlist)
                })

            },*/
            getimagelist(){
                
                this.$http.get("imglist/list").then(result=>{

                    if(result.body.code==1){
                       this.list=result.body.msg;
                   }else{
                       Toast('加载轮播图片失败........')
                   }
                    
                    //console.log(result)
                })
            },
            
        },
        created(){
            
            //this.getcomment(),
            this.getimagelist(),
            this.getMore()
        },
        components:{
        "comment-box":comment
        },
        mounted(){
            this.d3()
             
        }
    }

</script>
<style>
.contents{
        width: 100%;
        height: 130px;
        position: relative;
        transform-style: preserve-3d;/*使被转换的子元素保留其 3D 转换*/
        top:-5px;
        left:0px;
        
        transition: all 0.8s;
        /*transform: rotateX(90deg);*/
    }
.content1s,.content2s,.content3s,.content4s{
        position:absolute;
        width: 100%;
        height: 130px;
        background-size: 100%;
       
        
    }
    .content1s{
       background-image: url(../../img/banner01.png);
       transform:translateY(-65.5px)rotateX(90deg); 
     }
    .content2s{
        background-image: url(../../img/banner02.png);
        transform: translateZ(-65.5px)rotate(180deg);/*translate平移位置rotate旋转角度*/
     }
    .content3s{
            background-image: url(../../img/banner03.png);
            transform: translateZ(65.5px)
    }
    .content4s{
        background-image: url(../../img/banner04.png);
        transform:translateY(65.5px)rotateX(-90deg); 
    }
/*轮播样式*/
    div.gong{
        position:relative;
       top:-31px;
    }
   .app_home_list div.mui-content{
       position:relative;
       top:-31px;
       text-align: center;
   }
   .app_home_list div.mui-content h4{
       color:#6c5d5d;
       padding-bottom:10px;
   }
   .app_home_list ul li img{
        width:100%;

    }
   .app_home_list ul li.mui-col-xs-4{
        width:19.333333% !important;
    }
    .app_home_list .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:13px;
    }
    .app_home_list{
        overflow:visible;
        text-overflow:none;
    }
    .app_home_list .mui-grid-view.mui-grid-9{
       background-color:#fff;
   }
   .app_home_list .mui-grid-view.mui-grid-9 .mui-table-view-cell{
       border:0;
   }
    .app_home_list .mint-swipe{
            height:150px;
            

        }
  
  .app_home_list .mint-swipe img{
        width:100%;
         
        }
    .hsj{
        margin:10px;
        }
  
</style>