import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
const Success = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
          lg={10}
          style={{ padding: isMobile ? "20px" : "0" }}
        >
          <Grid item justify="center" alignItems="center">
            <Typography
              variant={isMobile ? "h3" : "h2"}
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
              style={{ objectFit: "cover", width: isMobile ? "100%" : "null" }}
            />
          </Grid>
          <Grid
            item
            alignItems="center"
            style={{
              ...Styles.reefBG,
              ...Styles.cardRadius2,
              width: isMobile ? "100%" : "null",
              padding: isMobile ? "13px 8px" : "30px 60px",
              // width: "max-content",
              cursor: "pointer",
            }}
            justify="center"
            onClick={() => {
              props.createOrder(props.product[0], 0);
            }}
          >
            <Typography
              variant={isMobile ? "h5" : "h3"}
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
            style={{ margin: isMobile ? "15px 0 20px" : "30px 0 64px" }}
          >
            <Typography
              variant={isMobile ? "h5" : "h4"}
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
