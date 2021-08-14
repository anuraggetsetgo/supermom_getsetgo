import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import customTxt from "./customTxt.json";

const useStyles = makeStyles({
  root: {
    width: "350px",
    height: "fit-content",
    border: "0.362319px solid #4595A4",
    background: "#FFFFFF",
    boxShadow: "none",
    borderRadius: "0",
  },
});

const Sellingreviews = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  const isMobile3 = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{
        position: "relative",
        marginBottom: isMobile3 ? "1300px" : isMobile ? "2250px" : "785px",
      }}
    >
      <Grid
        item
        container
        justify="center"
        style={{
          padding: isMobile ? "20px 0px 485px" : "100px 0 485px",
          background: "rgba(16, 58, 66, 0.1)",
        }}
      >
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          sm={10}
          lg={10}
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
        justify="center"
        alignItems="flex-start"
        style={{
          position: "absolute",
          top: "192px",
          ...Styles.padding30tb,
          ...Styles.whiteBG,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.12)",
          borderRadius: "10px",
        }}
        xs={12}
        sm={12}
        lg={10}
        md={10}
      >
        <Grid item container alignContent="flex-start" xs={12} sm={6} lg={4}>
          {customTxt.reviewImages.reviews1.map((txt, i) => (
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              container
              justify="center"
              alignItems="flex-start"
              key={i}
              style={{ margin: i === 0 && "0 0 30px" }}
            >
              <Card className={classes.root}>
                <CardContent>
                  <Grid item container justify="center">
                    <img src={Styles.backCoverImg(txt)} alt="Logo" />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item container alignContent="flex-start" xs={12} sm={6} lg={4}>
          {customTxt.reviewImages.reviews2.map((txt, i) => (
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              container
              justify="center"
              alignItems="flex-start"
              key={i}
              style={{ margin: i === 0 && "0 0 30px" }}
            >
              <Card className={classes.root}>
                <CardContent>
                  <Grid item container justify="center">
                    <img src={Styles.backCoverImg(txt)} alt="Logo" />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item container alignContent="flex-start" xs={12} sm={4} lg={4}>
          {customTxt.reviewImages.reviews3.map((txt, i) => (
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              container
              justify="center"
              alignItems="flex-start"
              key={i}
            >
              <Card className={classes.root}>
                <CardContent>
                  <Grid item container justify="center">
                    <img
                      src={Styles.backCoverImg(txt)}
                      alt="Logo"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sellingreviews;
