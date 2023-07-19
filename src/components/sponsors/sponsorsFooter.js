import React from "react";
import SponsorImage from "./sponsorImage";
import Grid from "@mui/material/Grid";
import { Container, TextField, Button, Stack, Typography } from "@mui/material";
import "./sponsorsFooter.css";

const Sponsors = () => {
  return (
    <div maxWidth="xl" className="sponsors">
      <Container maxWidth="xl" className="sponsors">
        <Grid
          container
          spacing={2}
          alignItems="center"
          className="sponsors-grid"
        >
          <Grid item xs={12} sm={6} md={4}>
            {/* <form method="GET" action="#" className="ab-emailSignup">
              <div className="ab-emailSignup_description" sx={{color: "white"}}>
                Sign up for our newsletter
              </div>
              <div className="ab-emailSignup_form">
                <div>
                  <label htmlFor="email" className="ab-label ab-util_srOnly">
                    Email Address
                  </label>
                  <TextField type="text"  />
                  <Button
                    className="ab-button ab-emailSignup_submit"
                    variant="outlined"
                  >
                    Go
                  </Button>
                </div>
              </div>
            </form> */}
            {/* <form method="GET" action="#" className="ab-emailSignup"> */}
            <Stack
              direction="column"
              color="white"
              sx={{ display: "flex", alignContent: "start" }}
            >
              <Stack direction="row">
                <Typography mb={1}>Sign up for our newsletter</Typography>
              </Stack>
              <Stack direction="row">
                {/* <TextField
                  type="text"
                  label="Search"
                  color="white"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                    },
                    // color:"white"
                  }}
                /> */}
                <TextField
                  type="text"
                  label="Search"
                  // color="white"
                  InputLabelProps={{
                    style: {
                      color: "white",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <Button
                  className="ab-button ab-emailSignup_submit"
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  Go
                </Button>
              </Stack>
            </Stack>
            {/* <div
              className="ab-emailSignup_description"
              style={{ color: "white", margin: "1em" }}
            >
              Sign up for our newsletter
            </div> */}
            {/* <div className="ab-emailSignup_form" sx={{ display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <label htmlFor="email" className="ab-label ab-util_srOnly">
                  Email Address
                </label>
                <TextField
                  type="text"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <Button
                  className="ab-button ab-emailSignup_submit"
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  Go
                </Button>
              </div>
            </div> */}
            {/* </form> */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}display="flex" alignItems="" alignContent="center">
            <SponsorImage image="redbull.png" alt="redbull" />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <SponsorImage image="nescafe.png" alt="nescafe" />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <SponsorImage image="walls.png" alt="walls" />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <SponsorImage image="gloriajeans.png" alt="gloriajeans" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Sponsors;
