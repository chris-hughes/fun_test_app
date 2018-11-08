import React from 'react'
import { shallow } from 'enzyme'
import NamesList from '.'

describe('NamesList',()=>{
  it('should display',()=>{
    const wrapper = shallow(<NamesList />);
    expect(wrapper.find('.NamesList').length).toEqual(1);
  })
})
