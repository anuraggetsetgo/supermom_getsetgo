import React from "react";
import Styles from "../app-style.js";
import { Typography, Grid } from "@material-ui/core";
import { Style } from "@material-ui/icons";
import customTxt from "./customTxt.json";

const Mediabanner = () => {
  return (
    <>
      <Grid
        item
        container
        alignItems="center"
        justify="center"
        style={{ marginBottom: "100px" }}
      >
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{
            ...Styles.coralBG,
            ...Styles.feildRadius,
            boxShadow: "0px 4px 12px rgba(16, 58, 66, 0.25)",
            ...Styles.padding40,
          }}
          xs={12}
          sm={12}
          lg={10}
        >
          <Grid item>
            <Typography
              variant="h2"
              style={{ ...Styles.colorWhite, ...Styles.boldTxt }}
            >
              1,00,000 members
            </Typography>
            <Typography
              variant="h5"
              style={{ ...Styles.colorWhite, marginTop: "8px" }}
            >
              Online community across social media
            </Typography>
          </Grid>

          <Grid
            item
            container
            xs={3}
            alignItems="center"
            justify="space-between"
          >
            {customTxt.GSGSocialMedia.images.map((val, key) => {
              return (
                <a href={val[1]} target="_blank" rel="noopener noreferrer">
                  <img
                    src={Styles.backCoverImg(val[0])}
                    alt="social Media Icons"
                  />
                </a>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Mediabanner;
