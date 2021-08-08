import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
const Success = () => {
  return (
    <>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid justify="flex-start" alignItems="center">
          <Typography
            variant="h2"
            style={{ ...Styles.centerTxt, ...Styles.colorRed }}
          >
            <span style={Styles.boldTxt}>
              1,00,000+ GetSetGo community
              <br /> members
            </span>{" "}
            are waiting to hear
            <br /> your success story!
          </Typography>
        </Grid>
        <Grid item container alignItems="flex-end">
          <img
            src={Styles.backCoverImg("link_below.png")}
            alt="Link Below Girl"
            height="400px"
          />
        </Grid>
        <Grid
          justify="flex-start"
          alignItems="center"
          style={{
            width: "773px",
            height: "172px",
            marginBottom: "60px",
            display: "flex",
            justifyContent: "center",
            ...Styles.reefBG,
            borderRadius: "20px",
          }}
        >
          <Typography
            style={{
              fontSize: "Poppins",
              fontSize: "40px",
              color: "#FFFFFF",
              textAlign: "center",
              margin: "0px 10px",
              fontWeight: "bold",
              lineHeight: "53px",
              textTransform: "uppercase",
              margin: "0 116 0 60",
            }}
          >
            Join the 2 weeks trial now AT JUST INR 999
          </Typography>
        </Grid>
        <Grid
          justify="flex-start"
          alignItems="center"
          style={{
            width: "774px",
            marginBottom: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              fontSize: "Poppins",
              fontSize: "32px",
              color: "#4595A4",
              textAlign: "center",
              margin: "0px 10px",
              fontWeight: "bold",
              lineHeight: "53px",
            }}
          >
            One day or 'Now'?
            <br /> You decide.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Success;
