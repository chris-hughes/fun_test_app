import React, { Component } from 'react'
import './NavBar.css'
import Logo from '../Logo'
import NavButton from '../NavButton'

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <Logo />
        <NavButton text="Login" route="/Login"/>
        <NavButton text="Sign Up" route="/SignUp"/>
      </nav>
    );
  }
}

export default NavBar;
