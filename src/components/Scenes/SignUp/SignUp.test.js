import React from 'react'
import { shallow } from 'enzyme'
import SignUp from '.'

describe('SignUp',()=>{
  it('should display',()=>{
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find('.SignUp').length).toEqual(1);
  })
})
