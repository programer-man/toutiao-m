import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vant组件
import Vant from 'vant'
import 'vant/lib/index.css'

// 全局样式
import './style/index.less'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
