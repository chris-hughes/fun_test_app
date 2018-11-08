import React, { Component } from 'react'
import './NameButton.css'

class NameButton extends Component {
  render(){
    return (
      <button className="NameButton">
        {this.props.name}
      </button>
    )
  }
}

export default NameButton;
