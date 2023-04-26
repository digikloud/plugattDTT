import { Grid } from "@mui/material";
import React from "react";
import CustomizedTreeView from "../analytics/treeView";
import DdtDetails, { Chartdata } from "./ddtdetails";
import LoadingSwitch from "../../components/LoadingSwitch";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "city",
    headerName: "City",
    flex: 1,
    sortable: false,
  },
  {
    field: "zone",
    headerName: "Zone",
    width: 150,
    flex: 1,
    sortable: false,
  },
  {
    field: "totalpower",
    headerName: "Total Power",
    flex: 1,
    sortable: false,
  },
  {
    field: "totalUsers",
    headerName: "Total Users",
    flex: 1,
    sortable: false,
  },
  {
    field: "OnOff",
    headerName: "On / Off",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    renderCell: (params) => <LoadingSwitch />,
  },
];
const datagriddetails = [
  {
    id : 1,
    city : "Bogotá" ,
    zone  : "Chapinero",
    totalpower : 270 ,
    totalUsers : 100,
  },
  {
    id : 2,
    city : "Bogotá" ,
    zone : "Usaquen" ,
    totalpower : 670 ,
    totalUsers : 100,
  },
  {
    id : 3,
    city : "Cali" ,
    zone  : "Aguacatal",
    totalpower : 90,
    totalUsers : 100,
  },

  {
    id : 4,
    city : "Cali" ,
    zone  : "Rural",
    totalpower : 654 ,
    totalUsers : 100,
  },
]
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

      <div style={{ height: "350px" }} className="container_with_shadow datagrid">
        <DataGrid rows={datagriddetails} columns={columns} disableColumnMenu hideFooterSelectedRowCount
                hideFooter
              />
      </div>
    </div>
  );
}

export default DdtIndex;
