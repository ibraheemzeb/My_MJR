import React, { useRef, useEffect } from "react";
import "./imageWithOverlay.css"; // Import the CSS file for styling
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

const ImageWithSummerActivities = ({
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
        ml={{ xs: 0, md: -3 }}
        xs={{
          height: "100%",
          sx: { display: "flex", justifyContent: "center" },
        }}
        ref={gridRef}
        justifyContent="flex-end"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <Grid item sx={12} md={4} className="grid-item-3">
          <Stack direction="column" alignItems="center">
            <Typography variant="h4">Summer Activities</Typography>
            <Typography variant="body1" mt={5}>
              The tourists can enjoy plethora of
            </Typography>
            <Typography variant="body1">
              activities during Summers other
            </Typography>
            <Typography variant="body1">
              than the scenic beauty of green{" "}
            </Typography>
            <Typography variant="body1">
              mountains of the Malam Jabba Valley.{" "}
            </Typography>
            <Typography variant="body1">
              All the rides and their equipment conform{" "}
            </Typography>
            <Typography variant="body1">
              to state-of-the-art safety and{" "}
            </Typography>
            <Typography variant="body1">
              quality procedures and are tested{" "}
            </Typography>
            <Typography variant="body1">
              and reviewed by a team of foreign experts{" "}
            </Typography>
            <Typography variant="body1">
              and engineers, multiple times a year.{" "}
            </Typography>
            {button ? (
              <Button mt={5} onClick={buttonCallBack()}>
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

export default ImageWithSummerActivities;
