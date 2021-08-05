import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography} from '@material-ui/core';
import {colors, retrievePath} from '../services';
import PreloadImage from '../helpers/preloadimg'
class Fun extends Component {
  render(){
    return (
      <Grid item container style={{...Styles.highZ, ...Styles.fullHt}} justify="space-between" alignItems="center" className="top">
        <Grid item xs={5} style={Styles.padding5}>
          <Typography variant="h1" style={{...Styles.colorPrimary}}>
            Have fun!
          </Typography>
          <Typography variant="h2" style={{color: colors.grey}}>
            Say no to monotony with fun games, live dance, matinee show and more every evening. Grab your coach-prescribed low-calorie drink and join us.
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <PreloadImage src={`${retrievePath()}zumba.png`} alt="Simple, macro-calculated recipes" style={{width: '80%'}}/>
        </Grid>
      </Grid>
    );
  }
}

export default Fun;
