import React from "react";
import Styles from "../app-style.js";
import { Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import customTxt from "./customTxt.json";

const Mediabanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        style={
          isMobile ? { marginBottom: "40px" } : { ...Styles.mediaBannerMargin }
        }
      >
        <Grid
          item
          container
          xl={8}
          lg={10}
          xs={11}
          md={10}
          sm={11}
          style={
            isMobile
              ? { ...Styles.MediaBannerBg, padding: "30px" }
              : { ...Styles.MediaBannerBg }
          }
          direction="row"
        >
          <Grid item container direction="column" lg={9} xs={12} md={8}>
            <Grid item>
              <Typography
                variant={isMobile ? "h3" : "h1"}
                style={{ ...Styles.colorWhite, ...Styles.boldTxt }}
              >
                1,00,000 members
              </Typography>
            </Grid>
            <Grid item style={{ ...Styles.paddingTextTop }}>
              <Typography variant="h5" style={{ ...Styles.colorWhite }}>
                Online community across social media
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            lg={3}
            xs={12}
            md={4}
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            style={isMobile ? { ...Styles.marginTop24 } : {}}
          >
            {customTxt.GSGSocialMedia.images.map((val, key) => {
              return (
                <React.Fragment key={key}>
                  <Grid item>
                    <a href={val[1]} target="_blank" rel="noopener noreferrer">
                      <img
                        src={Styles.backCoverImg(val[0])}
                        alt="social Media Icons"
                      />
                    </a>
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Mediabanner;
