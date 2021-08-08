import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { colors } from "../services";
import Signupform from "../signupform";
class GetStarted extends Component {
  render() {
    return (
      <Grid item container direction="column" style={{ ...Styles.blueBG, ...Styles.highZ, padding: "10vh" }} alignItems="center" justify="center" className="top">
        <Grid item xs={8}>
          <Typography variant="h2" style={{ ...Styles.colorYellow, ...Styles.centerTxt }}>
            Prioritize your health today
          </Typography>
          <Typography variant="h3" style={{ ...Styles.colorWhite, textAlign: "center" }}>
            Sign up with us to manage your diabetes better & take a step towards a better life.
          </Typography>
          <hr />
        </Grid>
        <Grid item xs={5}>
          <Signupform />
        </Grid>
      </Grid>
    );
  }
}

export default GetStarted;
