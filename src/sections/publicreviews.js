import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { colors } from "../services";
import Rating from "@material-ui/lab/Rating";
import { useTheme, useMediaQuery, Slide } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { blue } from "@material-ui/core/colors";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GoogleReview = ({ review }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        container
        direction="row"
        className="app-card2"
        alignItems="center"
        style={{
          background: Styles.colorWhite.color,
          padding: "6px 24px 6px 24px",
          alignContent: "space-between",
        }}
      >
        <Grid
          item
          xl={8}
          xs={12}
          container
          direction="row"
          tyle={{ marginTop: "8px" }}
        >
          <Grid item style={{ marginRight: "8px" }}>
            <img
              src={review.reviewer_photo}
              alt="google_reviews"
              width="50"
              height="50"
            />
          </Grid>
          <Grid item xs={8} container direction="column">
            <Rating
              className="app-small-font-size"
              name="read-only"
              readOnly
              value={review.reviewer_rating}
            />
            <Typography variant="h6" className="charcoal-dark2  bold">
              {review.reviewer_name}
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid item xs={12}>
          <Typography
            variant="subtitle2"
            className="charcoal-dark2 "
            style={{
              lineHeight: "24px",
              fontStyle: "italic",
              fontWeight: "400",
            }}
          >
            {review.reviewer_comment}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

const Publicreviews = (props) => {
  const [showGoogleReview, setShowGoogleReview] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const openDialog = () => {
    setShowGoogleReview(true);
  };
  const closeDialog = () => {
    setShowGoogleReview(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  const isMobile3 = useMediaQuery(theme.breakpoints.down("md"));
  const { reviewData, allreviewData } = props;
  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        padding: isMobile ? "50px 0 50px" : "100px 0 50px",
        marginBottom: "30px",
        background: "rgba(16, 58, 66, 0.1)",
      }}
    >
      <Grid
        item
        container
        alignItems="center"
        justify="center"
        direction="column"
        xs={12}
        xl={9}
        style={{ padding: isMobile ? "20px" : "0" }}
      >
        <Grid
          xs={12}
          lg={10}
          sm={10}
          md={10}
          item
          container
          direction="column"
          alignItems="flex-start"
          justify="flex-start"
        >
          <Typography
            variant="h3"
            style={{ ...Styles.boldTxt, ...Styles.colorReef }}
          >
            Google Rating and Review
          </Typography>
        </Grid>

        <Grid
          xs={12}
          lg={10}
          sm={10}
          md={10}
          item
          container
          direction="row"
          alignItems="flex-start"
          justify="flex-start"
        >
          <Grid
            xs={12}
            lg={12}
            sm={12}
            md={12}
            item
            container
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
          >
            <Grid item xs={12} lg={12} sm={12} md={12}>
              <Typography
                variant="h5"
                style={{ ...Styles.colorCharcoalLight, marginTop: "8px" }}
              >
                4.9/5 on Google Ratings
              </Typography>
            </Grid>

            <Grid
              xs={12}
              lg={12}
              sm={12}
              md={12}
              item
              container
              direction="row"
              alignItems="flex-end"
              justify="flex-end"
              style={{ marginTop: "8px" }}
            >
              <Grid
                xs={5}
                lg={10}
                sm={7}
                md={9}
                item
                container
                alignItems="flex-start"
              >
                <svg
                  width={isMobile ? "120" : "160"}
                  height={isMobile ? "24" : "32"}
                  viewBox="0 0 160 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 23L7.75 28L9.9375 18.625L2.6875 12.3125L12.25 11.5L16 2.6875L19.75 11.5L29.3125 12.3125L22.0625 18.625L24.25 28L16 23Z"
                    fill="#FF9900"
                  />
                  <path
                    d="M48 23L39.75 28L41.9375 18.625L34.6875 12.3125L44.25 11.5L48 2.6875L51.75 11.5L61.3125 12.3125L54.0625 18.625L56.25 28L48 23Z"
                    fill="#FF9900"
                  />
                  <path
                    d="M80 23L71.75 28L73.9375 18.625L66.6875 12.3125L76.25 11.5L80 2.6875L83.75 11.5L93.3125 12.3125L86.0625 18.625L88.25 28L80 23Z"
                    fill="#FF9900"
                  />
                  <path
                    d="M112 23L103.75 28L105.938 18.625L98.6875 12.3125L108.25 11.5L112 2.6875L115.75 11.5L125.312 12.3125L118.062 18.625L120.25 28L112 23Z"
                    fill="#FF9900"
                  />
                  <path
                    d="M144 20.5625L149 23.5625L147.688 17.875L152.125 14L146.25 13.5L144 8.125V20.5625ZM157.312 12.3125L150.062 18.625L152.25 28L144 23L135.75 28L137.938 18.625L130.688 12.3125L140.25 11.5L144 2.6875L147.75 11.5L157.312 12.3125Z"
                    fill="#FF9900"
                  />
                </svg>
              </Grid>

              <Grid
                item
                xs={4}
                lg={1}
                sm={3}
                md={2}
                container
                justify="flex-end"
                style={isMobile ? {} : { paddingBottom: "16px" }}
              >
                <Typography
                  variant="body2"
                  style={{ ...Styles.colorCharcoalDark }}
                >
                  100+ reviews
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                lg={1}
                sm={2}
                md={1}
                container
                justify="flex-end"
                style={isMobile ? {} : { paddingBottom: "16px" }}
              >
                <Typography
                  variant="body2"
                  style={{
                    background: "none",
                    border: "none",
                    ...Styles.colorPrimary,
                    cursor: "pointer",
                  }}
                  onClick={openDialog}
                >
                  See All &gt;
                </Typography>
                <Dialog
                  open={showGoogleReview}
                  onClose={closeDialog}
                  fullWidth={true}
                  maxWidth={"md"}
                  scroll="body"
                  TransitionComponent={Transition}
                  keepMounted
                  style={{ overflow: "auto" }}
                >
                  <Grid item>
                    <HighlightOffIcon
                      onClick={closeDialog}
                      style={{
                        top: "10",
                        position: "absolute",
                        cursor: "pointer",
                        right: "10",
                      }}
                    />
                  </Grid>
                  <DialogTitle
                    id="scroll-dialog-title"
                    style={{ ...Styles.colorReef }}
                  >
                    All Google Reviews
                  </DialogTitle>
                  <DialogContentText>
                    <DialogContent
                      dividers={scroll === "paper"}
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <Grid
                        item
                        direction="column"
                        xs={12}
                        justify="center"
                        alignItems="center"
                        container
                        style={{
                          marginTop: "10px",
                          position: "relative",
                        }}
                      >
                        {allreviewData.map((review, key) => {
                          return (
                            <Grid
                              container
                              key={key}
                              item
                              sm={12}
                              justify="center"
                              md={12}
                              xs={12}
                              style={{ padding: "14px 14px" }}
                            >
                              <GoogleReview review={review} />
                            </Grid>
                          );
                        })}
                      </Grid>
                    </DialogContent>
                  </DialogContentText>
                  <DialogActions>
                    <Button onClick={closeDialog} color="primary">
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs={12}
        xl={8}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          direction="column"
          xs={10}
          xl={12}
          justify="center"
          alignItems="center"
          container
          style={{
            background: "#FFFFFF",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.12)",
            borderRadius: "10px",
            marginTop: "30px",
            position: "relative",
          }}
        >
          {reviewData.map((review, key) => {
            return (
              <Grid
                container
                key={key}
                item
                sm={12}
                justify="center"
                md={8}
                xs={12}
                style={{ padding: "14px 14px" }}
              >
                <GoogleReview review={review} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Publicreviews;
