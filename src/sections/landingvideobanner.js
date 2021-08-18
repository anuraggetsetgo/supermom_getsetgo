import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Iframe from "./iframe";
const Landingvideobanner = () => {
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
        justify="center"
        className="margintopMedia"
        style={{
          marginTop: isMobile ? "355px" : isMobile3 ? "550px" : "400px",
          marginBottom: isMobile ? "0" : "0px",
          padding: isMobile ? "20px" : "0",
        }}
      >
        <Grid item justify="center" xs={12} sm={10} lg={12}>
          <Grid item>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              style={{ textAlign: "center" }}
            >
              Here is why you need us!
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant={isMobile ? "h3" : "h1"}
              style={{
                textAlign: "center",
                ...Styles.colorRed,
                ...Styles.boldTxt,
              }}
            >
              More than{isMobile ? <br></br> : " "}
              5,000 Moms
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant={isMobile ? "h3" : "h1"}
              style={{
                textAlign: "center",
                ...Styles.colorReef,
                marginBottom: isMobile ? "24px" : "32px",
              }}
            >
              have transformed with us
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            justify="center"
            alignItems="center"
            container
            style={{
              margin: "0px",
              //minHeight: "40vh",
              //maxHeight: "40vh",
            }}
          >
            <Grid
              item
              style={
                {
                  //position: "absolute",
                  //minWidth:'100vw',
                  //maxWidth:'100vw',
                }
              }
            >
              {/* <img src={Styles.backCoverImg("mother_holding_img.png")} /> */}
              <Iframe
                // wd={window.screen.width * 0.7 + "px"}
                // ht={window.screen.height * 0.45 + "px"}
                wd={isMobile2 ? "100%" : window.screen.width * 0.62 + "px"}
                ht={isMobile2 ? "100%" : window.screen.width * 0.35 + "px"}
                title="GetSetGo Fitness Super Moms"
                src="https://www.youtube.com/embed/Je_cS24G1JI"
              />
            </Grid>
            {/* <Grid
              item
              style={{
                position: "absolute",
                right: isMobile ? "5%" : "5%",
                height: isMobile ? "40vh" : "40vh",
              }}
            >
              <img
                style={{
                  width: isMobile ? "20vw" : "100%",
                  height: isMobile ? "40vh" : "50vh",
                }}
                src={Styles.backCoverImg("pngItem_img.png")}
              />
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Landingvideobanner;
