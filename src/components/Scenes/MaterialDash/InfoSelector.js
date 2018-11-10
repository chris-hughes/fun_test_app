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
import InfoList from './InfoList'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class InfoSelector extends Component {
  state = {
    categorySelected: "People"
  };

  handleCategoryClick(e,cat){
    this.setState({ categorySelected: cat })
  }


  render(){
    const { classes } = this.props;
    let items;
    if (this.state.categorySelected==="People"){
      items=this.props.people
    } else if (this.state.categorySelected==="Subject"){
      items=this.props.subjects
    }

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
            <InfoList items={items}
              cat={this.state.categorySelected} />
          </List>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(InfoSelector);
