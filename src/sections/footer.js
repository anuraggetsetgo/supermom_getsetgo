import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import customTxt from "./customTxt.json";
import { useHistory } from "react-router-dom";

const Footer = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          lg={10}
          md={10}
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: "36px", ...Styles.marginTop30 }}
        >
          <Typography variant={isMobile ? "subtitle2" : "subtitle1"}>
            © {new Date().getFullYear()} GetSetGo Fitness. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
