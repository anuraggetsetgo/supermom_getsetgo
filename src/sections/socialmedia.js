import React from "react";
import Styles from "../app-style.js";
import { Typography, Grid } from "@material-ui/core";

const Socialmedia = () => {
  return (
    <>
      <Grid item container direction="row" alignItems="center" justify="center">
        <Grid
          justify="flex-start"
          alignItems="center"
          style={{
            width: "1170px",
            height: "169px",
            display: "flex",
            backgroundColor: "#4595A4",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(16, 58, 66, 0.25)",
          }}
        >
          <Grid item>
            <Grid item>
              <Typography
                style={{
                  fontSize: "Poppins",
                  fontSize: "48px",
                  color: "#FFFFFF",
                  flexGrow: "1",
                  margin: "0px 10px",
                  fontWeight: "bold",
                }}
              >
                1,00,000 members
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  fontSize: "Poppins",
                  fontSize: "20px",
                  color: "#FFFFFF",
                  flexGrow: "0",
                  margin: "0px 10px",
                  fontWeight: "normal",
                }}
              >
                Online community across social media
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>hello</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Socialmedia;
