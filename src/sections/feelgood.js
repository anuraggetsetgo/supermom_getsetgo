import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import customTxt from "./customTxt.json";
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
              {customTxt.feelgoodPageTxt.mainHeading[0]}
              <span style={Styles.colorPrimary}>
                {customTxt.feelgoodPageTxt.mainHeading[1]}
              </span>
              {customTxt.feelgoodPageTxt.mainHeading[2]}
              <span style={Styles.colorPrimary}>
                {customTxt.feelgoodPageTxt.mainHeading[3]}{" "}
              </span>
              {customTxt.feelgoodPageTxt.mainHeading[4]}
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
                  {customTxt.feelgoodPageTxt.subHeading}
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
