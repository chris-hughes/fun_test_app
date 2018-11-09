import React, { Component } from 'react'
import './NavBar.css'
import Logo from '../Logo'
import NavButton from '../NavButton'

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <Logo />
        <NavButton location="Login" />
        <NavButton location="Sign Up" />
      </nav>
    );
  }
}

export default NavBar;
