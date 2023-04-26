import { Grid, Paper, Typography,Link } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const paperstyle = {
  padding: 20,
  height: 'auto',
  textAlign: "center",
  borderRadius: "15px",
  width: "80%",
  maxWidth: "400px",
  background: "#191c24",
};
function Menu() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "90vh", background: "black" }}
      >
        <Paper elevation={10} style={paperstyle} className="paperstyle">
          <Grid align="center" justifyContent="center" direction="column">
            <img
              src={logo}
              height="25px"
              alt="logo"
              width="100px"
              sx={{ objectFit: "contain" }}

            />
            <div className="menuStyle" >
            <Link
            href="https://www.plugatt.com/login"
            underline="none"
            target="_blank"
            sx={{mt:'10px'}}
            >
                Plugatt
            </Link>
            <Link
            href="https://main.djtbyx61dp1za.amplifyapp.com/login"
            underline="none"
            target="_blank"
            sx={{mt:'10px'}}
            >
                Plugatt DDT
            </Link>
            <Link
            href="https://www.plugatt.com/registration"
            underline="none"
            target="_blank"
            sx={{mt:'10px'}}
            >
                Plugatt Registration
            </Link>
            <Link
            href="https://main.djtbyx61dp1za.amplifyapp.com/registration"
            underline="none"
            target="_blank"
            sx={{mt:'10px'}}
            >
                Plugatt DDT Registration
            </Link>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
export default Menu;
