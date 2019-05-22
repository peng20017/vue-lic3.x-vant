import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import axios from 'axios'
import api from './api/index' // 导入api接口
import 'amfe-flexible/index.js'
Vue.config.productionTip = false
// Vue.prototype.$http = axios
Vue.prototype.$api = api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
