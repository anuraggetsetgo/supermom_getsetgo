import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { retrievePath } from "../services";
import PreloadImage from "../helpers/preloadimg";
import customTxt from "./customTxt.json";
class Homeworkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlaying: false,
    };
  }
  render() {
    let { videoPlaying } = this.state;
    return (
      <Grid
        container
        item
        style={{
          ...Styles.highZ,
          ...Styles.fullHt,
        }}
        direction="row"
        alignItems="center"
        justify="space-evenly"
        className="top"
      >
        <Grid
          container
          item
          xs={5}
          style={{
            ...Styles.whiteBG,
            padding: "40px",
            position: "relative",
            ...Styles.cardRadius,
            marginTop: Styles.spacing(5),
          }}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item xs={10} style={{ position: "relative" }}>
            <iframe
              width="300"
              height="300"
              src="https://www.youtube.com/embed/FLXOHwf32K8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <video
              width="100%"
              height="100%"
              controls={videoPlaying}
              ref="vidRef"
            >
              <source src={"https://youtu.be/FLXOHwf32K8"} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video> */}

            {/* {!videoPlaying && (
              <Grid
                onClick={() => {
                  this.refs.vidRef.play();
                  this.setState({ videoPlaying: true });
                }}
                style={{
                  ...Styles.highZ,
                  ...{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <PreloadImage
                  src={"./img/Video_Thumbail.jpg"}
                  alt="Start your day with meditation or yoga"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                  }}/>

               
              </Grid>
            )} */}
          </Grid>
        </Grid>
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
            {customTxt.homeworkoutPageTxt.mainHeading[0]}
            <span style={Styles.colorYellow}>
              {customTxt.homeworkoutPageTxt.mainHeading[1]}
            </span>
            {customTxt.homeworkoutPageTxt.mainHeading[2]}
          </Typography>
          <Typography
            variant="h6"
            style={{ ...Styles.colorWhite, ...Styles.italicTxt }}
          >
            {customTxt.homeworkoutPageTxt.subHeading[0]} <br></br>
            <br></br>
            <span style={Styles.boldTxt}>
              {customTxt.homeworkoutPageTxt.subHeading[1]}
            </span>
            <br></br>
            <b>{customTxt.homeworkoutPageTxt.subHeading[2]}</b> <br></br>
            <b>{customTxt.homeworkoutPageTxt.subHeading[3]}</b>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Homeworkout;
