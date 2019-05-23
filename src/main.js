import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import api from './api/index' // 导入api接口
import 'amfe-flexible/index.js'
import wx from 'weixin-js-sdk'
api.test.jssdk(location.href.split('#')[0]).then(res => {
  wx.config({
    debug: true, // 开启调试模式,
    appId: res.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
    timestamp: res.timestamp, // 必填，生成签名的时间戳
    nonceStr: res.noncestr, // 必填，生成签名的随机串
    signature: res.signature,
    jsApiList: ['scanQRCode', 'chooseImage']
  })
  wx.ready(() => {
    console.log('wx.ready')
    Vue.prototype.$wx = wx
  })
})
Vue.config.productionTip = false
Vue.prototype.$api = api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
