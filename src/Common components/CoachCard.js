import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import customTxt from "../sections/customTxt.json";
import Styles from "../app-style";
import AOS from "aos";
import "aos/dist/aos.css";
const useStyles = makeStyles({
  root: {
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
    padding: "24px",
  },
  darkCard: {
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
    padding: "24px",
    background: Styles.colorReef.color,
  },
});

function CoachCard(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const CoachCardData = props.CoachCardData;
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Grid
        item
        container
        spacing={3}
        xs={12}
        sm={12}
        lg={6}
        alignContent="flex-start"
        justifyContent="center"
      >
        {CoachCardData.map((txt, i) => (
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            key={i}
            data-aos={
              CoachCardData === customTxt.howDoesGetSetGoWorkTxtMobile.phases1
                ? "fade-left"
                : CoachCardData === customTxt.howDoesGetSetGoWorkTxt.phases1
                ? "fade-right"
                : "fade-left"
            }
          >
            <Card
              className={
                (CoachCardData === customTxt.howDoesGetSetGoWorkTxt.phases2 &&
                  i === 2) ||
                i === 5
                  ? classes.darkCard
                  : classes.root
              }
            >
              <CardContent>
                <Typography
                  variant="h6"
                  style={
                    (CoachCardData ===
                      customTxt.howDoesGetSetGoWorkTxt.phases2 &&
                      i === 2) ||
                    i === 5
                      ? {
                          ...Styles.colorReef,
                          ...Styles.txtBGSunshine,
                        }
                      : { ...Styles.whiteColor, ...Styles.txtBGCoral }
                  }
                >
                  {txt.phase}
                </Typography>
                <Grid item style={{ margin: "8px 0" }}>
                  <Typography
                    variant="h4"
                    style={
                      (CoachCardData ===
                        customTxt.howDoesGetSetGoWorkTxt.phases2 &&
                        i === 2) ||
                      i === 5
                        ? { ...Styles.boldTxt, ...Styles.colorWhite }
                        : { ...Styles.boldTxt, ...Styles.colorReef }
                    }
                  >
                    {txt.heading}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  style={{ margin: "0 0 20px" }}
                >
                  <svg
                    width="40"
                    height="6"
                    viewBox="0 0 40 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="6" fill="#FFDD33" />
                  </svg>
                </Grid>
                {txt.pointers.map((item, key) => (
                  <Grid
                    item
                    container
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    direction="row"
                    style={{ marginBottom: "10px" }}
                    key={key}
                  >
                    <Grid item xs={1}>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31.8516 1.99006L31.2224 1.27643C31.1801 1.22834 31.1225 1.19627 31.0594 1.18562C30.9963 1.17496 30.9314 1.18637 30.8756 1.21793C21.3958 6.6314 14.3738 18.0778 14.3738 18.0778C11.8965 9.96888 8.31006 13.8588 7.49861 14.8903C7.4765 14.9181 7.46025 14.9502 7.45083 14.9845C7.44141 15.0188 7.43902 15.0547 7.4438 15.0899C7.44858 15.1252 7.46044 15.1591 7.47865 15.1897C7.49687 15.2202 7.52107 15.2468 7.5498 15.2678C11.0204 17.7685 12.3773 22.9035 12.6549 24.1089C12.6607 24.1338 12.6728 24.1567 12.6902 24.1753C12.7076 24.194 12.7295 24.2078 12.7538 24.2153C12.7782 24.2229 12.8041 24.2239 12.829 24.2184C12.8538 24.2128 12.8768 24.2008 12.8956 24.1836C13.7467 23.4047 15.9446 21.9997 16.3388 21.7499C16.3783 21.7241 16.4099 21.6881 16.4303 21.6457C22.4772 9.2257 30.6907 3.02486 31.826 2.20519C31.8426 2.1933 31.8565 2.1781 31.8668 2.16055C31.8772 2.143 31.8838 2.12349 31.8862 2.10326C31.8886 2.08303 31.8867 2.06252 31.8808 2.04303C31.8749 2.02354 31.8649 2.0055 31.8516 1.99006Z"
                          fill="#24A64A"
                        />
                        <path
                          d="M25.6386 10.5719C26.6771 12.4915 27.2207 14.6396 27.2201 16.8221C27.2201 24.0526 21.3377 29.935 14.1072 29.935C6.87676 29.935 0.994341 24.0541 0.994341 16.8221C0.994341 9.59013 6.87676 3.70923 14.1072 3.70923C16.7204 3.70447 19.2747 4.48449 21.4394 5.94824L21.934 5.21694C19.6236 3.65448 16.8973 2.82171 14.1081 2.82649C12.2365 2.82284 10.3835 3.19697 8.65992 3.92649C6.9969 4.62898 5.48604 5.64756 4.21116 6.92575C2.9329 8.20058 1.9143 9.71145 1.2119 11.3745C0.482255 13.098 0.108017 14.9511 0.111598 16.8227C0.108042 18.6943 0.482279 20.5474 1.2119 22.2709C1.91427 23.934 2.93287 25.4449 4.21116 26.7197C5.48597 27.998 6.99684 29.0166 8.65992 29.719C10.3835 30.4486 12.2365 30.8228 14.1081 30.8193C15.9797 30.8228 17.8328 30.4486 19.5563 29.719C21.2194 29.0166 22.7303 27.998 24.0051 26.7197C25.2833 25.4448 26.3019 23.934 27.0044 22.2709C27.7339 20.5474 28.108 18.6943 28.1044 16.8227C28.1047 14.4925 27.5241 12.199 26.415 10.1496L25.6386 10.5719Z"
                          fill="#24A64A"
                        />
                      </svg>
                    </Grid>
                    <Grid item xs={11} style={{ padding: "0 0 0 20px" }}>
                      <Typography
                        variant={isMobile ? "h6" : "h5"}
                        style={
                          (CoachCardData ===
                            customTxt.howDoesGetSetGoWorkTxt.phases2 &&
                            i === 2) ||
                          i === 5
                            ? {
                                ...Styles.colorWhite,
                                ...Styles.fontRoboto,
                              }
                            : {
                                ...Styles.colorCharcoalDark,
                                ...Styles.fontRoboto,
                              }
                        }
                      >
                        {item}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CoachCard;
