import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import NamesList from './NamesList'
import Profile from './Profile'
import { fakeData } from '../../../helpers/fakeData'

const styles = {
  Paper: { padding:20, marginTop:10, marginBottom:10 }
}

class MaterialDash extends Component {
  constructor(props){
    super(props)

    const people = fakeData.map((person)=>{
      return {firstName: person.firstName, lastName: person.lastName}
    })

    // default profile
    const profile = fakeData[0];

    this.state = {
      people,
      profile
    }

    this.handleNameClick = this.handleNameClick.bind(this);
  }

  handleNameClick(name){

    const profile = fakeData.find((person)=>{
      return person.firstName===name.firstName && person.lastName===name.lastName
    })

    this.setState({
      profile
    })
  }

  render(){
    return (
      <Grid container>
        <Grid item sm>
          <NamesList styles={styles} people={this.state.people} />
        </Grid>
        <Grid item sm>
          <Profile styles={styles} />
        </Grid>
      </Grid>
    )
  }
}

export default MaterialDash;
