import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Styles from "../app-style.js";
import Signupform from "../signupform";

const Signupbanner = () => {
  return (
    <>
      <Grid item container style={{ marginBottom: "100px" }}>
        <Grid
          justify="flex-start"
          alignItems="center"
          style={{
            height: "614px",
            width: "100%",
            backgroundImage: `url(${Styles.backCoverImg(
              "landingpage_banner.png"
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
            style={{ marginTop: "100px" }}
          >
            <Grid
              justify="center"
              alignItems="center"
              style={{ width: "1170px", height: "212px" }}
            >
              <Typography
                variant="h2"
                style={{ textAlign: "center", ...Styles.whiteColor }}
              >
                If <spam style={{ ...Styles.boldTxt }}>multi-tasking </spam>
                is the name of the game, these mom’s who have{" "}
                <span style={{ ...Styles.boldTxt }}>
                  undergone our coaching program
                </span>{" "}
                have become better
                <span style={{ ...Styles.boldTxt }}> multi-taskers</span> and
                they are nowfully equipped to{" "}
                <span style={{ ...Styles.boldTxt }}>
                  perform their best in all areas
                </span>{" "}
                of their{" "}
                <span style={{ ...Styles.boldTxt }}>super busy life.</span>
              </Typography>
            </Grid>
            <Signupform />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Signupbanner;
