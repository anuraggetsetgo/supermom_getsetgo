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
          xs={12}
          container
          direction={"row"}
          alignItems={"center"}
          justify={"center"}
          className="app-card"
          style={{
            zIndex: 2,
            backgroundColor: "white",
            padding: "40px 51px 40px 51px",
            maxWidth: "1070px",
            height: "242px",
          }}
        >
          <Grid
            item
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justify="flex-start"
            style={{
              width: "588px",
            }}
          >
            {customTxt.GSGInTheNews.images.map((val, key) => {
              return (
                <Grid item xs={3} key={key}>
                  <Grid
                    item
                    style={{
                      width: "100%",

                      margin: "12px auto",
                    }}
                  >
                    {/* <a
                        href={val[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img width="100%" src={val[0]} />
                      </a> */}
                    <img width="100%" src={Styles.backCoverImg(val[0])} />
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Typography variant="subtitle2" style={{ color: "#666666" }}>
          © 2021 GetSetGo Fitness. All Rights Reserved.
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
