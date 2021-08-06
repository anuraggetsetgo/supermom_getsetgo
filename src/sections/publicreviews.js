import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { colors } from "../services";

class Publicreviews extends Component {
  render() {
    return (
      <Grid
        item
        container
        style={{
          ...Styles.highZ,
          ...Styles.spacingVertical,
          ...Styles.whiteBG,
        }}
        direction="column"
        alignItems="center"
        justify="center"
        className="top"
      >
        <img
          src={Styles.backCoverImg("reviewimg.png")}
          alt="Logo"
          height="100%"
        />
      </Grid>
    );
  }
}

export default Publicreviews;
