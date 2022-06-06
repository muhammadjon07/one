import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: "white",
  backgroundColor: "#A745FF",
  boxShadow: "none",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          paddingTop: "25px",
          paddingBottom: "200px",
        }}
      >
        <Grid item md={10} sm={10} xs={11}>
          <Item
            sx={{ fontSize: "14px", fontWeight: "700", lineHeight: "21px" }}
          >
            Home / Contact
          </Item>
        </Grid>
        <Grid item md={10} sm={10} xs={11}>
          <Item
            sx={{ fontSize: "40px", fontWeight: "700", lineHeight: "52px" }}
          >
            Contact
          </Item>
          <Item
            sx={{
              // width: "509px",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "30px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> In
            eget gravida leo, nec iaculis diam. Nam bibendum mi <br /> sed sem
            finibus ullamcorper.
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
