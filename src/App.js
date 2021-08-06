import React, { Component } from "react";
import Header from "./sections/header";
import Footer from "./sections/footer";
import ScrollToTop from "./scrolltotop";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { updateLoc } from "./services";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Banner />
        <Coachwork />
        <Sellingmidbanner />
        <Sellingreviews />
        <Mediabanner />
        <Success />
        {/* <Socialmedia /> */}
        <Footer />

        {/* <Socialmedia />
        <Mediabanner />
        <Footer /> */}
      </Router>
    </>
  );
};
export default App;
