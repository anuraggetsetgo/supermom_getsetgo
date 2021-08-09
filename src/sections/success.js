import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
const Success = () => {
  return (
    <>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid justify="flex-start" alignItems="center">
          <Typography
            variant="h2"
            style={{ ...Styles.centerTxt, ...Styles.colorRed }}
          >
            <span style={Styles.boldTxt}>
              1,00,000+ GetSetGo community
              <br /> members
            </span>{" "}
            are waiting to hear
            <br /> your success story!
          </Typography>
        </Grid>
        <Grid item container justify="center" alignItems="flex-end">
          <img
            src={Styles.backCoverImg("link_below.png")}
            alt="Link Below Girl"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          item
          style={{
            ...Styles.reefBG,
            ...Styles.cardRadius2,
            padding: "30px 60px",
            width: "max-content",
          }}
          container
          justify="center"
        >
          <Typography
            variant="h3"
            style={{
              ...Styles.boldTxt,
              ...Styles.colorWhite,
              ...Styles.centerTxt,
            }}
          >
            JOIN THE 2 WEEKS TRAIL NOW
            <br />
            AT JUST INR 999
          </Typography>
        </Grid>
        <Grid item style={{ margin: "30px 0 64px" }}>
          <Typography
            variant="h4"
            style={{
              ...Styles.boldTxt,
              ...Styles.colorCoral,
              ...Styles.centerTxt,
            }}
          >
            One day or 'Now'?
            <br />
            You decide.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Success;
