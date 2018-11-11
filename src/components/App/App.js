import React, { Component } from 'react';
import Navi from '../Navigation'
import Router from '../../Routes'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

  footer: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginTop: theme.spacing.unit * 4,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Navi />
        <Router />
          {/* Footer */}

        <footer className={classes.footer}>
          <Grid container spacing={32} justify="space-evenly">
            {footers.map(footer => (
              <Grid item xs key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
                {footer.description.map(item => (
                  <Typography key={item} variant="subtitle1" color="textSecondary">
                    {item}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
        </footer>
        {/* End footer */}
      </div>
    );
  }
}

export default withStyles(styles)(App);
