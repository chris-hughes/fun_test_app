import React from 'react'
import { shallow } from 'enzyme'
import NavBar from '.'

describe('App',()=>{
  it('should render the NavBar',()=>{
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find('.NavBar').length).toEqual(1);
  })
})
