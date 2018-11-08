import React, { Component } from 'react'
import './ProfileWrapper.css'

class ProfileWrapper extends Component {
  render(){
    return (
      <div className="ProfileWrapper">
        <h2>Profile</h2>
        <ul>
          <li><h3>Teaching</h3></li>
          <ul>
            <li>Table Tennis</li>
            <li>Maths</li>
            <li>Climbing</li>
            <li>Guitar</li>
          </ul>
          <li><h3>Learning</h3></li>
          <ul>
            <li>React</li>
            <li>Serverless</li>
            <li>Machine Learning</li>
          </ul>
        </ul>
      </div>
    )
  }
}

export default ProfileWrapper;
