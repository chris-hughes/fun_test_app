import React from 'react'
import { shallow } from 'enzyme'
import Profile from '.'

describe('Profile',()=>{
  it('should display with correct name',()=>{
    const props = {
      firstName: "Chris",
      lastName: "Hughes",
      teaching: [
        "Maths",
        "Guitar",
      ],
      learning: [
        "React",
        "Trumpet",
        "Food"
      ]
    }
    const wrapper = shallow(<Profile {...props} />);
    expect(wrapper.find('.Profile').length).toEqual(1);
    expect(wrapper.find('.Profile h2').text()).toContain("Chris Hughes");
    expect(wrapper.find('.teaching').length).toEqual(2);
    expect(wrapper.find('.learning').length).toEqual(3);

  })
})
