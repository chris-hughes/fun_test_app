import React, { Component } from 'react';
import NavBar from './components/NavBar/'
import SceneWrapper from './components/SceneWrapper'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SceneWrapper />
      </div>
    );
  }
}

export default App;
