import React, { Component } from 'react'
import NamesList from '../NamesList'
import ProfileWrapper from '../ProfileWrapper'
import './SceneWrapper.css'

class SceneWrapper extends Component {
  constructor(props){
    super(props)
    this.state = {
      people: [
        {firstName: "Chris", surname: "Hughes"},
        {firstName: "Giulio", surname: "Ambrogi"},
        {firstName: "Mina", surname: "Kasherova"},
        {firstName: "Raya", surname: "Raycheva"}
      ],
      profile: {
        firstName: "Chris",
        surname: "Hughes",
        teaching: [
          "Maths",
          "Guitar",
        ],
        learning: [
          "React",
          "Testing",
          "Bulgarian"
        ]
      }
    }
    this.handleNameClick = this.handleNameClick.bind(this);
  }

  handleNameClick(name){
    this.setState({
      people: [
        {firstName: "Chris", surname: "Hughes"},
        {firstName: "Giulio", surname: "Ambrogi"},
        {firstName: "Mina", surname: "Kasherova"},
        {firstName: "Raya", surname: "Raycheva"}
      ],
      profile: {
        firstName: name.firstName,
        surname: name.surname,
        teaching: [
          "Maths",
          "Guitar",
        ],
        learning: [
          "React",
          "Testing",
          "Bulgarian"
        ]
      }
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
