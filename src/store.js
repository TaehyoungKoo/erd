import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entity: [
      {
        name: 'User',
        description: 'user description',
      },
      {
        name: 'Role',
        description: 'role description',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
