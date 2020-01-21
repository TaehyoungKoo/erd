import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import SinglePageSample from '@/components/SinglePageSample.vue'

import {
  enterInput,
  findButton,
  findLabel,
  findInputById
} from './elements'


describe('샘플화면', () => {
  let page

  before(function () {
    page = shallowMount(SinglePageSample)
  });

  describe.skip('곱하기', () => {
    it('두 수(10 X 10)의 곱셈결과(100)가 표시된다', () => {
      enterInput(page, 'inputA', 2)//GIVEN
      enterInput(page, 'inputB', 3)
      const inputA = findInputById(page, 'inputA')//GIVEN
      const inputB = findInputById(page, 'inputB')
      console.log(inputA.element.value)
      console.log(inputB.element.value)

      const button = findButton(page, '곱하기')//WHEN
      button.trigger('click')

      const resultLabel = findLabel(page, 6)//THEN
      expect(resultLabel).to.be.ok
    })
  })
})