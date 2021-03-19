import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { colors, retrievePath } from "../services";
import PreloadImage from "../helpers/preloadimg";
class Transformations extends Component {
  render() {
    let images = ["01", "02", "03", "04", "05", "06"];
    return (
      <Grid
        item
        container
        style={{ ...Styles.highZ, ...Styles.whiteBG, ...Styles.padding5 }}
        alignItems="flex-start"
        justify="center"
        className="top"
      >
        <Grid item>
          <Typography variant="h2" style={{ ...Styles.centerTxt }}>
            More than <span style={Styles.colorPrimary}>20000</span> people have
            learned <span style={Styles.colorPrimary}>a new way of life</span>{" "}
            with us
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              textAlign: "center",
              color: colors.grey,
              margin: "20px 0",
            }}
          >
            They have realised that getting fit is just a by-product of
            following a simple, happy regime
          </Typography>
        </Grid>
        <Grid item container xs={10} justify="space-evenly" spacing={2}>
          {images.map((image, indx) => {
            return (
              <Grid item xs={6} key={`${image}-${indx}`}>
                <PreloadImage
                  src={`${retrievePath()}${image}.jpg`}
                  alt="Simple, macro-calculated recipes"
                  style={{ width: "100%" }}
                />
              </Grid>
            );
          })}
          {/* <Grid item xs={6}>
            <PreloadImage src={T01} alt="Simple, macro-calculated recipes" style={{width: '100%'}}/>
          </Grid>
          <Grid item xs={6}>
            <PreloadImage src={T02} alt="Simple, macro-calculated recipes" style={{width: '100%'}}/>
          </Grid>
          <Grid item xs={6}>
            <PreloadImage src={T03} alt="Simple, macro-calculated recipes" style={{width: '100%'}}/>
          </Grid>
          <Grid item xs={6}>
            <PreloadImage src={T04} alt="Simple, macro-calculated recipes" style={{width: '100%'}}/>
          </Grid>
          <Grid item xs={6}>
            <PreloadImage src={T05} alt="Simple, macro-calculated recipes" style={{width: '100%'}}/>
          </Grid>
          <Grid item xs={6}>
            <PreloadImage src={T06} alt="Simple, macro-calculated recipes" style={{width: '100%'}}/>
          </Grid> */}
        </Grid>
      </Grid>
    );
  }
}
export default Transformations;
