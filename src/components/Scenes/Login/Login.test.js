import React from 'react'
import { shallow } from 'enzyme'
import Login from '.'

describe('Login',()=>{
  it('should display',()=>{
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.Login').length).toEqual(1);
  })
})
