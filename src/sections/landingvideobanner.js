import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";

const Landingvideobanner = () => {
  return (
    <>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "320px" }}
      >
        <Grid item justify="center" xs={12} sm={10} lg={10}>
          <Grid item>
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Here is why you need us!
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              style={{
                textAlign: "center",
                ...Styles.colorRed,
                ...Styles.boldTxt,
              }}
            >
              More than 5,000 Mom’s
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              style={{
                textAlign: "center",
                ...Styles.colorReef,
              }}
            >
              have transformed with us
            </Typography>
          </Grid>
          <Grid item xs={12} justify="center" alignItems="center" container>
            <Grid
              item
              xs={8}
              style={{
                position: "absolute",
              }}
            >
              <img
                src={Styles.backCoverImg("mother_holding_img1.png")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                position: "relative",
                left: "36%",
              }}
            >
              <img
                src={Styles.backCoverImg("pngItem_img.png")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Landingvideobanner;
