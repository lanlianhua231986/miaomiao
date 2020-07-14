import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Movie from '@/views/movie/index'
// import Yingyuan from '@/views/yingyuan/index'
// import Mine from '@/views/mine/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/movie'
    },
    {
      path: '/movie',
      // name: 'Movie',
      component:()=>import('@/views/movie/index'),
      redirect:'/movie/hotplaying',
      children:[
        {path: "", redirect: "hotplaying"},
        {
          path:'city',  //相对路径
          component:()=>import('@/components/city/index'),
        },
        {
          path:'hotplaying',  //相对路径
          component:()=>import('@/components/hotplaying/index'),
        },
        {
          path:'commingsoon',  //相对路径
          component:()=>import('@/components/commingsoon/index'),
        },
        {
          path:'search',  //相对路径
          component:()=>import('@/components/search/index'),
        },
      ]
    },
    {
      path: '/yingyuan',
      name: 'Yingyuan',
      component:()=>import('@/views/yingyuan/index')
    },
    {
      path: '/mine',
      name: 'Mine',
      component:()=>import('@/views/mine/index')
    }


  ]
})
