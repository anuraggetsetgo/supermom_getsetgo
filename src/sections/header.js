import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import PreloadImage from "../preloadImg";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid item container justifyContent="center" alignItems="center">
        <Grid
          container
          alignItems="center"
          item
          lg={10}
          xs={11}
          sm={11}
          md={10}
          style={{ height: "90px" }}
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
    </>
  );
};

export default Header;
