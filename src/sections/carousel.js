import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import Styles from "../app-style";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CarouselData from "../sections/customTxt.json";
import Carousel from "react-material-ui-carousel";
import Avatar from "@material-ui/core/Avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Button from "@material-ui/core/Button";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const CarouselContainer = ({ imagePath, text, name, profile }, key) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Card
        className={classes.root}
        style={{
          padding: isMobile ? "10px" : "10px",
          maxWidth: isMobile ? "100%" : "93%",
          margin: isMobile ? "0" : "16px 0 0 8px",
        }}
      >
        <CardContent>
          <Grid
            item
            spacing={4}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              container
              item
              xl={7}
              lg={7}
              md={6}
              sm={6}
              direction="row"
              justifyContent="center"
            >
              {imagePath.map((image) => (
                <img
                  key={image}
                  alt="Carousel Images"
                  src={Styles.backCoverImg(image)}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              ))}
            </Grid>

            <Grid
              container
              item
              xl={5}
              lg={5}
              md={6}
              sm={6}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xl={11} lg={11} md={12} sm={12} container>
                <Typography variant="body1">{text}</Typography>
              </Grid>

              <Grid
                item
                container
                xl={11}
                lg={11}
                xs={12}
                md={12}
                justifyContent="center"
                style={{ ...Styles.marginTop24 }}
              >
                <Grid item xl={4} lg={5} xs={4} md={4} sm={8}>
                  <Avatar
                    alt="Avater Images"
                    src={Styles.backCoverImg(profile)}
                    className={classes.large}
                  />
                </Grid>
                <Grid
                  item
                  xl={8}
                  lg={7}
                  xs={8}
                  md={8}
                  sm={8}
                  container
                  alignItems="center"
                >
                  <Typography
                    variant="h5"
                    style={{ ...Styles.colorReef, ...Styles.boldTxt }}
                  >
                    {name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
function CarouselItem(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          item
          container
          xl={8}
          lg={10}
          xs={12}
          md={10}
          sm={10}
          justifyContent="center"
          alignItems="center"
          style={isMobile ? { ...Styles.padding20 } : null}
        >
          <Typography
            variant={isMobile ? "h3" : "h1"}
            style={{ ...Styles.colorRed }}
          >
            <span style={{ ...Styles.boldTxt }}>Meet</span> the{" "}
            <span style={{ ...Styles.boldTxt }}>super moms</span> who took
            <br /> charge of their health..
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent={isMobile ? "center" : "flex-end"}>
        <Grid
          item
          container
          xl={11}
          lg={11}
          xs={12}
          md={11}
          sm={11}
          style={{
            height: isMobile2 ? "100%" : isMobile ? "100%" : "100%",
            padding: isMobile ? "20px" : "0",
          }}
        >
          {isMobile || isMobile2 ? (
            <Carousel
              interval={2500}
              animation="slide"
              indicatorIconButtonProps={{
                style: {
                  color: "#C2DCE2",
                  marginRight: "10px",
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  ...Styles.colorPrimary,
                },
              }}
              indicatorContainerProps={{
                style: {
                  marginTop: "30px",
                },
              }}
            >
              {CarouselData.GSGCarousel.map(
                ({ image, text, name, profile }, key) => (
                  <CarouselContainer
                    key={key + text + name}
                    profile={profile}
                    name={name}
                    imagePath={image}
                    text={text}
                  />
                )
              )}
            </Carousel>
          ) : (
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={isMobile2 ? true : false}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 50,
                modifier: 0,
                slideShadows: true,
              }}
              slidesPerView={1.92}
              loop={true}
              autoplay={{
                delay: 2500000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
              pagination={true}
              style={{ paddingBottom: "40px" }}
            >
              {CarouselData.GSGCarousel.map(
                ({ image, text, name, profile }, key) => (
                  <Grid
                    container
                    justifyContent="center"
                    key={Math.random().toString(36).substr(2, 9) + key}
                  >
                    <SwiperSlide>
                      <CarouselContainer
                        profile={profile}
                        name={name}
                        imagePath={image}
                        text={text}
                      />
                    </SwiperSlide>
                  </Grid>
                )
              )}
            </Swiper>
          )}
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Grid
          item
          container
          xl={11}
          lg={11}
          xs={12}
          md={11}
          sm={12}
          justifyContent="center"
          style={isMobile ? { ...Styles.padding20 } : {}}
        >
          <Button
            style={{
              ...Styles.yellowBG,
              ...Styles.feildRadius,
              width: isMobile ? "100%" : "",
            }}
            onClick={props.scrollToSignUp}
          >
            <Typography
              variant="h4"
              style={{
                ...Styles.colorReef,
                textTransform: "uppercase",
                ...Styles.boldTxt,
                padding: "30px 60px",
              }}
            >
              get started!
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CarouselItem;
