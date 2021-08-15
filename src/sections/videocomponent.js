import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Iframe from "./iframe";

const Videocomponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  const isMobile3 = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      item
      container
      direction="row"
      alignItems="center"
      justify="center"
      style={{
        margin: isMobile ? "-150px 0 0 0" : "0 0",
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
          LIVE THE LIFE {isMobile ? <br /> : ""}YOU LOVE.
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
          sm={10}
          lg={11}
          md={8}
          container
          alignItems="center"
          justify={isMobile2 ? "center" : "space-between"}
          direction="row"
          style={{
            marginBottom: isMobile ? "24px" : "80px",
            marginTop: "30px",
          }}
        >
          <Grid item alignItems="center" justify="center" direction="column">
            <Iframe //style={{width:'80vw'}}
              wd={isMobile ? "100%" : window.screen.width * 0.28 + "px"}
              ht={isMobile ? "100%" : window.screen.width * 0.28 + "px"}
              title="full body home workout"
              src="https://www.youtube.com/embed/jziXjc2Lw00"
              frameborder="0"
              allowfullscreen
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
              wd={isMobile ? "100%" : window.screen.width * 0.28 + "px"}
              ht={isMobile ? "100%" : window.screen.width * 0.28 + "px"}
              title="full body home workout"
              src="https://www.youtube.com/embed/yNl6ypbfWdI"
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
              wd={isMobile ? "100%" : window.screen.width * 0.28 + "px"}
              ht={isMobile ? "100%" : window.screen.width * 0.28 + "px"}
              title="full body home workout"
              src="https://www.youtube.com/embed/u_wzaDCu_c8"
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
