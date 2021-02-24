import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography} from '@material-ui/core';
import {colors} from '../services';
import Signupform from '../signupform';
class GetStarted extends Component {
  render(){
    return (
      <Grid item container direction="column" style={{...{background: "#111", padding: '5%'}, ...Styles.highZ}} alignItems="center" justify="center" className="top">
        <Grid item>
          <Typography variant="h1" style={{...Styles.colorWhite, ...Styles.centerTxt}}>Join the community of like minded people</Typography>
          <Typography variant="h2" style={{color: colors.grey, textAlign: 'center'}}> ... and unlock a secret, no-equipment home-workout absolutely free of cost</Typography>
          <hr/>
        </Grid>
        <Grid item xs={5}>
          <Signupform/>
        </Grid>
      </Grid>
    );
  }
}

export default GetStarted;
