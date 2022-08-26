import { React, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//components
import UserDashboard from "../../Components/UserDashboard";
import BarChart from "../../Components/BarChart.js";
import LineChart from "../../Components/LineChart.js";
//Styles
import "./Home.css";

// Material UI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function Home() {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="Home">
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>{<LineChart />}</Item>
          </Grid>
          <Grid item xs={5} md={6}>
            <Item>{<UserDashboard title={"Users"} />}</Item>
          </Grid>
          <Grid item xs={6} >
            <Item>{<BarChart />}</Item>
          </Grid>
          
        </Grid>
      </Box>
    </div>
  );
}
