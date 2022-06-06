import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function VerticalDividerText() {
  // const content = (
  // );

  return (
    <Grid container sx={{}}>
      <Grid
        item
        sx={{
          backgroundColor: "#428bca",
          color: "white",
          padding: "10px 20px 20px 20px",
        }}
      >
        <span style={{ fontSize: "25px" }}>Latest Data</span> <br />
        Latest Data Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent vel adipiscing quam. Maecenas vehicula rhoncus magna, vitae
        lacinia sem auctor a. Vestibulum aliquam, nisl nec luctus volutpat,
        turpis orci posuere arcu, eget consectetur quam nunc ac arcu.
      </Grid>
      {/* <Divider flexItem>VERTICAL</Divider> */}
      <Grid
        item
        sx={{
          paddingLeft: "20px",
          borderLeft: "1px solid gray",
          borderBottom: "1px solid gray",
          borderRight: "1px solid gray",
          padding: "10px 20px 20px 20px",
        }}
      >
        Older Data Maecenas in facilisis nisi. Proin gravida nunc vel justo
        vestibulum, quis adipiscing velit faucibus. Sed a hendrerit orci. Nunc
        ut bibendum eros, at varius urna. Integer cursus condimentum dui vitae
        sagittis. Curabitur at vehicula nunc. Praesent at sem non nisl
        pellentesque placerat.
      </Grid>
    </Grid>
  );
}
