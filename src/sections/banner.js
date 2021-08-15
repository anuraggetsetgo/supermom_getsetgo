import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, Button, useMediaQuery, useTheme } from "@material-ui/core";
import { colors, retrievePath, docHt } from "../services";
import PreloadImage from "../helpers/preloadimg";
import customTxt from "./customTxt.json";

const Banner = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  const isMobile3 = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid item container alignItems="center" justify="center">
      <Grid
        item
        container
        alignItems="center"
        justify="space-between"
        direction="row"
        xs={12}
        sm={10}
        lg={10}
        style={{ padding: isMobile ? "20px" : "0" }}
      >
        <Grid
          item
          container
          alignItems="flex-start"
          justify="center"
          direction="column"
          xs={12}
          sm={5}
          lg={5}
        >
          <Typography variant={isMobile ? "h4" : "h1"} style={Styles.colorRed}>
            <span style={Styles.boldTxt}>Awesome, </span>you’re just 1 step away
            from a <span style={Styles.boldTxt}>kickass transformation.</span>
          </Typography>
          <br />
          <Typography
            variant={isMobile ? "h3" : "h1"}
            style={{ ...Styles.boldTxt, ...Styles.colorReef }}
          >
            YOU'RE GOING TO LOVE IT.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={6}
          container
          alignItems="flex-end"
          style={{ position: "relative" }}
        >
          <img
            src={Styles.backCoverImg(
              "excited-beautiful-girl-smiling-pointing.png"
            )}
            alt="banner"
            style={{
              ...Styles.bannerImg,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item xs={12} style={{marginTop:'-2px',zIndex:'1'}}>
          <Grid
            item
            style={{
              ...Styles.reefBG,
              ...Styles.cardRadius2,
              ...Styles.padding30tb,
              padding: isMobile ? "13px 30px 13px 30px" : "30px 0px",
              textAlign: "center",
              cursor: "pointer",
            }}
            container
            justify="center"
            onClick={() => {
              //console.log(this.props.product)
              // this.props.createOrder(this.props.product[0], 0);
              props.createOrder(props.product[0], 0);
            }}
          >
            <Typography
              variant={isMobile ? "h5" : "h2"}
              style={{ ...Styles.boldTxt, ...Styles.colorWhite }}
            >
              TRY US FOR 2 WEEKS NOW AT JUST ₹ 999
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banner;
