import { Grid } from "@mui/material";
import React from "react";
import CustomizedTreeView from "./treeView";
import AnalyticsDetails, { Chartdata } from "./AnalyticsDetails";
import { Map } from "./map";
function AnalyticsIndex() {
  return (
    <div>
      <Grid container>
        <Grid item md={3} sm={3} lg={3} xs={12}>
          <CustomizedTreeView />
        </Grid>
        <Grid item md={9} sm={9} lg={9} xs={12}>
          <AnalyticsDetails />
        </Grid>
      </Grid>

      <Grid container spacing={1} marginTop={0}>
        <Grid item md={5} xs={12}>
          <Map />
        </Grid>
        <br />
        <Grid item md={7} xs={12}>
          <Chartdata />
        </Grid>
      </Grid>
    </div>
  );
}

export default AnalyticsIndex;
