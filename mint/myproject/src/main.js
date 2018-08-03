// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import One from './components/one'
import router from './router'
import 'mint-ui/lib/style.css'
import ZyHeader from './module/ZyHead'




Vue.config.productionTip = false
Vue.component('App',App)
Vue.component('zyHeader',ZyHeader)
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import { Loadmore } from 'mint-ui'
Vue.component('mtLoadmore',Loadmore)
// import { Toast } from 'mint-ui'
// Vue.component(Toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  template: '<App/>'
})
