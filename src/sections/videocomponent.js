import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";

const Videocomponent = () => {
  return (
    <Grid item container direction="row" alignItems="center" justify="center" style={{ margin: "150px 0" }}>
      <Grid justify="flex-start" alignItems="center" style={{ width: "1170px", marginBottom: "16px" }}>
        <Typography
          variant="h1"
          style={{
            ...Styles.colorRed,
            ...Styles.boldTxt,
            textAlign: "center",
          }}
        >
          LIVE THE LIFE YOU LOVE.
          <br /> SUPER HEALTHY, HAPPY, AND FIT.
        </Typography>
      </Grid>
      <Grid justify="flex-start" alignItems="center" style={{ width: "1170px", height: "40px" }}>
        <Typography
          variant="h3"
          style={{
            color: "#103A42",
            ...Styles.boldNormal,
            textAlign: "center",
          }}
        >
          Here's what our clients have to say..
        </Typography>
      </Grid>
      <Grid item container alignItems="center" justify="center">
        <Grid item container alignItems="center" justify="space-between" direction="row" style={{ width: "1170px", marginBottom: "24px", marginTop: "30px" }}>
          <Grid
            item
            justify="center"
            style={{
              height: "246px",
              width: "370px",
              backgroundImage: `url(${Styles.backCoverImg("video_img1.png")})`,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item>
              <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.525 43.6328L42.525 30.1328L24.525 16.6328V43.6328ZM9.33746 9.03906C15.2437 3.13281 22.3218 0.179688 30.5718 0.179688C38.8218 0.179688 45.8531 3.13281 51.6656 9.03906C57.5718 14.8516 60.525 21.8828 60.525 30.1328C60.525 38.3828 57.5718 45.4609 51.6656 51.3672C45.8531 57.1797 38.8218 60.0859 30.5718 60.0859C22.3218 60.0859 15.2437 57.1797 9.33746 51.3672C3.52496 45.4609 0.618713 38.3828 0.618713 30.1328C0.618713 21.8828 3.52496 14.8516 9.33746 9.03906Z" fill="white" />
              </svg>
            </Grid>
          </Grid>
          <Grid
            item
            justify="center"
            style={{
              height: "246px",
              width: "370px",
              backgroundImage: `url(${Styles.backCoverImg("video_img2.png")})`,
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.525 43.6328L42.525 30.1328L24.525 16.6328V43.6328ZM9.33746 9.03906C15.2437 3.13281 22.3218 0.179688 30.5718 0.179688C38.8218 0.179688 45.8531 3.13281 51.6656 9.03906C57.5718 14.8516 60.525 21.8828 60.525 30.1328C60.525 38.3828 57.5718 45.4609 51.6656 51.3672C45.8531 57.1797 38.8218 60.0859 30.5718 60.0859C22.3218 60.0859 15.2437 57.1797 9.33746 51.3672C3.52496 45.4609 0.618713 38.3828 0.618713 30.1328C0.618713 21.8828 3.52496 14.8516 9.33746 9.03906Z" fill="white" />
            </svg>
          </Grid>
          <Grid
            item
            justify="center"
            style={{
              height: "246px",
              width: "370px",
              backgroundImage: `url(${Styles.backCoverImg("video_img3.png")})`,
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.525 43.6328L42.525 30.1328L24.525 16.6328V43.6328ZM9.33746 9.03906C15.2437 3.13281 22.3218 0.179688 30.5718 0.179688C38.8218 0.179688 45.8531 3.13281 51.6656 9.03906C57.5718 14.8516 60.525 21.8828 60.525 30.1328C60.525 38.3828 57.5718 45.4609 51.6656 51.3672C45.8531 57.1797 38.8218 60.0859 30.5718 60.0859C22.3218 60.0859 15.2437 57.1797 9.33746 51.3672C3.52496 45.4609 0.618713 38.3828 0.618713 30.1328C0.618713 21.8828 3.52496 14.8516 9.33746 9.03906Z" fill="white" />
            </svg>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" justify="space-between" direction="row" style={{ width: "1170px", marginBottom: "24px" }}>
          <Grid
            item
            justify="center"
            style={{
              height: "50px",
              width: "370px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "#666666",
              }}
            >
              Nima lost more than 10 kgs
              <br /> post-pregnancy.
            </Typography>
          </Grid>
          <Grid
            item
            justify="center"
            style={{
              height: "50px",
              width: "370px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "#666666",
              }}
            >
              Nima lost more than 10 kgs
              <br /> post-pregnancy.
            </Typography>
          </Grid>
          <Grid
            item
            justify="center"
            style={{
              height: "50px",
              width: "370px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "#666666",
              }}
            >
              Nima lost more than 10 kgs
              <br /> post-pregnancy.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Videocomponent;
