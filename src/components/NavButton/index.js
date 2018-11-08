import React, { Component} from 'react'
import './NavButton.css'

class NavButton extends Component {
  render(){
    return (
      <button className="NavButton">
        {this.props.location}
      </button>
    )
  }
}

export default NavButton;
