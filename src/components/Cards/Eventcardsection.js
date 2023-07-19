import React, { useState } from "react";
import ActionAreaCard from "../Cards/Eventcard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import parallaxBG from "../../Assets/bg_content/parallax-bg.jpg";

const Eventcardsection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(index === expandedCard ? null : index);
  };

  return (
    <Grid container xs={12}>
      <div
        maxWidth="xl"
        style={{
          display: "flex",
          backgroundImage: `url(${parallaxBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          opacity: "0.8",
          position: "relative",
        }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item md={4} sm={6}>
              <ActionAreaCard
                image="pastevent.jpg"
                header1="PAST EVENT"
                header2="Food Fest"
                header3="Cuisine from all over Pakistan and a Qawalli Night"
                expanded={expandedCard === 0}
                onClick={() => handleCardClick(0)}
              />
            </Grid>
            <Grid item md={4} sm={6}>
              <ActionAreaCard
                image="cycling.jpg"
                header1="UPCOMING EVENT"
                header2="Mountain Bike Race"
                header3="From Cyclists all over Pakistan"
                expanded={expandedCard === 1}
                onClick={() => handleCardClick(1)}
              />
            </Grid>
            <Grid item md={4} sm={6}>
              <ActionAreaCard
                image="futureevent.jpg"
                header1="FUTURE EVENT"
                header2="Ski and Snowboarding Competition"
                header3="To Promote local talent and provide a platform for winter sports"
                expanded={expandedCard === 2}
                onClick={() => handleCardClick(2)}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Grid>
  );
};

export default Eventcardsection;
