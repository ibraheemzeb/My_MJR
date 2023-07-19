import React from "react";
import Sponsors from "../components/sponsors/sponsorsFooter";
import Footer from "../components/footer/footer";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useTheme,
  Avatar,
  Container,
} from "@mui/material";
import "./activities.css";
import Background from "../Assets/bg_content/activities-header.jpg";
import WinterCards from "../components/Cards/WinterCards";
import BlogCards from "../components/Cards/BlogCards";

const Activities = () => {
  const theme = useTheme();
  const smallScreen = theme.breakpoints.down("md");
  return (
    <Box className="activities">
      <ResponsiveAppBar />
      <Grid
        container
        md={12}
        xl={12}
        
        className="header-image-overlay"
      >
        <Box
          sx={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <Grid
            item
            className="text-box"
            color="white"
            sx={{ paddingBottom: "20em" }}
            display="flex"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Stack
              direction="column"
              display="flex"
              alignItems={{ xs: "center", md: "flex-start" }}
              sx={{ marginTop: "20em" }}
            >
              <Typography
                variant={smallScreen ? "h3" : "h5"}
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.5rem",
                    textAlign: "start",
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: "1.5rem",
                    display: "flex",
                    textAlign: "start",
                  },
                }}
              >
                The Magnificent Where
              </Typography>
              <Typography
                variant={smallScreen ? "h3" : "h5"}
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.5rem",
                    textAlign: "start",
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: "1.5rem",
                    textAlign: "start",
                  },
                }}
              >
                Nature Meets Adventure!
              </Typography>
              <Typography
                variant={smallScreen ? "h5" : "h7"}
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1rem",
                    justifyContent: "center",
                    textAlign: "center",
                  },
                  [theme.breakpoints.down("md")]: { fontSize: "1.5rem" },
                }}
              >
                Plan your perfect getaway with family and friends
              </Typography>
            </Stack>
          </Grid>
        </Box>
      </Grid>

      <Container className="activites-cover-2-col">
        {/* <img src="outdoor.jpeg" alt="Activities" /> */}
        <Grid
          container
          display="flex !important"
          justifyContent="center !important"
        >
          <Grid
            item
            md={6}

            // sx={{ display: "flex", alignItems: "center", justifyContent: 'center' }}
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
                Memorable Outdoor Experiences
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
      </Container>
      <Container sx={{ mb: 10 }}>
        <Grid container gap={4} display="flex" justifyContent="center">
          <Grid Item xs={12} display="flex" justifyContent="center">
            <Typography variant="h3" color="#094e9d">
              Our Top Picks This Winter
            </Typography>
          </Grid>
          <Grid Item sm={12} md={3}>
            <WinterCards
              simage="pastevent.jpg"
              sheader="CHAIRLIFT"
              stext="Sit back in the chairlift as you peacefully move from the hustle and bustle of the resort's central area to the top station."
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <WinterCards
              simage="cycling.jpg"
              sheader="ZIPLINE"
              stext="Use the zipline to take a quick, minute-long flight over the resort, enjoying a bird's eye view."
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <WinterCards
              simage="futureevent.jpg"
              sheader="SLINGSHOT"
              stext="The only human slingshot in Pakistan pulls you backward and fires you into the air like a catapult as you soar through the skies and scream in excitement."
            />
          </Grid>

          <Grid Item xs={12} display="flex" justifyContent="center">
            <Typography variant="h3" color="#094e9d">
              Explore our blog
            </Typography>
          </Grid>

          <Grid Item sm={12} md={3}>
            <BlogCards
              simage="pastevent.jpg"
              sheader="Lorem Ipsum"
              stext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor sagittis tincidunt."
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              simage="cycling.jpg"
              sheader="Lorem Ipsum"
              stext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor sagittis tincidunt."
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              simage="futureevent.jpg"
              sheader="Lorem Ipsum"
              stext="To Promote local talent and provide a platform for winter sports"
            />
          </Grid>
        </Grid>
      </Container>

      <Sponsors />
      <Footer />
    </Box>
  );
};

export default Activities;
