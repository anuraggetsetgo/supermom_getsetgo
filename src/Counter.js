import React, { useState, useEffect } from "react";
import Styles from "./App.styles";
import { Grid, Typography } from "@material-ui/core";
import "./App.css";
const localStyles = {
  heading: { textAlign: "center" },
  small: { fontSize: ".8rem" }
};
function Counter({ endDate, style }) {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`12/05/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
    <Grid
      container
      style={{
        ...Styles.BGPrimary,
        ...Styles.colorWhite,
        padding: "10px",
        borderRadius: "10px",
        ...style
      }}
      direction='column'
      spacing={1}
    >
      <Grid item>
        <Typography variant='subtitle1' style={{ ...localStyles.heading }}>
          Offer expires in
        </Typography>
      </Grid>
      {timeLeft && (
        <Grid
          item
          container
          justify='center'
          spacing={1}
          alignItems='flex-start'
        >
          <Grid item style={{ textAlign: "center" }}>
            <Typography variant='h2' className='blink_me'>
              {timeLeft.days}
            </Typography>
            <Typography>
              <small style={localStyles.small}>Days</small>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2'>:</Typography>
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Typography variant='h2' className='blink_me'>
              {timeLeft.hours}
            </Typography>
            <Typography>
              <small style={localStyles.small}>Hrs</small>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2'>:</Typography>
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Typography variant='h2' className='blink_me'>
              {timeLeft.minutes}
            </Typography>
            <Typography>
              <small style={localStyles.small}>Min</small>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2'>:</Typography>
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Typography variant='h2' className='blink_me'>
              {timeLeft.seconds}
            </Typography>
            <Typography>
              <small style={localStyles.small}>Sec</small>
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Counter;
