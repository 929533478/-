<template>
    <div class="app_search">
        
       <div class="wailogo">
      <img class="img1" src="../../img/true.png" @click="back"  alt="">
       <input type="text" placeholder="请输入搜索的商品" ref="mytxt" class="inputs" v-model="breeds">
       
       <img class="simg" src="../../img/search.jpg"  alt="" @click="ser">
       
   </div>
   
   <div class="host-box">
       <h4>热门搜索</h4>
       <span  @click="gettext(item.sname)" class="app_host" v-for="item in host" :key="item.id">{{item.sname}}</span>
   </div>
    
   <div class="pb" :class="{'pbox':len>0}">
    <p @click="opent(item.title)" v-for="(item,index) in namelist" :key="index" class="plist" v-show="len>0">{{item.title}}</p>
    </div>
     <div class="bjtp">
     <img src="../../img/timgbj.jpg" alt="">
     </div>
    </div>
</template>
<script>
import {Toast} from "mint-ui";

   export default{
        data(){
            return{
                namelist:[],
                len:'0',
                breeds:"",
                host:[
                    {"id":1,"sname":"肯德基"},
                    {"id":2,"sname":"张亮麻辣烫"},
                    {"id":3,"sname":"大碗居"},
                    {"id":4,"sname":"麻辣鱼"},
                    {"id":5,"sname":"田老师红烧肉"},
                    {"id":6,"sname":"必胜客"},   
                    {"id":7,"sname":"张姐烤肉拌饭"},
                    {"id":8,"sname":"粥里香"}
                    ]
            }    
         },
        
        methods:{
            ser(){//把值传给搜索商品的列表
            if(this.$refs.mytxt.value.length==0){
                Toast('请输入店铺名');
                return;
            }
                 this.$router.push({path:"/searchList/"+this.$refs.mytxt.value})
            
            },
            opent(title){
            this.$refs.mytxt.value=title
            },
            gettext(sname){
              this.$refs.mytxt.value=sname
            },
            search(){
               //搜索商品按名称查询
                var url="comment/search?tname="+this.breeds
                 this.$http.get(url).then(result=>{
                    // console.log(result)
                   this.namelist=result.body.msg
                     //console.log(this.namelist)
                   // p1.innerHTML.result.tatle
                    if(result.body.code==1){
                       this.list=result.body.msg;
                   }else{
                       Toast('商品加载失败........')
                   }
                    
                    //console.log(result)
                })
            },
        back(){//返回按钮跳转
                this.$router.push({path:"/"})
           },
        },
        created(){
            
        },
        watch:{
        breeds(){
            this.search();//执行请求函数
            //获取输入框的长度
            var inpu=document.querySelector(".inputs")
            this.len=inpu.value.length
            
        }
        }
       
    }
</script>

<style>
.app_search .bjtp img{
    margin-top:150px;
    width: 100%;
}
.pb{
    height: 0px;
   transition: all 0.5s;
}

  
.plist{
    padding: 10px;
    font-size:20px;
    color:white;
}
.wailogo .simg{
    margin-left:6px;
    padding-top: 6px;
    width: 13%;
    height: 50px
    
}
.host-box h4{
    background: #eee;
    padding:6px; 
}
.host-box{
    
    position: relative;
    top: 30px;
}
.app_host{
    font-weight: 700;
    font-size: 13px;
    display: inline-block;
    margin:5px 8px 5px 17px;
    padding:8px;
    
    border: 1px solid #000;
    border-radius: 5px;
    
}
.pbox{
    position: relative;
    top:-150px;
    padding: 20px;
   
    height: 100%;
    color:black;
    background: rgba(0, 0, 0,0.5);
    border-radius: 6px;
}
.app_search{
    position:fixed;
    width: 100%;
  
   /* background-image: url(../../img/mohubj.jpg);*/
   background: #fff;
    background-size: 100%;
    z-index: 10;
    
    height: 700px;
}
.wailogo{
        height:60px;
        background: #fff;
        display: flex;
        position: fixed;
        z-index: 50;
        top: -1px;
    }
.wailogo .img1{
    margin:8px 15px 0 5px;
    padding: 1px;
    width: 10%;
    height: 40px;
    border:3px solid #666;
    border-radius:50% 
        
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

