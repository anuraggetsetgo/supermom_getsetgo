import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import {
  docHt,
  get,
  callAPI,
  getURL,
  updateLoc,
  retrievePath,
} from "./services";
import { Typography, Button, Fade } from "@material-ui/core";
import Styles from "./app-style";
import PreloadImage from "./helpers/preloadimg";
import GetDiscount from "./sections/getdiscount";
import { Link } from "react-router-dom";
import ProductTable from './producttable.js'
import Divider from '@material-ui/core/Divider';
import { CheckCircleOutlineRounded } from "@material-ui/icons";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import VideoCallIcon from '@material-ui/icons/VideoCall';
let baseurl = "https://getsetgo.fitness";
class Package extends Component {
  constructor(props) {
    super(props);
    if (!get("products")) {
      updateLoc();
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
    let userDetails = JSON.parse(get("userDetails"));
    console.log("index", index);
    let package_id = product.service_id;
    let campaign_id = get("campaign_id") === null ? 1 : get("campaign_id");
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
          orderNote: `KOL ${index + 1} people`,
          package_id: package_id,
          customer_name: userDetails.name,
          customer_email: userDetails.email,
          customer_phone: `${userDetails.country}-${userDetails.mobile}`,
          affiliate_id: affiliate_id,
          redirect_url: baseurl + "/thank_you",
          campaign_id: campaign_id,
        }
      );
      console.log(affiliate_id);
    }
  }
  orderCreated(data) {
    window.location.replace(data.data.paymentLink);
  }
  errorOrderCreated(err) {
    this.setState({ bored: true });
    console.log(err);
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
  setProducts=(data)=>{        
    var services = data.data.services;
    console.log(services);
    //setServices(services);
    baseurl = data.data.redirect_base_url;
    this.setState({ products: services });
    let row=[];
    var desc
      services.map((product)=>{
          desc = JSON.parse(product.pack_des);
         for (const key in desc) {
          row.push(key)
        }
        })
        var uniqueRow = [...new Set(row)]  
        this.setState({serviceInclusions:uniqueRow});

  }
  getproducts = () => {
    let currency = this.state.currency;
    let campaign_id = get("campaign_id") === null ? 1 : get("campaign_id");
    let currencytext =
      (currency === "₹" ? "INR" : currency) ||
      (currency === "$" ? "USD" : currency) ||
      (currency === "aed" ? "AED" : currency);
    callAPI(
      "https://api.getsetgo.fitness/base_ind/API/v1/fetch_services",
      "post",
      (data) => {this.setProducts(data)},
      (err) => {
        console.log(err);
      },
      {
        campaign_id: campaign_id,
        currency: currencytext,
      }
    );
  };
  setIcons=(text)=>{
    var element;
    switch (text) {
      case 'Yes':
          return <CheckCircleOutlineRounded fontSize='large' color="primary"/>
        break;
      case '1 call / month':
        return <span><PhoneAndroidIcon fontSize='large'color="primary"/>{ text}</span>
        break;
      case '3 calls / month':
          return <span><PhoneAndroidIcon fontSize='large'color="primary"/>{ text}</span>
        break;
      case '1 video call / month':
          return <span><VideoCallIcon fontSize='large'color="primary"/>{ text}</span>
        break; 
      case '2 video calls / month':
          return <span><VideoCallIcon fontSize='large' color="primary"/>{ text}</span>
        break;   
          default:
        element=text;
        break;
    }
    return element;

  }
  componentDidMount() {
    this.getproducts();
  }

  render() {
    let {
      amount,
      products,
      currency,
      userData,
      bored,
      offerAmount,
      discountDetails,
      discountActivated,
      activatingDiscount,
      serviceInclusions,
    } = this.state;
    let desc = [
      "Stranded alone at home? Well, no more. Join thousands of others and turn it into a great at-home-staycation for you!",
      "Running out of ideas about things to do together? Tired of binge-watching series and movies? How about getting fit together?",
      "They say the more the merrier. We can tell you it's true! Join with your complete family. It doesn't get better than this.",
    ];
    let imgs = [
      `${retrievePath()}boredMan.jpg`,
      `${retrievePath()}boredCouple.jpg`,
      `${retrievePath()}boredFamily.jpg`,
    ];
    let imgsHappy = [
      `${retrievePath()}happyMan.jpg`,
      `${retrievePath()}happyCouple.jpg`,
      `${retrievePath()}happyFamily.jpg`,
    ];
    return (
      <Grid
        container
        style={{
          minHeight: `${docHt() - 100}px`,
          paddingTop: Styles.spacing(10),
          ...Styles.blueBG,
        }}
        direction="column"
        alignItems="center"
        justify="space-evenly"
      >
        {!userData && (
          <Grid item style={{ padding: "0 50px", textAlign: "center" }}>
            <Typography variant="h2" style={Styles.colorWhite}>
              Uh oh, we don't have your user details. Please go back to home and
              fill your details
            </Typography>
            <Link to="/">
              <Button variant="contained" color="primary">
                <Typography variant="subtitle1" style={Styles.colorWhite}>
                  Click here to go to home
                </Typography>
              </Button>
            </Link>
          </Grid>
        )}
        {userData && (
          <React.Fragment>
            <Grid item>
              <Typography
                variant="h1"
                style={{
                  ...Styles.colorWhite,
                  ...Styles.centerTxt,
                  ...Styles.marginBottom,
                }}
              >
                Get started today! Your health is worth it
              </Typography>
            </Grid>
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

            {products && (
              <Grid
                item
                container
                alignItems="center"
                justify="space-evenly"
                //style={{ ...Styles.marginTop }}
              >
                {
                  //Object.keys(this.state.amount).map((key, indx)=>
                  products &&
                    products.map((product, index) => {
                      return (
                        <Grid
                          item
                          xs={4}
                          style={{
                            ...Styles.centerTxt,
                            ...{ padding: "0 50px" },
                            boxShadow: '0px 0px 19px -3px rgba(0,0,0,0.36)',
                            background: 'rgb(255, 255, 255)',
                            border :'5px soild'
                          }}
                          key={index}
                        >
                          {bored && (
                            <Fade in={bored}>
                              <PreloadImage
                                src={imgs[index]}
                                alt="Simple, macro-calculated recipes"
                                style={{ width: "100%", minHeight: "100px" }}
                              />
                            </Fade>
                          )}
                          {!bored && (
                            <Fade in={!bored}>
                              <PreloadImage
                                src={imgsHappy[index]}
                                alt="Simple, macro-calculated recipes"
                                style={{ width: "100%", minHeight: "100px" }}
                              />
                            </Fade>
                          )}
                          <Typography style={{ ...Styles.colorGrey }}>
                            (Cost: {currency} {product.pack_price} per person)
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            style={{
                              ...Styles.colorPrimary,
                              ...Styles.marginTop,
                              
                            }}
                          >
                            <strong>{product.service_caption}</strong>
                            {/* //product.pack_des} */}
                          </Typography>
                          <Divider style={{height:'4px'}} />
                          {serviceInclusions && serviceInclusions.map((feature,index)=>(<Grid>
                            <Typography variant="h6" style={{...Styles.colorPrimary}}>
                              {feature}
                              </Typography>
                          <Typography variant="subtitle2">{this.setIcons(JSON.parse(product.pack_des)[feature])}</Typography>
                          </Grid>
                          ))}
                          <Grid item>
                            <Styles.ColorButton
                              variant="contained"
                              color="primary"
                              onClick={() => this.createOrder(product, index)}
                              disabled={!bored}
                            >
                              <Typography
                                variant="subtitle1"
                                style={Styles.colorWhite}
                              >
                                {!bored ? "Please wait ..." : "Buy now"}
                              </Typography>
                            </Styles.ColorButton>
                          </Grid>
                        </Grid>
                      );
                    })
                }
               {/* {products&&(
                  <Grid xs={8}><ProductTable products={products}/></Grid>
              )
  } */}
  </Grid>
            )}
            <GetDiscount
              discountDetails={discountDetails}
              hideDetails={this.hideDetails}
              activateDiscount={this.activateDiscount}
            />
          </React.Fragment>
        )}
      </Grid>
    );
  }
}
export default Package;
