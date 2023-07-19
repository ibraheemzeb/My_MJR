import React from "react";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import gsap from "gsap";

export default function WinterCards({ simage = "", sheader = "", stext = "" }) {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  return (
    <>
      <Card
        sx={{ position: "relative", height: 200, borderRadius: "15px" }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${simage})`,
            backgroundSize: "cover",
          }}
        />
      </Card>
      <Box
        flexDirection="column"
        color="#094e9d"
      >
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={sxHeader}
          mt={2}
        >
          {sheader}
        </Typography>
        <Typography variant="body1" sx={sxText} mt={1}>
          {stext}
        </Typography>
      </Box>
    </>
  );
}

// Define separate sx objects for each style group
const sxHeader = {
//   fontSize: "1.5em",
  /* Additional styles for the header typography */
};

const sxText = {
  /* Additional styles for the text typography */
};
