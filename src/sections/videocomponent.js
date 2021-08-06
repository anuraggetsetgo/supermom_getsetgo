import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";

const Videocomponent = () => {
  return (
    <Grid item container direction="row" alignItems="center" justify="center">
      <Grid
        justify="flex-start"
        alignItems="center"
        style={{ width: "1170px", height: "132px" }}
      >
        <Typography
          variant="h1"
          style={{
            ...Styles.colorRed,
            ...Styles.boldTxt,
            textAlign: "center",
          }}
        >
          LIVE THE LIFE YOU LOVE.
          <br /> SUPER HEALTHY, HAPPY, AND FIT.
        </Typography>
      </Grid>
      <Grid
        justify="flex-start"
        alignItems="center"
        style={{ width: "1170px", height: "40px" }}
      >
        <Typography
          variant="h3"
          style={{
            color: "#103A42",
            ...Styles.blodNormal,
            textAlign: "center",
          }}
        >
          Here's what our clients have to say..
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Videocomponent;
