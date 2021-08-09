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
      <Grid item container direction="row" alignItems="center" justify="center">
      <Grid item container alignItems="center" justify="space-between" direction="row" xs={12} sm={12} lg={10} style={{ height: "100px" }}>
        <Link to="/">
        <PreloadImage src={Styles.backCoverImg("Logo.png")} alt="Logo" height="50px" />
        </Link>
      </Grid>
    </Grid>

    );
  }
}

export default Header;
