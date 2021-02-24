import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";

class Feelgood extends Component {
  render() {
    return (
      <Grid item container style={{ ...Styles.section01, ...Styles.highZ }}>
        <Grid
          item
          container
          style={{ ...Styles.section01Content, ...Styles.cardRadius }}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h2" style={{ ...Styles.centerTxt }}>
              Explore Our
              <span style={Styles.colorPrimary}>
                {" "}
                Healthcare Fitness Plans{" "}
              </span>
              or Have <span style={Styles.colorPrimary}>A Wake-Up Call </span>
              About Your Health & Fitness Levels.
            </Typography>
          </Grid>
          <Grid item container spacing={4} justify="space-between">
            <Grid item xs={8} style={{ margin: "auto" }}>
              <Typography
                variant="h4"
                style={{ ...Styles.colorGrey, ...Styles.centerTxt }}
              >
                <br></br>
                <span style={{ ...Styles.colorGrey, ...Styles.italicTxt }}>
                  It’s never too late! Our fitness experts are here to help and
                  understand your health like no one else.
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Feelgood;
