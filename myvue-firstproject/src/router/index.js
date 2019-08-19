import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LeftNav from '@/components/common/leftNav'//左侧的组件
import RightContent from '@/components/common/rightContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'leftNav',
      name:'leftNav',
      component:LeftNav
    },
    {
      path:'rightContent',
      name:'rightContent',
      component:RightContent
    },
  ]
})
