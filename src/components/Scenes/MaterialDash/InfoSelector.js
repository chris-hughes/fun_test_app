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
    backgroundColor: theme.palette.background.paper
  },
  panel: {
    marginRight: 5
  }
});

class InfoSelector extends Component {
  render(){
    const { classes } = this.props;

    return (
      <Paper className={classes.panel} style={this.props.styles.Paper}>
        <div className={classes.root}>
          <List component="nav">
            <ListItem
              button
              selected={this.props.displayCategory=== "People"}
              onClick={()=>this.props.handleCategoryClick("People")}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="People" />
            </ListItem>
            <ListItem
              button
              selected={this.props.displayCategory === "Subject"}
              onClick={()=>this.props.handleCategoryClick("Subject")}
            >
              <ListItemIcon>
                <LocalActivityIcon />
              </ListItemIcon>
              <ListItemText primary="Subject" />
            </ListItem>
          </List>
          <Divider />

          <List component="nav">
            <InfoList
              {...this.props}
              handleItemClick={this.props.handleItemClick}
            />
          </List>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(InfoSelector);
