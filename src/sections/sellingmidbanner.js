import React from "react";
import Styles from "../app-style.js";
import { Typography, Grid } from "@material-ui/core";

const Sellingmidbanner = () => {
  return (
    <>
      <Grid item container>
        <Grid
          justify="flex-start"
          alignItems="center"
          style={{
            height: "644px",
            display: "flex",
            backgroundImage: `url(${Styles.backCoverImg(
              "selling_mid_img.png"
            )})`,
          }}
        >
          {/* <img
            src={Styles.backCoverImg("selling_mid_img.png")}
            alt="Midbanner"
          /> */}
        </Grid>
      </Grid>
    </>
  );
};
export default Sellingmidbanner;
