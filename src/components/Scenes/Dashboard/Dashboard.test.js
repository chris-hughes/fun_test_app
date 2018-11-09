import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '.'

describe('Dashboard',()=>{
  it('should display',()=>{
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('.Dashboard').length).toEqual(1);
  })
})
