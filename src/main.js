import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('@/offline.0.7.14.min.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
