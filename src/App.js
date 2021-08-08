import React, { useEffect, useState } from "react";
import Header from "./sections/header";
import Footer from "./sections/footer";
import ScrollToTop from "./scrolltotop";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { updateLoc } from "./services";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./home";
import Package from "./package";
import Ordersummary from "./ordersummary";
import ReactPixel from "react-facebook-pixel";
import "../src/fonts/fonts.css";
import Socialmedia from "./sections/socialmedia";
import Coachwork from "./sections/coachwork";
import Success from "./sections/success";
import Mediabanner from "./sections/mediabanner";
import Sellingreviews from "./sections/sellingreviews";
import Sellingmidbanner from "./sections/sellingmidbanner";
import Banner from "./sections/banner";
import Videocomponent from "./sections/videocomponent";
import Landingvideobanner from "./sections/landingvideobanner";
import Joinnow from "./sections/joinnow";
import Whygetsetgo from "./sections/whygetsetgo";
import Signupbanner from "./sections/signupbanner";
import Publicreviews from "./sections/publicreviews";
import Signupform from "./Signupform";
import Carousel from "./sections/carousel";
import Thankyou from "./sections/thankyou";
import api from "./gsgAPI/api";

const HomeArea = ({ region }) => {
  const [reviewData, setReviewdata] = useState([]);

  async function getReview() {
    let google_reviews_data = await api.callAPI(api.google_reviews_api, "GET");
    google_reviews_data = google_reviews_data.reviews;
    setReviewdata(google_reviews_data);
  }

  useEffect(() => {
    getReview();
  }, []);
  console.log(reviewData);
  return (
    <>
      <Carousel />
      <Signupbanner />
      {/* <Signupform /> */}
      {/* <Socialmedia /> */}
      <Landingvideobanner />
      <Joinnow />
      <Whygetsetgo />
      <Publicreviews reviewData={reviewData} />
      <Mediabanner />
    </>
  );
};

const SellingArea = ({ region }) => {
  return (
    <>
      <Banner />
      <Coachwork />
      <Videocomponent />
      <Sellingmidbanner />
      <Sellingreviews />
      <Mediabanner />
      <Success />
    </>
  );
};
const ThankyouArea = ({ region }) => {
  return (
    <>
      <Thankyou />
    </>
  );
};
const App = () => {
  const [appRegion, setAppRegion] = useState("base_ind");

  async function setApiBase() {
    let region = await api.getBaseUrl();

    setAppRegion(region);
  }

  useEffect(() => {
    setApiBase();
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomeArea region={appRegion} />
          </Route>
          <Route exact path="/selling">
            <SellingArea region={appRegion} />
          </Route>
          <Route exact path="/thankyou">
            <ThankyouArea region={appRegion} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
