import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, Button } from "@material-ui/core";
import { colors, retrievePath, docHt } from "../services";
import PreloadImage from "../helpers/preloadimg";
import customTxt from "./customTxt.json";

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid item container alignItems="center" justify="center">
        <Grid
          item
          container
          alignItems="center"
          justify="space-between"
          direction="row"
          xs={12}
          sm={12}
          lg={10}
        >
          <Grid
            item
            container
            alignItems="flex-start"
            justify="center"
            direction="column"
            xs={12}
            sm={12}
            lg={5}
          >
            <Typography variant="h1" style={Styles.colorRed}>
              <span style={Styles.boldTxt}>Awesome, </span>you’re just 1 step
              away from a{" "}
              <span style={Styles.boldTxt}>kickass transformation.</span>
            </Typography>
            <br />
            <Typography
              variant="h1"
              style={{ ...Styles.boldTxt, ...Styles.colorReef }}
            >
              YOU'RE GOING TO LOVE IT.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={6} container alignItems="flex-end">
            <img
              src={Styles.backCoverImg(
                "excited-beautiful-girl-smiling-pointing-fingers-small 2.png"
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
          <Grid item xs={12}>
            <Grid
              item
              style={{
                ...Styles.reefBG,
                ...Styles.cardRadius2,
                ...Styles.padding30tb,
              }}
              container
              justify="center"
            >
              <Typography
                variant="h2"
                style={{ ...Styles.boldTxt, ...Styles.colorWhite }}
                onClick={() => {
                  //console.log(this.props.product)
                  this.props.createOrder(this.props.product[0], 0);
                }}
              >
                TRY US FOR 2 WEEKS NOW AT JUST ₹ 999
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Banner;
