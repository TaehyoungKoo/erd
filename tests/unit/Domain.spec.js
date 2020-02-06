import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'

import Domain from '@/components/Domain.vue'

import {
  hasPageTitle,
  findLabel,
  findDropdownlist,
  getOptionList,
  findInputById,
  clickButton,
  enterInput,
} from './elements'

describe.only('Domain', () => {
  let page

  before(function () {
    page = shallowMount(Domain)
  });

  it('화면 제목(Domain) 표시', () => {
    expect(hasPageTitle(page, 'Domain')).to.equal(true)
  })

  describe('Domain Type', () => {
    it('유형 field title 표시', () => {
      const label = findLabel(page, 'Type')
      expect(label).to.be.ok
    })

    it('Domain Type이 Dropdown으로 표시', () => {
      const dropdownlist = findDropdownlist(page, 'domainType')
      expect(dropdownlist).to.be.ok
    })

    it('Domain Type Dropdown Option 7개 표시', () => {
      expect(getOptionList(page, 'domainType')).to.equal(7)
    })
  })

  describe('Domain Name', () => {
    it('도메인명 field title 표시', () => {
      const label = findLabel(page, 'Name')
      expect(label).to.be.ok
    })

    it('도메인명 input text 표시', () => {
      const input = findInputById(page, 'name')
      expect(input).to.be.ok
    })
  })

  //저장시 필수 체크
  describe('Save Domain', () => {    
    it('Domain Name 미입력시 Alert 표시', () => {
      enterInput(page, 'name', '')

      clickButton(page, 'Save')

      //component내 prop접근 예
      //expect(page.props('message')).to.equal('test')
      //component내 data접근 예 page.vm.xxx
      expect(page.vm.message).to.equal('Domain Name을 입력하세요')
    })

    it('Domain Description 미입력시 Alert 표시', () => {
      enterInput(page, 'name', 'test domain name')
      enterInput(page, 'description', '')

      clickButton(page, 'Save')

      expect(page.vm.message).to.equal('Domain Description을 입력하세요')
    })
  })
})