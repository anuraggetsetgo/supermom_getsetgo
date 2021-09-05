import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import customTxt from "./customTxt.json";
import CoachCard from "../Common components/CoachCard.js";

const Coachwork = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{
          position: "relative",
          top: isMobile ? "-100px" : "-58px",
          zIndex: "-2",
          background: "rgba(255, 221, 51, 0.1)",
        }}
      >
        <Grid
          item
          justifyContent="flex-start"
          alignItems="center"
          xl={8}
          xs={10}
          sm={10}
          lg={10}
          style={
            isMobile
              ? { margin: "120px 0 40px 0" }
              : { margin: "158px 0 100px 0" }
          }
        >
          <Grid item style={{ ...Styles.marginBottom40, ...Styles.padding20 }}>
            <Typography
              variant={isMobile ? "h3" : "h1"}
              style={{ ...Styles.boldTxt, ...Styles.colorRed }}
            >
              {customTxt.howDoesGetSetGoWorkTxt.mainHeading}
            </Typography>
          </Grid>
          {isMobile ? (
            <Grid item container spacing={4} justifyContent="center">
              <CoachCard
                CoachCardData={customTxt.howDoesGetSetGoWorkTxtMobile.phases1}
              />
            </Grid>
          ) : (
            <Grid item container spacing={4} justifyContent="center">
              <CoachCard
                CoachCardData={customTxt.howDoesGetSetGoWorkTxt.phases1}
              />
              <CoachCard
                CoachCardData={customTxt.howDoesGetSetGoWorkTxt.phases2}
              />
            </Grid>
          )}
        </Grid>
        <Grid item xs={12} style={{ position: "absolute", zIndex: "-3" }}>
          <img
            src={Styles.backCoverImg("backlogo.png")}
            width="100%"
            alt="backlogo"
          />
        </Grid>
      </Grid>
    </>
  );
};
export default Coachwork;
