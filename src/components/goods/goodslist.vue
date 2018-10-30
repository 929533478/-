<template>
<div class="goodsList">


	<div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="index"  class="menu-item" 
        :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)"> 
         
          <span class="text">
            <span class="icon"></span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  <div class="foods-wrapper" ref="foodsWrapper">
    <ul>
      <li v-for="(item,index) in goods" :key="index" class="food-list food-list-hook"><!--表明一个被js选择的样式并没有其他效果-->
        <h4 class="title">{{item.name}}</h4>
        <ul>
          <li v-for="(food,i) in item.foods" :key="i" class="food-item">
              <div class="zuo">
                <img :src="food.icon" alt="">
              </div>
              <div class="content you">
                <h6 class="name">{{food.name}}</h6>
                <p class="desc">{{food.description}}</p>
                <div class="extar">
                  <span>月销{{food.rating}}份</span>
                  <span>好评{{food.rating}}%</span>   
                 </div>  
                  <div >
                      <span class="price">￥{{food.price}}</span>
                      <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <!--计算按钮外层控制定位-->
                  <div class="catcontorl-wrapper">
                    <cartcontrol :food="food"></cartcontrol>
                  </div>
              </div>
            </li>
          </ul>
        </li>
       </ul>
     </div>
    
    </div>
  <div class="shop">
      <shopcart ref="shopcart" :select-foods="selectFoods" :delivery-price="seller"></shopcart>
  </div>
    
</div>    

  

</template>
<script>
//鼠标高度计算
import BScroll from 'better-scroll';

//加减按钮
import cartcontrol from '../cartcontrol/cartcontrol.vue';

//底部购物车
import shopcart from '../shopcart/shopcart.vue';
const ERR_OK = 0;
export default{
 
	data(){
		return{
     goods:[],
     listHeight:[],//保存高度数据是一个累加的过程
     scrollY:0,//定义一个y值的变量利用bscroll的一个接口一个事件
     seller:[]
    }
  },
  computed:{
    currentIndex(){
      //变量初始化的
      for(let i=0; i < this.listHeight.length;i++){
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i +1 ];
        if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
          return i;
        }
      }
      return 0;
    },
    selectFoods(){
      let foods=[];
      this.goods.forEach((good)=>{
        good.foods.forEach((food)=>{
          if(food.count){
            foods.push(food);
          }
        });
      });
      return foods;
    }
  },
   
	components: {
    "shopcart":shopcart,
    "cartcontrol":cartcontrol
  	},
    events:{
      'cart.add'(target){
        this._drop(target)
      }
    },
  methods:{
    selectMenu(index,event){//点击事件
    if(!event._constructed){
      return;
    }
    //设置相应的节点
    let foodList=this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
    let el=foodList[index];
    this.foodsScroll.scrollToElement(el,300)
        //console.log(index)
    },
    _drop(target) {
      this.$refs.shopcart.drop(target)
    },
    _initScroll(){
      this.menuScroll=new BScroll(this.$refs.menuWrapper, {
        click:true
      });
      this.foodsScroll=new BScroll(this.$refs.foodsWrapper, {
        click:true,
        probeType:3//检测实时滚动的位置
      });
      this.foodsScroll.on('scroll',(pos) => {
        this.scrollY=Math.abs(Math.round(pos.y))
      })//监听一个事件当右侧滚动获得高度和左侧映射
    },
    _calculateHeight(){//用父元素找这个元素li检测每个li的高度,放到height里
      let foodList=this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
    let height=0;
    this.listHeight.push(height);
        for(let i=0;i<foodList.length;i++){
         let item=foodList[i];
           height += item.clientHeight
             this.listHeight.push(height)
      
    }
    }
  },
  created() {

    this.$http.get("/api/goods").then(response=>{
          response=response.body;
          if(response.errno===ERR_OK){
            this.goods=response.data;
            this.$nextTick(()=>{//初始化接口异步更新数据dom不会变化正确计算高度s虽然vue改变数据就可以渲染dom但是改变dom是在nexttick执行后改变的
               this._initScroll();
               this._calculateHeight();//定义一个计算高度的方法
            }) 
          }
        // console.log(response)
       })
             
              
  },
  mounted() {
    
  },
  
}	

</script>
<style>
.catcontorl-wrapper{
    position: absolute;
    right: -22px;
    bottom: -4px;
    font-size: 1.6rem;
}
.goodsList{
     overflow: hidden;
     position :fixed;
     top:223px;
     width:100%;
     height: 70%;
     z-index: 20;
     display: flex;
     flex-direction: column;
     }
.shop{
  height: 15%;
 
}
  .goods{
     display: flex;
     overflow: hidden;
     width:100%;
     height:85%;
     
  }
    .menu-wrapper {
      flex: 0 0 110px;
      width: 110px;
      background: #D0D0D0;
      
    }
     .foods-wrapper{
       flex: 1;
      
     }
   .menu-item{
     display:table;
     height:54px;
     width: 108px;
     line-height:14px;
     
    } 
   .current{
     background: white;
     position: relative;
     z-index: 10;
     margin-top: -1px;
     font-weight: 700;
     border-right: 2px solid red; 
    } 

   .icon{
      display:inline-block;
      vertical-align: top;
      width: 12px;
      height: 12px;
      margin-right: 4px;
      background-size: 12px 12px;
   }
   .text{
     display: table-cell;
     width: 90px;
     vertical-align: middle;
     font-size: 14px;
     border: 1px solid rgba(7,17,27,0.1);
     overflow: auto;
   }
  .food-list .title{
    height:40px;
    line-height: 26px;
    border-left:2px solid #d9dded ; 
    padding-top:5px;
    color: rgba(14,153,159,0.8);
    background: #F3F3F3;
  }

  .food-item{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 5px;
    border: 1px solid rgba(7,17,27,0.1);
  }
  .zuo{
    width:40%; 
  }
  .you{
    width:48%; 
  }
.food-item .zuo{
  position: relative;
}
 .zuo img{
   position: absolute;
   height:80px;
   width:80px;
   top: 50%;
   left: 50%;
   margin-top:-40px;
   margin-left:-40px;  

 }
 .content .desc{
   width: 99.33%;
   font-size: 14px;
   line-height: 17px;
 }
.content{
  position: relative;
  text-align: left;
  margin-top:6px; 
}
.content span{
  font-size: 12px;
  color: rgb(7,17,27);
}
.content h6{
  font-size: 15px;
  color: black;
}
.price{
  color:red !important;
  font-size: 14px !important;
}
</style>