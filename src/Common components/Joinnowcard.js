import React from "react";
import Styles from "../app-style";
import { Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import customTxt from "../sections/customTxt.json";

function Joinnowcard(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const QuestionsetData = props.QuestionsetData;
  return (
    <>
      <Grid
        item
        xs={12}
        md={11}
        sm={12}
        lg={4}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {QuestionsetData.map((val, key) => {
          return (
            <Grid
              key={key}
              item
              container
              direction="row"
              style={Styles.marginBottom16}
            >
              <Grid item xs={1} sm={1} lg={1} style={Styles.marginRight16}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.8516 1.99009L31.2224 1.27646C31.1801 1.22837 31.1225 1.1963 31.0594 1.18565C30.9963 1.17499 30.9314 1.1864 30.8756 1.21796C21.3958 6.63143 14.3738 18.0778 14.3738 18.0778C11.8965 9.96891 8.31006 13.8588 7.49861 14.8903C7.4765 14.9182 7.46025 14.9502 7.45083 14.9845C7.44141 15.0188 7.43902 15.0547 7.4438 15.09C7.44858 15.1252 7.46044 15.1591 7.47865 15.1897C7.49687 15.2203 7.52107 15.2468 7.5498 15.2678C11.0204 17.7686 12.3773 22.9035 12.6549 24.109C12.6607 24.1338 12.6728 24.1567 12.6902 24.1753C12.7076 24.194 12.7295 24.2078 12.7538 24.2154C12.7782 24.2229 12.8041 24.224 12.829 24.2184C12.8538 24.2128 12.8768 24.2008 12.8956 24.1836C13.7467 23.4048 15.9446 21.9998 16.3388 21.7499C16.3783 21.7242 16.4099 21.6881 16.4303 21.6457C22.4772 9.22573 30.6907 3.02489 31.826 2.20522C31.8426 2.19333 31.8565 2.17813 31.8668 2.16058C31.8772 2.14303 31.8838 2.12352 31.8862 2.10329C31.8886 2.08306 31.8867 2.06255 31.8808 2.04306C31.8749 2.02357 31.8649 2.00553 31.8516 1.99009Z"
                    fill="#24A64A"
                  />
                  <path
                    d="M25.6385 10.5719C26.677 12.4914 27.2205 14.6396 27.22 16.8221C27.22 24.0525 21.3375 29.935 14.1071 29.935C6.87663 29.935 0.994219 24.0541 0.994219 16.8221C0.994219 9.59009 6.87663 3.70919 14.1071 3.70919C16.7202 3.70443 19.2746 4.48444 21.4393 5.9482L21.9339 5.21689C19.6235 3.65444 16.8971 2.82167 14.108 2.82644C12.2364 2.82279 10.3834 3.19693 8.65979 3.92645C6.99678 4.62893 5.48592 5.64752 4.21103 6.92571C2.93278 8.20054 1.91418 9.71141 1.21178 11.3745C0.482133 13.098 0.107895 14.9511 0.111476 16.8227C0.10792 18.6943 0.482157 20.5474 1.21178 22.2709C1.91415 23.934 2.93275 25.4448 4.21103 26.7197C5.48584 27.9979 6.99672 29.0165 8.65979 29.7189C10.3833 30.4485 12.2364 30.8228 14.108 30.8192C15.9796 30.8228 17.8327 30.4486 19.5562 29.7189C21.2193 29.0165 22.7301 27.9979 24.005 26.7197C25.2832 25.4448 26.3017 23.9339 27.0042 22.2709C27.7337 20.5473 28.1079 18.6943 28.1042 16.8227C28.1046 14.4925 27.524 12.1989 26.4149 10.1495L25.6385 10.5719Z"
                    fill="#24A64A"
                  />
                </svg>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant={isMobile ? "subtitle1" : "body1"}
                  style={{
                    ...Styles.colorCharcoalDark,
                  }}
                >
                  {val[0]}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
        {QuestionsetData === customTxt.GSGAskQuestions.questionsset2 && (
          <Grid item alignItems="center" justifyContent="flex-end" container>
            <Styles.ColorButton
              style={
                isMobile
                  ? { width: "100%", ...Styles.marginTop24 }
                  : { width: "60%", ...Styles.marginTop100 }
              }
              onClick={props.scrollToSignUp}
            >
              JOIN NOW
            </Styles.ColorButton>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Joinnowcard;
