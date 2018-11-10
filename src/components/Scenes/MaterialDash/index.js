import React from 'react'
import { Grid } from '@material-ui/core'
import NamesList from './NamesList'
import Profile from './Profile'

const styles = {
  Paper: { padding:20, marginTop:10, marginBottom:10 }
}

function MaterialDash(props){
  return (
    <Grid container>
      <Grid item sm>
        <NamesList styles={styles} />
      </Grid>
      <Grid item sm>
        <Profile styles={styles} />
      </Grid>
    </Grid>
  )
}

export default MaterialDash;
