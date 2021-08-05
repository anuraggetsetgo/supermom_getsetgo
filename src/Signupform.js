import React, { useState } from "react";
import { Form, Field, Formik } from "formik";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Styles from "./App.styles";
import { callAPI, getURL, get, set } from "./services";
import emailTemplates from "./emailTemplate.json";
import { useHistory } from "react-router-dom";
const errMsgs = {
  requried: "Uh oh! It's a required field",
  name: "Wait, that doesn't sound like a valid name",
  email: "Please enter a valid email id",
  mobile: "That is certainly not a valid number. ",
  country: "Did you miss the country code?",
  age: "Really? That's your age?"
};
const validate = function(value, regex, type) {
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
function validateHeight(value) {
  return validate(value, /^[1-9]\d*(\.\d+)?$/, "height");
}
function validateWeight(value) {
  return validate(value, /^[1-9]\d*(\.\d+)?$/, "weight");
}
function validateAge(value) {
  return validate(value, /^[1-9]\d*(\.\d+)?$/, "age");
}
function validateEmail(value) {
  return validate(value, /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "email");
}
function validateCountry(value) {
  return validate(value, /^[0-9][A-Za-z0-9 -]*$/, "country");
}

export default props => {
  let history = useHistory();
  let [err, updateErr] = useState(false);
  let [formSubmitting, updateFormSubmitting] = useState(false);
  let [sendingEmail, updatesendingEmail] = useState(false);
  function moveNxt() {
    history.replace("secret");
  }
  let formError = err => {
    updateErr(true);
  };
  const orderCreated = data => {
    window.location.replace(data.data.paymentLink);
  };
  const errorOrderCreated = err => {
    this.setState({ bored: true });
    console.log(err);
  };
  let formSubmitted = data => {
    updateFormSubmitting(false);
    const package_id = get("package_id");
    let { email, name, mobile, age, country } = JSON.parse(get("userDetails"));
    callAPI(
      getURL("create_order"),
      "post",
      data => {
        orderCreated(data);
      },
      err => {
        errorOrderCreated(err);
      },
      {
        orderNote: `Diwali 2020 Package`,
        package_id: package_id,
        customer_name: name,
        customer_email: email,
        customer_phone: `${country}-${mobile}`,
        redirect_url: "http://diwali.getsetgo.fitness/thank_you"
      }
    );
    // updatesendingEmail(true);
    // let { email, name, mobile, age, height, weight } = JSON.parse(
    //   get("userDetails")
    // );
    // let { city } = JSON.parse(get("loc"));
    // let emailBody = emailTemplates.registration
    //   .replace(/#fname/g, name.split(" ")[0])
    //   .replace(/#full_name/g, name)
    //   .replace(/#city/, city)
    //   .replace(/#email/g, email)
    //   .replace(/#mob/g, mobile)
    //   .replace(/#height/g, height)
    //   .replace(/#weight/g, weight)
    //   .replace(/#age/g, age);
    // callAPI(getURL("sendEmail"), "post", moveNxt, moveNxt, {
    //   to: email,
    //   cc: "info@getsetgo.fitness",
    //   subject: "GetSetGo Fitness: Your fitness journey starts here",
    //   message: emailBody
    // });
    // moveNxt();
  };
  let submitForm = values => {
    set("userDetails", values);
    updateFormSubmitting(true);
    let loc = get("loc");
    loc = JSON.parse(loc);
    loc.region = loc.region || null;
    loc.ip = loc.ip || null;
    loc.city = loc.city || null;
    loc.region = loc.country || null;
    loc.state = loc.region || null;
    callAPI(getURL("insert_leads"), "post", formSubmitted, formError, {
      customer_name: values.name,
      customer_email: values.email,
      customer_phone: `${values.country}${values.mobile}`,
      customer_age: values.age,
      Region: loc.country,
      ip: loc.ip,
      state: loc.state,
      city: loc.city,
      campaign: "DIWALI_SIGNUP"
    });
    formSubmitted();
  };
  if (err) {
    return (
      <div style={{ padding: "20px 0" }}>
        <Typography variant='subtitle2' style={{ ...Styles.centerTxt }}>
          Uh oh! We ran into an unexpected error. Please reload and try again.
        </Typography>
      </div>
    );
  }
  if (!err && formSubmitting && !sendingEmail)
    return (
      <div style={{ padding: "20px 0" }}>
        <Typography variant='subtitle2' style={{ ...Styles.centerTxt }}>
          Submitting the form ...
        </Typography>
      </div>
    );
  if (!err && !formSubmitting && sendingEmail)
    return (
      <div style={{ padding: "20px 0" }}>
        <Typography variant='subtitle2' style={{ ...Styles.centerTxt }}>
          Dropping an email confirmation ...
        </Typography>
      </div>
    );
  if (!(err || formSubmitting || sendingEmail)) {
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          country: 91,
          mobile: "",
          age: null
        }}
        onSubmit={values => {
          submitForm(values);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <div style={Styles.formFieldContainer}>
              <label htmlFor='email'>
                <Typography>Full Name</Typography>
              </label>
              <Field name='name' type='text' validate={validateName} />
              {touched.name && errors.name && (
                <div style={Styles.err}>{errors.name}</div>
              )}
            </div>
            <div style={Styles.formFieldContainer}>
              <label htmlFor='email'>
                <Typography>Email</Typography>
              </label>
              <Field name='email' type='text' validate={validateEmail} />
              {touched.email && errors.email && (
                <Typography style={Styles.err} variant='body2'>
                  {errors.email}
                </Typography>
              )}
            </div>
            <div style={Styles.formFieldContainer}>
              <label htmlFor='mobile'>
                <Typography>Mobile</Typography>
              </label>
              <div>
                <div style={Styles.special}>
                  <Typography variant='body2'>+</Typography>
                </div>
                <div style={Styles.countryContainer}>
                  <Field
                    name='country'
                    type='number'
                    validate={validateCountry}
                  />
                </div>
                <div style={Styles.special}>
                  <Typography variant='body2'>-</Typography>
                </div>
                <div style={Styles.mobileContainer}>
                  <Field
                    name='mobile'
                    type='number'
                    validate={validateMobile}
                  />
                </div>
              </div>
              {((touched.mobile && errors.mobile) ||
                (touched.country && errors.country)) && (
                <div style={Styles.err} variant='body2'>
                  {errors.mobile} {errors.country}
                </div>
              )}
            </div>
            <div style={Styles.formFieldContainer}>
              <label htmlFor='age'>
                <Typography>Age</Typography>
              </label>
              <Field name='age' type='text' validate={validateAge} />
              {touched.age && errors.age && (
                <div style={Styles.err}>{errors.age}</div>
              )}
            </div>
            {/* <div style={Styles.formFieldContainer}>
              <label htmlFor='time'>
                <Typography>Preferred time of calling</Typography>
              </label>
              <Field as='select' name='time'>
                <option value='Morning'>Morning</option>
                <option value='Noon'>Noon</option>
                <option value='Evening'>Evening</option>
              </Field>
              {touched.time && errors.time && (
                <div style={Styles.err}>{errors.time}</div>
              )}
            </div> */}
            <Button type='submit' variant='contained' color='primary'>
              <Typography variant='subtitle2'>Sign me up!</Typography>
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
};
