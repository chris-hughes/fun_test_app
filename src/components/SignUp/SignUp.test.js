import React from 'react'
import { shallow } from 'enzyme'
import SignUp from '.'

describe('SignUp',()=>{
  it('should display and mouseover',()=>{
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find('.SignUp').length).toEqual(1);

    // wrapper.simulate("mouseover");
    // expect(wrapper.find('.NavBar.Hover').length).toEqual(1);
    //
    // wrapper.simulate("mouseleave");
    // expect(wrapper.find('.NavBar.Hover').length).toEqual(1);
  })
})
