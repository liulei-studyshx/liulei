<template>
    <div class="rightContent">
        <div>
        <el-row>
            <el-col :span="7" class="pos-order" id="order-list">我是订单栏</el-col>
            <el-col :span="17">我是商品栏</el-col>
        </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name:'rightContent',
    data(){
        return{

        }
    },
    mounted:function(){
        var orderListHeight=document.body.clientHeight;
        document.getElementById("order-list").style.height=orderListHeight+'px'
    }
}
</script>
<style >
.rightContent{
    width: calc(100% - 80px);
    height:800px;
    background-color: #f3f3f3
}
.pos-order{
    background-color: #FAFAFC;
    border-right: 1px solid #c0ccda
}
</style>