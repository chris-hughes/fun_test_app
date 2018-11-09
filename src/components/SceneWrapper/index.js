import React, { Component } from 'react'
import NamesList from '../NamesList'
import ProfileWrapper from '../ProfileWrapper'
import './SceneWrapper.css'

import { fakeData } from '../../helpers/fakeData'

class SceneWrapper extends Component {
  constructor(props){
    super(props)

    const people = fakeData.map((person)=>{
      return {firstName: person.firstName, surname: person.surname}
    })

    // default profile
    const profile = fakeData[0];

    this.state = {
      people,
      profile
    }

    this.handleNameClick = this.handleNameClick.bind(this);
  }

  handleNameClick(name){

    const profile = fakeData.find((person)=>{
      return person.firstName===name.firstName && person.surname===name.surname
    })

    this.setState({
      profile
    })
  }

  render(){
    return (
      <div className="SceneWrapper">
        <NamesList people={this.state.people} nameClick={this.handleNameClick} />
        <ProfileWrapper {...this.state.profile} />
      </div>
    )
  }
}

export default SceneWrapper;
