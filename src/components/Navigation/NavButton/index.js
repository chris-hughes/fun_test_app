import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import './NavButton.css'


class NavButton extends Component {
  render(){
    return (
      <Link to={this.props.route}>
        <button className="NavButton">
          {this.props.text}
        </button>
      </Link>
    )
  }
}

export default NavButton;
