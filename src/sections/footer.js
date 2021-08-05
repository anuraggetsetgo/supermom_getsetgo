import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <Grid item style={{ ...Styles.footer, ...Styles.highZ }}>
        <Typography variant="subtitle2" style={{ color: "#666666" }}>
          © 2021 GetSetGo Fitness. All Rights Reserved.
        </Typography>
      </Grid>
    );
  }
}

export default Footer;
