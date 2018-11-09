import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import './NavButton.css'


class NavButton extends Component {
  render(){
    return (
      <button className="NavButton">
        <Link to={this.props.route}>{this.props.text}</Link>
      </button>
    )
  }
}

export default NavButton;
