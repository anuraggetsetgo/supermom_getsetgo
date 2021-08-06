import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";

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
