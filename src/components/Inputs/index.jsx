import React from "react";
import { Link } from 'react-router-dom';

import IconButton from '@mui/icons-material/Done';
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import MenuItem from '@mui/material/MenuItem';

// import Dashboard from "../Dashboard";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import "./style.css"
import { colors } from "../../constants/Color"
import { Box, Grid, Typography, Container, Button } from "@mui/material/"

import Hrefs from "./Hrefs"
const StyledBadge = styled(Badge)(({ theme }) => ({

    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const drawerWidth = 240
export default (props) => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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

    const [age, setAge] = React.useState('');
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [personName, setPersonName] = React.useState([]);
    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };
    const names = [
        'Charts',
        'Graphs',
        'Forms',
        'Icons',
        'Responsive',
    ];

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box>
            <Box>
                <Grid spacing={0} sx={{ height: "100%"}}>
                    <Grid xs={12} md={12} sm={12} sx={{ display: "flex", flexDirection: "row", }}>
                        <Grid container spacing={0}>
                            <Grid xs={12} md={12} sm={12} lg={12} sx={{ paddingTop: "2%" }}>
                                <Container>
                                    <Box sx={{ display: "flex", flexDirection: "column", }}>
                                        <Typography sx={{ fontSize: "27px", fontFamily: "sans-serif", color: `${colors.bg_color_black}` }}>
                                            Preferences
                                        </Typography>
                                        <Typography sx={{ fontSize: "16px", fontFamily: "sans-serif", color: `${colors.bg_color_black}` }}>
                                            Here goes another form and form controls.
                                        </Typography>
                                    </Box>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ display: { xs: { display: "flex", flexDirection: "column" }, md: "flex" }, flexDirection: "row" }}>
                                        <Grid xs={12} md={6} sm={12} lg={6}>
                                            <Typography sx={{ fontFamily: "arial black", fontSize: "14px", color: `${colors.bg_color_black}`, paddingTop: "1%" }}>
                                                First Name
                                            </Typography>
                                            <input type="text" id='inputt' value="John" />
                                        </Grid>
                                        <Grid xs={12} md={6} sm={12} lg={6}>
                                            <Typography sx={{ fontFamily: "arial black", fontSize: "14px", color: `${colors.bg_color_black}`, paddingTop: "1%" }}>
                                                Last Name
                                            </Typography>
                                            <input type="text" id='inputt' value="Henry" />
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ display: { xs: { display: "flex", flexDirection: "column" }, md: "flex" }, flexDirection: "row" }}>
                                        <Grid item xs={12} md={12} sm={12} lg={12} sx={{ paddingTop: "1%" }}>
                                            <Grid item xs={12} md={12} sm={12} lg={6} sx={{ width: "95%" }}>
                                                <Typography sx={{ fontFamily: "arial black", fontSize: "14px", color: `${colors.bg_color_black}`, paddingTop: "1%" }}>
                                                    Username
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} md={12} sm={12} lg={6} sx={{ width: "95%" }}>
                                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "14px", color: "#666", paddingTop: "1%" }}>
                                                    @admin
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={12} sm={12} lg={12} sx={{ paddingTop: "1%" }}>
                                            <Grid item xs={12} md={12} sm={12} lg={6} sx={{ width: "95%" }}>
                                                <Typography sx={{ fontFamily: "arial black", fontSize: "14px", color: `${colors.bg_color_black}`, paddingTop: "1%" }}>
                                                    Email address
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} md={12} sm={12} lg={6} sx={{ width: "95%" }}>
                                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "14px", color: "#666", paddingTop: "1%" }}>
                                                    admin@company.com
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ display: "flex", flexDirection: "row", }}>
                                        <Grid item xs={12} md={12} sm={12} lg={6} sx={{ paddingTop: "1%" }}>
                                            <Typography sx={{ fontFamily: "arial black", fontSize: "14px", color: `${colors.bg_color_black}`, paddingTop: "1%" }}>
                                                Current Password
                                            </Typography>
                                            <input type="password" disabled id='inputt' value="12345678" />
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ display: { xs: { display: "flex", flexDirection: "column" }, md: "flex" }, flexDirection: "row", marginTop: "1%" }}>
                                        <Grid item xs={12} md={12} sm={12} lg={6}>
                                            <Typography sx={{ fontFamily: "arial black", fontSize: "14px", color: `${colors.bg_color_black}`, paddingTop: "1%" }}>
                                                New Password
                                            </Typography>
                                            <input type="password" id='inputt' placeholder="New Password" />
                                        </Grid>
                                        <Grid item xs={12} md={12} sm={12} lg={6}>
                                            <Typography sx={{ fontFamily: "arial black", fontSize: "14px", color: `${colors.bg_color_black}`, paddingTop: "1%" }}>
                                                Confirm New Password
                                            </Typography>
                                            <input type="password" id='inputt' placeholder="Confirm New Password" />
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ display: "flex", flexDirection: "row", marginTop: "1%" }}>
                                        <Grid xs={12} md={12} sm={12} lg={12}>
                                            <Typography sx={{ fontFamily: "arial black", fontSize: "14px", color: "#3C763D", paddingTop: "1%" }}>
                                                Input with success
                                            </Typography>
                                            <FormControl sx={{ m: 0, width: '95%', height: "5%", border: "#3C763D", color: "#3C763D" }} variant="outlined">
                                                <OutlinedInput
                                                    sx={{ border: "2px solid #3C763D", color: "#3C763D", height: "35px" }}
                                                    id="outlined-adornment-password"
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                sx={{ color: "#3C763D", fontSize: "18px" }}
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ display: "flex", flexDirection: "row", marginTop: "1%" }}>
                                        <Grid xs={12} md={12} sm={12} lg={12}>
                                            <Typography sx={{ fontFamily: "arial black", fontSize: "14px", color: "#A0723B", paddingTop: "1%" }}>
                                                Input with warning
                                            </Typography>
                                            <FormControl sx={{ m: 0, width: '95%', height: "5%", border: "#3C763D", color: "#3C763D" }} variant="outlined">
                                                <OutlinedInput
                                                    sx={{ border: "2px solid #A0723B", color: "#A0723B", height: "35px" }}
                                                    id="outlined-adornment-password"
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <WarningIcon
                                                                sx={{ color: "#A0723B", fontSize: "18px" }}
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </WarningIcon>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ display: "flex", flexDirection: "row", marginTop: "1%" }}>
                                        <Grid xs={12} md={12} sm={12} lg={12}>
                                            <Typography sx={{ fontFamily: "arial black", fontSize: "14px", color: "#A94442", paddingTop: "1%" }}>
                                                Input with success
                                            </Typography>
                                            <FormControl sx={{ m: 0, width: '95%', height: "5%", border: "#A94442", color: "#A94442" }} variant="outlined">
                                                <OutlinedInput
                                                    sx={{ border: "2px solid #A94442", color: "#A94442", height: "35px" }}
                                                    id="outlined-adornment-password"
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <CloseIcon
                                                                sx={{ color: "#A94442", fontSize: "20px" }}
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </CloseIcon>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ display: "flex", flexDirection: "row", marginTop: "1%" }}>
                                        <Grid xs={12} md={12} sm={12}>
                                            <Typography sx={{ fontFamily: "arial black", fontSize: "14px", color: `${colors.bg_color_black}`, paddingTop: "1%" }}>
                                                Notes
                                            </Typography>
                                            <TextField
                                                id="inputty"
                                                multiline
                                                rows={4}
                                                variant="filled"
                                                sx={{
                                                    width: "95%",
                                                    height: "20%",
                                                    marginTop: "1%"
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} sx={{ display: { xs: { display: "flex", flexDirection: "column" }, md: "flex" }, flexDirection: "row" }}>
                                        <Grid xs={12} md={6} sm={12}>
                                            <Typography sx={{ fontSize: "15px", fontFamily: "arial black", color: `${colors.bg_color_black}` }}>
                                                Single selection control
                                            </Typography>
                                            <FormControl id="select" sx={{ minWidth: "95%", }}>
                                                <InputLabel id="demo-simple-select-autowidth-label" sx={{}}>HTML</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-autowidth-label"
                                                    id="demo-simple-select-autowidth"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={'HTML'}>HTML</MenuItem>
                                                    <MenuItem value={'CSS'}>CSS</MenuItem>
                                                    <MenuItem value={'JavaScript'}>JavaScript</MenuItem>
                                                    <MenuItem value={'jQuery'}>jQuery</MenuItem>
                                                    <MenuItem value={'Bootstrap'}>Bootstrap</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid xs={12} md={6} sm={12} sx={{ display: { xs: { fontSize: "10px" }, md: "flex" } }}>
                                            <FormGroup aria-label="position" column>
                                                <FormControlLabel control={<Checkbox defaultChecked />} label="Email me when new memeber sign up." />
                                                <FormControlLabel disabled control={<Checkbox />} label="Never email me." />
                                            </FormGroup>

                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} sx={{ display: { xs: { display: "flex", flexDirection: "column" }, md: "flex" }, flexDirection: "row" }}>
                                        <Grid xs={12} md={6} sm={12}>
                                            <Typography sx={{ fontSize: "15px", fontFamily: "arial black", color: `${colors.bg_color_black}` }}>
                                                Multiple selection control
                                            </Typography>
                                            <Select
                                                sx={{ minWidth: "95%" }}
                                                multiple
                                                native
                                                value={personName}
                                                onChange={handleChangeMultiple}
                                                inputProps={{
                                                    id: 'select-multiple-native',
                                                }}
                                            >
                                                {names.map((name) => (
                                                    <option key={name} value={name}>
                                                        {name}
                                                    </option>
                                                ))}
                                            </Select>

                                        </Grid>
                                        <Grid xs={12} md={6} sm={12} sx={{ display: { xs: { fontSize: "10px" }, md: "flex" } }}>
                                            <FormGroup aria-label="position" column>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="female"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="HTML format" control={<Radio />} label="HTML format" />
                                                    <FormControlLabel value="Plain text" control={<Radio />} label="Plain text" />
                                                    <FormControlLabel
                                                        value="disabled"
                                                        disabled
                                                        control={<Radio />}
                                                        label="Rich text"
                                                    />
                                                </RadioGroup>
                                            </FormGroup>

                                        </Grid>

                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} sx={{ display: { xs: { display: "flex", flexDirection: "column" }, md: "flex" }, flexDirection: "row" }}>
                                        <Grid xs={12} md={6} sm={12}>
                                            <FormGroup aria-label="position" row>
                                                <FormControlLabel control={<Checkbox defaultChecked />} label="Server status " />
                                                <FormControlLabel control={<Checkbox defaultChecked />} label="Memember status " />
                                                <FormControlLabel control={<Checkbox defaultChecked />} label="Expired members " />
                                            </FormGroup>
                                        </Grid>
                                        <Grid xs={12} md={6} sm={12}>
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                >
                                                    <FormControlLabel value="Bootstrap" control={<Radio />} label="Bootstrap" />
                                                    <FormControlLabel value="Foundation" control={<Radio />} label="Foundation" />
                                                    <FormControlLabel value="Skeleton" control={<Radio />} label="Skeleton" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>

                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid xs={12} md={6} sm={12}>
                                            <Typography sx={{ fontSize: "15px", fontFamily: "arial black", color: `${colors.bg_color_black}` }}>
                                                Multiple selection control
                                            </Typography>
                                            <input type="file" id="file" />
                                            <Typography sx={{ fontSize: "15px", fontFamily: "sans-serif", color: "#666" }}>
                                                You can upload file here.
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid xs={12} md={6} sm={12}>
                                            <Button variant="contained" href="#contained-buttons" sx={{ borderRadius: "0px", border: "1px solid #1976D2" }}>
                                                Update
                                            </Button>
                                            <Button variant="contained" href="#contained-buttons" sx={{ borderRadius: "0px", backgroundColor: "white", color: "#555", border: "1px solid #555", margin: "1%" }}>
                                                Reset
                                            </Button>

                                        </Grid>

                                    </Grid>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={12} sm={12} sx={{ backgroundColor: `${colors.bg_color_black}` }}>
                        <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1%", color: "#CCCCCC", fontSize: "12px", fontFamily: "sans-serif" }}>
                            Copyright © 2084 Your Company Name
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
