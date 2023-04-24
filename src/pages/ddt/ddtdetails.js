import * as React from "react";
import Grid from "@mui/material/Grid";
import Chart from "react-apexcharts";
import { options2 } from "../analytics/utilities";
import { optionbarchart } from "../analytics/utilities";
import EChartsReact from "echarts-for-react";
import "../analytics/analytics.css";
import { useSelector } from "react-redux";
import { Typography ,Stack} from "@mui/material";
import { color } from "@mui/system";


function DdtDetails({ details }) {
  const { selectedItem } = useSelector(
    (state) => state.dashboardreducer.analytics
  );

  return (
    <Grid container spacing={2} rowGap={2}>
      <Grid
        container
        // maxWidth="calc(100% - 20px)"
        className="container_with_shadow container_with_shadow_top"
        justifyContent="center"
      >
        <Grid item md={3} lg={3} sm={3}>
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
            5 - 8
          </Typography>
        </Grid>
        <Grid item md={3} lg={3} sm={3}>
          <Chart
            key={selectedItem.totalZones}
            options={options2.options(
              "Total Demand",
              selectedItem.totalZones,
              "#f46a9b"
            )}
            series={options2.series(75)}
            type="radialBar"
            height="220"
          />
          <Typography className="consumptionunit" variant="subtitle2">
            12 - 14
          </Typography>
        </Grid>
        <Grid item md={3} lg={3} sm={3}>
          <Chart
            key={selectedItem.totalNodes}
            options={options2.options(
              "Total Demand",
              selectedItem.totalNodes,
              "#ef9b20"
            )}
            series={options2.series(75)}
            type="radialBar"
            height="220"
          />
        <Typography className="consumptionunit" variant="subtitle2">
          18 - 21
        </Typography>
        </Grid>

        <Grid item md={3} lg={3} sm={3}>
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
          {/* <Typography className="consumptionunit" variant="subtitle2">
            Real Time
          </Typography> */}
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
export default DdtDetails;

export function Chartdata({ details }){
  const { selectedItem } = useSelector(
    (state) => state.dashboardreducer.analytics
  );
  return (
    <>
      <div className="ddt_chartdata" >
      <div className="ddt_bottom container_with_shadow">
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
      <div className="ddt_bottom container_with_shadow">
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
      </div>
      </div>
    </>
  )
}