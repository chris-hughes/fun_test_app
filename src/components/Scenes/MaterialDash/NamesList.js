import React, { Component } from 'react'
import { Paper,
         List,
         ListItem,
         ListItemIcon,
         ListItemText,
         Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People'
import LocalActivityIcon from '@material-ui/icons/LocalActivity'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class NamesList extends Component {
  state = {
    categorySelected: "People",
    selectedIndex: 0,
  };

  handleCategoryClick(e,cat){
    this.setState({ categorySelected: cat })
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render(){
    const { classes } = this.props;

    return (
      <Paper style={this.props.styles.Paper}>
        <div className={classes.root}>
          <List component="nav">
            <ListItem
              button
              selected={this.state.categorySelected === "People"}
              onClick={event => this.handleCategoryClick(event, "People")}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="People" />
            </ListItem>
            <ListItem
              button
              selected={this.state.categorySelected === "Subject"}
              onClick={event => this.handleCategoryClick(event, "Subject")}
            >
              <ListItemIcon>
                <LocalActivityIcon />
              </ListItemIcon>
              <ListItemText primary="Subject" />
            </ListItem>
          </List>
          <Divider />

          <List component="nav">
            {this.props.people.map((name,i)=>{
              return (
                <ListItem
                  button
                  selected={this.state.selectedIndex === i}
                  onClick={event => this.handleListItemClick(event, i)}
                  key={i}
                >
                  <ListItemText primary={name.firstName+" "+name.lastName} />
                </ListItem>

              )
            })}
          </List>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(NamesList);
