<template>
    <div class="leftnav">
        <ul>
            <li>
                <i class="icon iconfont icon-home"></i>
                <p>主页</p>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name: 'leftNav',
 
}
</script>
<style>
    .leftnav{
        width: 80px;
        height: 800px;
        background-color: blue;
        float: left;
    }
       .iconfont{
       font-size:24px;
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
        align-items: center
    }
</style>