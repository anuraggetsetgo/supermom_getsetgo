import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";

const Banner = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const currency = () => {
    let currency = props.product[0].pack_currency;
    let currText = currency === "INR" ? "₹" : currency === "USD" ? "$" : "AED"; //د.إ
    return currText;
  };
  return (
    <>
      <Grid item container alignItems="center" justifyContent="center">
        <Grid
          item
          container
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          xl={8}
          xs={12}
          sm={10}
          lg={10}
          style={isMobile ? { ...Styles.padding20, ...Styles.marginTop24 } : {}}
        >
          <Grid
            item
            container
            alignItems="flex-start"
            justifyContent="center"
            direction="column"
            xs={12}
            sm={5}
            lg={4}
          >
            <Typography
              variant={isMobile ? "h3" : "h1"}
              style={Styles.colorRed}
            >
              <span style={Styles.boldTxt}>Awesome, </span>you’re just 1 step
              away from a{" "}
              <span style={Styles.boldTxt}>kickass transformation.</span>
            </Typography>
            <br />
            <Typography
              variant={isMobile ? "h3" : "h1"}
              style={{ ...Styles.boldTxt, ...Styles.colorReef }}
            >
              YOU'RE GOING TO LOVE IT.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} container>
            <img
              src={Styles.backCoverImg(
                "excited-beautiful-girl-smiling-pointing.png"
              )}
              alt="banner"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={10} lg={12} container justifyContent="center">
            <Styles.ColorButton2
              style={
                isMobile
                  ? {
                      fontSize: "20px",
                      lineHeight: "28px",
                      borderRadius: "10px",
                      padding: "13px 30px",
                      top: "-2px",
                    }
                  : { top: "-2px" }
              }
              onClick={() => {
                props.createOrder(props.product[0], 0);
              }}
            >
              TRY US FOR 2 WEEKS NOW AT JUST {currency()}{" "}
              {props.product[0].pack_price}
            </Styles.ColorButton2>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Banner;
