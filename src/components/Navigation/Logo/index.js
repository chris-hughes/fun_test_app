import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

class Logo extends Component {
  render (){
    return (
      <button className="Logo">
        <Link to="/">Some people just want to watch the world learn</Link>
      </button>
    )
  }
}

export default Logo;
