import "./App.css";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Diwali from "./diwali";
import { Grid, Typography } from "@material-ui/core";
import PreloadImage from "./preloadImg";
import FBMessenger from "./fbMassenger.png";
import FBGroup from "./fbGroup.png";
import Youtube from "./youtube.png";
import LogoElement from "./logoElement.png";
import Insta from "./insta.png";
import Whatsapp from "./whatsapp.png";
import Linkedin from "./linkedin.png";
import UserInfo from "./Userinfo";
import ReactPixel from "react-facebook-pixel";
import { updateLoc } from "./services";
import { useState, useEffect } from "react";
import Ordersummary from "./ordersummary";
import Counter from "./Counter";

function App() {
  const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false // enable logs
  };
  ReactPixel.init("1197059610427258", options);
  ReactPixel.pageView();
  const [region, setRegion] = useState(null);
  const setPrices = data => {
    setRegion(data);
  };
  useEffect(() => {
    updateLoc(setPrices);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container className='container'>
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              component={props => <Diwali region={region} {...props} />}
            />
            <Route exact path='/userinfo' component={UserInfo} />
            <Route
              path='/thank_you/summary/:orderId'
              component={Ordersummary}
            />
          </Switch>
        </Router>
        <Counter
          style={{ position: "fixed", top: "2vh", left: "35%", width: "30%" }}
        />
        <Grid
          container
          justify='space-between'
          alignItems='flex-start'
          className='footer'
        >
          <Grid item>
            <a
              href='https://www.facebook.com/groups/getsetgofitness/'
              target='_blank'
            >
              <PreloadImage
                alt='Facebook messenger'
                src={FBMessenger}
                style={{ maxWidth: "40px" }}
              />
            </a>
          </Grid>
          <Grid item>
            <a
              href='https://www.youtube.com/channel/UCdUryFTSw0IIdRjmPWXo_Pg'
              target='_blank'
            >
              <PreloadImage
                alt='Youtube'
                src={Youtube}
                style={{ maxWidth: "40px" }}
              />
            </a>
          </Grid>
          <Grid item>
            <a href='https://www.instagram.com/getsetgofit/' target='_blank'>
              <PreloadImage
                alt='Youtube'
                src={Insta}
                style={{ maxWidth: "40px" }}
              />
            </a>
          </Grid>
          <Grid
            item
            container
            direction='column'
            alignItems='center'
            spacing={1}
            xs={3}
            style={{ textAlign: "center" }}
          >
            <Grid item>
              <a href='https://www.getsetgo.fitness/' target='_blank'>
                <PreloadImage
                  alt='GetSetGo Fitness'
                  src={LogoElement}
                  style={{ maxWidth: "80px" }}
                />
              </a>
            </Grid>
            <Grid item>
              <Typography>
                <small>© GetSetGo, 2020. All rights reserved</small>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <a href='https://www.facebook.com/getsetgofit/' target='_blank'>
              <PreloadImage
                alt='Facebook messenger'
                src={FBGroup}
                style={{ maxWidth: "40px" }}
              />
            </a>
          </Grid>
          <Grid item>
            <a
              href={`https://api.whatsapp.com/send?phone=917666785371&text=${"GSG DIWALI OFFER"}`}
              target='_blank'
            >
              <PreloadImage
                alt='Facebook messenger'
                src={Whatsapp}
                style={{ maxWidth: "40px" }}
              />
            </a>
          </Grid>
          <Grid item>
            <a
              href='https://www.linkedin.com/in/getsetgo-fitness-6a05451b2/'
              target='_blank'
            >
              <PreloadImage
                alt='Facebook messenger'
                src={Linkedin}
                style={{ maxWidth: "40px" }}
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
