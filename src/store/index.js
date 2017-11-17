import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    in_theaters: {},
    top250: {}
  },
  actions,
  mutations: {
    in_theaters (state, data) {
      state.in_theaters = data
    },
    TOP250 (state, data) {
      state.top250 = data
    }
  },
  getters
})
