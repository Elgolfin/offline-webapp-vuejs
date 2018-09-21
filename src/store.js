import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    offline: 'up'
  },
  mutations: {
    switchState (state) {
      if (state.offline == 'up') {
        state.offline = 'down'
      } else {
        state.offline = 'up'
      }
    }
  },
  actions: {
    switchState (context) {
      context.commit('switchState')
    }
  }
})
