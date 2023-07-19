import { Grid } from "@mui/material";
import React from "react";
import StaycationGridCard from "../Cards/StaycationGridCard";

const StaycationGrid = () => {
  return (
    <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
      <Grid item md={4}>
        <StaycationGridCard
          image={"premium.jpg"}
          heading={"Blog1"}
          text={"Luxury Premium rooms to make your stay like a memorable"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"cinema.jpg"}
          heading={"Blog2"}
          text={"Luxury Premium rooms to make your stay like a memorable"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"meeting.jpg"}
          heading={"Blog3"}
          text={"Luxury Premium rooms to make your stay like a memorable"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"delux.jpg"}
          heading={"Blog4"}
          text={"Luxury Premium rooms to make your stay like a memorable"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"weddings.jpg"}
          heading={"Blog5"}
          text={"Luxury Premium rooms to make your stay like a memorable"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"pool.jpg"}
          heading={"Blog6"}
          text={"Luxury Premium rooms to make your stay like a memorable"}
        />
      </Grid>
    </Grid>
  );
};

export default StaycationGrid;
