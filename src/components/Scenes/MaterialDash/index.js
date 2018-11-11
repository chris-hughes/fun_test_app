import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import InfoSelector from './InfoSelector'
import Profile from './Profile'

import { fakePeople } from '../../../helpers/fakePeople'
import { fakeSubjects } from '../../../helpers/fakeSubjects'

const styles = {
  Paper: { padding:20, marginTop:10, marginBottom:10 }
}

class MaterialDash extends Component {
  constructor(props){
    super(props)

    const people = fakePeople.map((person)=>{
      return {firstName: person.firstName, lastName: person.lastName}
    })

    const subjects = fakeSubjects.map((sub)=>{
      return {
        subject: sub.subject,
        category: sub.category
      }
    })

    this.state = {
      people,
      subjects,
      // initial display
      displayItem: fakePeople[0]
    }

    this.handleItemSelected = this.handleItemSelected.bind(this);
  }

  handleItemSelected(e,cat,item){
    let displayItem;
    if (cat==="People"){
      displayItem = this.state.people.find((person)=>{
        return person.firstName===item.firstName && person.lastName===item.lastName
      })
    } else if (cat==="Subject"){
      displayItem = this.state.subjects.find((sub)=>{
        return sub.subject===item.subject
      })
    }
    this.setState({displayItem: displayItem},()=>{console.log(this.state.displayItem)})
  }

  render(){
    return (
      <Grid container>
        <Grid item sm>
          <InfoSelector styles={styles}
            people={this.state.people}
            subjects={this.state.subjects}
            handleItemSelected={this.handleItemSelected}
          />
        </Grid>
        <Grid item sm>
          <Profile styles={styles} item={this.state.displayItem} />
        </Grid>
      </Grid>
    )
  }
}

export default MaterialDash;
