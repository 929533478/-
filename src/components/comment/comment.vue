<template>
    <div class="app_commentlist">
        
        <ul class="mui-table-view"><!--id循环速度快-->
       
				<li v-for="item in comlist" :key="item.id" @click="togoods(item.id)" class="mui-table-view-cell mui-media">
					
						<img class="mui-media-object mui-pull-left" :src=item.img_url>
						<div class="mui-media-body">
							<h5>{{item.title}}</h5>

							<p class='mui-ellipsis'>
                            月销量:{{item.sales}}份
                            </p>
                            <p>
                            起送费{{item.fee}} <span>|</span>配送费{{item.freight}}<span>|</span> <span>{{item.ctime}}分钟</span>
                            </p>
                            </div>
                            
						
					
				</li>
                
            </ul>
            
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        togoods(id){
             this.$router.push({path:"/goods/"+id})
             //console.log(this.comlist)
        }
    },
    props:["comlist"],
    created(){
        
    }


}
</script>

<style>
.app_commentlist h5{
    font-size: 20px;
    color:#544b4b;
}
.app_commentlist .mui-table-view img{
    max-width:100px;
    height:70px;
}
.app_commentlist .mui-media-body .mui-ellipsis{
font-size: 11px;
}
.app_commentlist div.mui-media-body p:last-child{
font-size: 12px;
}
.app_commentlist div.mui-media-body p:last-child span{
    padding: 7px;
}
.app_commentlist div.mui-media-body p:last-child span:last-child{
    color:red;
}
</style>

