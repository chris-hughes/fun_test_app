import React, { Component } from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  leftPanel: {
    marginLeft: 5
  }
});

class Profile extends Component{
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.leftPanel} style={this.props.styles.Paper}>
        <div className={classes.root}>
        <div>
          {Object.keys(this.props.item).map((i)=>{
            return (
              <div key={i}>{i}: {this.props.item.id}</div>
            )
          })}
        </div>
        <div>
          Ipsum Lorem all the tessldfgh;ilqsdf;ifnqwljkfhbcn ;enoxfh
          </div>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Profile);
