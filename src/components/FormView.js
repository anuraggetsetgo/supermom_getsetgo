import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import _ from "lodash";
import axios from "axios";
import { Typography, Grid } from "@material-ui/core/";
import Thanks from "./Thanks";
import Styles from "../app-style";
import "../App.css";
import { TurnedInTwoTone } from "@material-ui/icons";

let hasError = true;

class ReferralForm extends React.Component {
  constructor(props) {
    var obj = _.cloneDeep(props.fields);
    super(props);

    this.state = {
      inputFeildRows: [obj],
      response: "",
      btn: false,
    };
  }

  handleChangeInput = (row, col, e) => {
    const { value } = e.target;
    const values = _.cloneDeep(this.state.inputFeildRows);
    values[row][col].value = value;
    this.setState({ inputFeildRows: values });
  };

  validate = (row, col, e) => {
    const emailReg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;
    const nameReg = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/g;
    const phoneReg = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/g;
    let errorMsg = null;
    const { name, value } = e.target;
    switch (name.toLowerCase()) {
      case "name":
        errorMsg = nameReg.test(value) ? null : "Please enter a valid Name";
        break;
      case "email":
        errorMsg = emailReg.test(value) ? null : "Please enter a valid email!";
        break;
      case "phone":
        errorMsg =
          phoneReg.test(value) || "/^[0-9]{10}$/g".test
            ? null
            : "Please enter a valid Phone Number";
        break;
      default:
        break;
    }
    if (errorMsg != null) {
      hasError = true;
    } else {
      hasError = false;
    }
    const values = _.cloneDeep(this.state.inputFeildRows);
    values[row][col].error = errorMsg;
    this.setState({ inputFeildRows: values });
  };
  handleAddRow = (row) => {
    const values = _.cloneDeep(this.state.inputFeildRows);
    //values.push(empty);
    values.splice(row + 1, 0, [...this.props.fields]);
    this.setState({ inputFeildRows: values });
  };
  handleRemoveRow = (row) => {
    const values = _.cloneDeep(this.state.inputFeildRows);
    if (values.length > 1) {
      values.splice(row, 1);
      this.setState({ inputFeildRows: values });
    }
  };
  handleSubmit = (e) => {
    this.setState({ btn: true });
    e.preventDefault();
    //let campaign_id=1//this.props.campaign_id;
    let postArray = [];
    const values = _.cloneDeep(this.state.inputFeildRows);
    values.map((rowData, row) => {
      rowData.map((colData, col) => {
        if (colData.displayname === "Name" && colData.value === "") {
          values[row][col].error = "Uh oh! It's a required field";
          this.setState({ inputFeildRows: values });
          hasError = true;
        }
        if (colData.displayname === "Email" && colData.value === "") {
          values[row][col].error = "Uh oh! It's a required field";
          this.setState({ inputFeildRows: values });
          hasError = true;
        }
        if (colData.displayname === "Phone" && colData.value === "") {
          values[row][col].error = "Uh oh! It's a required field";
          this.setState({ inputFeildRows: values });
          hasError = true;
        }
      });
    });
    let tempName, tempEmail, tempPhone;
    if (hasError === false) {
      values.map((rowData, row) => {
        rowData.map((colData, col) => {
          if (colData.displayname === "Name") tempName = colData.value;
          if (colData.displayname === "Email") tempEmail = colData.value;
          if (colData.displayname === "Phone") tempPhone = colData.value;
          return 0;
        });

        postArray.push({
          name: tempName,
          email: tempEmail,
          mobile: tempPhone,
          city: "",
          ip: "",
          mailStatus: null,
        });

        return 0;
      });
      axios({
        method: "post",
        url: "https://api.getsetgo.fitness/base_ind/API/v1/add_referrals",
        data: {
          // affiliate_fname: this.props.affiliate_name.split(' ')[0],
          // affiliate_lname: this.props.affiliate_name.split(' ')[1],
          // affiliate_email: this.props.affiliate_email,
          // affiliate_phone: this.props.affiliate_mobile,//"+919821354464",
          affiliate_id: this.props.affiliate_id, //((this.props.affiliate_id===null)?1:this.props.affiliate_id),//,
          campaign_id: this.props.campaign_id, //((this.props.campaign_id===null)?1:this.props.campaign_id),//comment before comming
          referrals: [...postArray],
        },
      })
        .then((response) => {
          let res = response.data;
          let uniqueURL = res.unique_url;
          let message = res.message;
          postArray.map((person) => {
            person.mailStatus =
              res.details[person.email] === true ? true : null;
            return null;
          });
          this.setState({
            response: {
              userArray: postArray,
              url: uniqueURL,
              message: message,
            },
          });
          //console.log(this.state.response);
        })
        .catch((error) => {
          console.log(error);
        });
      //{console.log(response.data.unique_url + response.data.message+response.data.details)})
    }
  };
  render() {
    return (
      <Grid container item xs={12}>
        {this.state.response === "" && (
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="h3"
              style={{
                ...Styles.colorWhite,
                ...Styles.marginBottom,
                ...Styles.centerTxt,
              }}
            >
              Enjoy <span style={{ ...Styles.colorPrimary }}>Free gifts </span>
              and
              <span style={{ ...Styles.colorPrimary }}> Rewards points </span>
              by referring more people
            </Typography>

            <form
              onSubmit={(e) => this.handleSubmit(e)}
              style={Styles.verticalScroll}
            >
              {this.state.inputFeildRows.map((inputRow, row) => (
                <Grid
                  item
                  container
                  key={row}
                  spacing={2}
                  style={{
                    ...Styles.formFieldContainer,
                    marginBottom: Styles.spacing(6),
                  }}
                >
                  {inputRow.map((inputCol, col) => (
                    <Grid
                      item
                      key={col}
                      style={{ marginBottom: Styles.spacing(3) }}
                    >
                      <Typography>{inputCol.displayname}</Typography>
                      <TextField
                        color="secondary"
                        size="small"
                        name={inputCol.displayname}
                        value={inputCol.value}
                        // error={inputCol.error ? true : false}
                        id="filled"
                        variant="filled"
                        //label={inputCol.error ? inputCol.error : ""}
                        onChange={(e) => {
                          this.handleChangeInput(row, col, e);
                          this.setState({ btn: false });
                        }}
                        onBlur={(e) => this.validate(row, col, e)}
                        style={inputCol.style ? inputCol.style : null}
                      />
                      {inputCol.error && (
                        <div style={{ ...Styles.err }}>{inputCol.error}</div>
                      )}
                    </Grid>
                  ))}
                  <IconButton
                    aria-label="Add"
                    onClick={() => {
                      this.handleAddRow(row);
                      this.setState({ btn: false });
                    }}
                  >
                    <AddSharpIcon color="primary"></AddSharpIcon>
                  </IconButton>
                  {row > 0 && (
                    <IconButton
                      aria-label="Remove"
                      onClick={() => {
                        this.handleRemoveRow(row);
                        this.setState({ btn: false });
                      }}
                    >
                      <RemoveSharpIcon
                        style={{ color: "#ff1744" }}
                      ></RemoveSharpIcon>
                    </IconButton>
                  )}
                </Grid>
              ))}
              <Styles.ColorButton
                style={Styles.deafultButton}
                variant="contained"
                color="primary"
                disabled={this.state.btn}
                type="submit"
                // onClick={(e) => {
                //   this.handleSubmit(e);
                // }}
              >
                Submit
              </Styles.ColorButton>
            </form>
          </Grid>
        )}
        {this.state.response !== "" && (
          <Thanks
            url={this.state.response.url}
            message={this.state.response.message}
            referallist={this.state.response.userArray}
          />
        )}
      </Grid>
    );
  }
}
export default ReferralForm;
// {
// "details":{"vmakwana28@gmail.com":true,"shraddha@getsetgo.fitness":true,"melvin@getsetgo.fitness":true},
// "unique_url":"https:\/\/diwali.getsetgo.fitness\/1\/1",
// "message":"You have successfully referred 3 friend(s)."
// }
