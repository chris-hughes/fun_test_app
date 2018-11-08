import React from 'react'
import { shallow } from 'enzyme'
import NamesList from '.'

describe('NamesList',()=>{
  it('should display and list names',()=>{
    const props = {
      people: [
        {firstName: "Chris", surname: "Hughes"},
        {firstName: "Giulio", surname: "Ambrogi"},
        {firstName: "Mina", surname: "Kasherova"},
        {firstName: "Raya", surname: "Raycheva"}]
      }
    const wrapper = shallow(<NamesList {...props} />);
    expect(wrapper.find('.NamesList').length).toEqual(1);
    expect(wrapper.find('NameButton').length).toEqual(4);
  })
})
