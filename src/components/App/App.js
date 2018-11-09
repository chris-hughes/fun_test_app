import React, { Component } from 'react';
import NavBar from '../Navigation/NavBar'
import SceneWrapper from '../Scenes/mainView/SceneWrapper'
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
