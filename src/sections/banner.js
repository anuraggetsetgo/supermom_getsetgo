import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, Button } from "@material-ui/core";
import { colors, retrievePath, docHt } from "../services";
import Signupform from "../signupform";
import PreloadImage from "../helpers/preloadimg";
import customTxt from "./customTxt.json";

class Banner extends Component {
  render() {
    return (
      <Grid item container alignItems="center" justify="center">
        <Grid item container alignItems="center" justify="space-between" direction="row" xs={12} sm={12} lg={8}>
          <Grid item container alignItems="flex-start" justify="center" direction="column" xs={12} sm={12} lg={5}>
            <Typography variant="h1" style={Styles.colorRed}>
              <span style={Styles.boldTxt}>Awesome, </span>you’re just 1 step away from a <span style={Styles.boldTxt}>kickass transformation.</span>
            </Typography>
            <br />
            <Typography variant="h1" style={Styles.boldTxt}>
              YOU'RE GOING TO LOVE IT.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img src="img/excited-beautiful-girl-smiling-pointing-fingers-small 2.png" alt="banner" style={Styles.bannerImg} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Banner;
