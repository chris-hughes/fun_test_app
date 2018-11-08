import React, { Component } from 'react'
import NamesList from '../NamesList'
import ProfileWrapper from '../ProfileWrapper'
import './SceneWrapper.css'

class SceneWrapper extends Component {
  render(){
    return (
      <div className="SceneWrapper">
        <NamesList />
        <ProfileWrapper />
      </div>
    )
  }
}

export default SceneWrapper;
