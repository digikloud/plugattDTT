import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chart from "react-apexcharts";
import { options2 } from "./utilities";
import { optionbarchart } from "./utilities";
import EChartsReact from "echarts-for-react";
import "./analytics.css";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#191c24",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function AnalyticsDetails({ details }) {
  const { selectedItem } = useSelector(
    (state) => state.dashboardreducer.analytics
  );
  // const mockdata1 = {
  //   timestamp: [12, 22, 21, 21, 22],
  //   value: [18, 36, 20, 32, 11],
  // };

  return (
    <Grid container spacing={2} rowGap={2}>
      <Grid
        container
        // maxWidth="calc(100% - 20px)"
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

      {/* <Grid item md={12} className="analyticsBottom container_with_shadow">
        <EChartsReact
          style={{ height: "200px" }}
          option={optionbarchart(selectedItem.mockdata1.timestamp ,selectedItem.mockdata1.value , [
            "#bdcf32",
            "#87bc45",
            "#27aeef",
            "#b33dc6",
          ])}
        />
      </Grid> */}
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
              [
                "12AM-4AM",
                "4AM-8AM",
                "8AM-12PM",
                "12PM-4PM",
                "4PM-8PM",
                "8PM-12AM",
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
