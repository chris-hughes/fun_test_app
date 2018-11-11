import React from 'react'
import { Paper } from '@material-ui/core'

function Profile(props){
  return (
    <Paper style={props.styles.Paper}>
      <div>
        {Object.keys(props.item).map((i)=>{
          return (
            <div key={i}>{i}: {props.item.id}</div>
          )
        })}
      </div>
    </Paper>
  )
}

export default Profile;
