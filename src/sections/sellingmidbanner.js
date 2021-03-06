import React from "react";
import Styles from "../app-style.js";
import { Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";

const Sellingmidbanner = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  const currency = () => {
    let currency = props.product[0].pack_currency;
    let currText = currency === "INR" ? "₹" : currency === "USD" ? "$" : "AED"; //د.إ
    return currText;
  };
  return (
    <>
      <Grid
        container
        style={
          isMobile ? { ...Styles.marginTop40 } : { ...Styles.marginTop150 }
        }
      >
        <Grid
          className="signupBanner"
          style={{
            backgroundImage: `url(${Styles.backCoverImg(
              "selling_mid_img.png"
            )})`,
            width: "100% ",
            backgroundSize: "100% 100%",
            height: isMobile ? "380px" : "614px",
          }}
        >
          <Grid
            // justifyContent="center"
            // alignItems="center"
            style={
              isMobile ? { ...Styles.marginTop75 } : { ...Styles.marginTop150 }
            }
          >
            <Typography
              variant={isMobile ? "h3" : "h1"}
              style={{
                ...Styles.centerTxt,
                ...Styles.colorWhite,
                ...Styles.boldTxt,
                ...Styles.padding20,
              }}
            >
              ARE YOU READY
              <br />
              TO TRANSFORM YOUR LIFE?
            </Typography>
          </Grid>
          <Grid item container justifyContent="center">
            <Grid item container justifyContent="center" xl={5} lg={6} xs={11}>
              <Styles.YellowColorButton
                style={
                  isMobile
                    ? {
                        fontSize: "20px",
                        lineHeight: "28px",
                        padding: "13px 20px",
                        marginTop: "20px",
                        borderRadius: "10px",
                      }
                    : {}
                }
                onClick={() => {
                  props.createOrder(props.product[0], 0);
                }}
              >
                Try before you invest.
                <span style={{ ...Styles.boldTxt }}>
                  JUST {currency()} {props.product[0].pack_price} FOR 2 WEEKS
                </span>
              </Styles.YellowColorButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Sellingmidbanner;
