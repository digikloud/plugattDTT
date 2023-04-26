import * as React from "react";
import Grid from "@mui/material/Grid";
import Chart from "react-apexcharts";
import { options2 } from "./utilities";
import { optionbarchart } from "./utilities";
import EChartsReact from "echarts-for-react";
import "./analytics.css";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";


function AnalyticsDetails({ details }) {
  const { selectedItem } = useSelector(
    (state) => state.dashboardreducer.analytics
  );


  return (
    <Grid container spacing={2} rowGap={2}>
      <Grid
        container
        className="container_with_shadow container_with_shadow_top "
        justifyContent="center"
      >
        <Grid item md={3} lg={3} sm={3} xs={12}>
          <Chart
            key={selectedItem.totalVoltage}
            options={options2.options(
              "Total Demand",
              selectedItem.totalVoltage,
              "#ea5545"
            )}
            series={options2.series(75)}
            type="radialBar"
            height="220"
          />
          <Typography className="consumptionunit" variant="subtitle2">
            {/* Cities */}
          </Typography>
        </Grid>
        <Grid item md={3} lg={3} sm={3} xs={12}>
          <Chart
            key={selectedItem.totalZones}
            options={options2.options(
              "Zones",
              selectedItem.totalZones,
              "#f46a9b"
            )}
            series={options2.series(75)}
            type="radialBar"
            height="220"
          />
          {/* <Typography className="consumptionunit" variant="subtitle2">
            Zones
          </Typography> */}
        </Grid>
        <Grid item md={3} lg={3} sm={3} xs={12}>
          <Chart
            key={selectedItem.totalNodes}
            options={options2.options(
              "Nodes",
              selectedItem.totalNodes,
              "#ef9b20"
            )}
            series={options2.series(75)}
            type="radialBar"
            height="220"
          />
          {/* <Typography className="consumptionunit" variant="subtitle2">
            Nodes
          </Typography> */}
        </Grid>

        <Grid item md={3} lg={3} sm={12} xs={12}>
          <Chart
            key={selectedItem.totalUsers}
            options={options2.options(
              "Total Users",
              selectedItem.totalUsers,
              "#edbf33"
            )}
            series={options2.series(75)}
            type="radialBar"
            height="220"
          />
          <Typography className="consumptionunit" variant="subtitle2">
            {/* Real Time */}
          </Typography>
        </Grid>
      </Grid>

    </Grid>
  );
}
export default AnalyticsDetails;

export function Chartdata({ details }) {
  const { selectedItem } = useSelector(
    (state) => state.dashboardreducer.analytics
  );
  return (
    <Stack spacing={0.5}>
      <div md={12} className="analyticsBottom container_with_shadow">
        <div>
          <Typography>
            <b>Daily</b>
          </Typography>
          <EChartsReact
            style={{ height: "200px" }}
            option={optionbarchart(
              selectedItem.mockdata1.timestamp,
              selectedItem.mockdata1.value,
              // [
              //   "12AM-4AM",
              //   "4AM-8AM",
              //   "8AM-12PM",
              //   "12PM-4PM",
              //   "4PM-8PM",
              //   "8PM-12AM",
              // ],
              [
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
              ],
              ["#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
              "line"
            )}
          />
        </div>
      </div>
      <div className="analyticsBottom container_with_shadow">
        <Grid xs={12}>
          <Typography>
            <b>Weekly</b>
          </Typography>
          <EChartsReact
            style={{ height: "200px" }}
            option={optionbarchart(
              selectedItem.mockdata1.timestamp,
              selectedItem.mockdata1.value,
              ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              ["#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
              "bar"
            )}
          />
        </Grid>
      </div>
    </Stack>
  );
}
// export default Chartdata;
