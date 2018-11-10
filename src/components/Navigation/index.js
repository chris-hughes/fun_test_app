import React from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { AppBar,
         Toolbar,
         Typography,
         Button,
         IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

function ButtonAppBar(props) {
  console.log(props)
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Button component={Link} to="/" color="inherit"
            className={classes.grow}>
            <Typography variant="h6" color="inherit">
              Learn Me Good
            </Typography>
          </Button>
          <Button component={Link} to="/SignUp" color="inherit">
            Sign Up
          </Button>
          <Button component={Link} to="/Login" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
