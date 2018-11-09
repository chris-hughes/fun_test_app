import React from 'react'
import { shallow } from 'enzyme'
import Logo from '.'

describe('Logo',()=>{
  it('should display',()=>{
    const wrapper = shallow(<Logo />);
    expect(wrapper.find('.Logo').length).toEqual(1);
  })
})
