import React from "react";
import Grid from "@mui/material/Grid";
import Servicecard from "./servicecard";
import { Box } from "@mui/material";

const Servicecardsection = () => {
  return (
    <div>
      {/* <Container disableGutters> */}
      <Grid container spacing={0}>
        <Grid item md={4} xs={12} sm={6}>
          <Box width="100%">
            <Servicecard
              simage="accomodation.jpg"
              sheader="Accomodation"
              stext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam elit, interdum
              sit amet metus eu, vestibulum placerat mi"
            />
          </Box>
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Box width="100%">
            <Servicecard
              simage="activities.jpg"
              sheader="Packages"
              stext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam elit, interdum
              sit amet metus eu, vestibulum placerat mi"
            />
          </Box>
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Box width="100%">
            <Servicecard
              simage="events.jpg"
              sheader="Offers"
              stext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam elit, interdum
              sit amet metus eu, vestibulum placerat mi"
            />
          </Box>
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
};

export default Servicecardsection;
