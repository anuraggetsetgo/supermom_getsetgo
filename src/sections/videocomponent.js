import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Iframe from "react-iframe";

const VideoData = {
  GSGVideo: [
    {
      id: 1,
      title: "full body home workout",
      videoLink: "https://www.youtube.com/embed/jziXjc2Lw00",
      descripation: "Nima",
    },
    {
      id: 2,
      title: "full body home workout",
      videoLink: "https://www.youtube.com/embed/yNl6ypbfWdI",
      descripation: " Padmini",
    },
    {
      id: 3,
      title: "full body home workout",
      videoLink: "https://www.youtube.com/embed/u_wzaDCu_c8",
      descripation: "Suman",
    },
  ],
};

const Videocomponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        justifyContent="center"
        // style={isMobile ? { ...Styles.marginTop40 } : {}}
      >
        <Grid
          item
          xl={8}
          lg={10}
          xs={11}
          md={11}
          container
          justifyContent="center"
        >
          <Typography
            variant={isMobile ? "h3" : "h1"}
            style={{
              ...Styles.colorRed,
              ...Styles.boldTxt,
              ...Styles.centerTxt,
            }}
          >
            LIVE THE LIFE YOU LOVE.{isMobile ? "" : <br />} SUPER HEALTHY,
            HAPPY, AND FIT.
          </Typography>
        </Grid>
        <Grid
          item
          xl={8}
          lg={10}
          xs={11}
          md={11}
          container
          justifyContent="center"
        >
          <Typography
            variant={isMobile ? "h5" : "h3"}
            style={
              isMobile
                ? {
                    ...Styles.colorReef,
                    // ...Styles.paddingTextTop,
                    ...Styles.centerTxt,
                  }
                : {
                    ...Styles.colorReef,
                    ...Styles.marginTop16,
                  }
            }
          >
            Here's what our clients have to say..
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={isMobile ? {} : { ...Styles.marginTop30 }}
      >
        <Grid
          item
          lg={10}
          xl={8}
          md={12}
          sm={11}
          container
          justifyContent={isMobile ? "center" : "space-between"}
          alignItems="center"
        >
          {VideoData.GSGVideo.map((val, key) => {
            return (
              <React.Fragment key={val.id + key}>
                <Grid
                  item
                  lg={4}
                  xl={4}
                  md={6}
                  xs={11}
                  sm={6}
                  direction="row"
                  justifyContent="center"
                  container
                  style={
                    isMobile2
                      ? { ...Styles.marginTop24 }
                      : isMobile
                      ? { ...Styles.marginTop30 }
                      : {}
                  }
                >
                  <Iframe
                    title={val.title}
                    src={val.videoLink}
                    width="93%"
                    height="300px"
                    id="myId"
                  />
                  <Typography
                    variant="h5"
                    style={{
                      ...Styles.boldTxt,
                      ...Styles.centerTxt,
                      ...Styles.colorReef,
                      ...Styles.marginTop24,
                    }}
                  >
                    {val.descripation}
                  </Typography>
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Videocomponent;
