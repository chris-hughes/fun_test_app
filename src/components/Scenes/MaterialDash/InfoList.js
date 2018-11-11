import React, { Component } from 'react'
import { ListItem,
         ListItemText,
         ListSubheader
         } from '@material-ui/core'

import { subjectCategories } from '../../../helpers/subjectCategories'

class InfoList extends Component {
  constructor(props){
    super(props)

    this.state={
      peopleSelected: 0,
      subjectSelected: "00"
    }

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e,index,type,item){
    if (type==="People"){
      this.setState({ peopleSelected: index });
    } else if (type==="Subject"){
      this.setState({ subjectSelected: index });
    }

    this.props.handleItemSelected(e,type,item)
  };

  render(){
    let list;
    if (this.props.cat==="People"){
      list = this.props.items.sort((a,b)=>{
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
            selected={this.state.peopleSelected === i}
            onClick={event => this.handleItemClick(event,i,"People",name)}
            key={name.firstName+name.lastName+String(i)}
          >
            <ListItemText primary={name.firstName+" "+name.lastName} />
          </ListItem>
        )
      })
    } else if (this.props.cat==="Subject"){
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
              {this.props.items.filter((subject)=>{
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
                    selected={this.state.subjectSelected === String(i)+String(j)}
                    onClick={(event)=>{
                      this.handleItemClick(event,String(i)+String(j),"Subject",{subject: subject.subject})}}
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
