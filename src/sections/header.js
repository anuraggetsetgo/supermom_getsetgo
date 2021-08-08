import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";

const Header = () => {
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
        lg={8}
        style={{ height: "100px" }}
      >
        <img src={Styles.backCoverImg("Logo.png")} alt="Logo" height="50px" />
      </Grid>
    </Grid>
  );
};

export default Header;
