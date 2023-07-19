import React, { useRef, useEffect } from "react";
import "./imageWithOverlay.css"; // Import the CSS file for styling
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

const ImageWithWinterActivities = ({
  image = "",
  button = false,
  buttonText = "",
  buttonCallBack = () => {},
}) => {
  const boxStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  const gridRef = useRef(null);
  // gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({ repeatDelay: 1, yoyo: true });
    // const tF = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: true})
    tl.fromTo(
      ".grid-item-1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    tl.fromTo(
      ".grid-item-2",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    tl.fromTo(
      ".grid-item-3",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    );
    // tF.to(".green", { rotation: 360 });
    // tF.to(".purple", { rotation: 360 });
    // tF.to(".orange", { rotation: 360 });
    // ScrollTrigger.create({
    //   trigger: gridRef.current,
    //   start: "top center",
    //   animation: tl,
    // Uncomment the line below if you want the animation to play every time the trigger area is reached during scrolling
    // scrub: true,
    // });

    return () => {
      tl.kill();
      // ScrollTrigger.kill();
    };
  }, []);
  return (
    <Box className="bg-image-wrap" sx={boxStyle} color="white">
      {/* <img src={image} alt='skii'></img> */}
      <Grid
        container
        mt={{ xs: 25, md: 20 }}
        ml={{ xs: 0, md: 10 }}
        xs={{ height: "100%" }}
        ref={gridRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <Grid item sx={12} md={4} className="grid-item-3">
          <Stack direction="column" alignItems="center">
            <Typography variant="h4">Winter Activities</Typography>
            <Typography variant="body1" mt={5}>
              Malam Jabba Ski Resort is the only
            </Typography>
            <Typography variant="body1">
              Public Ski Resort in Pakistan
            </Typography>
            <Typography variant="body1">
              accessible throughout the year,
            </Typography>
            <Typography variant="body1">even in heavy snowfall.</Typography>
            <Typography variant="body1">
              We offer a range of exciting and fun activities
            </Typography>
            <Typography variant="body1">
              to our visitors that are guaranteed to make
            </Typography>
            <Typography variant="body1">
              you feel refreshed and inspire you to live fully
            </Typography>
            <Typography variant="body1">and freely in the moment.</Typography>
            <Typography variant="body1">
              The equipment used for these activities is
            </Typography>
            <Typography variant="body1">
              of premium quality as we can never
            </Typography>
            <Typography variant="body1">
              compromise on the safety of our tourists.
            </Typography>
            {button ? (
              <Button
                sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                mt={5}
                onClick={buttonCallBack()}
              >
                {buttonText}
              </Button>
            ) : (
              <></>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageWithWinterActivities;
