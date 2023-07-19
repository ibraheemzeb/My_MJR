import React from "react";
import Sponsors from "../components/sponsors/sponsorsFooter";
import Footer from "../components/footer/footer";
import BlogGrid from "../components/gridViews/BlogGrid";
import StaycationHero from "./StaycationHero";
import { Box, Grid, Stack, Typography, Avatar } from "@mui/material";
import ResponsiveAppBar from "../components/NavBar/NavBar";

function BlogMain() {
  return (
    <div>
      <ResponsiveAppBar />
      <StaycationHero image="cycling.jpg" />
      <Box sx={{ padding: "10%" }}>
        <Grid
          container
          display="flex !important"
          justifyContent="center !important"
        >
          <Grid
            item
            md={6}
          >
            <Avatar
              alt="Activities"
              src="outdoor.jpeg"
              sx={{ width: { xs: 250, sm: 450 }, height: { xs: 250, sm: 450 } }}
            />
          </Grid>
          <Grid
            Item
            md={6}
            mt={{ xs: 10, sm: 10, md: 10, lg: 5 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: {
                xs: "Center",
                sm: "Center",
                md: "Center",
                lg: "start",
              },
            }}
          >
            <Stack direction="column">
              <Typography variant="h3" color="#094e9d">
                Welcome to Blog Page
              </Typography>
              <Typography>
                Our exhilarating whitewater rafting, kayaking, and zip lining
                activities make for fun and memorable adventures. We strive to
                enhance the lives of our guests by creating the best
                human-powered outdoor adventures available.{" "}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {/* <StacationCover /> */}
      <BlogGrid />
      <Sponsors />
      <Footer bgImage="footer1.jpg" />
    </div>
  );
}

export default BlogMain;
