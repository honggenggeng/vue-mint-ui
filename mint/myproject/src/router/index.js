import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import one from '@/components/one'
import loadmore from '@/components/loadmore'
import InfiniteScroll from '@/components/InfiniteScroll'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/one',
      name: 'one',
      component: one,
      meta:{
        title:'one'
      }
    },
    {
      path: '/loadmore',
      name: 'loadmore',
      component: loadmore
    },
    {
      path: '/InfiniteScroll',
      name: 'InfiniteScroll',
      component: InfiniteScroll,
      meta:{
        title:'InfiniteScroll'
      }
    }
  ]
})
