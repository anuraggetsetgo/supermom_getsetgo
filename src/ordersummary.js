import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import Styles from "./app-style";
import { docHt, callAPI, getURL, get } from "./services";
import Emailtemplates from "./emailTemplate.json";
import Refercomponents from "./components/FormView";
const empty = [
  {
    displayname: "Name",
    value: "",
    error: null,
    type: "text",
    style: null,
  },
  { displayname: "Email", value: "", error: null, type: "email", style: null },
  { displayname: "Phone", value: "", error: null, type: "mobile", style: null },
];

class Ordersummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderStatus: "waiting",
    };
  }
  componentDidMount() {
    let campaign_id = get("campaign_id") === null ? 2 : get("campaign_id");
    //        callAPI(getURL('order_status'), 'post', (data)=>{this.orderData(data.data)}, (err)=>{this.orderStatus(err)}, {order_id:this.props.match.params.orderId})
    callAPI(
      getURL("campaign_order_status"),
      "post",
      (data) => {
        this.orderData(data.data);
      },
      (err) => {
        this.orderStatus(err);
      },
      { order_id: this.props.match.params.orderId, campaign_id: campaign_id }
    );
  }
  emailSent(data) {
    this.setState({ orderStatus: "success" });
  }
  emailErr(err) {
    this.setState({ orderStatus: "successEmailErr" });
  }
  orderData(data) {
    console.log("Order successful");
    let {
      order_status,
      customer_phone,
      customer_email,
      customer_name,
      order_date,
      order_amount,
      currency,
      new_affiliate_id,
    } = data;
    // let loc = JSON.parse(get('loc'));
    // this.setState({orderStatus: 'success', name: customer_name, email: customer_email});

    if (parseInt(order_status) === 1) {
      this.setState({
        orderStatus: "sendingEmail",
        name: customer_name,
        email: customer_email,
        new_affiliate_id: new_affiliate_id,
      });
      let emailBody = Emailtemplates.paymentComplete
        .replace(/#fname/g, customer_name.split(" ")[0])
        .replace(/#email/g, customer_email)
        .replace(/#full_name/g, customer_name)
        .replace(/#mob/g, `${customer_phone}`)
        .replace(/#date/g, order_date)
        .replace(/#amount/g, `${currency} ${order_amount}`);
      console.log("Email template", emailBody);
      callAPI(
        getURL("sendEmail"),
        "post",
        (data) => {
          this.emailSent(data);
        },
        (err) => {
          this.emailErr(err);
        },
        {
          to: customer_email,
          cc: "info@getsetgo.fitness",
          subject: "GetSetGo Fitness: Your fitness journey starts here",
          message: emailBody,
        }
      );
    } else {
      this.setState({
        orderStatus: "fail",
        name: customer_name,
        email: customer_email,
      });
    }
  }
  orderStatus(err) {
    console.log("Ran into errors");
    this.setState({
      orderStatus: "err",
    });
  }
  render() {
    let { orderStatus, name, new_affiliate_id } = this.state;
    return (
      <Grid
        container
        style={{ paddingTop: "20vh", minHeight: "85vh", ...Styles.blueBG }}
        alignItems="center"
        justify="center"
      >
        {orderStatus === "waiting" && (
          <Grid
            item
            style={{
              ...{ padding: "0 50px", width: "50%" },
              ...Styles.centerTxt,
            }}
          >
            <Typography variant="subtitle1" style={Styles.colorWhite}>
              Give us a minute. Completing your registration ...
            </Typography>
          </Grid>
        )}
        {orderStatus === "sendingEmail" && (
          <Grid
            item
            style={{
              ...{ padding: "0 50px", width: "50%" },
              ...Styles.centerTxt,
            }}
          >
            <Typography variant="subtitle1" style={Styles.colorWhite}>
              Okay, payment complete. Sending you an email acknowledgement ...
            </Typography>
          </Grid>
        )}
        {orderStatus === "successEmailErr" && (
          <Grid
            item
            style={{
              ...{ padding: "0 50px", width: "50%" },
              ...Styles.centerTxt,
            }}
          >
            <Typography
              variant="h2"
              style={{ ...Styles.colorWhite, ...Styles.marginBottom }}
            >
              Your registration is complete!!!
            </Typography>
            <Typography variant="subtitle2" style={{ ...Styles.colorWhite,lineHeight:'2.2rem' }}>
              Congratulations {name.split(" ")[0]}! There has been a small
              glitch: we haven't been able to drop you an email. Don't worry
              though. Our backend team qill quickly review this. For your
              registration, our representatives will get in touch with you
              within 2 working days. Feel free to drop us an email in case you
              have any queries:{" "}
              <a href="mailto: info@getsetgo.fitness" style={Styles.colorYellow}>info@getsetgo.fitness</a>
            </Typography>
          </Grid>
        )}
        {orderStatus === "success" && (
          <Grid
            item
            style={{
              ...{ padding: "0 50px", width: "50%" },
              ...Styles.centerTxt,
            }}
          >
            <Typography
              variant="h2"
              style={{ ...Styles.colorWhite, ...Styles.marginBottom }}
            >
              Your registration is complete!!!
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ ...Styles.colorWhite, ...Styles.marginBottom,lineHeight:'2.2rem' }}
            >
              Congratulations {name.split(" ")[0]}! Our representatives will get
              in touch with you within 2 working days. Feel free to drop us an
              email in case you have any queries:{" "}
              <a href="mailto: info@getsetgo.fitness" style={Styles.colorYellow}>info@getsetgo.fitness</a>
            </Typography>
          </Grid>
        )}
        {(orderStatus === "fail" || orderStatus === "err") && (
          <Grid
            item
            style={{
              ...{ padding: "0 50px", width: "50%" },
              ...Styles.centerTxt,
            }}
          >
            <Typography
              variant="h2"
              style={{ ...Styles.colorWhite, ...Styles.marginBottom }}
            >
              Uh oh, seems like your order got stuck somewhere. Do not worry
              though
            </Typography>
            <Typography variant="subtitle2" style={{...Styles.colorWhite,lineHeight:'2.2rem'}}>
              Do not worry though. Your package is totally secure. Simply drop
              us an email at:{" "}
              <a href="mailto: info@getsetgo.fitness" style={Styles.colorYellow}>info@getsetgo.fitness</a>.
              <br></br>Remember to quote your order id in the email:{" "}
              {this.props.match.params.orderId}
            </Typography>
          </Grid>
        )}

      </Grid>
    );
  }
}
export default Ordersummary;

// {(orderStatus === "success" || orderStatus === "successEmailErr") && (
//   <Grid
//     item
//     container
//     style={{ ...Styles.colorWhite, ...Styles.marginBottom }}
//     alignItems="flex-end"
//     justify="center"
//     xs={12}
//   >
//     {/* <Refercomponents  fields = {empty} affiliate_name="Anurag Vishwakarma"affiliate_email = "vaibhav@getsetgo.fitess" affiliate_mobile = "+919821354464" campaign_id="1" ></Refercomponents> */}
//     <Refercomponents
//       fields={empty}
//       affiliate_id={new_affiliate_id}
//       campaign_id={get("campaign_id") === null ? 1 : get("campaign_id")}
//     ></Refercomponents>
//   </Grid>
// )}