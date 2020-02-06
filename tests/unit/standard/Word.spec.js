import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
//import {store} from '@/store.js'
import Vuex from 'vuex'

import Word from '@/components/standard/Word.vue'
import { hasPageTitle, hasGridHeader, hasGridRow } from '../elements'

describe.only('Domain', () => {
  let page
  
  before(function () {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const testStore = new Vuex.Store({
      state: {
        word: [
          {name: 'word test 1'},
          {name: 'word test 2'},
        ],
      }
    })

    page = shallowMount(Word, {
      mocks: {$store: testStore}
    })
  })

  it('화면 제목(Word) 표시', () => {
    expect(hasPageTitle(page, 'Word')).to.equal(true)
  })

  describe('Grid', () => {
    it('Grid header(Word) 표시', () => {
      expect(hasGridHeader(page, 'Word')).to.equal(true)
    })

    it('Grid row 표시', () => {
      expect(hasGridRow(page, 'word test 1')).to.equal(true)
      expect(hasGridRow(page, 'word test 2')).to.equal(true)
    })
  })
})