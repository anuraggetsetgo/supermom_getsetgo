import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";

const Landingvideobanner = () => {
  return (
    <>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "320px" }}
      >
        <Grid item justify="center">
          <Grid item>
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Here is why you need us!
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              style={{
                textAlign: "center",
                ...Styles.colorRed,
                ...Styles.boldTxt,
              }}
            >
              More than 5,000 Mom’s
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              style={{
                textAlign: "center",
                ...Styles.colorReef,
              }}
            >
              have transformed with us
            </Typography>
          </Grid>
          <Grid item container justify="center" style={{ marginTop: "32px" }}>
            <Grid item style={{ width: "850px" }}>
              <Grid
                item
                justify="center"
                alignItems="center"
                style={{
                  position: "absolute",
                  width: "715px",
                  height: "478px",
                  backgroundImage: `url(${Styles.backCoverImg(
                    "mother_holding_img.png"
                  )})`,
                  display: "flex",
                }}
              >
                <Grid item>
                  <Grid item>
                    <svg
                      width="121"
                      height="121"
                      viewBox="0 0 121 121"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M48.3236 87.5146L84.2495 60.5703L48.3236 33.6259V87.5146ZM18.0112 18.4697C29.7994 6.68153 43.9265 0.787455 60.3925 0.787455C76.8585 0.787455 90.892 6.68153 102.493 18.4697C114.281 30.0707 120.175 44.1043 120.175 60.5703C120.175 77.0362 114.281 91.1633 102.493 102.951C90.892 114.553 76.8585 120.353 60.3925 120.353C43.9265 120.353 29.7994 114.553 18.0112 102.951C6.4102 91.1633 0.609679 77.0362 0.609679 60.5703C0.609679 44.1043 6.4102 30.0707 18.0112 18.4697Z"
                        fill="white"
                      />
                    </svg>
                  </Grid>
                  <Grid item style={{ marginTop: "20px" }}>
                    <Typography
                      variant="body2"
                      style={{ ...Styles.whiteColor }}
                    >
                      click to play the video
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                style={{
                  position: "relative",
                  left: "575px",
                  width: "273px",
                  height: "477px",
                  backgroundImage: `url(${Styles.backCoverImg(
                    "pngItem_img.png"
                  )})`,
                }}
              ></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Landingvideobanner;
