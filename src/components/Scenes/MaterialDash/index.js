import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import InfoSelector from './InfoSelector'
import PersonSummary from './PersonSummary'
import SubjectSummary from './SubjectSummary'

import { fakePeople } from '../../../helpers/fakePeople'
import { fakeSubjects } from '../../../helpers/fakeSubjects'

const styles = {
  Paper: { padding:20, marginTop:10, marginBottom:10 , height: 400, overflow: 'auto'}
}

class MaterialDash extends Component {
  constructor(props){
    super(props)

    // these will be API calls and possibly moved to didMount
    const people = fakePeople
    const subjects = fakeSubjects


    this.state = {
      people,
      subjects,
      // initial display
      displayCategory: "People",
      displayPerson: people[0],
      displaySubject: subjects[0]
    }

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);

  }

  handleCategoryClick(category){
    this.setState({displayCategory: category})
  }

  handleItemClick(item){
    let displayItem;
    if (this.state.displayCategory==="People"){
      displayItem = this.state.people.find((person)=>{
        return person.firstName===item.firstName && person.lastName===item.lastName
      })
      this.setState({displayPerson: displayItem})
    } else if (this.state.displayCategory==="Subject"){
        displayItem = this.state.subjects.find((sub)=>{
          return sub.subject===item.subject
        })
        this.setState({displaySubject: displayItem})
    }
  }

  render(){
    let content
    if (this.state.displayCategory==="People"){
      content=
        <PersonSummary styles={styles}
          displayPerson={this.state.displayPerson}
        />
    } else if (this.state.displayCategory==="Subject") {
      content=
        <SubjectSummary styles={styles}
          displaySubject={this.state.displaySubject}
        />
    }

    return (
      <Grid container>
        <Grid item sm>
          <InfoSelector styles={styles}
            {...this.state}
            handleCategoryClick={this.handleCategoryClick}
            handleItemClick={this.handleItemClick}
          />
        </Grid>
        <Grid item sm>
          {content}
        </Grid>
      </Grid>
    )
  }
}

export default MaterialDash;
