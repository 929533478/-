<template> 
<div class="goodslist">
    <div class="mui-content mui-row mui-fullscreen">
			<div class="mui-col-xs-3">
                <div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
                    <a class="mui-control-item mui-active" href="#content1"><span @click="getnid1">热销</span></a>
				    <a class="mui-control-item" href="#content2" @click="getnid2">折扣 </a>
					<a class="mui-control-item" href="#content3" @click="getnid3">热菜</a>
					<a class="mui-control-item" href="#content4" @click="getnid4">特色菜</a>
					<a class="mui-control-item" href="#content4" @click="getnid3">超值套餐</a>
				</div>
			</div>
			<div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
			<div id="content1" class="mui-control-content mui-active">
				<ul class="mui-table-view">
				 <li class="mui-table-view-cell box_stan" v-for="time in list" :key="time.id">
					 <div class="standard2">
						<img :src="time.img_url" alt="">
					 </div>
					  <div class="standard6">
						<h4>{{time.title}}</h4>
						<span class="graytxt">已经售{{time.sales}}份</span>
                        <span class="redtxt">￥{{time.price}}</span>
					 </div>
				<div class="standard3">
				<div class="mui-numbox">
					<!--计算按钮-->
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub(time.id)">-</button>
					<input class="mui-input-numbox" type="number" :value="time.count" />
					<button class="mui-btn mui-btn-numbox-plus" type="button"  @click="goAdd(time.id)">+</button>
				</div>
					</div>	
				 </li>
			</ul>
			</div>
			<div id="content2" class="mui-control-content">
				<ul class="mui-table-view">
				 <li class="mui-table-view-cell box_stan" v-for="time in list" :key="time.id">
					 <div class="standard2">
						<img :src="time.img_url" alt="">
					 </div>
					  <div class="standard6">
						<h4>{{time.title}}</h4>
						<span class="graytxt">已经售{{time.sales}}份</span>
                        <span class="redtxt">￥{{time.price}}</span>
					 </div>
				<div class="standard3">
				<div class="mui-numbox">
					<!--计算按钮-->
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub(time.id)">-</button>
					<input class="mui-input-numbox" type="number" :value="time.count" />
					<button class="mui-btn mui-btn-numbox-plus" type="button"  @click="goAdd(time.id)">+</button>
				</div>
					</div>	
				 </li>
			</ul>
			</div>
			
<div id="content3" class="mui-control-content">
				<ul class="mui-table-view">
				 <li class="mui-table-view-cell box_stan" v-for="time in list" :key="time.id">
					 <div class="standard2">
						<img :src="time.img_url" alt="">
					 </div>
					  <div class="standard6">
						<h4>{{time.title}}</h4>
						<span class="graytxt">已经售{{time.sales}}份</span>
                        <span class="redtxt">￥{{time.price}}</span>
					 </div>
				<div class="standard3">
				<div class="mui-numbox">
					<!--计算按钮-->
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub(time.id)">-</button>
					<input class="mui-input-numbox" type="number" :value="time.count" />
					<button class="mui-btn mui-btn-numbox-plus" type="button"  @click="goAdd(time.id)">+</button>
				</div>
					</div>	
				 </li>
			</ul>
			</div>
<div id="content4" class="mui-control-content">
				<ul class="mui-table-view">
				 <li class="mui-table-view-cell box_stan" v-for="time in list" :key="time.id">
					 <div class="standard2">
						<img :src="time.img_url" alt="">
					 </div>
					  <div class="standard6">
						<h4>{{time.title}}</h4>
						<span class="graytxt">已经售{{time.sales}}份</span>
                        <span class="redtxt">￥{{time.price}}</span>
					 </div>
				<div class="standard3">
				<div class="mui-numbox">
					<!--计算按钮-->
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub(time.id)">-</button>
					<input class="mui-input-numbox" type="number" :value="time.count" />
					<button class="mui-btn mui-btn-numbox-plus" type="button"  @click="goAdd(time.id)">+</button>
				</div>
					</div>	
				 </li>
			</ul>
			</div>


			</div>
		  </div>
		  <!--底部结算-->
		<div class="box_foot">
				<div class="box_foot1">
					<div class="cart">
						<img src="../../img/menu06.png" alt="">
						<span class="footsize">共￥{{getsubtotal}}元</span>
					</div>
					
				</div>
				<div class="box_foot2">
					<span class="footsize">差20元起送</span>
					
				</div>
		</div>



		</div>	
</template>
<script>
export default {
    data(){
        return {
		  nid:1,
		  list:[]
		  
		}
    },
    methods:{
		goSub(id){
			 for(var time of this.list){
             if(time.id == id){
                if(time.count<=0)break;
				time.count--;
				}
			}
		},
		goAdd(id){
			
			console.log(id);
            //当前id对象
            for(var time of this.list){
                if(time.id==id){
                    time.count++;
                }
            }
		},
		getnid1(){
			this.nid=1
			this.getdetail()
		},
		getnid2(){
			this.nid=2
			this.getdetail()
		},
		getnid3(){
			this.nid=3
			this.getdetail()
		},
		getnid4(){
			this.nid=4
			this.getdetail()
		},
		getnid5(){
			this.nid=3
			this.getdetail()
		},
      getdetail(){
			this.$http.get("goods/bolist?nid="+this.nid).then(result=>{
				this.list=result.body.msg
				console.log(this.list)
			})
			
            
        }
    },
    created(){
        this.getdetail()
        
	},
	computed:{
        //计算属性计算多个数据的变化
        getsubtotal:function(){
            var sum = 0;
            for(var item of this.list){
                sum += item.price * item.count;
            }
            return sum;
		}
		
    }
    
}
</script>
<style>
.box_foot2 span{
	display: block;
	margin:15px 15px;
}
.cart img{
	text-align: center;
	width:50px;
	height:50px;
	margin:-9px 15px;
}
.footsize{
	color:#fff;
	font-size:15px;
}
.box_foot1{
	width:60%;
	background-color: #484d54;
}
.box_foot2{
	width:40%;
	background-color:#70767e;
	
}
.box_foot{
	height:50px;
	width:100%;
	display:flex;
	flex-flow:wrap;
	justify-content:center;
	text-align:left;
	z-index: 2;
	position:fixed;
	bottom: 1px;
}
.standard3 .mui-numbox{
	margin-top:10px;
	width:107px;
	height:40px;
}
.standard3 .mui-numbox input{
	font-size: 14px;
}
.standard2{
	width:20%;
}
.standard6{
	width:40%;
	padding-left:8px;
}
.graytxt{
	color:gray;
}
.redtxt{
	color:red;
}
.standard6 span{
font-size:13px;
display:block;
}
.standard3{
	width:40%;
}
.standard2 img{
	width:50px;
	height:50px;
}
.box_stan{
	display: inline-block;
	display:flex;
	flex-flow:wrap;
	justify-content: center;
	text-align: left;
	padding: 11px 10px;
}
.mui-row.mui-fullscreen>[class*="mui-col-"] {
				height: 100%;
			}
			.mui-col-xs-3,
			.control-content {
				overflow-y: auto;
				height: 100%;
			}
			.mui-segmented-control .mui-control-item {
				line-height: 50px;
				width: 100%;
			}
			.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
				background-color: #fff;
			}
	
</style>

