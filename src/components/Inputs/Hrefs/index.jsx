import React from 'react';
import { Link } from "react-router-dom"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { colors } from "../../../constants/Color"
export default () => {
    return (<div>
        <Box sx={{ width: "100%", height: "10%", fontSize: "2px", backgroundColor: `${colors.bg_color}`, display: "flex", flexDirection: "row" }}>
            <Typography sx={{ paddingLeft: "1%", ":hover": { textDecoration: "underline" } }}>
                <Link to="#" style={{ textDecoration: "none", color: "#428BCA" }}>
                    Admin Panel
                </Link>
            </Typography>
            <Typography sx={{ paddingLeft: "1%" }}>
                /
            </Typography>
            <Typography sx={{ paddingLeft: "1%", ":hover": { textDecoration: "underline" } }}>
                <Link to="#" style={{ textDecoration: "none", color: "#428BCA" }}>
                    Preferences
                </Link>
            </Typography>
            <Typography sx={{ paddingLeft: "1%" }}>
                /
            </Typography>
            <Typography sx={{ paddingLeft: "1%" }}>
                Form Controls
            </Typography>
        </Box>
    </div>)
}

