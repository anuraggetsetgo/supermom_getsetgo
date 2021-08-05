import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
function ReportCreated(props) {
  console.log("Report created props", props.match.params.id);
  return (
    <Grid
      container
      spacing={4}
      style={{ height: "100vh" }}
      direction='column'
      alignItems='center'
      justify='center'
    >
      <Grid item>Report created successfully. View the report here:</Grid>
      <Grid item container justify='center'>
        <Typography variant='subtitle1'>
          <Link to={`/report/${props.match.params.id}`}>
            Click here to access the report
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <Link to='/createreport'>Start again!</Link>
      </Grid>
    </Grid>
  );
}
export default ReportCreated;
