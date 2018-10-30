<template>
  
 <div class="app_searchList">
     <searchtitle></searchtitle>
   
 <comment-box class="pro_ment" :comlist="commentlist"></comment-box>
    <div class="bjimg">
        <img src="../../img/timg.jpg" alt="">
    </div>
    
    </div>
    
</template>
<script>
import {Toast} from "mint-ui";
import comment from '../comment/comment.vue';
import searchtitle from "../search/searchtitle.vue"
   export default{

        
        data(){
            return{
                tname:this.$route.params.tname,
                trans:{},
                commentlist:[],
               
                
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
                
                
                var url="comment/searchList?tname="+this.tname;
                this.$http.get(url).then(result=>{
                    
               this.commentlist=result.body.msg
               // console.log(this.commentlist)
                
                })
            }
            
            
        },
        created(){
           this.getMore()
            //console.log(this.tname)
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
.app_searchList{
    height: 700px;
    background: #fff;
}
.bjimg{
    
    padding: 60px;
    text-align: center;
    margin: 0 auto;
    
}


.pro_ment{
    margin-top: 15px;
}

</style>

