import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography} from '@material-ui/core';
import {colors, retrievePath} from '../services';
import PreloadImage from '../helpers/preloadimg'
class Homefood extends Component {
  render(){
    return (
      <Grid item container style={{...Styles.highZ, ...Styles.fullHt}} justify="space-between" alignItems="center" className="top">
        <Grid item xs={5} style={Styles.padding5}>
          <Typography variant="h2" style={{color: colors.grey}}>
            Home cooked food is great but cravings always kick-in specially when access to outside food is limited. Worry not, we will keep supplying you with simple recipes to jazz up your home cooked food.
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <PreloadImage src={`${retrievePath()}recipe.jpg`} alt="Simple, macro-calculated recipes" style={Styles.imgWidth}/>
        </Grid>
      </Grid>
    );
  }
}

export default Homefood;
