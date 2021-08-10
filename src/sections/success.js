import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
const Success = () => {
  return (
    <>
      <Grid item container alignItems="center" justify="center">
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          direction="column"
          xs={12}
          sm={12}
          lg={12}
        >
          <Grid item xs={12} justify="center" alignItems="center">
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
          <Grid item container justify="center" alignItems="center">
            <img
              src={Styles.backCoverImg("link_below.png")}
              alt="Link Below Girl"
              style={{ objectFit: "cover" }}
            />
          </Grid>
          <Grid
            item
            alignItems="center"
            style={{
              ...Styles.reefBG,
              ...Styles.cardRadius2,
              padding: "30px 60px",
              width: "max-content",
            }}
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
          <Grid
            item
            justify="center"
            alignItems="center"
            style={{ margin: "30px 0 64px" }}
          >
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
      </Grid>
    </>
  );
};
export default Success;
