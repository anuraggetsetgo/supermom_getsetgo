import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "350px",
    border: "0.362319px solid #4595A4",
    background: "#FFFFFF",
    boxSizing: "border-box",
    boxShadow: "none",
    borderRadius: "0",
  },
});

const Sellingreviews = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid
        item
        container
        direction="column"
        justify="flex-start"
        style={{
          width: "1170px",
          height: "38px",
          display: "flex",
          marginBottom: "64px",
        }}
      >
        <Typography
          style={{
            fontFamily: "Poppins",
            fontSize: "32px",
            fontWeight: "bold",
            color: " #103A42",
          }}
        >
          Our community is flooded with positive reviews
        </Typography>
      </Grid>
      <Grid
        direction="row"
        justify="flex-start"
        style={{
          width: "1170px",
          height: "1170px",
          marginBottom: "60px",
          display: "flex",
          background: "#FFFFFF",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.12)",
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardContent>
                <img src={Styles.backCoverImg("review1.png")} alt="Logo" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardContent>
                <img src={Styles.backCoverImg("review2.png")} alt="Logo" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardContent>
                <img src={Styles.backCoverImg("review3.png")} alt="Logo" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardContent>
                <img src={Styles.backCoverImg("review4.png")} alt="Logo" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardContent>
                <img src={Styles.backCoverImg("review5.png")} alt="Logo" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sellingreviews;
