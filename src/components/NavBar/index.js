import React, { Component } from 'react'
import './NavBar.css'
import Logo from '../Logo'
import SignUp from '../SignUp'
import Login from '../Login'

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <Logo />
        <SignUp />
        <Login />
      </nav>
    );
  }
}

export default NavBar;
