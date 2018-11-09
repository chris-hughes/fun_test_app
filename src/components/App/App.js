import React, { Component } from 'react';
import NavBar from '../Navigation/NavBar'
import Router from '../../Routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router />
      </div>
    );
  }
}

export default App;
