<template>
    <div class="app_discuss">
        <h5>欢迎评论</h5>
        <textarea placeholder="请输入评论的内容(最多吐槽120个字)" v-model="msg" cols="2" rows="5"></textarea>
        <input type="text" placeholder="请输入菜品" v-model="caipin">
        <!--<input type="file" id="imgUploadBtn" />-->
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <h5>用户评价</h5>
          <ul>
             <li class="" v-for="item in list" :key="item.id">
                <div class="onebox">
                <img :src="item.img_url" alt="">
                </div>
            <div class="towbox">
                <div><span>{{item.username}}</span> <span>{{item.ctime|dateFormat}}</span></div>
                    <p>送餐速度:31分钟</p>
                    <p>{{item.content}}</p>
                    <p>{{item.variety}}</p>
                </div>
             </li>
           </ul>
           
    </div>
</template>
<script>
import {Toast} from "mint-ui";
export default {
    data(){
        return {
            list:[],
            msg:"",
            caipin:''
        }
    },
    methods:{
        postComment(){
            
            var username="匿名";
            var nid= this.nid;
            var content = this.msg;
            var variety=this.caipin;
            var img_url="http://127.0.0.1:3000/img/combo/hb.png";
           // console.log(username+":"+nid+":"+content+":"+variety);
            var url="comment/saveComment";
            var obj={username:username,nid:nid,content:content,variety:variety,img_url:img_url}
            this.$http.post(url,obj).then(result=>{
            if(result.body.code==1){
                this.msg="";this.caipin=""
                Toast(result.body.msg)
                
            }else{
                Toast(result.body.msg);
            }
            this.getobserver()
            })
            
        },
        getobserver(){
            this.$http.get("comment/observer?nid="+this.nid).then(result=>{
                this.list=result.body.msg
               // console.log(result)
            })
            }
       
    },
   
    created(){
        this.getobserver()
    },
    props:["nid"]


}
</script>

<style>

.app_discuss h5{
    margin:15px;
}
.app_discuss ul{
    list-style: none;
    padding:0;
    background-color: white;
}
.app_discuss li{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:15px 0 10px;
    border-bottom: solid 1px #dbdcde;
}
.onebox{
    width:25%;
    height:50px;
}
.onebox img{
    margin-left: 25px;
    border-radius:50%;
    width:50px;
    height:50px;
}
.towbox{
     width:75%;
     padding:10px;
}
.app-container{
    padding-bottom: 0px;
}
.towbox div:first-child{
    font-size: 15px;
    color:#999;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5xp;
}
.towbox :nth-child(3){
    color:black;
    font-size: 15px;
}
</style>

