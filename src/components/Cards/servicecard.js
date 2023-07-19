import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import "./servicecard.css";

export default function Servicecard({ simage = "", sheader = "", stext = "" }) {
  return (
    <Card sx={{ position: "relative", height: 350 }}>
      <Box
        className="service"
        sx={{
          backgroundImage: `url(${simage})`,
        }}
      />
      <CardContent className="content">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={sxHeader}
            mt={4}
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
