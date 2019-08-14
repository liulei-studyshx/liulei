<template>
  <div id="app">
  
    <LeftNav></LeftNav>
    <RightContent></RightContent>

  </div>
</template>

<script>
import LeftNav from '@/components/common/leftNav'//左侧的组件
import RightContent from '@/components/common/rightContent'
export default {
  name: 'App',
 components:{
   LeftNav,
   RightContent
 }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
