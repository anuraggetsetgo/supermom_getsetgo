import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <Grid item style={{ ...Styles.footer, ...Styles.highZ }}>
        <Typography variant="subtitle1">
          © GSG Fitness Pvt Ltd, {new Date().getFullYear()}. All rights reserved
        </Typography>
      </Grid>
    );
  }
}

export default Footer;
