import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, Button } from "@material-ui/core";
import { colors, retrievePath, docHt } from "../services";
import Signupform from "../signupform";
import PreloadImage from "../helpers/preloadimg";
import customTxt from "./customTxt.json";

class Banner extends Component {
  render() {
    return (
      <Grid
        item
        container
        className="fixed"
        style={{
          ...Styles.banner,
          //ANV background: `linear-gradient(0deg, rgba(0,0,0,0.3981967787114846) 21%, rgba(0,0,0,0.4) 66%), url('./img/Website_Image.jpg')`,
          background:  `url('./img/Website_Image.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        alignItems="center"
        justify="space-evenly"
      >
        {/* <PreloadImage
          src={"./img/Website_Image.jpg"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        /> */}

        <Grid
          item
          container
          xs={12}
          md={6}
          alignItems="center"
          justify="center"
          style={{ ...Styles.translucentContainer }}
        >
          <Typography variant="h1" style={{ ...Styles.colorWhite }}>
            {customTxt.bannerPageTxt.mainHeading}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ ...Styles.colorWhite, ...Styles.marginTop }}
          >
            {customTxt.bannerPageTxt.subHeading}
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
          style={{ background:"rgb(101 97 141 / 70%)",padding:'20px', ...Styles.cardRadius }}
        >
          <Grid item container>
            <Grid item>
              <Typography variant="h6" style={{ ...Styles.colorWhite }}>
                <span style={{ ...Styles.colorYellow }}>Sign up with us </span>
                to manage your
                <span style={{ ...Styles.colorYellow }}> Diabetes</span> better
                & take a step towards a
                <span style={{ ...Styles.colorYellow }}> Better Life</span>
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
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          direction="column"
          style={{
            ...Styles.highZ,
            ...{ position: "absolute", bottom: "60px" },
          }}
        >
          <Grid item>
            <Button
              onClick={Styles.handleScroll}
              style={{
                ...Styles.colorWhite,
                ...Styles.colorTransparent,
              }}
            >
              Scroll Down
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={Styles.handleScroll}
              style={{ ...Styles.colorWhite, ...Styles.colorTransparent }}
            >
              <span
                className="material-icons"
                style={{
                  fontSize: "4rem",
                  color: colors.secondary,
                  lineHeight: 0,
                }}
              >
                keyboard_arrow_down
              </span>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Banner;
