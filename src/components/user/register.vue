<template>
    <div class="app_reg">
    <searchtitle></searchtitle>
    <div class="reg-top">
        <h4>用户注册</h4>
        
        <span class="spanunm"></span><br>
       
        <input type="text" name="uname" v-model="uname" minlength="3" maxlength="8"  placeholder="请输入用户名">
        <input type="password" name="upwd" v-model="upwd" required autocomplete='tel' minlength="6" maxlength="12" placeholder="请输户密码">
        <input type="password" name="towupwd" v-model="towupwd" required autocomplete='tel' placeholder="请确认密码">
        <input type="email" name="email" v-model="email" placeholder="请输入邮箱">
        <input type="phone" name="phone" v-model="phone" minlength="11" maxlength="11" placeholder="请输入手机号">
         <button type="button" class="butzc" @click="register">注册</button>
 
        
        
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
              towupwd:'',
              email:'',
              phone:'',
              code:'',
              msg:''
            }
        },
        methods:{
          register(){
                 var uname=this.uname;
                 var upwd=this.upwd;
                 var towupwd=this.towupwd;
                 var email=this.email;
                 var phone=this.phone;
                 
                 if(this.towupwd!=this.upwd){
                     Toast("两次密码不一致");
                     return;
                 }
                 var url="goods/register";
                 var obj={uname:uname,upwd:upwd,email:email,phone:phone}
             this.$http.post(url,obj).then(result=>{
                  //  console.log(result.body.code)
                    this.code=result.body.code
                    this.msg=result.body.msg;
                    if(this.code==200){
                        this.$router.push({path:"/user"})
                        Toast('注册成功去登录');

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
              uname(){
                  var span=document.querySelector(".spanunm")
                  var url="goods/selectunm";
                  var uname=this.uname
                  var obj={uname:uname}
                  
                  this.$http.post(url,obj).then(result=>{
                     // console.log(uname.length)
                      if(uname.length==0){
                    span.innerHTML="校验用户名";
                    return;
                      }
                  span.innerHTML=result.body.msg
                      })
                      
                
                  
              }
              
          }  
        
    }
</script>

<style>
.butzc{
    background: #6BBBC3;
}
.app_reg{
    position: fixed;
    height: 628px;
    background-image: url("../../img/dlzc2.jpg");
    background-size: 114%;
}

/*.fade-enter-active, .fade-leave-active {

  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  //.fade-leave-active below version 2.1.8{
  opacity: 0;
}*/
.reg-top button{
    width: 90%;
    margin-top: 10px;
    margin-left: 0px;
}
.reg-top h4{
    color: #151515;
    font-weight: 600;
    font-size: 20px;
}
.reg-top{
    position: relative;
    top: 65px;
    text-align: center;
    padding: 20px;
}

.reg-top input{
    width: 90%;
    padding: 10px;
    margin-top:10px;
    
    color:#000;
    border:1px solid white; 
}
 /*.reg-top input::-webkit-input-placeholder {
      
        color:#000;
       
       font-size: 13px;
       font-weight: 600;
    }*/

.reg-top span{
   width: 70px;
    height: 20px;
    color: red;
    transition: all .5s;
}
</style>

