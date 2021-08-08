import React from "react";
import Styles from "../app-style.js";
import { Typography, Grid } from "@material-ui/core";

const Sellingmidbanner = () => {
  return (
    <>
      <Grid item container style={{ marginBottom: "100px" }}>
        <Grid
          justify="flex-start"
          alignItems="center"
          style={{
            height: "444px",
            width: "100%",
            backgroundImage: `url(${Styles.backCoverImg(
              "selling_mid_img.png"
            )})`,
            backgroundSize: "100% 100%",
          }}
        >
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ marginTop: "75px" }}
          >
            <Grid justify="center" alignItems="center">
              <Typography
                variant="h1"
                style={{
                  textAlign: "center",
                  ...Styles.colorWhite,
                  ...Styles.boldTxt,
                }}
              >
                ARE YOU READY
                <br /> TO TRANSFORM YOUR LIFE?
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ marginTop: "20px" }}
          >
            <Grid
              justify="center"
              alignItems="center"
              style={{
                background: "#FFDD33",
                borderRadius: "20px",
              }}
            >
              <Grid item style={{ margin: "30px 60px" }}>
                <Typography
                  variant="h2"
                  style={{
                    textAlign: "center",
                    ...Styles.colorReef,
                  }}
                >
                  Try before you invest.
                  <br />
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    JUST ₹ 999 FOR 2 WEEKS
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Sellingmidbanner;
