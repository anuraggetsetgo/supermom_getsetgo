import React, { useState } from "react";
import { Form, Field, Formik } from "formik";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";
import Styles from "./app-style";
import { callAPI, getURL, get, set } from "./services";
import emailTemplates from "./emailTemplate.json";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import {
  Dialog,
  DialogActions,
  Slider,
  FormControlLabel,
  Checkbox,
  MenuItem,
  FormControl,
  Snackbar,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  mui_root: {
    padding: "0 0 16px 0",
  },
  paper: {
    //backgroundColor: "transparent",
    boxShadow: "none",
  },
  formControl: {
    width: "95%",
    border: "1px solid #FFFFFF",
    borderRadius: "5px",
    margin: "5px",
    color: "white",
    fontSize: "14px",
    lineHeight: "14px",
    height: "45px",
    padding: "0 10px",
  },
  root: {
    width: 310,
    color: "#FFDD33",
  },
  InputBase: {
    width: "95%",
    border: "1px solid #FFFFFF",
    borderRadius: "5px",
    margin: "5px",
    color: "white",
    fontSize: "14px",
    lineHeight: "14px",
    height: "45px",
    padding: "0 10px",
  },
  InputBaseError: {
    width: "95%",
    border: "1px solid #FF0000",
    borderRadius: "5px",
    margin: "5px",
    color: "white",
    fontSize: "14px",
    lineHeight: "14px",
    height: "45px",
    padding: "0 10px",
  },
  label: {
    left: "calc(-50% + 1px)",
    top: -16,
    "& *": {
      paddingTop: "2px",
      textAlign: "center",
      height: "20px",
      width: "20px",
      borderRadius: "10px",
      background: "#FFDD33",
      color: "#FFFFFF",
    },
  },
  Snackbar: {
    bottom: "9px",
  },
  SnackbarMobile: {
    bottom: "9px",
  },
}));
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

//Dialog for info message
const InfoPopUp = ({
  open,
  setOpen,
  signUpInfoMessage,
  setIsContinue,
  setSubmitButtonEnable,
}) => {
  const handleClose = () => {
    setOpen(false);
    setSubmitButtonEnable(false);
  };
  const classes = useStyles();

  //For Mobile Devices
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      fullWidth={true}
      maxWidth="xs"
      keepMounted
      open={open}
      onClose={handleClose}
      scroll="body"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogActions className="app-dialog-actions">
        <Grid item>
          <HighlightOffIcon
            className="white cursor-pointer"
            onClick={handleClose}
            fontSize="large"
          />
        </Grid>
      </DialogActions>{" "}
      <Grid
        style={{
          padding: "48px 0",
        }}
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="app-card2 app-card-background-white"
      >
        <Grid item>
          <Typography
            variant="h2"
            className="app-text-align-center bold line-height40"
            style={{
              color: "#0F3840",
              marginBottom: Styles.spacing(3),
            }}
          >
            Oops!!
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            width: "90%",
            marginBottom: Styles.spacing(3),
          }}
        >
          <Typography
            variant="subtitle1"
            className="app-text-align-center normal line-height24"
          >
            {signUpInfoMessage}
          </Typography>
        </Grid>
        <Grid item>
          <Styles.ColorButton
            onClick={() => {
              setOpen(false);
              setIsContinue(true);
              setSignUpInfoMessage(false);
              setSubmitButtonEnable(false);
            }}
          >
            OK
          </Styles.ColorButton>
        </Grid>
      </Grid>
    </Dialog>
  );
};
const Signupform = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(props);
  let history = useHistory();
  let [err, updateErr] = useState(false);
  let [formSubmitting, updateFormSubmitting] = useState(false);
  let [sendingEmail, updatesendingEmail] = useState(false);
  let [submitButtonEnable, setSubmitButtonEnable] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [signUpInfoMessage, setSignUpInfoMessage] = useState(false);
  const [isContinue, setIsContinue] = useState(false);
  function moveNxt() {
    history.replace("trynow");
  }
  let formError = (err) => {
    //     var infomessage =  JSON.parse(err).infomessage;
    //     console.log(err);
    //     if(infomessage)
    // {      setOpenDialog(true)
    //       setSignUpInfoMessage(infomessage);
    //     }
    updateErr(true);
  };
  let formSubmitted = (data) => {
    console.log(data);
    let infomessage = data.data.infomessage;
    //console.log(infomessage)
    if (infomessage && !isContinue) {
      setOpenDialog(true);
      setSignUpInfoMessage(infomessage);
      updateFormSubmitting(false);
    } else if (isContinue) {
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
    } else if (!infomessage) {
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
    }
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

    callAPI(getURL("user-signup"), "post", formSubmitted, formError, {
      firstname: values.name.split(" ")[0],
      lastname:
        values.name.split(" ")[1] === undefined
          ? ""
          : values.name.split(" ")[1],
      mobile: `${values.country}${values.mobile}`,
      email: values.email,
      skip_mobile: isContinue ? 1 : 0,
    }); //ANV

    //formSubmitted();
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

  // if (!err && !sendingEmail)
  //   return (
  //     <Grid item style={{ padding: "20px 0" }}>
  //       <Typography
  //         variant="subtitle2"
  //         style={{ ...Styles.colorWhite, ...Styles.centerTxt }}
  //       >
  //         Submitting the form ...
  //       </Typography>
  //     </Grid>
  //   );
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

  if (!(err || sendingEmail)) {
    return (
      <>
        {
          <InfoPopUp
            open={openDialog}
            setOpen={setOpenDialog}
            signUpInfoMessage={signUpInfoMessage}
            setIsContinue={setIsContinue}
            setSubmitButtonEnable={setSubmitButtonEnable}
          />
        }
        (
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
                    padding: isMobile ? "30px" : "60px",
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
                    borderRadius: "10px",
                    background: "white",
                    marginTop: `${isMobile ? "23px" : "55px"}`,
                  }}
                >
                  <Grid item container>
                    <Typography
                      variant={isMobile ? "h4" : "h1"}
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
                      variant={isMobile ? "h6" : "h5"}
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
                        container
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
                          disabled={formSubmitting}
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
                        container
                        direction="row"
                        style={Styles.formFieldContainer}
                      >
                        <Grid item>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            lg={2}
                            style={Styles.countryContainer}
                          >
                            <Field
                              style={{ ...Styles.feildRadius }}
                              name="country"
                              type="number"
                              validate={validateCountry}
                              disabled={formSubmitting}
                              style={{
                                ...Styles.formInputField,
                                // width: isMobile ? "100%" : "95%",
                              }}
                            />
                          </Grid>
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
                              disabled={formSubmitting}
                              validate={validateMobile}
                              style={{
                                ...Styles.formInputField,
                                // width: isMobile ? "100%" : "95%",
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
                        disabled={formSubmitting}
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
        )
      </>
    );
  }
};

export default Signupform;
