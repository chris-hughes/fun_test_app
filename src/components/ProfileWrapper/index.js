import React, { Component } from 'react'
import './ProfileWrapper.css'

class ProfileWrapper extends Component {
  render(){
    return (
      <div className="ProfileWrapper">
        <h2>{this.props.firstName} {this.props.surname} Profile</h2>
        <ul>
          <li><h3>Teaching</h3></li>
          <ul>
            {this.props.teaching.map((subject,i)=>{
              return (<li className="teaching" key={i}>{subject}</li>)
            })}
          </ul>
          <li><h3>Learning</h3></li>
          <ul>
            {this.props.learning.map((subject,i)=>{
              return (<li className="learning" key={i}>{subject}</li>)
            })}
          </ul>
        </ul>
      </div>
    )
  }
}

export default ProfileWrapper;
