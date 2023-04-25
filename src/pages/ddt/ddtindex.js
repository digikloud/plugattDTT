import { Grid, Paper } from "@mui/material";
import React from "react";
// import CustomizedTreeView from "./treeView";
// import AnalyticsDetails, { Chartdata } from "./AnalyticsDetails";
import CustomizedTreeView, { details } from "../analytics/treeView";
// import AnalyticsDetails, { Chartdata} from "../analytics/AnalyticsDetails";
import DdtDetails, { Chartdata } from "./ddtdetails";
import LoadingSwitch from "../../components/LoadingSwitch";
import { DataGrid } from "@mui/x-data-grid";
// import { Map } from "./map";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "totalCities",
    headerName: "City",
    flex: 1,
  },
  {
    field: "totalZones",
    headerName: "Zone",
    width: 150,
    flex: 1,
  },
  {
    field: "totalVoltage",
    headerName: "Total Power",
    flex: 1,
  },
  {
    field: "totalUsers",
    headerName: "Total Users",
    flex: 1,
  },
  {
    field: "OnOff",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    renderCell: (params) => <LoadingSwitch />,
  },
];

function DdtIndex() {
  return (
    <div>
      <Grid container>
        <Grid item md={3} sm={3} lg={3}>
          <CustomizedTreeView />
        </Grid>
        <Grid item md={9} sm={9} lg={9}>
          <DdtDetails />
        </Grid>
      </Grid>
      <Grid container sx={{ pt: "10px" }}>
        <Grid item md={12} xs={12}>
          <Chartdata />
        </Grid>
      </Grid>

      <div style={{ height: "400px" }} className="container_with_shadow">
        <DataGrid rows={details} columns={columns} />
      </div>
    </div>
  );
}

export default DdtIndex;
