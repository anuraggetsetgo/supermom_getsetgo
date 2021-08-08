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
    height: "fit-content",
    border: "0.362319px solid #4595A4",
    background: "#FFFFFF",
    boxShadow: "none",
    borderRadius: "0",
  },
});

const Sellingreviews = () => {
  const classes = useStyles();
  return (
    <Grid item container direction="column" alignItems="center" justify="center">
      <Grid item container justify="flex-start" style={{ padding: "100px 0 485px", background: "rgba(16, 58, 66, 0.1)" }}>
        <Grid item container justify="center" alignItems="center" xs={12} sm={12} lg={10}>
          <Typography variant="h4" style={{ ...Styles.boldTxt, ...Styles.colorReef }}>
            Our community is flooded with positive reviews
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justify="center" alignItems="center" style={{ marginBottom: "30px", ...Styles.padding30tb, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.12)", borderRadius: "10px" }} xs={12} sm={12} lg={10}>
        <Grid item container alignItems="flex-start">
          <Grid item xs={12} sm={12} lg={4} container justify="center" alignItems="flex-start">
            <Card className={classes.root}>
              <CardContent>
                <Grid item container justify="center">
                  <img src={Styles.backCoverImg("review1.png")} alt="Logo" />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} container justify="center" alignItems="flex-start">
            <Card className={classes.root}>
              <CardContent>
                <Grid item container justify="center">
                  <img src={Styles.backCoverImg("review2.png")} alt="Logo" />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} container justify="center" alignItems="flex-start">
            <Card className={classes.root}>
              <CardContent>
                <Grid item container justify="center">
                  <img src={Styles.backCoverImg("review3.png")} alt="Logo" />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} container justify="center" alignItems="flex-start">
            <Card className={classes.root}>
              <CardContent>
                <Grid item container justify="center">
                  <img src={Styles.backCoverImg("review4.png")} alt="Logo" />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} container justify="center" alignItems="flex-start">
            <Card className={classes.root}>
              <CardContent>
                <Grid item container justify="center">
                  <img src={Styles.backCoverImg("review5.png")} alt="Logo" />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sellingreviews;
