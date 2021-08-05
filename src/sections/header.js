import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import PreloadImage from "../preloadImg";

const Header = () => {
  return (
    <Grid item container direction="row" alignItems="center" justify="center">
      <Grid
        justify="flex-start"
        alignItems="center"
        style={{ width: "1170px", height: "100px", display: "flex" }}
      >
        <img src={Styles.backCoverImg("Logo.png")} alt="Logo" height="50px" />
      </Grid>
    </Grid>
  );
};

export default Header;
