import React, { Component } from 'react'
import NamesList from './NamesList'
import Profile from './Profile'
import './Dashboard.css'

import { fakeData } from '../../../helpers/fakeData'

class Dashboard extends Component {
  constructor(props){
    super(props)

    const people = fakeData.map((person)=>{
      return {firstName: person.firstName, lastName: person.lastName}
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
      return person.firstName===name.firstName && person.lastName===name.lastName
    })

    this.setState({
      profile
    })
  }

  render(){
    return (
      <div className="Dashboard">
        <NamesList people={this.state.people} nameClick={this.handleNameClick} />
        <Profile {...this.state.profile} />
      </div>
    )
  }
}

export default Dashboard;
