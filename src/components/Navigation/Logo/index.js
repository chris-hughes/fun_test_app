import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import './Logo.css'

class Logo extends Component {
  render (){
    return (
      <Link to="/">
        <button className="Logo">
          <Typography>
            Some people just want to watch the world learn
          </Typography>
        </button>
      </Link>
    )
  }
}

export default Logo;
