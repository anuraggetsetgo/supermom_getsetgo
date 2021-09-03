import React, { Component } from "react";
import "./App.css";
import ScrollToTop from "./scrolltotop";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import theme from "./theme";
import { updateLoc } from "./services";
import { initReactGA, ga_clicked_JoinNow } from "./reactGA";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Package from "./package";
import Ordersummary from "./ordersummary";
import "./fonts/fonts.css";
import { initFBPixel, fbpixel_track_Purchase } from "./reactFBPixel";
//import './date.css'
//import Secret from './secretworkout';

initReactGA();

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollStatus: false,
    };
    this.signUpRef = React.createRef();
  }
  componentDidMount() {
    updateLoc(this.cb);
  }
  cb(currency) {
    //initReactGA();
    //initReactGA();
    //initFBPixel();
    console.log(currency);
    // For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
  }
  freezeScroll(val) {
    this.setState({ scrollStatus: val });
  }
  scrollToSignUp = () => {
    this.signUpRef.current.scrollIntoView({ behavior: "smooth" });
    ga_clicked_JoinNow();
  };
  //  component={props=> <Home freezeScroll={(val)=>{this.freezeScroll(val)}} {...props}/>}/>
  render() {
    let { scrollStatus } = this.state;
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Switch>
              <Route exact path="/">
                <Home
                  signUpRef={this.signUpRef}
                  scrollToSignUp={this.scrollToSignUp}
                />
              </Route>
              <Route path="/trynow">
                <Package />
              </Route>
              <Route
                path="/thank_you/summary/:orderId"
                component={Ordersummary}
              />
              <Route path="/">
                <Home
                  signUpRef={this.signUpRef}
                  scrollToSignUp={this.scrollToSignUp}
                />
              </Route>
            </Switch>

            {/* </Grid> */}
          </CssBaseline>
        </ThemeProvider>
      </Router>
    );
  }
}
export default App;
