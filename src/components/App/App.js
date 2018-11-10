import React, { Component } from 'react';
import NavBar from '../Navigation/NavBar'
import Navi from '../Navigation'
import Router from '../../Routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        <Router />
      </div>
    );
  }
}

export default App;
