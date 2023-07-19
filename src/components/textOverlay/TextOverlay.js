import React from "react";
import "./TextOverlay.css"; // Import the CSS file for styling
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
// import mjr from "../../Assets/bg_content/mjr.gif";

const VideoTextOverlay = ({
  video = "",
  textHeading = "",
  text = "",
  text1,
}) => {
  const theme = useTheme();

  return (
    <Box
      className="bg-video-wrap"
      // sx={{
      //   backgroundImage: "url(" + mjr + ")",
      //   backgroundSize: "cover",
      //   height: "100vh",
      // }}
    >
      <video src={video} loop muted autoPlay></video>
      <Grid container>
        <Grid
          item
          xs={12}
          // mt={50}
          sx={{
            position: "absolute",
            bottom: { xs: "1%", md: "10em", lg: "16em" },
            left: { xs: "1%", md: "1em", lg: "1em" },

            zIndex: 1,
            // textAlign: "center",
            color: "white",
          }}
        >
          <Stack
            // mt={50}
            direction="column"
            display="flex"
            alignItems="flex-start"
          >
            <Typography
              variant="h4"
              sx={{ [theme.breakpoints.down("sm")]: { fontSize: "1rem" } }}
            >
              {textHeading}
            </Typography>
            <Typography
              variant="h4"
              sx={{ [theme.breakpoints.down("sm")]: { fontSize: "1rem" } }}
            >
              {text1}
            </Typography>
            <Typography
              variant="h6"
              sx={{ [theme.breakpoints.down("sm")]: { fontSize: "1rem" } }}
            >
              {text}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoTextOverlay;
