import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { useMediaQuery, useTheme, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import PreloadImage from "../preloadImg";
import Logo from "../logoElement.png";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid item container direction="row" alignItems="center" justify="center">
      <Grid
        item
        container
        alignItems="center"
        justify="space-between"
        direction="row"
        xs={12}
        sm={12}
        lg={10}
        style={isMobile?  { height: "70px", padding: "20px" } :
                          { height: "100px", padding: "0" }
      }
      >
        <Link to="/">
          <PreloadImage
            src={Styles.backCoverImg("Logo.png")}
            alt="Logo"
            height={isMobile?"50px":'50px'}
            width={isMobile?"50px":'50px'}
            style={isMobile?{height:'8vh'} :null }
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
