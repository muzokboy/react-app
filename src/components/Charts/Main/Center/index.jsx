// import React from "react";

// const index = () => {
//   return (
//     <div>
//     </div>
//   );
// };

// export default index;
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Main from "../index";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import Badge from "@mui/material/Badge";
import StorageIcon from "@mui/icons-material/Storage";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const drawerWidth = 240;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // eslint-disable-next-line no-unused-vars
  const drawer = (
    <div
      style={{ paddingTop: "15px", backgroundColor: "#EBEBEB", height: "100%" }}
    >
      <List>
        <ListItem>
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: "150px",
                border: "1px solid #ccc",
                fontSize: "15px",
                height: "34px",
                paddingLeft: "10px",
              }}
            />
            <button
              style={{
                border: "1px solid #ccc",
                backgroundColor: "white",
                marginLeft: "5px",
              }}
            >
              Go
            </button>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* {dashboard} */}
      <List className="SideBarItems">
        <ListItem>
          <HomeIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "12px", color: "black" }}>
            <Link
              to="dashboard"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              {" "}
              DashBoard{" "}
            </Link>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* Select  */}
      <List>
        <ListItem>
          {/* <HomeIcon sx={{ color: "black", fontSize: "18px"}} /> */}
          {/* <ListItemIcon sx={{ fontSize: "12px", color: "black" }}> */}
          <Accordion
            sx={{
              boxShadow: "none",
              background: "none",
              marginLeft: "-15px",
              width: "100%",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="SideBarItems"
            >
              <Typography sx={{ fontSize: "12px" }}>
                <SdStorageIcon sx={{ fontSize: "15px" }} /> Nested Menu
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {/* {["Aenean","Pellentesque","Congue","Intermadium","Facillisi"].map((val,id)=>{ */}
                <List
                  component="nav"
                  aria-label="secondary mailbox folder"
                  sx={{ width: "80%" }}
                >
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ fontSize: "12px", width: "130%" }}
                  >
                    Aenean
                    <ListItemText primary="" sx={{ fontSize: "12px" }} />
                  </ListItemButton>
                </List>
                <List
                  component="nav"
                  aria-label="secondary mailbox folder"
                  sx={{ width: "80%" }}
                >
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ fontSize: "12px", width: "130%" }}
                  >
                    Pellentesque
                    <ListItemText primary="" sx={{ fontSize: "12px" }} />
                  </ListItemButton>
                </List>
                <List
                  component="nav"
                  aria-label="secondary mailbox folder"
                  sx={{ width: "80%" }}
                >
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ fontSize: "12px", width: "130%" }}
                  >
                    Congue
                    <ListItemText primary="" sx={{ fontSize: "12px" }} />
                  </ListItemButton>
                </List>
                <List
                  component="nav"
                  aria-label="secondary mailbox folder"
                  sx={{ width: "80%" }}
                >
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ fontSize: "12px", width: "130%" }}
                  >
                    Intermadium
                    <ListItemText primary="" sx={{ fontSize: "12px" }} />
                  </ListItemButton>
                </List>
                <List
                  component="nav"
                  aria-label="secondary mailbox folder"
                  sx={{ width: "80%" }}
                >
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ fontSize: "12px", width: "130%" }}
                  >
                    Facillisi
                    <ListItemText primary="" sx={{ fontSize: "12px" }} />
                  </ListItemButton>
                </List>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
      {/* Data  */}
      <List className="SideBarItems">
        <ListItem>
          <StorageIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <Link
              to="/charts"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              {" "}
              Data Visualisation
            </Link>
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={9}
                sx={{ marginTop: "-25px", marginLeft: "50px" }}
                color="secondary"
              >
                {/* <ShoppingCartIcon /> */}
              </StyledBadge>
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* Maps */}
      <List className="SideBarItems">
        <ListItem>
          <LocationOnIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <Link
              to="/map"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              {" "}
              Maps
            </Link>
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={42}
                sx={{ marginTop: "-25px", marginLeft: "120px" }}
                color="secondary"
              ></StyledBadge>
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* Manager  */}
      <List className="SideBarItems">
        <ListItem>
          <GroupIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <Link
              to="/usersvhbnjkm"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              {" "}
              Manage Users
            </Link>
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={"New"}
                sx={{ marginTop: "-25px", marginLeft: "70px" }}
                color="secondary"
              ></StyledBadge>
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* Perfoments  */}
      <List className="SideBarItems">
        <ListItem>
          <SettingsIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <Link
              to="/inputs"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              Perfoments
            </Link>
            <IconButton aria-label="cart">
              {/* <StyledBadge badgeContent={"New"} sx={{marginTop:"-25px",marginLeft:"50px"}} color="secondary">
      </StyledBadge> */}
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* Sing Out */}
      <List className="SideBarItems">
        <ListItem>
          <LogoutIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <Link
              to=""
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              Sign Out
            </Link>
            <IconButton aria-label="cart">
              {/* <StyledBadge badgeContent={"New"} sx={{marginTop:"-25px",marginLeft:"50px"}} color="secondary">
      </StyledBadge> */}
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
  return (
    <Box sx={{ display: { md: "flex", sm: "flex", xs: "block" } }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ color: "gray", bgcolor: "white" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none", md: "none", xs: "inline" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "#428bca",
              fontSize: "16px",
              fontFamily: "monospace",
              ":hover": { textDecoration: "underline" },
            }}
          >
            <a
              style={{
                padding: "10px 15px 0px 15px",
                textDecoration: "none",
                color: "#428bca",
                fontSize: "16px",
                fontFamily: "sans-serif",
                ":hover": { textDecoration: "underline" },
              }}
              href="#"
            >
              Admin Panel
            </a>
          </Typography>
          /
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "red",
              fontSize: "16px",
              fontFamily: "sans-serif",
              ":hover": { textDecoration: "underline" },
            }}
          >
            <a
              style={{
                padding: "10px 15px 0px 15px",
                textDecoration: "none",
                color: "#428bca",
                fontSize: "16px",
                fontFamily: "sans-serif",
                ":hover": { textDecoration: "underline" },
              }}
              href="#"
            >
              Manage Users
            </a>
          </Typography>
          /
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "gray", fontSize: "16px", fontFamily: "monospace" }}
          >
            <a
              style={{
                padding: "10px 15px 0px 15px",
                textDecoration: "none",
                color: "gray",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
              href="#"
            >
              Tables
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Main />
          </Grid>
        </Box>
        <div></div>
      </Box>
    </Box>
  );
};
