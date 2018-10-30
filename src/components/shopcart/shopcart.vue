<template>
    <div class="shopcart"> 
        <div class="content1" @click="toggleList">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo" :class="{'highlight':totalCount>0}">
                        <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
                    </div>

                    <div class="num" v-show="totalCount>0">{{totalCount}}</div>
                        
                 </div>  

                
           
            <div class="prices" :class="{'pricehigh':totalPrice>0}">￥{{totalPrice}}</div>
            <div class="desc">配送费{{seller.deliveryPrice}}元</div>
        </div>
            <div class="content-right" :class="payClass"> 
                <div class="pay">
                {{payDesc}}
                </div>
              </div>  
           </div>    
    <div class="ball-container">
        
    <div class="ball" v-for="(ball,index) in balls" :key="index" v-show="ball.show">
     <transition name="drop">
            <div class="inner"></div>
     </transition>
     </div> 
     </div>    


<transition name="fold">
    <div id="shopcart-list" class="shopcart-list" v-show="listShow">
        <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
        </div>
        <div class="list-contact" ref="listConent">
            <ul>
                <li class="food" v-for="(food,index) in selectFoods" :key="index">
                    <span class="name">{{food.name}}</span>
                    <div class="price">
                        <span>￥{{food.price*food.count}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                        <cartcontrol :food="food"></cartcontrol>
                    </div>
                </li>
            </ul>
        </div>
    </div>  
</transition> 
               
            
        
    </div>
</template>
<script>
import BScroll from 'better-scroll';
//计算鼠标高度
import cartcontrol from '../cartcontrol/cartcontrol.vue';
//底部购物车控件
 const ERR_OK = 0;
export default {
    
    data(){

        return{
            seller:[],
            balls:[
            {show:false},
            {show:false},
            {show:false},
            {show:false},
            {show:false}
            ],
        fold:true
        }
        
    },
    created() {
       
        this.$http.get("/api/seller").then(response=>{
        response=response.body;
         if(response.errno===ERR_OK){
           this.seller=response.data;
          }   
          
       })
        
    },
    computed:{
        //显示隐藏购物车
        listShow(){
            if(!this.totalCount){
                this.fold=true;
                return false;
            }
            let show = !this.fole;
            if(show){
                this.$nextTick(()=>{
                    if(!this.scroll){
                    this.scroll=new BScroll(this.$refs.listConent,{
                        click:true
                    });
                    }else{
                       this.scroll 
                    }
                })
            }
             show = !this.fold;
            return show;
        },
        //定义计算方法
    //价格总和
        totalPrice(){
          let total =0;
          this.selectFoods.forEach((food)=>{
              total+=food.price*food.count;
          }) 
          return total; 
        },
        //商品的数量控制购物车的高亮
        totalCount(){
            let count =0;
            this.selectFoods.forEach((food)=>{
               count += food.count; 
            });
            return count; 
        },
        payDesc(){//运费差价和配送费计算
            var min=this.seller.minPrice
            
            if(this.totalPrice === 0){
               
                return`￥${min}元起送`;
            }else if(this.totalPrice<min){
               
                var diff=min - this.totalPrice
                return `还差￥${diff}元`;
            }else{
               
                return "去结算";
            }

        },//运费控制差价高亮
        payClass(){
             if(this.totalPrice<this.seller.minPrice){
                return "not-enough"
            }else{
                return "enough";
            }
        }
    },
    props:{
        selectFoods:{
            type:Array,
             default(){
                return[{
                    price:0,
                    count:0
                    }];  
               }
            }
        },
        methods:{
            toggleList(){
                if(!this.totalCount){
                    return
                }
                this.fold=!this.fold
            },
            empty(){
                this.selectFoods.forEach((food)=>{
                    food.count=0;
                })
            }
        },
    components: {
    "cartcontrol":cartcontrol
  	}
    
    
}
</script>
<style>
.list-contact ul li.food .price{
     position: absolute;
     left: 55%;
     top:12px;
     font-size: 18px !important;
}
.list-contact ul li.food .cartcontrol-wrapper{
     position: relative;
     left: 120px;
    
}
.list-contact ul li.food .name{
    position: absolute;
    left: 0;
    line-height:24px;
    font-size: 17px;
    color: #141d27;
    font-weight: 800;
    padding: 10px;
}
.list-contact{
    padding:0 18px;
    max-height: 217px;
    overflow: hidden;
    background: #fff;
}
.list-contact ul li.food{
    width: 100%;
    position: relative;
    
    box-sizing: border-box;
    border-bottom:1px solid rgba(7,17,27,0.3);
   
}

.list-header{
    height: 40px;
    line-height: 40px;
    padding: 0 18px;
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7,17,27,0.3);
} 
.list-header h1{
    margin-top:14px; 
    float: left;
    font-size: 18px;
    color: rgb(7,17,27)
}
.empty{
    float: right;
    font-size: 16px;
    color: rgb(0,160,220)
}
.fold-transition{
    transition:all 0.5s;
    transform: translate3d(0,200,0)
}

.fold-enter,.fold-leave{
    transform: translate3d(0,0,0);
    transition: all 0.5s linear;
}

#shopcart-list{
    position: absolute;
    bottom: 4.5rem;
    left:0;
    z-index: 1;
    width: 100%;
    
}
.ball-container{

}
.ball{
    position: fixed;
    left: 32px;
    bottom: 22px;
    z-index: 200;
}

.drop-transition{
    transition:all 0.5s;
}  
.ball .inner{
    width: 16px;
    height: 16px;
    border-radius:50%;
    background: rgb(0,160,220);
    transition:all 0.4s;
}
.not-enough{
background: #2b333b;
}
.enough{
    background:#00b43c;
}
.num{
    position: absolute;
    top: 1px;
    right: 0;
    width: 23px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius:16px;
    font-weight:700;
    font-size: 8px !important;
    background: rgb(240,20,20);
    color:#fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4)
}
.shopcart{
   z-index: 50;
   height:100%;
}
.content1{
    display: flex;
    justify-content:flex-start;
    background: #141d27;

}
.content-left{
    flex:1;
 }  



.logo-wrapper{
    
 display: inline-block;
 position: relative;
 bottom: 13px;
 right: 0;
 height:53px;
 width:53px;
 border-radius:50%;
 background: #141C27;
 z-index: 60;
 box-sizing: border-box;
 
}
.logo{
    margin: 3px;
    width:90%;
    height:90%;
    border-radius: 50%;
    text-align: center;
    background: rgb(43,52,60)
}
.highlight{
    background: #ED813E;
    color: #fff !important;
}
.icon-shopping_cart{
    font-size: 24px;
    color: #80858a;
    line-height: 44px;

}
.content-left .prices{ 
 width: 20%;
 display: inline-block;
 vertical-align: top;
 color: #ADADAD;
 line-height: 50px;
 font-weight: 700; 
 font-size: 16px !important;
 }
 .pricehigh{
   color: white !important;  
 }
.desc{
    margin:0 11px;
    vertical-align: top;
    line-height: 50px;
    display: inline-block; 
    width: 33.33%; 
    color:#80858a;
    font-size:16px;
}
.content-right{
    flex:0 0 120px;
    width:120px;
    line-height: 50px;
    color: aliceblue;
    vertical-align: top;
    }

</style>
