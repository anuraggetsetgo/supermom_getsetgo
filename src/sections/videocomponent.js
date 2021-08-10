import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Iframe from "./iframe";

const Videocomponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      container
      direction="row"
      alignItems="center"
      justify="center"
      style={{
        margin: isMobile ? "-192px 0 0" : "0 0",
        padding: isMobile ? "20px" : "0",
      }}
    >
      <Grid
        justify="flex-start"
        alignItems="center"
        style={{ width: "1170px", marginBottom: "16px" }}
      >
        <Typography
          variant={isMobile ? "h3" : "h1"}
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
      <Grid
        justify="flex-start"
        alignItems="center"
        style={{ width: "1170px", height: "40px" }}
      >
        <Typography
          variant={isMobile ? "h5" : "h3"}
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
          xs={12}
          sm={12}
          lg={10}
          container
          alignItems="center"
          justify="space-between"
          direction="row"
          style={{
            marginBottom: isMobile ? "24px" : "80px",
            marginTop: "30px",
          }}
        >
          <Grid item alignItems="center" justify="center" direction="column">
            <Iframe //style={{width:'80vw'}}
              wd={
                isMobile
                  ? window.screen.width * 0.8 + "px"
                  : window.screen.width * 0.28 + "px"
              }
              ht={
                isMobile
                  ? window.screen.width * 0.8 + "px"
                  : window.screen.width * 0.28 + "px"
              }
              title="full body home workout"
              src="https://www.youtube.com/embed/u3RRJBrcr-w"
            />
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                ...Styles.colorCharcoalLight,
                margin: isMobile ? "16px 0" : "24px 0",
              }}
            >
              Nima lost more than 10 kgs
              <br /> post-pregnancy.
            </Typography>
          </Grid>
          <Grid item alignItems="center" justify="center" direction="column">
            <Iframe //style={{width:'80vw'}}
              wd={
                isMobile
                  ? window.screen.width * 0.8 + "px"
                  : window.screen.width * 0.28 + "px"
              }
              ht={
                isMobile
                  ? window.screen.width * 0.8 + "px"
                  : window.screen.width * 0.28 + "px"
              }
              title="full body home workout"
              src="https://www.youtube.com/embed/u3RRJBrcr-w"
            />
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                ...Styles.colorCharcoalLight,
                margin: isMobile ? "16px 0" : "24px 0",
              }}
            >
              Nima lost more than 10 kgs
              <br /> post-pregnancy.
            </Typography>
          </Grid>
          <Grid item alignItems="center" justify="center" direction="column">
            <Iframe //style={{width:'80vw'}}
              wd={
                isMobile
                  ? window.screen.width * 0.8 + "px"
                  : window.screen.width * 0.28 + "px"
              }
              ht={
                isMobile
                  ? window.screen.width * 0.8 + "px"
                  : window.screen.width * 0.28 + "px"
              }
              title="full body home workout"
              src="https://www.youtube.com/embed/u3RRJBrcr-w"
            />
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                ...Styles.colorCharcoalLight,
                margin: isMobile ? "16px 0" : "24px 0",
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
