<template>
    <div class="app_user">
    <searchtitle></searchtitle>
    <div class="user-top">
        <h4>用户登录</h4>
       
       
       
        <form action="">
        <input type="text" v-model="uname" placeholder="请输入用户名">
        
        <input type="password" name="upwd" v-model="upwd" required autocomplete='tel' placeholder="请输入用户密码">
        
        </form>
        <mt-button type="primary" size="large" @click="login">登录</mt-button>
         <mt-button type="danger" size="large" @click="register">马上注册</mt-button>
    </div>

    </div>
</template>
<script>
import searchtitle from "../search/searchtitle.vue"
import {Toast} from "mint-ui";

   export default{

        
        data(){
            return{
              userinp:'' ,
              uname:'',
              upwd:'' ,
              code:'',
              msg:''
            }
        },
        methods:{
            register(){
                this.$router.push({path:"/register"})
            },
            login(){
                 var uname=this.uname;
                 var upwd=this.upwd;
                 var url="goods/login";
                 var obj={uname:uname,upwd:upwd}
             this.$http.post(url,obj).then(result=>{
                    //console.log(result.body.code)
                    this.code=result.body.code
                    this.msg=result.body.msg;
                    if(this.code==200){
                        this.$router.push({path:"/usercontent"})
                        this.$store.commit('getname',this.uname)//提交共享数据
                        //console.log(this.$store.getters.opCount)//接受共享数据
                        Toast('欢迎回来'+this.uname);
                        return;
                        
                    }else{
                        Toast(this.msg);
                        return;
                    }
                })
            }
           
        },
        components:{
        "searchtitle":searchtitle
        }, 
            
          watch:{
              userinp(){
                 
        //console.log(this.userinp)
              }
          }  
        
    }
</script>

<style>

/*.fade-enter-active, .fade-leave-active {

  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  //.fade-leave-active below version 2.1.8{
  opacity: 0;
}*/
.app_user{
     position: fixed;
     height: 628px;
     background-image: url("../../img/dlzc2.jpg");
     background-size: 114%;
}
.user-top button{
    width: 90%;
    margin-top: 10px;
    margin-left: 15px;
}
.user-top{
    position: relative;
    top: 100px;
    margin: 15px;
    text-align: center;
}
.user-top input{
    width: 90%;
    padding: 10px;
    margin-top:10px;
   
}
.user-top span{
   width: 70px;
    height: 20px;
    color: red;
    transition: all .5s;
}
</style>

