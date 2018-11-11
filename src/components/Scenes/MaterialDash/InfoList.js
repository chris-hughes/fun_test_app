import React, { Component } from 'react'
import { ListItem,
         ListItemText,
         ListSubheader
         } from '@material-ui/core'

import { subjectCategories } from '../../../helpers/subjectCategories'

class InfoList extends Component {
  constructor(props){
    super(props)

    this.isSelected = this.isSelected.bind(this);
  }

  isSelected(item){
    if (this.props.displayCategory==="People"){
      if (this.props.displayPerson.firstName===item.firstName
        && this.props.displayPerson.lastName===item.lastName){
          return true
        }
    } else if (this.props.displayCategory==="Subject"){
      if (this.props.displaySubject.subject===item.subject){
        return true
      }
    } else {
      return false
    }
  }

  render(){
    let list;
    if (this.props.displayCategory==="People"){
      list = this.props.people.sort((a,b)=>{
        let nameA = a.firstName.toUpperCase()
        let nameB = b.firstName.toUpperCase()
        if (nameA < nameB){
          return -1;
        }
        if (nameA > nameB){
          return 1;
        }
        return 0;
      }).map((name,i)=>{
        return (
          <ListItem
            button
            selected={this.isSelected(name)}
            onClick={()=>this.props.handleItemClick(name)}
            key={name.firstName+name.lastName+String(i)}
          >
            <ListItemText primary={name.firstName+" "+name.lastName} />
          </ListItem>
        )
      })
    } else if (this.props.displayCategory==="Subject"){
      list = subjectCategories.sort((a,b)=>{
        let nameA = a.category.toUpperCase()
        let nameB = b.category.toUpperCase()
        if (nameA < nameB){
          return -1;
        }
        if (nameA > nameB){
          return 1;
        }
        return 0;
      }).map((cat,i)=>{
          return (
            <div key={i}>
              <ListSubheader key={cat.category+String(i)}>
                {cat.category}
              </ListSubheader>
              {this.props.subjects.filter((subject)=>{
                return subject.category.includes(cat.category)
              }).sort((a,b)=>{
                let nameA = a.subject.toUpperCase()
                let nameB = b.subject.toUpperCase()
                if (nameA < nameB){
                  return -1;
                }
                if (nameA > nameB){
                  return 1;
                }
                return 0;
              }).map((subject,j)=>{
                return (
                  <ListItem
                    button
                    selected={this.isSelected(subject)}
                    onClick={()=>this.props.handleItemClick(subject)}
                    key={subject.subject+String(j)}
                  >
                    <ListItemText primary={subject.subject} />
                  </ListItem>
                )
              })}
            </div>
          )
        }
      )

    }

    return (
      <div>
        {list}
      </div>
    )
  }
}

export default InfoList;
