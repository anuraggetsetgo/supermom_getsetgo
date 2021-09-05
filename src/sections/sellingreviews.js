import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import customTxt from "./customTxt.json";
import Facebookcard from "../Common components/Facebookcard.js";

// const useStyles = makeStyles({
//   root: {
//     width: "350px",
//     height: "fit-content",
//     border: "0.362319px solid #4595A4",
//     background: "#FFFFFF",
//     boxShadow: "none",
//     borderRadius: "0",
//   },
// });

const Sellingreviews = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  const isMobile3 = useMediaQuery(theme.breakpoints.down("md"));
  // const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        position: "relative",
        marginBottom: "230px",
      }}
    >
      <Grid
        item
        container
        justifyContent="center"
        style={{
          position: "absolute",
          top: "0",
          padding: isMobile ? "20px 0px 1100px" : "100px 0 485px",
          background: "rgba(16, 58, 66, 0.1)",
        }}
      >
        <Grid
          item
          container
          justifyContent="flex-start"
          alignItems="center"
          xl={8}
          xs={12}
          sm={11}
          lg={10}
          md={10}
          style={{ padding: isMobile ? "20px" : "0" }}
        >
          <Typography
            variant="h3"
            style={{ ...Styles.boldTxt, ...Styles.colorReef }}
          >
            Our community is flooded with positive reviews
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        style={{
          position: "relative",
          top: "192px",
          ...Styles.padding30tb,
          ...Styles.whiteBG,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.12)",
          borderRadius: "10px",
        }}
        xl={8}
        xs={11}
        sm={11}
        lg={10}
        md={10}
      >
        <Facebookcard ReviewData={customTxt.reviewImages.reviews1} />
        <Facebookcard ReviewData={customTxt.reviewImages.reviews2} />
        <Facebookcard ReviewData={customTxt.reviewImages.reviews3} />
      </Grid>
    </Grid>
  );
};

export default Sellingreviews;
