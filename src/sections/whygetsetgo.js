import React from "react";
import { Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Styles from "../app-style.js";
import customTxt from "./customTxt.json";
import Whygetsetgocard from "../Common components/Whygetsetgocard.js";

const Whygetsetgo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid item container direction="row" justify="center">
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          sm={10}
          lg={10}
          // style={{
          //   margin: "0 0 60px 0",
          //   padding: isMobile ? "0px 20px 0px 20px" : "0",
          // }}
          style={
            isMobile
              ? { ...Styles.marginTop24 }
              : { ...Styles.marginTop100, ...Styles.marginBottom100 }
          }
        >
          <Grid item style={{ marginBottom: "35px" }}>
            <Typography
              variant={isMobile ? "h3" : "h1"}
              style={{ ...Styles.centerTxt, ...Styles.colorRed }}
            >
              Why <span style={{ ...Styles.boldTxt }}>GetSetGo</span> Fitness?
            </Typography>
          </Grid>
          <Grid
            item
            container
            spacing={4}
            alignContent="flex-start"
            justify="center"
          >
            <Whygetsetgocard whygetsetgoData={customTxt.whyGetSetGo.column1} />
            <Whygetsetgocard whygetsetgoData={customTxt.whyGetSetGo.column2} />
            <Whygetsetgocard whygetsetgoData={customTxt.whyGetSetGo.column3} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Whygetsetgo;
