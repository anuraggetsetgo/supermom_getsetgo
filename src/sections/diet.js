import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import { Typography, Button, Icon} from '@material-ui/core';
import {colors, retrievePath} from '../services';
import PreloadImage from '../helpers/preloadimg'
class Diet extends Component {
  render(){
    return (
      <Grid item container style={{...Styles.highZ, ...Styles.fullHt}} justify="space-between" alignItems="center" className="top">
        <Grid item xs={5}>
          <PreloadImage src={`${retrievePath()}diet.jpg`} alt="Personalized diet created by 1-to-1 coach" style={Styles.imgWidth}/>
        </Grid>
        <Grid item xs={5} style={{paddingRight: '5%'}}>
          <Typography variant="h1" style={{...Styles.colorPrimary}}>
            Personalized diet
          </Typography>
          <Typography variant="h2" style={{color: colors.grey}}>
            Personalized diet created by your personal 1-to-1 coach revised twice a month. Balanced nutrition to improve your fitness and health. Vitamin and mineral plan to optimize your immunity.
          </Typography>
          <Button variant="outlined" color="secondary" startIcon={<Icon>add_box</Icon>} style={{marginTop: '20px'}} onClick={this.props.showDetails}>
            <Typography variant="subtitle2">
              How does your coach support you
            </Typography>
          </Button>
        </Grid>              
      </Grid>
    );
  }
}

export default Diet;
