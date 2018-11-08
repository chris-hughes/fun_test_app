import React from 'react'
import { shallow } from 'enzyme'
import SceneWrapper from '.'

describe('SceneWrapper',()=>{
  it('should display',()=>{
    const wrapper = shallow(<SceneWrapper />);
    expect(wrapper.find('.SceneWrapper').length).toEqual(1);
  })
})
