import React from "react";
import { Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Styles from "../app-style.js";
import customTxt from "./customTxt.json";
import Joinnowcard from "../Common components/Joinnowcard.js";
const Joinnow = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        style={{
          ...Styles.joinNowBg,
        }}
      >
        <Grid
          item
          container
          alignItems="flex-start"
          justifyContent="space-between"
          direction="row"
          xl={8}
          xs={12}
          sm={12}
          lg={10}
          style={
            isMobile
              ? { ...Styles.padding20, ...Styles.marginTop100 }
              : { ...Styles.marginTop150, ...Styles.marginBottom100 }
          }
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            style={{ position: "relative", top: "-50px" }}
          >
            <Grid item container alignItems="center" justifyContent="center">
              <Typography
                variant={isMobile ? "h3" : "h1"}
                style={{ ...Styles.colorRed, ...Styles.boldTxt }}
              >
                You <br />
                should join GetSetGo <br />
                if...
              </Typography>
            </Grid>
          </Grid>
          <Joinnowcard
            QuestionsetData={customTxt.GSGAskQuestions.questionsset1}
          />
          <Joinnowcard
            QuestionsetData={customTxt.GSGAskQuestions.questionsset2}
            scrollToSignUp={props.scrollToSignUp}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default Joinnow;
