import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Inputs from "../inputs/index";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  borderRadius: "0px",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1, position: "relative", bottom: "160px" }}>
      <Grid container spacing={0} sx={{ justifyContent: "center" }}>
        <Grid
          item
          md={4}
          sm={12}
          xs={12}
          sx={{
            boxShadow: "0px 6px 10px 0px",
            margin: {
              md: "20px ",
              sm: "0px 0px 30px 0px",
              xs: "0px 0px 30px 0px",
            },
          }}
        >
          <Item>
            <LocationOnIcon
              sx={{
                backgroundColor: "#5463FF",
                color: "white",
                borderRadius: "50px",
                padding: "6px",
                width: "42px",
                height: "42px",
              }}
            />
          </Item>
          <Item
            sx={{
              color: "#0D1222",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "31.2px",
            }}
          >
            Location
          </Item>
          <Item
            sx={{
              fontSize: "18px",
              fontWeight: " 400",
              lineHeight: "30px",
              color: "#969696",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In
            eget gravida leo, nec iaculis <br /> diam.{" "}
          </Item>
        </Grid>
        <Grid
          item
          md={4}
          sm={12}
          xs={12}
          sx={{
            boxShadow: "0px 6px 10px 0px",
            margin: { md: "20px", sm: "0px", xs: "0px" },
          }}
        >
          <Item>
            <CallIcon
              sx={{
                backgroundColor: "#5463FF",
                color: "white",
                borderRadius: "50px",
                padding: "6px",
                width: "42px",
                height: "42px",
              }}
            />
          </Item>
          <Item
            sx={{
              color: "#0D1222",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "31.2px",
            }}
          >
            Contact
          </Item>
          <Item
            sx={{
              fontSize: "18px",
              fontWeight: " 400",
              lineHeight: "30px",
              color: "#969696",
            }}
          >
            T-shirt12@gmail.com <br /> <br />
            (021) 12345678
          </Item>
        </Grid>
        <Grid sx={{ marginTop: "100px" }} md={12} sm={12} xs={12}>
          <Inputs />
        </Grid>
      </Grid>
    </Box>
  );
}
