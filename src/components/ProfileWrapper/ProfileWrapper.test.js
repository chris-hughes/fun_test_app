import React from 'react'
import { shallow } from 'enzyme'
import ProfileWrapper from '.'

describe('ProfileWrapper',()=>{
  it('should display with correct name',()=>{
    const props = {
      firstName: "Chris",
      surname: "Hughes",
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
    const wrapper = shallow(<ProfileWrapper {...props} />);
    expect(wrapper.find('.ProfileWrapper').length).toEqual(1);
    expect(wrapper.find('.ProfileWrapper h2').text()).toContain("Chris Hughes");
    expect(wrapper.find('.teaching').length).toEqual(2);
    expect(wrapper.find('.learning').length).toEqual(3);

  })
})
