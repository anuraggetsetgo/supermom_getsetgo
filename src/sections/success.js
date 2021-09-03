import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
const Success = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const currency = () => {
    let currency = props.product[0].pack_currency;
    let currText = currency === "INR" ? "₹" : currency === "USD" ? "$" : "AED"; //د.إ
    return currText;
  };
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xl={5}
          lg={7}
          xs={11}
          container
          justifyContent="center"
          styles={{ ...Styles.padding20 }}
        >
          <Typography
            variant={isMobile ? "h3" : "h1"}
            style={{
              ...Styles.centerTxt,
              ...Styles.colorRed,
            }}
          >
            <span style={{ ...Styles.boldTxt }}>
              1,00,000+ GetSetGo community members
            </span>{" "}
            are waiting to hear your success story!
          </Typography>
        </Grid>
        <Grid item xl={8} xs={11} style={{ lineHeight: "0" }}>
          <img
            src={Styles.backCoverImg("link_below.png")}
            alt="Link Below Girl"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid item xl={5} lg={7} xs={11}>
          <Styles.ColorButton2
            style={
              isMobile
                ? { fontSize: "20px", lineHeight: "28px", padding: "13px 30px" }
                : {}
            }
            onClick={() => {
              props.createOrder(props.product[0], 0);
            }}
          >
            Join the 2 weeks trial now AT JUST {currency()}
            {props.product[0].pack_price}
          </Styles.ColorButton2>
        </Grid>
        <Grid item>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            style={{
              ...Styles.centerTxt,
              ...Styles.colorCoral,
              ...Styles.boldTxt,
              margin: isMobile ? "16px 0 40px 0" : "30px 0 64px 0",
            }}
          >
            One day or 'Now'?
            <br />
            You decide.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Success;
