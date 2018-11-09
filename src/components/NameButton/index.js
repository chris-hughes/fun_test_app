import React, { Component } from 'react'
import './NameButton.css'

class NameButton extends Component {
  render(){
    return (
      <button className="NameButton"
        onClick={()=>{this.props.nameClick(this.props.name)}}>
        {this.props.name.firstName+" "+this.props.name.surname}
      </button>
    )
  }
}

export default NameButton;
