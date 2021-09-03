import React, { forwardRef, ref } from "react";
import { Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Signupform from "../signupform";
import Styles from "../app-style.js";

const Signupbanner = forwardRef((props, ref) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  const isMobile3 = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify="center"
        style={{ ...Styles.marginBottom100, ...Styles.marginTop100 }}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{
            height: isMobile2 ? "620px" : isMobile ? "430px" : "614px",
            width: "100%",
            backgroundImage: `url(${Styles.backCoverImg(
              "landingpage_banner.png"
            )})`,
            backgroundSize: "100% 100%",
          }}
        >
          <Grid
            item
            xl={8}
            xs={12}
            sm={10}
            lg={10}
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{
              marginTop: isMobile ? "40px" : "100px",
              padding: isMobile ? "20px" : "0",
            }}
          >
            <Grid>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                style={{ textAlign: "center", ...Styles.whiteColor }}
              >
                If <span style={{ ...Styles.boldTxt }}>multi-tasking </span>
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
            <Grid ref={ref}>
              <Signupform />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
});

export default Signupbanner;
