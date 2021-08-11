import React from "react";
import { Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Styles from "../app-style.js";
import customTxt from "./customTxt.json";

const Whygetsetgo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid item container direction="row" justify="center">
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          sm={12}
          lg={10}
          style={{ margin: "0 0 60px 0", padding: isMobile ? "20px" : "0" }}
        >
          <Grid item style={{ marginBottom: "35px" }}>
            <Typography
              variant={isMobile ? "h3" : "h1"}
              style={{ ...Styles.centerTxt, ...Styles.colorRed }}
            >
              Why <span style={{ ...Styles.boldTxt }}>GetSetGo</span> Fitness?
            </Typography>
          </Grid>
          <Grid
            item
            container
            spacing={4}
            alignContent="flex-start"
            justify="center"
          >
            <Grid item container xs={12} sm={12} lg={4}>
              {customTxt.whyGetSetGo.column1.map((item, i) => (
                <Grid
                key={i+item.title}
                  item
                  xs={12}
                  container
                  direction="column"
                  alignItems="center"
                  style={{
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.12)",
                    borderRadius: "10px",
                    padding: "30px",
                    marginBottom: i === 0 && "24px",
                  }}
                >
                  <Grid item style={{ marginBottom: "16px" }}>
                    <img src={Styles.backCoverImg(item.image)} alt="diet" />
                  </Grid>
                  <Grid item style={{ marginBottom: "16px" }}>
                    <Typography
                      variant={isMobile ? "h4" : "h3"}
                      style={{
                        ...Styles.colorCharcoalDark,
                        ...Styles.boldTxt,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Roboto",
                        ...Styles.boldNormal,
                        textAlign: "center",
                        ...Styles.colorCharcoalLight,
                        lineHeight: "28px",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item container xs={12} sm={12} lg={4}>
              {customTxt.whyGetSetGo.column2.map((item, i) => (
                <Grid
                key={i+item.title}
                  item
                  xs={12}
                  container
                  direction="column"
                  alignItems="center"
                  style={{
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.12)",
                    borderRadius: "10px",
                    padding: "30px",
                    marginBottom: i === 0 && "24px",
                  }}
                >
                  <Grid item style={{ marginBottom: "16px" }}>
                    <img src={Styles.backCoverImg(item.image)} alt="diet" />
                  </Grid>
                  <Grid item style={{ marginBottom: "16px" }}>
                    <Typography
                      variant={isMobile ? "h4" : "h3"}
                      style={{
                        ...Styles.colorCharcoalDark,
                        ...Styles.boldTxt,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Roboto",
                        ...Styles.boldNormal,
                        textAlign: "center",
                        ...Styles.colorCharcoalLight,
                        lineHeight: "28px",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item container xs={12} sm={12} lg={4}>
              {customTxt.whyGetSetGo.column3.map((item, i) => (
                <Grid
                  item
                  xs={12}
                  container
                  direction="column"
                  alignItems="center"
                  style={{
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.12)",
                    borderRadius: "10px",
                    padding: "30px",
                    marginBottom: i === 0 && "24px",
                  }}
                >
                  <Grid item style={{ marginBottom: "16px" }}>
                    <img src={Styles.backCoverImg(item.image)} alt="diet" />
                  </Grid>
                  <Grid item style={{ marginBottom: "16px" }}>
                    <Typography
                      variant={isMobile ? "h4" : "h3"}
                      style={{
                        ...Styles.colorCharcoalDark,
                        ...Styles.boldTxt,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Roboto",
                        ...Styles.boldNormal,
                        textAlign: "center",
                        ...Styles.colorCharcoalLight,
                        lineHeight: "28px",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Whygetsetgo;
