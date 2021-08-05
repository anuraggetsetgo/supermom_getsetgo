import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import PreloadImage from "../helpers/preloadimg";
import { retrievePath } from "../services";
import customTxt from "./customTxt.json";
import Feelgood2 from './Feelgood2'
class Yoga extends Component {
  render() {
    return (
      <><Grid container
      item style={{ ...Styles.fullHt, ...Styles.highZ, }}
      direction="row"
      alignItems="center"
      justify="space-evenly"
      className="top"><Feelgood2/></Grid>
        <Grid
          container
          item
          style={{ ...Styles.fullHt, ...Styles.highZ, }}
          direction="row"
          alignItems="center"
          justify="space-evenly"
          className="top"
        >
          <Grid
            item
            container
            xs={5}
            style={{
              ...Styles.blueBG,
              ...Styles.padding5,
              ...Styles.cardRadius,
            }}
            alignItems="flex-start"
            justify="center"
            direction="column"
          >
            <Typography variant="h2" style={Styles.colorWhite}>
              {customTxt.yogaPageTxt.mainHeading[0]}
              <span style={Styles.colorYellow}>
                {customTxt.yogaPageTxt.mainHeading[1]}{" "}
              </span>
              {customTxt.yogaPageTxt.mainHeading[2]}
            </Typography>
            <Typography
              variant="h6"
              style={{ ...Styles.colorWhite }}
            >
              <ul>
                {customTxt.yogaPageTxt.contentList.map((val) => {
                  return (
                    <>
                      <li>{val}</li>
                    </>
                  );
                })}
              </ul>
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={5}
            style={{ ...Styles.whiteBG, ...Styles.cardRadius }}
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Grid item xs={10}>
              <PreloadImage
                src={"./img/Why-our-health-care-plans-are-effective.jpg"}
                style={{ position: "relative", width: "100%", height: "auto" }}
                alt="Morning yoga to help you stay positive"
              />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Yoga;
