import React from 'react'
import { shallow } from 'enzyme'
import NameButton from '.'

describe('NameButton',()=>{
  it('should display with the correct text',()=>{
    const props = {
      name: {
        firstName: "Chris",
        surname: "Hughes"
      }
    }
    const wrapper = shallow(<NameButton {...props} />);
    expect(wrapper.find('.NameButton').length).toEqual(1);
    expect(wrapper.find('.NameButton').text()).toEqual("Chris Hughes");
  })
})
