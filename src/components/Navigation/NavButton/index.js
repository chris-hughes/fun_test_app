import React, { Component} from 'react'
import './NavButton.css'

// not going to change this to a function as will be doing more with it later

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
