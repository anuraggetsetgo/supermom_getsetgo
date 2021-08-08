import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";

const Videocomponent = () => {
  return (
    <Grid
      item
      container
      direction="row"
      alignItems="center"
      justify="center"
      style={{ margin: "150px 0" }}
    >
      <Grid justify="flex-start" alignItems="center">
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
      <Grid justify="flex-start" alignItems="center">
        <Typography
          variant="h3"
          style={{
            ...Styles.colorReef,
            ...Styles.boldNormal,
            textAlign: "center",
          }}
        >
          Here's what our clients have to say..
        </Typography>
      </Grid>
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
          spacing={2}
          style={{ marginBottom: "24px", marginTop: "30px" }}
        >
          <Grid
            item
            justify="center"
            xs={12}
            sm={12}
            lg={4}
            container
            alignItems="center"
            style={{
              height: "246px",
              backgroundSize: "100% 100%",
              backgroundImage: `url(${Styles.backCoverImg("video_img1.png")})`,
            }}
          >
            <Grid item></Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            container
            alignItems="center"
            justify="center"
            style={{
              height: "246px",
              backgroundImage: `url(${Styles.backCoverImg("video_img2.png")})`,
              backgroundSize: "100% 100%",
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            justify="center"
            style={{
              height: "246px",
              backgroundImage: `url(${Styles.backCoverImg("video_img3.png")})`,
              display: "flex",
              alignItems: "center",
              backgroundSize: "100% 100%",
            }}
          ></Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="space-between"
          direction="row"
          style={{ width: "1170px", marginBottom: "24px" }}
        >
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
                ...Styles.colorCharcoalLight,
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
                ...Styles.colorCharcoalLight,
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
                ...Styles.colorCharcoalLight,
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
