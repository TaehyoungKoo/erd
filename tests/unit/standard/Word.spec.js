import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
//import {store} from '@/store.js'
import Vuex from 'vuex'

import Word from '@/components/standard/Word.vue'
import { hasPageTitle, findLabel, hasGridHeader, hasGridRow, findInputById, findRadioButton, findTextareaById } from '../elements'

describe.only('Domain', () => {
  let page
  
  before(function () {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const testStore = new Vuex.Store({
      state: {
        word: [
          { type: 'noun', word: 'word noun 1'},
          { type: 'verb', word: 'word verb 2'},
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
      expect(hasGridRow(page, 'word noun 1')).to.equal(true)
      expect(hasGridRow(page, 'word verb 2')).to.equal(true)
    })
  })

  it.skip('Field(Type) title 및 radio group 표시, Default checked : Noun', () => {
    expect(findLabel(page, 'Type')).to.be.ok

    const radioButtonNoun = findRadioButton(page, 'Noun')
    const radioButtonVerb = findRadioButton(page, 'Verb')

    expect(radioButtonNoun).to.be.ok
    expect(radioButtonVerb).to.be.ok

    expect(radioButtonNoun.element.checked).to.equal(true)
    expect(radioButtonVerb.element.checked).to.equal(false)
  })

  it('Field(Word) title 및 input 표시', () => {
    expect(findLabel(page, 'Word')).to.be.ok
    expect(findInputById(page, 'word')).to.be.ok
  })

  it('Field(English) title 및 input 표시', () => {
    expect(findLabel(page, 'English')).to.be.ok
    expect(findInputById(page, 'english')).to.be.ok
  })

  it('Field(English Abbreviation) title 및 input 표시', () => {
    expect(findLabel(page, 'English Abbreviation')).to.be.ok
    expect(findInputById(page, 'englishAbbreviation')).to.be.ok
  })

  it('Field(Definition) title 및 input 표시', () => {
    expect(findLabel(page, 'Definition')).to.be.ok
    expect(findTextareaById(page, 'definition')).to.be.ok
  })
})