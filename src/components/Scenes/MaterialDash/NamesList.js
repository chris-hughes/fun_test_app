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
    selectedIndex: 1,
  };

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
              selected={this.state.selectedIndex === 0}
              onClick={event => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="People" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 1}
              onClick={event => this.handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <LocalActivityIcon />
              </ListItemIcon>
              <ListItemText primary="Subject" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem
              button
              selected={this.state.selectedIndex === 2}
              onClick={event => this.handleListItemClick(event, 2)}
            >
              <ListItemText primary="Chris Hughes" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 3}
              onClick={event => this.handleListItemClick(event, 3)}
            >
              <ListItemText primary="Mina Kasherova" />
            </ListItem>
          </List>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(NamesList);
