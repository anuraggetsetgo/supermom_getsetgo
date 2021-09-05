import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Iframe from "react-iframe";
const Landingvideobanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  const isMobile3 = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid
        item
        container
        justifyContent="center"
        style={
          isMobile
            ? { marginTop: "375px" }
            : isMobile3
            ? { marginTop: "510px" }
            : isMobile2
            ? { marginTop: "500px" }
            : { marginTop: "374px" }
        }
      >
        <Grid
          item
          xl={8}
          lg={10}
          xs={12}
          container
          justifyContent="center"
          style={isMobile ? { ...Styles.padding20 } : {}}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            style={{ ...Styles.colorCharcoalDark, ...Styles.centerTxt }}
          >
            Here is why you need us!
          </Typography>
        </Grid>
        <Grid item lg={10} container justifyContent="center">
          <Typography
            variant={isMobile ? "h3" : "h1"}
            style={
              isMobile
                ? {
                    ...Styles.colorRed,
                    ...Styles.boldTxt,
                    ...Styles.padding20,
                    ...Styles.centerTxt,
                  }
                : { ...Styles.colorRed, ...Styles.boldTxt }
            }
          >
            More than 5,000 Mom’s
          </Typography>
        </Grid>
        <Grid item lg={10} container justifyContent="center">
          <Typography
            variant={isMobile ? "h3" : "h1"}
            style={
              isMobile
                ? {
                    ...Styles.colorReef,
                    ...Styles.centerTxt,
                    ...Styles.padding20,
                  }
                : { ...Styles.colorReef }
            }
          >
            have transformed with us
          </Typography>
        </Grid>
        <Grid
          item
          lg={10}
          container
          justifyContent="center"
          style={
            isMobile
              ? { ...Styles.marginTop24, ...Styles.padding20 }
              : { ...Styles.marginTop30 }
          }
        >
          <Iframe
            title="GetSetGo Fitness Super Moms"
            src="https://www.youtube.com/embed/Je_cS24G1JI"
            width={isMobile ? "550px" : "850px"}
            height={isMobile ? "300px" : "480px"}
            id="myId"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Landingvideobanner;
