<template>
    <div class="leftnav">
        <ul>
            <li>
                <i class="icon iconfont icon-home"></i>
                <p>收银</p>
            </li>
             <li>
                <i class="icon iconfont icon-settings"></i>
                <p>店铺</p>
            </li>
             <li>
                <i class="icon iconfont icon-child"></i>
                <p>商品</p>
            </li>
             <li>
                <i class="icon iconfont icon-brightness"></i>
                <p>会员</p>
            </li>
             <li>
                <i class="icon iconfont icon-guarantee"></i>
                <p>统计</p>
            </li>
             <li>
                <i class="icon iconfont icon-guarantee"></i>
                <p>设置</p>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name: 'leftNav',
    data(){return{

    }},
    mounted:function(){
        var clientHeight=document.body.clientHeight;
        document.getElementsByClassName('leftnav')[0].style.height=clientHeight+'px'
    }
 
}
</script>
<style>
    .leftnav{
        width: 80px;
        background-color: blue;
        float: left;
    }
  
    ul{
        color: #ffffff;
        font-size: 16px;
        width: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    li{
        width: 80px;
        height: 80px;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #ffffff
    }
    .iconfont{
        font-size:36px;
    }
</style>