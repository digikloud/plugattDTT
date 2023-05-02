import { Grid, Paper, Typography, Link } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const paperstyle = {
  padding: 20,
  height: "auto",
  textAlign: "center",
  borderRadius: "15px",
  width: "80%",
  maxWidth: "400px",
  background: "#191c24",
};
function Menu() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
            <Accordion
              expanded={expanded === "login"}
              onChange={handleChange("login")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="login-content"
                id="login-header"
              >
                <Typography sx={{ color: "#36c1bd", fontSize: "20px" }}>
                  Login
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menuStyle">
                  <Link
                    href="https://www.plugatt.com/login"
                    underline="none"
                    sx={{ fontSize: "18px" }}
                  >
                    Plugatt
                  </Link>
                  <Link
                    href="https://main.djtbyx61dp1za.amplifyapp.com/login"
                    underline="none"
                    sx={{ mt:'10px',fontSize: "18px" }}
                  >
                    PlugattDDT
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "registration"}
              onChange={handleChange("registration")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="registration-content"
                id="registration-header"
              >
                <Typography sx={{ color: "#36c1bd", fontSize: "20px" }}>
                  Registration
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menuStyle">
                  <Link
                    href="https://www.plugatt.com/registration"
                    underline="none"
                    sx={{ fontSize: "18px" }}
                  >
                    Plugatt
                  </Link>
                  <Link
                    href="https://main.djtbyx61dp1za.amplifyapp.com/registration"
                    underline="none"
                    sx={{mt:'10px', fontSize: "18px" }}
                  >
                    PlugattDDT
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
export default Menu;
