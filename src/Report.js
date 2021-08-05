import React, { useState, useEffect } from "react";
import { callAPI, getURL } from "./services";
import { Typography, Grid, Paper, Divider } from "@material-ui/core";
import LogoEl from "./logoElement.png";

import CoachDetails from "./reports/CoachDetails";
import Lifestyle01 from "./reports/Lifestyle01";
import Lifestyle02 from "./reports/Lifestyle02";
import HealthCondition from "./reports/HealthCondition";
import WorkoutGuidelines from "./reports/WorkoutGuidelines";
import Verdict from "./reports/Verdict";

function Report(props) {
  let [reportData, setReportData] = useState();
  const fetchedReport = data => {
    setReportData(data.data.report);
  };
  const reportFetchError = err => {
    console.log("Error", err);
  };
  useEffect(() => {
    callAPI(getURL("get_leads"), "post", fetchedReport, reportFetchError, {
      id: props.match.params.id,
      collection_name: "free_consultation_report"
    });
  }, []);
  return (
    <Grid
      container
      direction='column'
      spacing={2}
      alignItems='center'
      className='reportContainer'
    >
      {reportData && (
        <>
          {/* <CoachDetails reportData={reportData} /> */}
          <Lifestyle01 reportData={reportData} />
          {/* <Lifestyle02 reportData={reportData} /> */}
          <HealthCondition reportData={reportData} />
          <Verdict reportData={reportData} />
          <WorkoutGuidelines reportData={reportData} />
        </>
      )}
    </Grid>
  );
}
export default Report;
