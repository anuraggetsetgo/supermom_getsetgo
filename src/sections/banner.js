import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, Button } from "@material-ui/core";
import { colors, retrievePath, docHt } from "../services";
import Signupform from "../signupform";
import PreloadImage from "../helpers/preloadimg";
class Banner extends Component {
  render() {
    return (
      <Grid
        item
        container
        className="fixed"
        style={{ ...Styles.banner }}
        alignItems="center"
        justify="space-evenly"
      >
        <PreloadImage
          src={`${retrievePath()}corona.jpg`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <Grid
          item
          container
          xs={12}
          md={6}
          alignItems="center"
          justify="center"
        >
          <Typography variant="h1" style={{ ...Styles.colorWhite }}>
            We’re India’s #1 Doctor-Approved Fitness Coaches.
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ ...Styles.colorWhite, ...Styles.marginTop }}
          >
            Our fitness experts understand your health like no one else. Sign up
            with us to manage your diabetes better & take a step towards a
            better life.
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={4}
          direction="column"
          alignItems="stretch"
          justify="flex-start"
          style={{ ...Styles.translucentContainer, ...Styles.cardRadius }}
        >
          <Grid item container>
            <Grid item>
              <Typography variant="h6" style={{ ...Styles.colorWhite }}>
                Sign up with us to manage your diabetes better & take a step
                towards a better life.{" "}
                <span style={{ fontWeight: "bold" }}>free</span>
              </Typography>
              <hr />
            </Grid>
            <Grid
              item
              container
              style={{ minHeight: `${docHt() / 2.5}px` }}
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Signupform />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div
          style={{
            ...Styles.highZ,
            ...{ position: "absolute", bottom: "60px" },
          }}
        >
          <Button
            onClick={Styles.handleScroll}
            style={{ ...Styles.colorWhite }}
          >
            Scroll Down
          </Button>
        </div>
        <div
          style={{
            ...Styles.highZ,
            ...{ position: "absolute", bottom: "10px" },
          }}
        >
          <span
            className="material-icons"
            style={{ fontSize: "4rem", color: colors.secondary, lineHeight: 0 }}
          >
            keyboard_arrow_down
          </span>
        </div>
      </Grid>
    );
  }
}

export default Banner;
