import React from 'react'
import { shallow } from 'enzyme'
import NavBar from '.'

describe('NaBar',()=>{
  it('should display',()=>{
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find('.NavBar').length).toEqual(1);
  })
})
