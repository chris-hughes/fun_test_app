import React from 'react'
import { shallow } from 'enzyme'
import NavButton from '.'

describe('NavButton',()=>{
  it('should display with the correct text',()=>{
    const props={
      text: "Login",
      route: "/Login"
    }
    const wrapper = shallow(<NavButton {...props} />);
    expect(wrapper.find('.NavButton').length).toEqual(1);
    expect(wrapper.find('.NavButton').text()).toEqual("Login");
  })
})
