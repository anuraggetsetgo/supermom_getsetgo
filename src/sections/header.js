import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../app-style.js';
import {Typography} from '@material-ui/core';
import {
  Link
} from "react-router-dom";
import PreloadImage from "../preloadImg";
import Logo from "../logoElement.png";


class Header extends Component {
  render(){
    return (
      <Grid item container style={{...Styles.header}} justify="space-between">
        <Grid item>
          <Link to="/">
            <Typography variant="subtitle1" style={{...Styles.colorWhite,fontSize:'1.6rem'}}>My Health</Typography>
          </Link>
        </Grid>
        <Grid item container xs={5} justify="flex-end">
          {/* <Grid item style={Styles.paddingRight5}>
            <Typography variant="subtitle2" style={Styles.colorWhite}>A product by</Typography>
          </Grid> */}
          <Grid item>
            <a href="https://getsetgo.fitness" rel="noopener noreferrer" target="_blank">
              <PreloadImage src={Logo} alt='GetSetGo Fitness' style={{ width: "100px", height:'35px', marginRight:'10px' }}/>
              </a>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
