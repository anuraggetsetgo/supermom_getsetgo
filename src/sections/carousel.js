import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Styles from "../app-style.js";

const DataItem = [
  {
    image: ["ClientTras/client1-1.png", "ClientTras/client1-2.png"],
    name: "Sana Shika",
    profile: "ClientTras/client1-2.png",
    text: "had a great experience with Getsetgo and the feeling was mutual. She did everything she was asked for and hence got exactly the same results she signed up for. ",
  },
];
const cardStyle = {
  width: "770px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  height: "480px",
  padding: "40px",
};

const AvtarName = ({ name, profile }) => {
  return (
    <Grid container item direction="row" justify="flex-start" style={{ marginTop: "32px" }}>
      <Grid item container xs={3}>
        <Grid item style={{ width: "50px", height: "50px",  borderRadius: "50%", backgroundImage: `url(${Styles.backCoverImg(profile)})` }}></Grid>
      </Grid>
      <Grid container xs={6} item direction="column">
        {name.split(" ").map((name) => (
          <Grid item>
            <Typography variant="h4" style={{ maxWidht: "238px" }}>
              {name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
const CarouselContainer = ({ imagePath, text, name, profile }) => {
  return (
    <>
      <Grid item container direction="row" justify="space-between" alignItems="center" style={{ ...cardStyle }}>
        <Grid container item xs={6} direction="row" justify="center" style={{ borderRadius: "25% 0", overflow: "hidden" }}>
          {imagePath.map((image) => (
            <Grid item xs={6} style={{ backgroundRepeat: "no-repeat", height: "360px", width: "100%", backgroundImage: `url(${Styles.backCoverImg(image)})` }}></Grid>
          ))}
        </Grid>
        <Grid container item xs={5} direction="column" justify="center">
          <Grid item>
            <Typography variant="h5" style={{ maxWidth: "238px" }}>
              {text}
            </Typography>
          </Grid>
          <AvtarName name={name} profile={profile} />
        </Grid>
      </Grid>
    </>
  );
};

const Carousel = () => {
  return (
    <>
      <Grid item container xs={12} justify="center">
        {" "}
        <Grid item container direction="row" justify="center" style={{ maxWidth: "1360px" }}>
          {DataItem.map(({ image, text, name, profile }) => (
            <CarouselContainer profile={profile} name={name} imagePath={image} text={text} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default Carousel;
