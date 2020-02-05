import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'

import Domain from '@/components/Domain.vue'

import {
  hasPageTitle,
  findLabel,
  findDropdownlist,
  getOptionList,
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
      const label = findLabel(page, '유형')
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

  //저장시 필수 체크
})