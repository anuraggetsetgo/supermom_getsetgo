import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { colors } from "../services";

class Publicreviews extends Component {
  render() {
    return (
      <Grid contianer direction="column">
        <Grid
          item
          container
          direction="column"
          alignItems="flex-start"
          justify="flex-start"
          style={{ marginLeft: "20px" }}
        >
          <Typography
            variant="h3"
            style={{ ...Styles.boldTxt, ...Styles.colorReef }}
          >
            Google Rating and Review
          </Typography>
          <Typography variant="h5" style={{ color: "#666666" }}>
            4.9/5 on Google Ratings
          </Typography>
          <svg
            width="160"
            height="32"
            viewBox="0 0 160 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 23L7.75 28L9.9375 18.625L2.6875 12.3125L12.25 11.5L16 2.6875L19.75 11.5L29.3125 12.3125L22.0625 18.625L24.25 28L16 23Z"
              fill="#FF9900"
            />
            <path
              d="M48 23L39.75 28L41.9375 18.625L34.6875 12.3125L44.25 11.5L48 2.6875L51.75 11.5L61.3125 12.3125L54.0625 18.625L56.25 28L48 23Z"
              fill="#FF9900"
            />
            <path
              d="M80 23L71.75 28L73.9375 18.625L66.6875 12.3125L76.25 11.5L80 2.6875L83.75 11.5L93.3125 12.3125L86.0625 18.625L88.25 28L80 23Z"
              fill="#FF9900"
            />
            <path
              d="M112 23L103.75 28L105.938 18.625L98.6875 12.3125L108.25 11.5L112 2.6875L115.75 11.5L125.312 12.3125L118.062 18.625L120.25 28L112 23Z"
              fill="#FF9900"
            />
            <path
              d="M144 20.5625L149 23.5625L147.688 17.875L152.125 14L146.25 13.5L144 8.125V20.5625ZM157.312 12.3125L150.062 18.625L152.25 28L144 23L135.75 28L137.938 18.625L130.688 12.3125L140.25 11.5L144 2.6875L147.75 11.5L157.312 12.3125Z"
              fill="#FF9900"
            />
          </svg>
        </Grid>
        <Grid item container direction="column">
          <Grid
            item
            container
            style={{
              ...Styles.highZ,
              ...Styles.spacingVertical,
              ...Styles.whiteBG,
            }}
            direction="column"
            alignItems="center"
            justify="center"
            className="top"
          >
            <img
              src={Styles.backCoverImg("reviewimg.png")}
              alt="Logo"
              height="100%"
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Publicreviews;
