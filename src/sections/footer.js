import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import customTxt from "./customTxt.json";

const Footer = () => {
  return (
    <>
      <Grid
        item
        style={{ ...Styles.footer, ...Styles.highZ }}
        direction="column"
        alignItems="center"
        justify="center"
        xs={12}
      >
        <Grid
          item
          justify="center"
          alignItems="center"
          style={{ display: "flex" }}
        >
          <svg
            width="167"
            height="1"
            viewBox="0 0 167 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="167"
              y1="0.5"
              x2="-4.37114e-08"
              y2="0.499985"
              stroke="black"
              stroke-opacity="0.2"
            />
          </svg>

          <Typography
            variant="h4"
            style={{ ...Styles.colorReef, fontWeight: "700", margin: "0 21px" }}
          >
            {customTxt.GSGInTheNews.mainheading}
          </Typography>
          <svg
            width="167"
            height="1"
            viewBox="0 0 167 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="167"
              y1="0.5"
              x2="-4.37114e-08"
              y2="0.499985"
              stroke="black"
              stroke-opacity="0.2"
            />
          </svg>
        </Grid>
        <Grid
          item
          container
          justify="center"
          style={{
            zIndex: 2,
            padding: "40px 51px 40px 51px",
          }}
        >
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justify="flex-start"
            style={{
              width: "1170px",
              height: "242px",
            }}
          >
            {customTxt.GSGInTheNews.images.map((val, key) => {
              return (
                <Grid item xs={3} key={key}>
                  <Grid
                    item
                    style={{
                      margin: "12px auto",
                    }}
                  >
                    <a href={val[1]} target="_blank" rel="noopener noreferrer">
                      <img width="50%" src={Styles.backCoverImg(val[0])} />
                    </a>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle2"
            style={{ ...Styles.colorCharcoalLight, marginTop: "80px" }}
          >
            © 2021 GetSetGo Fitness. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
