import React, { useState } from "react";
import { Form, Field, Formik } from "formik";
import { Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Styles from "./app-style";
import { callAPI, getURL, get, set } from "./services";
import emailTemplates from "./emailTemplate.json";
import { useHistory } from "react-router-dom";

const errMsgs = {
  requried: "Uh oh! It's a required field",
  name: "Wait, that doesn't sound like a valid name",
  email: "Please enter a valid email id",
  mobile: "That is certainly not a valid number. ",
  country: "Did you miss the country code?",
  age: "Please enter a valid age.",
};
const validate = function (value, regex, type) {
  let error;
  if (!value) {
    error = !(type === "country") ? errMsgs.requried : errMsgs.country;
  } else if (!regex.test(value)) {
    error = errMsgs[type];
  } else {
    error = null;
  }
  return error;
};
function validateMobile(value) {
  return validate(
    value,
    /([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}$/g,
    "mobile"
  );
}
function validateName(value) {
  return validate(
    value,
    /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/,
    "name"
  );
}
function validateEmail(value) {
  return validate(value, /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i, "email");
}
function validateCountry(value) {
  return validate(value, /^[0-9][A-Za-z0-9 -]*$/, "country");
}
function validateAge(value) {
  return validate(value, /^(1[89]|[2-9]\d)$/, "age");
}

const Signupform = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(props);
  let history = useHistory();
  let [err, updateErr] = useState(false);
  let [formSubmitting, updateFormSubmitting] = useState(false);
  let [sendingEmail, updatesendingEmail] = useState(false);
  let [submitButtonEnable, setSubmitButtonEnable] = useState(false);
  function moveNxt() {
    history.replace("trynow");
  }
  let formError = (err) => {
    updateErr(true);
  };
  let formSubmitted = (data) => {
    updateFormSubmitting(false);
    updatesendingEmail(true);
    let { email, name, mobile } = JSON.parse(get("userDetails"));
    let { city } = JSON.parse(get("loc"));
    let emailBody = emailTemplates.registration
      .replace(/#fname/g, name.split(" ")[0])
      .replace(/#full_name/g, name)
      .replace(/#city/, city)
      .replace(/#email/g, email)
      .replace(/#mob/g, mobile);
    callAPI(getURL("sendEmail"), "post", moveNxt, moveNxt, {
      to: email,
      cc: "info@getsetgo.fitness",
      subject: "GetSetGo Fitness: Your fitness journey starts here",
      message: emailBody,
    });
    moveNxt();
  };
  let submitForm = (values) => {
    setSubmitButtonEnable(true);
    set("userDetails", values);
    updateFormSubmitting(true);
    const campaign_id = get("campaign_id") === null ? 2 : get("campaign_id");
    const affiliate_id = get("affiliate_id") === null ? 2 : get("affiliate_id");
    let loc = get("loc");
    loc = JSON.parse(loc);
    loc.region = loc.region || null;
    loc.ip = loc.ip || null;
    loc.city = loc.city || null;
    loc.region = loc.country || null;
    loc.state = loc.region || null;
    let postArray = [
      {
        name: values.name,
        email: values.email,
        mobile: `${values.country}${values.mobile}`,
        city: loc.city,
        ip: loc.ip,
        mailStatus: null,
      },
    ];
    // callAPI(getURL('insert_leads'), 'post', formSubmitted, formError, {
    //     customer_name:values.name,customer_email:values.email,customer_phone:`${values.country}${values.mobile}`,Region:loc.country, ip: loc.ip, state: loc.state, city: loc.city,customer_age:values.age});
    callAPI(getURL("add_referrals"), "post", formSubmitted, formError, {
      //customer_name:values.name,
      //customer_email:values.email,
      //customer_phone:`${values.country}${values.mobile}`,
      //customer_age:values.age,
      affiliate_id: affiliate_id,
      campaign_id: campaign_id,
      referrals: [...postArray],
      //REGION INFO
      //Region:loc.country,
      //ip: loc.ip,
      //state: loc.state,
      //city: loc.city,
    }); //ANV
    formSubmitted();
  };
  if (err) {
    return (
      <Grid item style={{ padding: "20px 0" }}>
        <Typography variant="subtitle2" style={{ ...Styles.centerTxt }}>
          Uh oh! We ran into an unexpected error. Please reload and try again.
        </Typography>
      </Grid>
    );
  }
  if (!err && formSubmitting && !sendingEmail)
    return (
      <Grid item style={{ padding: "20px 0" }}>
        <Typography
          variant="subtitle2"
          style={{ ...Styles.colorWhite, ...Styles.centerTxt }}
        >
          Submitting the form ...
        </Typography>
      </Grid>
    );
  if (!err && !formSubmitting && sendingEmail)
    return (
      <Grid item style={{ padding: "20px 0" }}>
        <Typography
          variant="subtitle2"
          style={{ ...Styles.colorWhite, ...Styles.centerTxt }}
        >
          Dropping an email confirmation ...
        </Typography>
      </Grid>
    );
  if (!(err || formSubmitting || sendingEmail)) {
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          country: 91,
          mobile: "",
          age: "",
        }}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {({ errors, touched, isValidating, values }) => {
          console.log(values);
          return (
            <Grid item container direction="row" justify="center">
              <Grid
                item
                justify="center"
                justify="flex-start"
                alignItems="center"
                xs={12}
                sm={12}
                lg={10}
                style={{
                  padding: "60px",
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px",
                  background: "white",
                  marginTop: `${isMobile ? "23px" : "55px"}`,
                }}
              >
                <Grid item>
                  <Typography
                    variant="h1"
                    style={{
                      textAlign: "center",
                      ...Styles.colorRed,
                      ...Styles.boldTxt,
                    }}
                  >
                    Are you the next SUPER MOM?
                  </Typography>
                </Grid>
                <Grid item style={{ marginBottom: "32px" }}>
                  <Typography
                    variant="h5"
                    style={{
                      textAlign: "center",
                      ...Styles.colorCharcoalLight,
                    }}
                  >
                    Kindly enter your details below
                  </Typography>
                </Grid>
                <Form autoComplete="off">
                  <Grid item xs={12} container>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={6}
                      style={{
                        ...Styles.formFieldContainer,
                        // marginRight: isMobile ? "0" : "10px",
                        marginBottom: "32px",
                      }}
                    >
                      <Field
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        validate={validateName}
                        style={{
                          ...Styles.formInputField,
                          width: isMobile ? "100%" : "95%",
                        }}
                      />
                      {touched.name && errors.name && (
                        <Grid item style={Styles.err}>
                          {errors.name}
                        </Grid>
                      )}
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={6}
                      style={Styles.formFieldContainer}
                    >
                      <Grid item>
                        {/* <Grid item style={Styles.countryContainer}>
                        <Field
                          style={{ ...Styles.feildRadius }}
                          name="country"
                          type="number"
                          validate={validateCountry}
                        />
                      </Grid> */}
                        <Grid
                          item
                          style={{
                            ...Styles.mobileContainer,
                            // marginLeft: isMobile ? "0" : "10px",
                            width: isMobile ? "100%" : "100%",
                            marginBottom: "32px",
                          }}
                        >
                          <Field
                            style={{ ...Styles.formInputField }}
                            placeholder="Enter your contact no"
                            name="mobile"
                            type="number"
                            validate={validateMobile}
                            style={{
                              ...Styles.formInputField,
                              width: isMobile ? "100%" : "95%",
                            }}
                          />
                        </Grid>
                      </Grid>
                      {((touched.mobile && errors.mobile) ||
                        (touched.country && errors.country)) && (
                        <Grid item style={Styles.err} variant="body2">
                          {errors.mobile} {errors.country}
                        </Grid>
                      )}
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    style={{
                      ...Styles.formFieldContainer,
                      margin: "32px 0 32px 0",
                    }}
                  >
                    <Field
                      name="email"
                      type="text"
                      placeholder="Email id"
                      validate={validateEmail}
                      style={{
                        ...Styles.formInputField,
                        width: isMobile ? "100%" : "98%",
                      }}
                    />
                    {touched.email && errors.email && (
                      <Typography
                        variant="h7"
                        style={Styles.err}
                        variant="body2"
                      >
                        {errors.email}
                      </Typography>
                    )}
                  </Grid>
                  {/* <Grid item style={Styles.formFieldContainer}>
              <label htmlFor="age">
                <Typography variant="h7">Age</Typography>
              </label>
              <Field
                name="age"
                type="number"
                validate={validateAge}
                style={{ ...Styles.feildRadius }}
              />
              {touched.age && errors.age && (
                <Typography style={Styles.err} variant="body2">
                  {errors.age}
                </Typography>
              )}
            </Grid> */}
                  <Styles.ColorButton
                    type="submit"
                    variant="contained"
                    disabled={submitButtonEnable}
                    style={{
                      width: isMobile ? "100%" : "98%",
                      marginTop: "20px",
                    }}
                    // onClick={(e) => setSubmitButtonEnable(true)}
                  >
                    YES I AM
                  </Styles.ColorButton>
                </Form>
              </Grid>
            </Grid>
          );
        }}
      </Formik>
    );
  }
};

export default Signupform;
