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
        type: 'noun',
        word: '사원',
        english: 'Employee',
        englishAbbreviation: 'EMP',
        definition: '사원에 대한 정의',
      },
      {
        type: 'noun',
        word: '부서',
        english: 'Department',
        englishAbbreviation: 'DEPT',
        definition: '부서에 대한 정의',
      },
      {
        type: 'verb',
        word: '저장',
        english: 'save',
        englishAbbreviation: '',
        definition: '',
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
