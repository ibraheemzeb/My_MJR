import React from "react";
import { Box,  Typography } from "@mui/material";
// import gsap from "gsap";
import "../components/imageWithTextOverlay/imageWithOverlay.css";

const StaycationHero = ({ image }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "90vh", // Set the desired height for the box
      }}
    >
      <Box
        sx={{
          color: "white",
          width: "30%",
          position: "relative",
          paddingTop: "20%",
          paddingLeft: "3%",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "2.25em", fontWeight: "400" }}>
          The Magnificient Accomodation
        </Typography>
        <Typography sx={{ fontSize: "1.5em" }}>
          Rewind from work and reconnect with Nature
        </Typography>
      </Box>
    </Box>
  );
};

export default StaycationHero;
