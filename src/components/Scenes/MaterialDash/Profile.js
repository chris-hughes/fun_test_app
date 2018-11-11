import React, { Component } from 'react'
import { Paper,
         Typography,
         Divider,
         Grid,
         List,
         ListItem,
         ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  panel: {
    marginLeft: 5
  },
  lists: {
    padding:10, marginTop:10, marginBottom:10
  }
});

class Profile extends Component{
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.panel} style={this.props.styles.Paper}>
        <div className={classes.root}>
          <Typography variant="h2" color="inherit" align="center">
            {this.props.displayPerson.firstName} {this.props.displayPerson.lastName}
          </Typography>
          <Divider />
          <Grid container>
            <Grid item sm>
              <Paper className={classes.lists} style={{marginRight:5}}>
                <div>
                  <Typography variant="h6" color="inherit">
                    Teaching
                  </Typography>
                  <List component="ul">
                    {this.props.displayPerson.teaching.map((sub)=>{
                      return (
                        <ListItem key={sub}>
                          <ListItemText primary={sub} />
                        </ListItem>
                      )
                    })}
                  </List>
                </div>
              </Paper>
            </Grid>
            <Grid item sm>
              <Paper className={classes.lists} style={{marginLeft:5}}>
                <div>
                  <Typography variant="h6" color="inherit">
                    Learning
                  </Typography>
                  <List component="ul">
                    {this.props.displayPerson.learning.map((sub)=>{
                      return (
                        <ListItem key={sub}>
                          <ListItemText primary={sub} />
                        </ListItem>
                      )
                    })}
                  </List>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Profile);
