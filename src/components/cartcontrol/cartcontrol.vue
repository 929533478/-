<template>
  <div class="cartcontrol">
      <!--减按钮cart-decrease v-show="food.count>0"-->
   <transition name="move">
       <div class="cart-decrease "  @click="decreaseCart" v-show="food.count>0">
       <span class="inner icon-remove_circle_outline"></span>

   </div>
  </transition>
      
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click="addCart"></div>
 </div>  
</template>
<script>
//按钮组件
import Vue from 'vue';
export default {
   props:{
       food:{
           type:Object
       }
   },
   created(){
       
   },
   methods:{
       addCart(event){/*加按钮*/
        if(!event._constructed){
            return;
        }
        if(!this.food.count){
            //必须在vue对象中添加food.coundt才会起作用
             Vue.set(this.food,'count',1)
              this.food.count = 1;
          } else{
              this.food.count++;
          }
          this.$emit('cart.add',(event.target))
          
         
       },
       /*减按钮*/
       decreaseCart(event){
           if(!event._constructed){
            return;
        }
        if(this.food.count){
          this.food.count--;
        }
       }
   }

}
</script>
<style>
    /*.cartcontrol{
        
    } */
   .cartcontrol .inner{
        padding:5px;
        font-size:25px !important;
        line-height:35px;         
        vertical-align: top;
        color:#007ACC;
        transition: all 0.3s linear;
        transform: rotate(0)
    }
    .move-transition{
        opacity: 1;
        transform: translate3D(0,0,0)
    }
    .move-enter,.move-leave{
        opacity: 0;
        transform:translate3D(20px,0,0) ;
        transform: rotate(180deg)
    }
    .cart-add{
        padding:6px;
        display: inline-block;
        color:#007ACC;
    } 
    /*减号*/
    .cart-decrease{
       padding:6px;
       display: inline-block;
       color:#007ACC;
       transition: all 0.3s linear;
     }   
   
    .cart-count{
        font-size:18px;
        line-height: 36px;         
        vertical-align: top;
        color:#007ACC;
    }
    .cart-count{
        padding:6px;
        display: inline-block;
        color:#007ACC;
    }
    
</style>

