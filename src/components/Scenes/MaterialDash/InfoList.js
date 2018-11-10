import React, { Component } from 'react'
import { ListItem,
         ListItemText
         } from '@material-ui/core'

class NamesList extends Component {
  constructor(props){
    super(props)

    this.state={
      selectedIndex: 0
    }

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e,index){
    this.setState({ selectedIndex: index });
  };

  render(){
    let list;
    if (this.props.cat==="People"){
      list = this.props.items.map((name,i)=>{
        return (
          <ListItem
            button
            selected={this.state.selectedIndex === i}
            onClick={event => this.handleItemClick(event, i)}
            key={i}
          >
            <ListItemText primary={name.firstName+" "+name.lastName} />
          </ListItem>
        )
      })
    } else if (this.props.cat==="Subject"){
      list = this.props.items.map((sub,i)=>{
        return (
          <ListItem
            button
            selected={this.state.selectedIndex === i}
            onClick={event => this.handleItemClick(event, i)}
            key={i}
          >
            <ListItemText primary={sub.subject} />
          </ListItem>
        )
      })
    }

    return (
      <div>
        {list}
      </div>
    )
  }
}

export default NamesList;
