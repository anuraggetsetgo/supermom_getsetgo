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
      <Grid item container direction="row" alignItems="center" justify="center">
          <Grid item>
            <Typography
              variant={isMobile ? "body2" : "subtitle2"}
              style={{
                ...Styles.colorCharcoalLight,
                margin: isMobile ? "30px 0 24px" : "30px 0 36px",
                ...Styles.centerTxt,
              }}
            >
              © {new Date().getFullYear()} GetSetGo Fitness. All Rights
              Reserved.
            </Typography>
          </Grid>
        </Grid>
        
      
    </>
  );
};

export default Footer;
