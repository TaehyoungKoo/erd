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
    word: [
      {
        name: 'word1',
        description: 'word1 description',
      },
      {
        name: 'word2',
        description: 'word2 description',
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
