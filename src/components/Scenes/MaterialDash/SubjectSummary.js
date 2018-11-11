import React, { Component } from 'react'
import { Paper,
         Typography,
         Divider } from '@material-ui/core'
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

class SubjectSummary extends Component{
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.panel} style={this.props.styles.Paper}>
        <div className={classes.root}>
          <Typography variant="h2" color="inherit" align="center">
            {this.props.displaySubject.subject}
          </Typography>
          <Divider />
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(SubjectSummary);
