/* global Offline */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('@/offline.0.7.14.min.js')

Offline.options = {
  checkOnLoad: false,
  interceptRequests: false,
  requests: false,
  game: false
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
