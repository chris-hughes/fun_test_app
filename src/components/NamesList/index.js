import React, { Component } from 'react'
import NameButton from '../NameButton'
import './NamesList.css'

class NamesList extends Component {
  render(){
    return (
      <div className="NamesList">
        <h2>Best People Ever</h2>
        <ul>
          {this.props.people.map((name,i)=>{
            return (
              <NameButton
                name={name}
                nameClick={this.props.nameClick}
                key={i}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default NamesList;
