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
            height: "644px",
            width: "100%",

            backgroundImage: `url(${Styles.backCoverImg(
              "selling_mid_img.png"
            )})`,
          }}
        >
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ marginTop: "150px" }}
          >
            <Grid
              justify="center"
              alignItems="center"
              style={{ width: "1170px", height: "132px", display: "flex" }}
            >
              <Typography
                style={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontFamily: "Poppins",
                  fontSize: "60px",
                  lineHeight: "66px",
                  fontWeight: "bold",
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
            style={{ marginTop: "40px" }}
          >
            <Grid
              justify="center"
              alignItems="center"
              style={{
                width: "770px",
                height: "172px",
                display: "flex",
                background: "#FFDD33",
                borderRadius: "20px",
              }}
            >
              <Grid item style={{ margin: "30px 60px" }}>
                <Typography
                  style={{
                    textAlign: "center",
                    color: "#103A42",
                    fontFamily: "Poppins",
                    fontSize: "40px",
                    lineHeight: "56px",
                    fontWeight: "normal",
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
