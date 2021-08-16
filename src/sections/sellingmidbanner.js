import React from "react";
import Styles from "../app-style.js";
import { Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";

const Sellingmidbanner = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      <Grid item container>
        <Grid
          justify="flex-start"
          alignItems="center"
          style={{
            height: isMobile ? "380px" : "444px",
            width: "100%",
            backgroundImage: `url(${Styles.backCoverImg(
              "selling_mid_img.png"
            )})`,
            backgroundSize: "100% 100%",
            padding: isMobile ? "20px" : "0",
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
                variant={isMobile ? "h3" : "h1"}
                style={{
                  ...Styles.centerTxt,
                  ...Styles.colorWhite,
                  ...Styles.boldTxt,
                }}
              >
                ARE YOU READY
                <br />
                TO TRANSFORM YOUR LIFE?
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
                ...Styles.cardRadius2,
                cursor: "pointer",
              }}
            >
              <Grid
                item
                style={{ margin: isMobile ? "15px 28px" : "30px 60px" }}
                onClick={() => {
                  props.createOrder(props.product[0], 0);
                }}
              >
                <Typography
                  variant={isMobile ? "h5" : "h2"}
                  style={{ ...Styles.centerTxt, ...Styles.colorReef }}
                >
                  Try before you invest.
                  <br />
                  <span style={{ ...Styles.boldTxt }}>
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
