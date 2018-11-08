import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <button id="logo">Learn me good</button>
        <button class="right">SignUp</button>
        <button class="right">Login</button>
      </nav>
    );
  }
}

export default NavBar;
