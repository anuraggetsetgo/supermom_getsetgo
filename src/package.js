import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { docHt, get, callAPI, getURL, updateLoc } from "./services";
import { Typography, Button } from "@material-ui/core";
import Styles from "./app-style";
// import PreloadImage from "./helpers/preloadimg";
// import GetDiscount from "./sections/getdiscount";
import { Link } from "react-router-dom";
import Banner from "./sections/banner";
import Videocomponent from "./sections/videocomponent";
// import Thankyou from "./sections/thankyou";
import Success from "./sections/success";
import Mediabanner from "./sections/mediabanner";
import Sellingreviews from "./sections/sellingreviews";
import Sellingmidbanner from "./sections/sellingmidbanner";
import Coachwork from "./sections/coachwork";
import NewsBanner from "./sections/news";
import { ga_clicked_Payment } from "./reactGA";
import Header from "./sections/header";
import Footer from "./sections/footer";

let baseurl = "https://getsetgo.fitness";
class Package extends Component {
  constructor(props) {
    super(props);
    if (!get("products")) {
      updateLoc();
      window.location.replace("/");
    }
    let products = JSON.parse(get("products"));
    this.state = {
      currency: products.currency,
      amount: products.amount,
      offerAmount: products.offer,
      userData: true,
      bored: true,
      discountDetails: false,
      discountActivated: false,
      activatingDiscount: false,
      products: null,
    };
  }

  createOrder(product, index) {
    ga_clicked_Payment();
    let userDetails = JSON.parse(get("userDetails"));
    //console.log("index", index);
    let package_id = product.service_id;
    let campaign_id = get("campaign_id") === null ? 2 : get("campaign_id");
    let affiliate_id = get("affiliate_id") === null ? 1 : get("affiliate_id");
    this.setState({ bored: false });
    if (!userDetails) this.setState({ userData: false });
    else {
      //callAPI(getURL('create_order'),'post',(data)=>{this.orderCreated(data)},(err)=>{this.errorOrderCreated(err)}, {"orderNote":`KOL ${index+1} people`,"package_id":package_id,"customer_name":userDetails.name,"customer_email":userDetails.email, "customer_phone":`${userDetails.country}-${userDetails.mobile}`, "redirect_url":baseurl+"/thank_you"})
      callAPI(
        getURL("campaign_create_order"),
        "post",
        (data) => {
          this.orderCreated(data);
        },
        (err) => {
          this.errorOrderCreated(err);
        },
        {
          orderNote: `Super Mom ${product.no_of_users + 1} people`,
          package_id: package_id,
          customer_name: userDetails.name,
          customer_email: userDetails.email,
          customer_phone: `${userDetails.country}-${userDetails.mobile}`,
          //affiliate_id: affiliate_id,
          redirect_url: baseurl + "/thank_you",
          campaign_id: campaign_id,
        }
      );
      // console.log(affiliate_id);
    }
  }
  orderCreated(data) {
    window.location.replace(data.data.paymentLink);
  }
  errorOrderCreated(err) {
    this.setState({ bored: true });
    // console.log(err);
  }
  hideDetails = () => {
    this.setState({
      discountDetails: false,
    });
    this.props.freezeScroll(false);
  };
  showDiscount = () => {
    this.setState({
      discountDetails: true,
    });
    this.props.freezeScroll(true);
  };
  activateDiscount = () => {
    this.setState({
      activatingDiscount: true,
    });
    setTimeout(() => {
      this.setState({
        discountActivated: true,
        activatingDiscount: false,
      });
    }, 10000);
    this.hideDetails();
  };
  setProducts = (data) => {
    // console.log("DATA FETCHED!!");
    var services = data.data.services;
    // console.log(services);
    //setServices(services);
    baseurl = data.data.redirect_base_url;
    this.setState({ products: services });
  };
  getproducts = () => {
    let currency = this.state.currency;
    let campaign_id = get("campaign_id") === null ? 2 : get("campaign_id");
    //"https://api.getsetgo.fitness/base_ind/API/v1/fetch_services",
    let currencytext =
      currency === "₹" ? "INR" : currency === "aed" ? "AED" : "USD";
    callAPI(
      getURL("fetch_services"),
      "post",
      (data) => {
        this.setProducts(data);
      },
      (err) => {
        console.log(err);
      },
      {
        campaign_id: campaign_id,
        currency: currencytext,
      }
    );
  };
  returnCurrencySymbol = (currency) => {
    switch (currency) {
      case "INR":
        return "₹";
      case "AED":
        return "aed";
      default:
        return "$";
    }
  };
  renderVal = (text) => {
    var element;
    switch (text) {
      case "Yes":
        return (
          <span
            className="material-icons"
            style={{ color: "green", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            check
          </span>
        );
        break;
      case "No":
        return (
          <span
            className="material-icons"
            style={{ color: "red", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            remove
          </span>
        );
        break;
      default:
        return <Typography variant="body2">{text}</Typography>;
        break;
    }
    return element;
  };
  componentDidMount() {
    this.getproducts();
    window.scrollTo(0, 0);
  }

  render() {
    let {
      // amount,
      products,
      // currency,
      userData,
      // bored,
      // offerAmount,
      // discountDetails,
      // discountActivated,
      // activatingDiscount,
      //serviceInclusions,
    } = this.state;

    return (
      <>
        <Header />
        <Grid
          container
          style={{
            minHeight: `${docHt() - 100}px`,
            // paddingTop: Styles.spacing(10),
            //...Styles.blueBG,
            overflowX: "hidden",
          }}
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          {!products && (
            <Grid
              item
              style={{
                ...Styles.colorWhite,
                ...Styles.centerTxt,
                ...Styles.marginBottom,
              }}
            >
              Loading services. Please wait ...
            </Grid>
          )}
          {!userData && (
            <Grid item style={{ padding: "0 50px", textAlign: "center" }}>
              <Typography variant="h2">
                Uh oh, we don't have your user details. Please go back to home
                and fill your details
              </Typography>
              <Link to="/">
                <Button variant="contained" color="primary">
                  <Typography variant="subtitle1">
                    Click here to go to home
                  </Typography>
                </Button>
              </Link>
            </Grid>
          )}

          {products && (
            <React.Fragment>
              <Banner
                product={products}
                createOrder={(data) => this.createOrder(data)}
              />
              <Coachwork />
              <Videocomponent />
              <Sellingmidbanner
                product={products}
                createOrder={(data) => this.createOrder(data)}
              />
              <Sellingreviews />
              <Mediabanner />
              <Success
                product={products}
                createOrder={(data) => this.createOrder(data)}
              />
              <NewsBanner />
            </React.Fragment>
          )}
        </Grid>
        <Footer />
      </>
    );
  }
}
export default Package;
