import React from 'react'
import { shallow } from 'enzyme'
import ProfileWrapper from '.'

describe('ProfileWrapper',()=>{
  it('should display',()=>{
    const wrapper = shallow(<ProfileWrapper />);
    expect(wrapper.find('.ProfileWrapper').length).toEqual(1);
  })
})
