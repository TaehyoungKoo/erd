import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'

import Attribute from '@/components/Attribute.vue'

import {
  findLabel, 
  findRadioButton, 
  findCheckboxByValue,
  findCheckbox,
  checkCheckbox,
  findInputById,
  findTextareaById,
  selectRadioButton,
  unCheckCheckbox,
} from './elements'

describe('Attribute page 속성화면', () => {
  let page

  before(function () {
    page = shallowMount(Attribute)
  });

  beforeEach(function () {
  });

  describe('Screen elements 화면구성요소', () => {
    it('display page title 화면제목이 표시된다', () => {
      expect(page.text()).to.include('Attribute')
    })

    describe('속성명 제목 및 Input box', () => {
      it('속성명 field title이 표시된다', () => {
        const label = findLabel(page, 'Name')
        expect(label).to.be.ok
      })

      it('속성명 input box가 표시된다', () => {
        const input = findInputById(page, 'name')
        expect(input).to.be.ok
      })
    })

    it('주식별자 체크박스가 표시된다(기본값 : unchecked)', () => {
      const checkbox = findCheckbox(page, 'Primary Identifier')
      
      expect(checkbox.exist).to.equal(true)
      expect(checkbox.checked).to.equal(false)
    })

    it('NOT NULL 체크박스가 표시된다(기본값 : unchecked)', () => {
      const checkbox = findCheckbox(page, 'NOT NULL')

      expect(checkbox.exist).to.equal(true)
      expect(checkbox.checked).to.equal(false)
    })

    //외부식별자(Foreign Identifier)

    describe('속성설명 제목 및 Input box', () => {
      it('속성설명 field title이 표시된다', () => {
        const label = findLabel(page, 'Description')
        expect(label).to.be.ok
      })

      it('속성설명 textarea가 표시된다', () => {
        const textarea = findTextareaById(page, 'description')
        expect(textarea).to.be.ok
      })
    })
  })

  describe('주식별자와 NOT NULL', () => {
    context('주식별자가 체크되었을 때', () => {
      it('NOT NULL 체크박스가 check되고 disable된다', () => {
        checkCheckbox(page, 'Primary Identifier')//GIVEN

        const checkboxNotNull = findCheckbox(page, 'NOT NULL')//WHEN
        
        expect(checkboxNotNull.checked).to.equal(true)//THEN
        expect(checkboxNotNull.disabled).to.equal(true)
      })
    })

    context('주식별자가 체크되지 않았을 때', () => {
      it('NOT NULL 체크박스가 uncheck되고 enable된다', () => {
        unCheckCheckbox(page, 'Primary Identifier')//GIVEN

        const checkboxNotNull = findCheckbox(page, 'NOT NULL')//WHEN

        expect(checkboxNotNull.checked).to.equal(false)//THEN
        expect(checkboxNotNull.disabled).to.equal(false)
      })
    })
  })

})