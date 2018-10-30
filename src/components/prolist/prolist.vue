<template>
    <div class="app_prolist">
    <searchtitle></searchtitle>
    <comment-box class="pro_ment" :comlist="commentlist"></comment-box>
    <mt-button type="primary" size="large" @click="getMore">加载更多.....</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
import comment from '../comment/comment.vue';
import searchtitle from "../search/searchtitle.vue"
   export default{

        
        data(){
            return{
              
                trans:{},
                
                commentlist:[],
                pageInedx:0
                
            }
        },
        methods:{
            search(){
             this.$router.push({path:"/search"})
           },
           back(){
                this.$router.push({path:"/"})
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
            }
            
            
        },
        created(){
            this.getMore();
            
        },
        components:{
        "comment-box":comment,
        "searchtitle":searchtitle
        },
        mounted(){
             
        }
    }
</script>

<style>

.pro_ment{
    margin-top: 15px;
}

</style>

