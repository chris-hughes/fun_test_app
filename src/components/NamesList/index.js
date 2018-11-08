import React, { Component } from 'react'
import NameButton from '../NameButton'
import './NamesList.css'

class NamesList extends Component {
  render(){
    return (
      <div className="NamesList">
        <h2>Best People Ever</h2>
        <ul>
          <NameButton name="Chris Hughes" />
          <NameButton name="Giulio Ambrogi" />
          <NameButton name="Mina Kasherova" />
          <NameButton name="Raya Raycheva" />
        </ul>
      </div>
    )
  }
}

export default NamesList;
