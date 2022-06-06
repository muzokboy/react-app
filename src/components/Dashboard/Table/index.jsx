import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: "black",
    textAlign: "left",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "left",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    // textAlign: "left",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    textAlign: "left",
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "John", "Smith", "	@js"),
  createData(1, "Bill", "Jones", "	@bj"),
  createData(1, "Marry", "James", "	@mj"),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{
          // width: "50%",
          flot: "right",
          borderRadius: "0px",
          border: "1px solid #428bca",
        }}
      >
        <Typography
          sx={{ backgroundColor: "#428bca", color: "white", padding: "15px" }}
        >
          User Table
        </Typography>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead
            sx={{ backgroundColor: "#428bca", borderBottom: "2px solid gray" }}
          >
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell align="right"> Last Name</StyledTableCell>
              <StyledTableCell align="right">Username</StyledTableCell>
              {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        sx={{
          borderRadius: "0px",
          fontSize: "12px",
          margin: "22px 0px 0px 0px",
          bgcolor: "#428bca",
        }}
        variant="contained"
        disableElevation
      >
        See Tables
      </Button>
    </div>
  );
}
