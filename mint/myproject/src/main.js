// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import One from './components/one'
import router from './router'
import 'mint-ui/lib/style.css'
import ZyHeader from './module/ZyHead'
import PopUp from './module/PopUp'
import ZyOpinion from './module/Opinion' //体检类型选项
import Son from './components/son'
import AjaxRequest from './module/AjaxRequest'
import Ajax from './module/Ajax'
import ajaxtwo from './module/ajaxtwo'


Vue.config.productionTip = false
Vue.use(AjaxRequest)
Vue.use(ajaxtwo)
Vue.use(Ajax)
Vue.component('App',App)
Vue.component('Son',Son)
Vue.component('zyHeader',ZyHeader)
Vue.component("popUp",PopUp)
Vue.component("zyOpinion",ZyOpinion)
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)
import { Loadmore } from 'mint-ui'
Vue.component('mtLoadmore',Loadmore)
import { Lazyload } from 'mint-ui'
Vue.use(Lazyload)
// import { Toast } from 'mint-ui'
// Vue.component(Toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  template: '<App/>'
})
