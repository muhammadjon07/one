import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
  boxShadow: "none",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Grid item sx={{}} md={12} sm={12} xs={12}>
          <Item
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "52px",
              color: "black",
            }}
          >
            Send a Message
          </Item>
        </Grid>
        <Grid item sx={{}} md={4} sm={12} xs={12}>
          <Item>
            <input
              type="text"
              style={{
                width: "100%",
                height: "48px",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "30px",
                color: "#969696",
              }}
              placeholder="First Name"
            />
          </Item>
        </Grid>
        <Grid item sx={{}} md={4} sm={12} xs={12}>
          <Item>
            <input
              type="text"
              style={{
                width: "100%",
                height: "48px",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "30px",
                color: "#969696",
              }}
              placeholder="Last Name"
            />
          </Item>
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <Item>
            <input
              type="text"
              style={{
                width: "100%",
                height: "48px",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "30px",
                color: "#969696",
              }}
              placeholder="Your Email"
            />
          </Item>
          <Item>
            <textarea
              type="text"
              style={{
                width: "100%",
                height: "242px",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "30px",
                color: "#969696",
              }}
              placeholder="Description"
            />
          </Item>
        </Grid>

        <Grid item sx={{}} md={12} sm={12} xs={12}>
          <Item
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "52px",
              color: "black",
            }}
          >
            <button
              style={{
                width: "180px",
                height: "48px",
                backgroundColor: "#AB40FF",
                color: "white",
                border: "none",
                fontSize: "18px",
                lineHeight: "27px",
                fontWeight: "700",
              }}
            >
              Send
            </button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
