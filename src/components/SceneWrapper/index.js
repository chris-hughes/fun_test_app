import React, { Component } from 'react'
import NamesList from '../NamesList'
import ProfileWrapper from '../ProfileWrapper'
import './SceneWrapper.css'

import { fakeData } from '../../helpers/fakeData'

console.log(fakeData)

class SceneWrapper extends Component {
  constructor(props){
    super(props)

    const people = fakeData.map((person)=>{
      return {firstName: person.firstName, surname: person.surname}
    })

    const profile = fakeData[0];

    this.state = {
      people,
      profile
    }

    // this.state = {
    //   people: [
    //     {firstName: "Chris", surname: "Hughes"},
    //     {firstName: "Giulio", surname: "Ambrogi"},
    //     {firstName: "Mina", surname: "Kasherova"},
    //     {firstName: "Raya", surname: "Raycheva"}
    //   ],
    //   profile: {
    //     firstName: "Chris",
    //     surname: "Hughes",
    //     teaching: [
    //       "Maths",
    //       "Guitar",
    //     ],
    //     learning: [
    //       "React",
    //       "Testing",
    //       "Bulgarian"
    //     ]
    //   }
    // }
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
