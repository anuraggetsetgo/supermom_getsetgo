import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { useMediaQuery, useTheme, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import PreloadImage from "../preloadImg";
import Logo from "../logoElement.png";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //let history=useHistory();
  //console.log(history)
  return (
    <Grid item container direction="row" alignItems="center" justify="center">
      <Grid
        item
        container
        alignItems="center"
        justify="space-between"
        direction="row"
        xs={12}
        sm={10}
        lg={10}
        style={
          isMobile
            ? { padding: "25px 20px 8px 20px" }
            : { height: "90px", padding: "0" }
        }
      >
        <Link to="/">
          <PreloadImage
            src={Styles.backCoverImg("Logo.png")}
            alt="Logo"
            height={isMobile ? "50px" : "50px"}
            width={isMobile ? "50px" : "50px"}
            style={isMobile ? { height: isMobile ? "7vh" : "8vh" } : null}
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
