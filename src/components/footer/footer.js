import React from "react";
import "./footer.css";
import Background from "../../Assets/bg_content/footer1.jpg";
import logo from "../../Assets/logos/malamjabbalogo-150.png";
import { Box, Container, Grid,Stack,Typography,Link } from "@mui/material";

const Footer = ({ bgImage = "", text = "", textHeading = "" }) => {
  return (
    <Box
      maxWidth="100%"
      sx={{
        backgroundImage: `url(${Background})`,
        padding: "5em 0em 0em 0em",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Container>
        <Grid
          container
          color="white"
          gap={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img
              src={logo}
              alt="footer-logo-mjr"
              style={{ height: "25vh", width: "30vh" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              direction="column"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h5">LOCATION</Typography>
              <Typography variant="body1">Hill station,</Typography>
              <Typography variant="body1">Malam Jabba Road,</Typography>
              <Typography variant="body1">Malam Jabba, Swat.</Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              direction="column"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h5">QUICK LINKS</Typography>
              <Typography variant="body1">
                <Link href="/" rel="sponsored" title="Flaticon">
                  shop
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="/activities" rel="sponsored" title="Flaticon">
                  Activites
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="/" rel="sponsored" title="Flaticon">
                  Workshop
                </Link>
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              direction="column"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h5">CONTACT</Typography>
              <Typography variant="body1">info@malamjabbaresort.com</Typography>
              <Typography variant="body1">+92-302-6575400</Typography>
              <Typography variant="body1">+92-333-2342342</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <hr />
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{ color: "white" }}
            >
              © {new Date().getFullYear()}&nbsp;
              <Link
                sx={{ color: "white" }}
                href="https://www.assuretrust.asia"
                rel="sponsored"
                title="Flaticon"
              >
                www.malamjabba.asia
              </Link>{" "}
              All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
