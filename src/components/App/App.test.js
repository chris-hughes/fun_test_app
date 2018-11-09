import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App',()=>{
  it('should render the App',()=>{
    const props = {
      location: "/"
    }
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find('.App').length).toEqual(1);
  })
})
