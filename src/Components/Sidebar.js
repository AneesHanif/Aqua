import { Link } from "react-router-dom";

import "./Sidebar.css";
///////////////////////////////////////////////////////////////
// Material Ui desing for sidebar

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import People from "@mui/icons-material/People";
import Home from "@mui/icons-material/Home";
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';

export default function Sidebar() {
  return (
    <Box
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      className="sidebar"
    >
      <List>
        <Link to="/" className="Link">
          <ListItemButton>
            <ListItemIcon>
            <OpacityOutlinedIcon style={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Aqua Surveilance " />
          </ListItemButton>
        </Link>
      </List>
      <Divider />
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <Link to="/" className="Link">
              <ListItemButton>
                <ListItemIcon>
                  <Home style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/Users" className="Link">
              <ListItemButton>
                <ListItemIcon>
                  <People style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/Billing" className="Link">
              <ListItemButton>
                <ListItemIcon >
                  <ReceiptLongOutlinedIcon style={{ color: "white" }}/>
                </ListItemIcon>
                <ListItemText primary="Billing" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
