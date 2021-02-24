import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import PreloadImage from "../helpers/preloadimg";
import { retrievePath } from "../services";

class Yoga extends Component {
  render() {
    return (
      <Grid
        container
        item
        style={{ ...Styles.fullHt, ...Styles.highZ }}
        direction="row"
        alignItems="center"
        justify="space-evenly"
        className="top"
      >
        <Grid
          item
          container
          xs={5}
          style={{
            ...Styles.blackBG,
            ...Styles.padding5,
            ...Styles.cardRadius,
          }}
          alignItems="flex-start"
          justify="center"
          direction="column"
        >
          <Typography variant="h2" style={Styles.colorWhite}>
            Why our <span style={Styles.colorPrimary}>Healthcare Plans </span>
            are effective?
          </Typography>
          <Typography
            variant="h6"
            style={{ ...Styles.colorGrey, ...Styles.italicTxt }}
          >
            <ul>
              <li>
                A 1-to-1 coach who will completely understand your lifestyle and
                health concerns.
              </li>
              <li>
                Easy-to-follow nutrition and workout plan, that is in-sync with
                your treatment.
              </li>
              <li>Frequent tweaking of diet plan till you see results.</li>
              <li>Regular sharing of progress update with your doctor.</li>
              <li>Unlimited coach support via WhatsApp & Call.</li>
            </ul>
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={5}
          style={{ ...Styles.blackBG, ...Styles.cardRadius }}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item xs={10}>
            <PreloadImage
              src={`${retrievePath()}yogi_vertical.png`}
              style={{ position: "relative", width: "100%", height: "auto" }}
              alt="Morning yoga to help you stay positive"
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Yoga;
