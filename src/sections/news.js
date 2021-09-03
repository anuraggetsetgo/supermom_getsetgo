import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import customTxt from "./customTxt.json";
import { useHistory } from "react-router-dom";

export default function News(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  let history = useHistory();
  return (
    <Grid item container direction="row" alignItems="center" justify="center">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        xs={11}
        sm={12}
        lg={10}
        // style={{ padding: isMobile ? "20px" : "0" }}
      >
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          style={{ margin: isMobile ? "0 0 10px" : "0 0 66px" }}
        >
          <svg
            width={isMobile ? "20" : "167"}
            height="1"
            viewBox="0 0 167 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="167"
              y1="0.5"
              x2="-4.37114e-08"
              y2="0.499985"
              stroke="black"
              strokeOpacity="0.2"
            />
          </svg>
          <Typography
            variant="h4"
            style={{
              ...Styles.colorReef,
              ...Styles.boldTxt,
              ...Styles.footerHeading,
            }}
          >
            {customTxt.GSGInTheNews.mainheading}
          </Typography>
          <svg
            width={isMobile ? "20" : "167"}
            height="1"
            viewBox="0 0 167 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="167"
              y1="0.5"
              x2="-4.37114e-08"
              y2="0.499985"
              stroke="black"
              strokeOpacity="0.2"
            />
          </svg>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          sm={12}
          lg={10}
        >
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {customTxt.GSGInTheNews.images.map((val, key) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  lg={3}
                  key={key}
                  container
                  justify="center"
                >
                  <Grid
                    item
                    style={{ padding: isMobile ? "45px 25px" : "45px 15px" }}
                  >
                    <a href={val[1]} target="_blank" rel="noopener noreferrer">
                      <img width="100%" src={Styles.backCoverImg(val[0])} />
                    </a>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        {history.location.pathname == "/" && (
          <>
            <Grid
              item
              container
              alignItems="center"
              justify="center"
              onClick={props.scrollToSignUp}
            >
              <Styles.ColorButton
                style={{
                  width: isMobile ? "90vw" : "22%",
                  marginTop: isMobile ? "40px" : "30px",
                }}
              >
                REGISTER NOW!
              </Styles.ColorButton>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
}
