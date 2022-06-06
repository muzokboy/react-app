import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./Data/Data";

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
const Item1 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "Left",
  color: theme.palette.text.secondary,
  background: "none",
  boxShadow: "none",
  color: "black",
}));

const center = [38.894739269323246, 69.7789894375783];
const center2 = [39.3626348249154, -101.50383673073797];
const center3 = [38.894739269323246, 69.7789894375783];
const center4 = [53.52286119912086, 13.283871526451815];
const center5 = [-25.45835613509192, 134.77415503601623];
const center6 = [7.318729355288265, 24.026687113688762];
const center7 = [52.62904336390109, -106.28784263506329];
const center8 = [-11.394029651127715, -57.53581110637384];

// export default () => {
//   return (
//     <Box sx={{ width: "90%", marginLeft: "5%", marginTop: "3%" }}>
//       <Item2 sx={{ color: "black", fontSize: "140%" }}>Maps</Item2>
//       <Item2 sx={{ margin: "0px", paddingTop: "0px" }}>
//         Credit goes to JQVMap
//       </Item2>
//       <Grid
//         container
//         rowSpacing={1}
//         columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//         sx={{ marginTop: "1%" }}
//       >
//         <Grid item xs={12} sm={6}>
//           <Item1
//             sx={{
//               border: "1px solid #ddd",
//               padding: "0px",
//               borderRadius: "0px",
//             }}
//           >
//             <Item2
//               sx={{
//                 fontSize: "140%",
//                 borderBottom: "1px solid #ddd",
//                 margin: "0px",
//                 borderRadius: "0px",
//                 backgroundColor: "#f5f5f5",
//               }}
//             >
//               World
//             </Item2>
//             <Item2>
//               <MapContainer
//                 center={center}
//                 zoom={1.2}
//                 minZoom={1.2}
//                 maxZoom={5}
//                 style={{ height: "70vh" }}
//               >
//                 <TileLayer
//                   url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
//                   attribution=""
//                 />
//                 {statesData.features.map((state) => {
//                   const coordinates = state.geometry.coordinates[0].map(
//                     (item) => [item[1], item[0]]
//                   );

//                   return (
//                     <Polygon
//                       pathOptions={{
//                         strokeWidth: "1px",
//                         fillColor: "#006491",
//                         fillOpacity: 0.7,
//                         weight: 2,
//                         opacity: 1,
//                         dashArray: 3,
//                         color: "white",
//                       }}
//                       positions={coordinates}
//                       eventHandlers={{
//                         mouseover: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 5,
//                             dashArray: "",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                         mouseout: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 2,
//                             dashArray: "3",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                       }}
//                     />
//                   );
//                 })}
//               </MapContainer>
//             </Item2>
//           </Item1>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Item1
//             sx={{
//               border: "1px solid #ddd",
//               padding: "0px",
//               borderRadius: "0px",
//             }}
//           >
//             <Item2
//               sx={{
//                 fontSize: "140%",
//                 borderBottom: "1px solid #ddd",
//                 margin: "0px",
//                 borderRadius: "0px",
//                 backgroundColor: "#f5f5f5",
//               }}
//             >
//               United States of America
//             </Item2>
//             <Item2>
//               <MapContainer
//                 center={center2}
//                 zoom={4}
//                 minZoom={4}
//                 maxZoom={5}
//                 style={{ width: "100%", height: "70vh" }}
//               >
//                 <TileLayer
//                   url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
//                   attribution=""
//                 />
//                 {statesData.features.map((state) => {
//                   const coordinates = state.geometry.coordinates[0].map(
//                     (item) => [item[1], item[0]]
//                   );

//                   return (
//                     <Polygon
//                       pathOptions={{
//                         strokeWidth: "1px",
//                         fillColor: "#006491",
//                         fillOpacity: 0.7,
//                         weight: 2,
//                         opacity: 1,
//                         dashArray: 3,
//                         color: "white",
//                       }}
//                       positions={coordinates}
//                       eventHandlers={{
//                         mouseover: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 5,
//                             dashArray: "",
//                             color: "#006499",
//                             fillColor: "#509BBD",
//                           });
//                         },
//                         mouseout: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 2,
//                             dashArray: "3",
//                             color: "white",
//                             fillColor: "#006491",
//                           });
//                         },
//                       }}
//                     />
//                   );
//                 })}
//               </MapContainer>
//             </Item2>
//           </Item1>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Item1
//             sx={{
//               border: "1px solid #ddd",
//               padding: "0px",
//               borderRadius: "0px",
//             }}
//           >
//             <Item2
//               sx={{
//                 fontSize: "140%",
//                 borderBottom: "1px solid #ddd",
//                 margin: "0px",
//                 borderRadius: "0px",
//                 backgroundColor: "#f5f5f5",
//               }}
//             >
//               Asia
//             </Item2>
//             <Item2>
//               <MapContainer
//                 center={center3}
//                 zoom={2}
//                 minZoom={3}
//                 maxZoom={5}
//                 style={{ width: "100%", height: "70vh" }}
//               >
//                 <TileLayer
//                   url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
//                   attribution=""
//                 />
//                 {statesData.features.map((state) => {
//                   const coordinates = state.geometry.coordinates[0].map(
//                     (item) => [item[1], item[0]]
//                   );

//                   return (
//                     <Polygon
//                       pathOptions={{
//                         strokeWidth: "1px",
//                         fillColor: "none",
//                         fillOpacity: 0.7,
//                         weight: 2,
//                         opacity: 1,
//                         dashArray: 3,
//                         color: "none",
//                       }}
//                       positions={coordinates}
//                       eventHandlers={{
//                         mouseover: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 5,
//                             dashArray: "",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                         mouseout: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 2,
//                             dashArray: "3",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                       }}
//                     />
//                   );
//                 })}
//               </MapContainer>
//             </Item2>
//           </Item1>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Item1
//             sx={{
//               border: "1px solid #ddd",
//               padding: "0px",
//               borderRadius: "0px",
//             }}
//           >
//             <Item2
//               sx={{
//                 fontSize: "140%",
//                 borderBottom: "1px solid #ddd",
//                 margin: "0px",
//                 borderRadius: "0px",
//                 backgroundColor: "#f5f5f5",
//               }}
//             >
//               Europe
//             </Item2>
//             <Item2>
//               <MapContainer
//                 center={center4}
//                 zoom={4}
//                 minZoom={4}
//                 maxZoom={5}
//                 style={{ height: "70vh" }}
//               >
//                 <TileLayer
//                   url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
//                   attribution=""
//                 />
//                 {statesData.features.map((state) => {
//                   const coordinates = state.geometry.coordinates[0].map(
//                     (item) => [item[1], item[0]]
//                   );

//                   return (
//                     <Polygon
//                       pathOptions={{
//                         strokeWidth: "1px",
//                         fillColor: "none",
//                         fillOpacity: 0.7,
//                         weight: 2,
//                         opacity: 1,
//                         dashArray: 3,
//                         color: "none",
//                       }}
//                       positions={coordinates}
//                       eventHandlers={{
//                         mouseover: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 5,
//                             dashArray: "",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                         mouseout: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 2,
//                             dashArray: "3",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                       }}
//                     />
//                   );
//                 })}
//               </MapContainer>
//             </Item2>
//           </Item1>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Item1
//             sx={{
//               border: "1px solid #ddd",
//               padding: "0px",
//               borderRadius: "0px",
//             }}
//           >
//             <Item2
//               sx={{
//                 fontSize: "140%",
//                 borderBottom: "1px solid #ddd",
//                 margin: "0px",
//                 borderRadius: "0px",
//                 backgroundColor: "#f5f5f5",
//               }}
//             >
//               Australia
//             </Item2>
//             <Item2>
//               <MapContainer
//                 center={center5}
//                 zoom={4}
//                 minZoom={4}
//                 maxZoom={5}
//                 style={{ height: "70vh" }}
//               >
//                 <TileLayer
//                   url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
//                   attribution=""
//                 />
//                 {statesData.features.map((state) => {
//                   const coordinates = state.geometry.coordinates[0].map(
//                     (item) => [item[1], item[0]]
//                   );

//                   return (
//                     <Polygon
//                       pathOptions={{
//                         strokeWidth: "1px",
//                         fillColor: "none",
//                         fillOpacity: 0.7,
//                         weight: 2,
//                         opacity: 1,
//                         dashArray: 3,
//                         color: "none",
//                       }}
//                       positions={coordinates}
//                       eventHandlers={{
//                         mouseover: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 5,
//                             dashArray: "",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                         mouseout: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 2,
//                             dashArray: "3",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                       }}
//                     />
//                   );
//                 })}
//               </MapContainer>
//             </Item2>
//           </Item1>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Item1
//             sx={{
//               border: "1px solid #ddd",
//               padding: "0px",
//               borderRadius: "0px",
//             }}
//           >
//             <Item2
//               sx={{
//                 fontSize: "140%",
//                 borderBottom: "1px solid #ddd",
//                 margin: "0px",
//                 borderRadius: "0px",
//                 backgroundColor: "#f5f5f5",
//               }}
//             >
//               Africa
//             </Item2>
//             <Item2>
//               <MapContainer
//                 center={center6}
//                 zoom={3}
//                 minZoom={3}
//                 maxZoom={5}
//                 style={{ height: "70vh" }}
//               >
//                 <TileLayer
//                   url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
//                   attribution=""
//                 />
//                 {statesData.features.map((state) => {
//                   const coordinates = state.geometry.coordinates[0].map(
//                     (item) => [item[1], item[0]]
//                   );

//                   return (
//                     <Polygon
//                       pathOptions={{
//                         strokeWidth: "1px",
//                         fillColor: "none",
//                         fillOpacity: 0.7,
//                         weight: 2,
//                         opacity: 1,
//                         dashArray: 3,
//                         color: "none",
//                       }}
//                       positions={coordinates}
//                       eventHandlers={{
//                         mouseover: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 5,
//                             dashArray: "",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                         mouseout: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 2,
//                             dashArray: "3",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                       }}
//                     />
//                   );
//                 })}
//               </MapContainer>
//             </Item2>
//           </Item1>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Item1
//             sx={{
//               border: "1px solid #ddd",
//               padding: "0px",
//               borderRadius: "0px",
//             }}
//           >
//             <Item2
//               sx={{
//                 fontSize: "140%",
//                 borderBottom: "1px solid #ddd",
//                 margin: "0px",
//                 borderRadius: "0px",
//                 backgroundColor: "#f5f5f5",
//               }}
//             >
//               North America
//             </Item2>
//             <Item2>
//               <MapContainer
//                 center={center7}
//                 zoom={2}
//                 minZoom={2}
//                 maxZoom={5}
//                 style={{ height: "70vh" }}
//               >
//                 <TileLayer
//                   url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
//                   attribution=""
//                 />
//                 {statesData.features.map((state) => {
//                   const coordinates = state.geometry.coordinates[0].map(
//                     (item) => [item[1], item[0]]
//                   );

//                   return (
//                     <Polygon
//                       pathOptions={{
//                         strokeWidth: "1px",
//                         fillColor: "none",
//                         fillOpacity: 0.7,
//                         weight: 2,
//                         opacity: 1,
//                         dashArray: 3,
//                         color: "none",
//                       }}
//                       positions={coordinates}
//                       eventHandlers={{
//                         mouseover: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 5,
//                             dashArray: "",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                         mouseout: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 2,
//                             dashArray: "3",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                       }}
//                     />
//                   );
//                 })}
//               </MapContainer>
//             </Item2>
//           </Item1>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Item1
//             sx={{
//               border: "1px solid #ddd",
//               padding: "0px",
//               borderRadius: "0px",
//             }}
//           >
//             <Item2
//               sx={{
//                 fontSize: "140%",
//                 borderBottom: "1px solid #ddd",
//                 margin: "0px",
//                 borderRadius: "0px",
//                 backgroundColor: "#f5f5f5",
//               }}
//             >
//               South America
//             </Item2>
//             <Item2>
//               <MapContainer
//                 center={center8}
//                 zoom={2}
//                 minZoom={2}
//                 maxZoom={5}
//                 style={{ height: "70vh" }}
//               >
//                 <TileLayer
//                   url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
//                   attribution=""
//                 />
//                 {statesData.features.map((state) => {
//                   const coordinates = state.geometry.coordinates[0].map(
//                     (item) => [item[1], item[0]]
//                   );

//                   return (
//                     <Polygon
//                       pathOptions={{
//                         strokeWidth: "1px",
//                         fillColor: "none",
//                         fillOpacity: 0.7,
//                         weight: 2,
//                         opacity: 1,
//                         dashArray: 3,
//                         color: "none",
//                       }}
//                       positions={coordinates}
//                       eventHandlers={{
//                         mouseover: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 5,
//                             dashArray: "",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                         mouseout: (e) => {
//                           const layer = e.target;
//                           layer.setStyle({
//                             fillOpacity: 0.7,
//                             weight: 2,
//                             dashArray: "3",
//                             color: "none",
//                             fillColor: "none",
//                           });
//                         },
//                       }}
//                     />
//                   );
//                 })}
//               </MapContainer>
//             </Item2>
//           </Item1>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
// import First from "./first_table/index";
// import Second from "./second_table/index";
// import Top from "./Top_section/index";
// import Bottom from "./bottom_section/index";

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
              to="/users"
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
              to="signout"
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
        <div>
          {/* <Top />
          <First />
          <Second />
          <Bottom /> */}

          <Box sx={{ width: "90%", marginLeft: "5%", marginTop: "3%" }}>
            <Item2 sx={{ color: "black", fontSize: "140%" }}>Maps</Item2>
            <Item2 sx={{ margin: "0px", paddingTop: "0px" }}>
              Credit goes to JQVMap
            </Item2>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ marginTop: "1%" }}
            >
              <Grid item xs={12} sm={12} md={6}>
                <Item1
                  sx={{
                    border: "1px solid #ddd",
                    padding: "0px",
                    borderRadius: "0px",
                  }}
                >
                  <Item2
                    sx={{
                      fontSize: "140%",
                      borderBottom: "1px solid #ddd",
                      margin: "0px",
                      borderRadius: "0px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    World
                  </Item2>
                  <Item2>
                    <MapContainer
                      center={center}
                      zoom={1.2}
                      minZoom={1.2}
                      maxZoom={5}
                      style={{ height: "70vh" }}
                    >
                      <TileLayer
                        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                        attribution=""
                      />
                      {statesData.features.map((state) => {
                        const coordinates = state.geometry.coordinates[0].map(
                          (item) => [item[1], item[0]]
                        );

                        return (
                          <Polygon
                            pathOptions={{
                              strokeWidth: "1px",
                              fillColor: "#006491",
                              fillOpacity: 0.7,
                              weight: 2,
                              opacity: 1,
                              dashArray: 3,
                              color: "white",
                            }}
                            positions={coordinates}
                            eventHandlers={{
                              mouseover: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 5,
                                  dashArray: "",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                              mouseout: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 2,
                                  dashArray: "3",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                            }}
                          />
                        );
                      })}
                    </MapContainer>
                  </Item2>
                </Item1>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Item1
                  sx={{
                    border: "1px solid #ddd",
                    padding: "0px",
                    borderRadius: "0px",
                  }}
                >
                  <Item2
                    sx={{
                      fontSize: "140%",
                      borderBottom: "1px solid #ddd",
                      margin: "0px",
                      borderRadius: "0px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    United States of America
                  </Item2>
                  <Item2>
                    <MapContainer
                      center={center2}
                      zoom={4}
                      minZoom={4}
                      maxZoom={5}
                      style={{ width: "100%", height: "70vh" }}
                    >
                      <TileLayer
                        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                        attribution=""
                      />
                      {statesData.features.map((state) => {
                        const coordinates = state.geometry.coordinates[0].map(
                          (item) => [item[1], item[0]]
                        );

                        return (
                          <Polygon
                            pathOptions={{
                              strokeWidth: "1px",
                              fillColor: "#006491",
                              fillOpacity: 0.7,
                              weight: 2,
                              opacity: 1,
                              dashArray: 3,
                              color: "white",
                            }}
                            positions={coordinates}
                            eventHandlers={{
                              mouseover: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 5,
                                  dashArray: "",
                                  color: "#006499",
                                  fillColor: "#509BBD",
                                });
                              },
                              mouseout: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 2,
                                  dashArray: "3",
                                  color: "white",
                                  fillColor: "#006491",
                                });
                              },
                            }}
                          />
                        );
                      })}
                    </MapContainer>
                  </Item2>
                </Item1>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Item1
                  sx={{
                    border: "1px solid #ddd",
                    padding: "0px",
                    borderRadius: "0px",
                  }}
                >
                  <Item2
                    sx={{
                      fontSize: "140%",
                      borderBottom: "1px solid #ddd",
                      margin: "0px",
                      borderRadius: "0px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    Asia
                  </Item2>
                  <Item2>
                    <MapContainer
                      center={center3}
                      zoom={2}
                      minZoom={3}
                      maxZoom={5}
                      style={{ width: "100%", height: "70vh" }}
                    >
                      <TileLayer
                        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                        attribution=""
                      />
                      {statesData.features.map((state) => {
                        const coordinates = state.geometry.coordinates[0].map(
                          (item) => [item[1], item[0]]
                        );

                        return (
                          <Polygon
                            pathOptions={{
                              strokeWidth: "1px",
                              fillColor: "none",
                              fillOpacity: 0.7,
                              weight: 2,
                              opacity: 1,
                              dashArray: 3,
                              color: "none",
                            }}
                            positions={coordinates}
                            eventHandlers={{
                              mouseover: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 5,
                                  dashArray: "",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                              mouseout: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 2,
                                  dashArray: "3",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                            }}
                          />
                        );
                      })}
                    </MapContainer>
                  </Item2>
                </Item1>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Item1
                  sx={{
                    border: "1px solid #ddd",
                    padding: "0px",
                    borderRadius: "0px",
                  }}
                >
                  <Item2
                    sx={{
                      fontSize: "140%",
                      borderBottom: "1px solid #ddd",
                      margin: "0px",
                      borderRadius: "0px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    Europe
                  </Item2>
                  <Item2>
                    <MapContainer
                      center={center4}
                      zoom={4}
                      minZoom={4}
                      maxZoom={5}
                      style={{ height: "70vh" }}
                    >
                      <TileLayer
                        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                        attribution=""
                      />
                      {statesData.features.map((state) => {
                        const coordinates = state.geometry.coordinates[0].map(
                          (item) => [item[1], item[0]]
                        );

                        return (
                          <Polygon
                            pathOptions={{
                              strokeWidth: "1px",
                              fillColor: "none",
                              fillOpacity: 0.7,
                              weight: 2,
                              opacity: 1,
                              dashArray: 3,
                              color: "none",
                            }}
                            positions={coordinates}
                            eventHandlers={{
                              mouseover: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 5,
                                  dashArray: "",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                              mouseout: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 2,
                                  dashArray: "3",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                            }}
                          />
                        );
                      })}
                    </MapContainer>
                  </Item2>
                </Item1>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Item1
                  sx={{
                    border: "1px solid #ddd",
                    padding: "0px",
                    borderRadius: "0px",
                  }}
                >
                  <Item2
                    sx={{
                      fontSize: "140%",
                      borderBottom: "1px solid #ddd",
                      margin: "0px",
                      borderRadius: "0px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    Australia
                  </Item2>
                  <Item2>
                    <MapContainer
                      center={center5}
                      zoom={4}
                      minZoom={4}
                      maxZoom={5}
                      style={{ height: "70vh" }}
                    >
                      <TileLayer
                        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                        attribution=""
                      />
                      {statesData.features.map((state) => {
                        const coordinates = state.geometry.coordinates[0].map(
                          (item) => [item[1], item[0]]
                        );

                        return (
                          <Polygon
                            pathOptions={{
                              strokeWidth: "1px",
                              fillColor: "none",
                              fillOpacity: 0.7,
                              weight: 2,
                              opacity: 1,
                              dashArray: 3,
                              color: "none",
                            }}
                            positions={coordinates}
                            eventHandlers={{
                              mouseover: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 5,
                                  dashArray: "",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                              mouseout: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 2,
                                  dashArray: "3",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                            }}
                          />
                        );
                      })}
                    </MapContainer>
                  </Item2>
                </Item1>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Item1
                  sx={{
                    border: "1px solid #ddd",
                    padding: "0px",
                    borderRadius: "0px",
                  }}
                >
                  <Item2
                    sx={{
                      fontSize: "140%",
                      borderBottom: "1px solid #ddd",
                      margin: "0px",
                      borderRadius: "0px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    Africa
                  </Item2>
                  <Item2>
                    <MapContainer
                      center={center6}
                      zoom={3}
                      minZoom={3}
                      maxZoom={5}
                      style={{ height: "70vh" }}
                    >
                      <TileLayer
                        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                        attribution=""
                      />
                      {statesData.features.map((state) => {
                        const coordinates = state.geometry.coordinates[0].map(
                          (item) => [item[1], item[0]]
                        );

                        return (
                          <Polygon
                            pathOptions={{
                              strokeWidth: "1px",
                              fillColor: "none",
                              fillOpacity: 0.7,
                              weight: 2,
                              opacity: 1,
                              dashArray: 3,
                              color: "none",
                            }}
                            positions={coordinates}
                            eventHandlers={{
                              mouseover: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 5,
                                  dashArray: "",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                              mouseout: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 2,
                                  dashArray: "3",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                            }}
                          />
                        );
                      })}
                    </MapContainer>
                  </Item2>
                </Item1>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Item1
                  sx={{
                    border: "1px solid #ddd",
                    padding: "0px",
                    borderRadius: "0px",
                  }}
                >
                  <Item2
                    sx={{
                      fontSize: "140%",
                      borderBottom: "1px solid #ddd",
                      margin: "0px",
                      borderRadius: "0px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    North America
                  </Item2>
                  <Item2>
                    <MapContainer
                      center={center7}
                      zoom={2}
                      minZoom={2}
                      maxZoom={5}
                      style={{ height: "70vh" }}
                    >
                      <TileLayer
                        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                        attribution=""
                      />
                      {statesData.features.map((state) => {
                        const coordinates = state.geometry.coordinates[0].map(
                          (item) => [item[1], item[0]]
                        );

                        return (
                          <Polygon
                            pathOptions={{
                              strokeWidth: "1px",
                              fillColor: "none",
                              fillOpacity: 0.7,
                              weight: 2,
                              opacity: 1,
                              dashArray: 3,
                              color: "none",
                            }}
                            positions={coordinates}
                            eventHandlers={{
                              mouseover: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 5,
                                  dashArray: "",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                              mouseout: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 2,
                                  dashArray: "3",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                            }}
                          />
                        );
                      })}
                    </MapContainer>
                  </Item2>
                </Item1>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Item1
                  sx={{
                    border: "1px solid #ddd",
                    padding: "0px",
                    borderRadius: "0px",
                  }}
                >
                  <Item2
                    sx={{
                      fontSize: "140%",
                      borderBottom: "1px solid #ddd",
                      margin: "0px",
                      borderRadius: "0px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    South America
                  </Item2>
                  <Item2>
                    <MapContainer
                      center={center8}
                      zoom={2}
                      minZoom={2}
                      maxZoom={5}
                      style={{ height: "70vh" }}
                    >
                      <TileLayer
                        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                        attribution=""
                      />
                      {statesData.features.map((state) => {
                        const coordinates = state.geometry.coordinates[0].map(
                          (item) => [item[1], item[0]]
                        );

                        return (
                          <Polygon
                            pathOptions={{
                              strokeWidth: "1px",
                              fillColor: "none",
                              fillOpacity: 0.7,
                              weight: 2,
                              opacity: 1,
                              dashArray: 3,
                              color: "none",
                            }}
                            positions={coordinates}
                            eventHandlers={{
                              mouseover: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 5,
                                  dashArray: "",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                              mouseout: (e) => {
                                const layer = e.target;
                                layer.setStyle({
                                  fillOpacity: 0.7,
                                  weight: 2,
                                  dashArray: "3",
                                  color: "none",
                                  fillColor: "none",
                                });
                              },
                            }}
                          />
                        );
                      })}
                    </MapContainer>
                  </Item2>
                </Item1>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    </Box>
  );
};
