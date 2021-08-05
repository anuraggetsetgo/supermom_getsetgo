import React from "react";
import Signupform from "./Signupform";
import { Grid, Typography } from "@material-ui/core";
import Logo from "./logoElement.png";
import PreloadImage from "./preloadImg";
const Styles = {
  container: {
    paddingTop: "20px"
  }
};
const UserInfo = () => {
  return (
    <Grid
      container
      style={Styles.container}
      direction='column'
      spacing={4}
      alignItems='center'
    >
      <Grid item style={Styles.marginBottom}>
        <PreloadImage
          src={Logo}
          alt='GetSetGo Fitness Diwali offer'
          style={{ width: "100px", padding: "20px 3% 0" }}
        />
      </Grid>
      <Grid item>
        <Typography variant='h2'>
          Enter your details below to proceed
        </Typography>
      </Grid>
      <Grid item>
        <Signupform />
      </Grid>
    </Grid>
  );
};
export default UserInfo;
