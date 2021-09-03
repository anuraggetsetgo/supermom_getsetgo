import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import Styles from "../app-style";

function Whygetsetgocard(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const whygetsetgoData = props.whygetsetgoData;
  return (
    <>
      <Grid item container xs={12} sm={12} lg={4}>
        {whygetsetgoData.map((item, i) => (
          <Grid
            key={i + item.title}
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
    </>
  );
}

export default Whygetsetgocard;
