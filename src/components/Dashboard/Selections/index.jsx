import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
          <Tab label="Messages" {...a11yProps(2)} />
          <Tab label="Settings" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Typography sx={{}}>
        <TabPanel value={value} index={0}>
          <Typography
            sx={{
              textAlign: "start",
              width: "100%",
              border: "1px solid black",
              height: "7vh",
              paddingTop: "0",
            }}
          >
            {" "}
            <input type="checkbox" /> Suspendisse dapibus sodales
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              width: "100%",
              border: "1px solid black",
              height: "7vh",
              paddingTop: "2vh",
            }}
          >
            {" "}
            <input type="checkbox" /> Proin mattis ex vitae
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              width: "100%",
              border: "1px solid black",
              height: "7vh",
              paddingTop: "2vh",
            }}
          >
            {" "}
            <input type="checkbox" /> Aenean euismod dui vel{" "}
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              width: "100%",
              border: "1px solid black",
              height: "7vh",
              paddingTop: "2vh",
            }}
          >
            {" "}
            <input type="checkbox" /> Vivamus dictum posuere odio
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              width: "100%",
              border: "1px solid black",
              height: "7vh",
              paddingTop: "2vh",
            }}
          >
            {" "}
            <input type="checkbox" /> Morbi convallis sed nisi suscipit
          </Typography>
        </TabPanel>
      </Typography>
      <Typography>
        <TabPanel value={value} index={1}>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              textDecoration: "start",
              width: "100%",
              mb: "",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            Vivamus dictum posuere odio
            <Badge
              badgeContent={33}
              color="secondary"
              sx={{ paddingLeft: "50%" }}
            ></Badge>
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            {" "}
            Proin mattis ex vitae{" "}
            <Badge
              badgeContent={9}
              color="secondary"
              sx={{ paddingLeft: "64%" }}
            ></Badge>
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            {" "}
            Aenean euismod dui vel{" "}
            <Badge
              badgeContent={1}
              color="secondary"
              sx={{ paddingLeft: "59%" }}
            ></Badge>
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            {" "}
            Vivamus dictum posuere odio{" "}
            <Badge
              badgeContent={14}
              color="secondary"
              sx={{ paddingLeft: "49%" }}
            ></Badge>
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            Morbi convallis sed nisi suscipit{" "}
            <Badge
              badgeContent={2}
              color="secondary"
              sx={{ paddingLeft: "46%" }}
            ></Badge>
          </Typography>
        </TabPanel>
      </Typography>
      <Typography>
        <TabPanel value={value} index={2}>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              bgcolor: "blue",
              cursor: "pointer",
              color: "white",
              padding: "1%",
              width: "100%",
              mb: "",
            }}
          >
            Morbi convallis sed nisi suscipit
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              cursor: "pointer",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            {" "}
            Dapibus ac facilisis in
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              cursor: "pointer",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            Morbi convallis sed nisi suscipit
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              cursor: "pointer",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            {" "}
            Proin mattis ex vitae
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              cursor: "pointer",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            Vestibulum at eros
          </Typography>
        </TabPanel>
      </Typography>

      <Typography>
        <TabPanel value={value} index={3}>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              bgcolor: "#D8D8D8",
              cursor: "pointer",
              padding: "1%",
              width: "100%",
              mb: "",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            {" "}
            Vivamus dictum posuere odio
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              cursor: "pointer",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            {" "}
            Proin mattis ex vitae
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              cursor: "pointer",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            Vestibulum at eros
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              cursor: "pointer",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            Dapibus ac facilisis in
          </Typography>
          <Typography
            sx={{
              textAlign:'start',
              border: "1px solid black",
              padding: "1%",
              cursor: "pointer",
              width: "100%",
              ":hover": { bgcolor: "#D9D9D9" },
            }}
          >
            {" "}
            Morbi convallis sed nisi suscipit
          </Typography>
        </TabPanel>
      </Typography>
    </Box>
  );
}
