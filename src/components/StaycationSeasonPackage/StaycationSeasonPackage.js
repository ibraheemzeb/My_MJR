import React, { useRef, useEffect } from "react";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

const StaycationSeasonPackage = ({
  image,
  button = true,
  buttonText,
  buttonCallBack = () => {},
}) => {
  const boxStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.3)" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1, backgroundColor:"transparent" });
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
        <Grid item sx={12} md={12} className="grid-item-3">
          <Stack direction="column" alignItems="center">
            <Typography variant="h4">Prepare For Your Visit</Typography>
            <Typography variant="body1" mt={5}>
            Check out our tips to hep you prepare for everything you need before you hit the slopes.
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

export default StaycationSeasonPackage;
