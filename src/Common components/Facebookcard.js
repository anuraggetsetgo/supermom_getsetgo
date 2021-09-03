import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Styles from "../app-style";
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

function Facebookcard(props) {
  const ReviewData = props.ReviewData;
  const classes = useStyles();
  return (
    <>
      <Grid item container alignContent="flex-start" xs={12} sm={6} lg={4}>
        {ReviewData.map((txt, i) => (
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
    </>
  );
}

export default Facebookcard;
