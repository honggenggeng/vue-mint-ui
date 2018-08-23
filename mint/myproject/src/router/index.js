import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import one from '@/components/one'
import loadmore from '@/components/loadmore'
import InfiniteScroll from '@/components/InfiniteScroll'
import Messagebox from '@/components/Messagebox'
import Actionsheet from '@/components/Actionsheet'
import Checklist from '@/components/Checklist'
import Popup from '@/components/Popup'
import Swipe from '@/components/Swipe'
import Lazyload from '@/components/Lazyload'
import father from '@/components/father'
import son from '@/components/son'
import Range from '@/components/Range'
import Picker from '@/components/Picker'
import Datetimepicker from "@/components/Datetimepicker"
import IndexList from '@/components/IndexList'
import Tabbar from '@/components/Tabbar'
import Navbar from '@/components/Navbar'
import Button from "@/components/Button"
import Cell from '@/components/Cell'
import CellSwipe from '@/components/CellSwipe'
import Spinner from '@/components/Spinner'
import Search from '@/components/Search'
import Field from "@/components/Field"
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
    },
    {
      path: '/Messagebox',
      name: 'Messagebox',
      component: Messagebox,
      meta:{
        title:'消息框'
      }
    },
    {
      path: '/Actionsheet',
      name: 'Actionsheet',
      component: Actionsheet,
      meta:{
        title:'行动表'
      }
    },
    {
      path: '/Checklist',
      name: 'Checklist',
      component: Checklist,
      meta:{
        title:'选择框'
      }
    },
    {
      path: '/Popup',
      name: 'Popup',
      component: Popup,
      meta:{
        title:'托出框'
      }
    },
    {
      path: '/Swipe',
      name: 'Swipe',
      component: Swipe,
      meta:{
        title:'轮播'
      }
    },
    {
      path: '/Lazyload',
      name: 'Lazyload',
      component: Lazyload,
      meta:{
        title:'懒加载'
      }
    },
    {
      path: '/father',
      name: 'fathser',
      component: father,
      meta:{
        title:'父组件'
      }
    },
    {
      path: '/son',
      name: 'son',
      component: son,
      meta:{
        title:'子组件'
      }
    },
    {
      path: '/Range',
      name: 'Range',
      component: Range,
      meta:{
        title:'范围'
      }
    },
    {
      path: '/Picker',
      name: 'Picker',
      component: Picker,
      meta:{
        title:'选择器'
      }
    },
    {
      path: '/Datetimepicker',
      name: 'Datetimepicker',
      component: Datetimepicker,
      meta:{
        title:'日期时间选择器'
      }
    },
    {
      path: '/IndexList',
      name: 'IndexList',
      component: IndexList,
      meta:{
        title:'索引列表'
      }
    },
    
    {
      path: '/Tabbar',
      name: 'Tabbar',
      component: Tabbar,
      meta:{
        title:'Tabbar'
      }
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar,
      meta:{
        title:'Navbar'
      }
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button,
      meta:{
        title:'Button'
      }
    },
    {
      path: '/Cell',
      name: 'Cell',
      component: Cell,
      meta:{
        title:'Cell'
      }
    },
    {
      path: '/CellSwipe',
      name: 'CellSwipe',
      component: CellSwipe,
      meta:{
        title:'CellSwipe'
      }
    },
    {
      path: '/Spinner',
      name: 'Spinner',
      component: Spinner,
      meta:{
        title:'微调缓冲'
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      meta:{
        title:'搜索'
      }
    },
    {
      path: '/Field',
      name: 'Field',
      component: Field,
      meta:{
        title:'各种表单框'
      }
    },
  ]
})
