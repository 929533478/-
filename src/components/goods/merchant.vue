<template>
    <div class="app_merchant">
        <div class="div_box">
            <i class="mui-icon-extra mui-icon-extra-outline max3"></i>
            <span> 10:00-21:55</span>
            </div>

            <div class="div_box">
            <i class="mui-icon mui-icon-location max3"></i>
            <span>北京市朝阳区双龙南里204号楼二层204-11-3</span>
            </div>

            <div class="div_box">
            <i class="mui-icon mui-icon-phone max3"></i>
            <span>4009208809</span>
            </div>

            <div class="div_box">
            <i class="mui-icon-extra mui-icon-extra-notice max3"></i>
            <span>配送费现从9元优惠至5元,该优惠将在小票的本单优惠金额中立减。
            用餐高峰时间可能会延长送餐时间，请以实际送餐时间为准。如果需要Fapiao
            请在订单备注Fapiao,我们将为您提供电子Fapiao提取码。比萨尺寸为英寸,
            指烤盘的直径,仅供参考,实际规格请以克重为准。
            </span>
            </div>

            <div class="div_box">
            <span class="max3">
            <img src="../../img/invoice_b.png"  alt="">
            </span>
            <span>开发票</span>
            </div>
            
            <div class="div_box">
            <span class="max3">
            <img src="../../img/certification_b.png"  alt="">
            </span>
            <span>资质执照</span>
            </div>
            
            <div class="div_box">
            <span class="max3">
            <img src="../../img/pay_b.png"  alt="">
            </span>
            <span>支持在线支付</span>
            </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        getlist(){
            
        }
    },
    
    created(){
        this.getlist()
    }


}
</script>

<style>

.app_merchant .max3{
    width: 20%;
}
.app_merchant .max3 + span{
    width:80%;
}
.app_merchant .div_box{
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    border-bottom:1px solid #eee;
    padding:10px;
}
.app_merchant{
    padding:7px;
    font-size:13px;
    color: #4d4d4d;
    background-color: white;
}

</style>

