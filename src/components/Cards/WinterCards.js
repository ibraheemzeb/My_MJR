import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
    <Card
      sx={{ position: "relative", height: 400, borderRadius: '15px' }}
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
          //   opacity: 0.5,
          //   transition: "opacity 0.3s, transform 0.3s",
          //   "&:hover": {
          //     opacity: 1,
          //     transform: "scale(1.2)",
          //   },
        }}
      />
      <CardContent
        sx={{
          position: "relative",
          zIndex: 1,
          transition: "background-color 0.3s",
          backgroundColor: "transparent",
          //   "&:hover": {
          //     "& .card-sheader": {
          //       color: "#2596be",
          //     },
          //     "& .card-stext": {
          //       color: "#2596be",
          //     },
          //   },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          mt={15}
          color="white"
        >
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={sxHeader}
            mt={8}
          >
            {sheader}
          </Typography>
          <Typography variant="body2" component="div" sx={sxText} mt={1}>
            {stext}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

// Define separate sx objects for each style group
const sxHeader = {
  fontSize: "1.5em",
  /* Additional styles for the header typography */
};

const sxText = {
  /* Additional styles for the text typography */
};
