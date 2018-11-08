import React from 'react'
import { shallow } from 'enzyme'
import Login from '.'

describe('Login',()=>{
  it('should display and mouseover',()=>{
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.Login').length).toEqual(1);

    // wrapper.simulate("mouseover");
    // expect(wrapper.find('.NavBar.Hover').length).toEqual(1);
    //
    // wrapper.simulate("mouseleave");
    // expect(wrapper.find('.NavBar.Hover').length).toEqual(1);
  })
})
