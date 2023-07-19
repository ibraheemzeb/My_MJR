import React from "react";
import { Typography, Box } from "@mui/material";
import AccomendationModal from "../../pages/AccomendationModal";

const StaycationGridCard = ({ image, heading, text }) => {

  const [viewModalOpen, setViewModalOpen] = React.useState(false);
  const handleCloseModal = () => {
    setViewModalOpen(false); // Close the modal
  };
  const handleOpenModal = () => {
    setViewModalOpen(true); // Close the modal
  };


  return (
    <>
    <AccomendationModal open={viewModalOpen} handleClose={handleCloseModal} />
    <Box>
      <img
        src={image}
        alt="Staycation"
        style={{ width: "100%", height: "35vh" }}
      />
      <Box
        sx={{ padding: "5%", margin: "1%", borderLeft: "3px solid #094e9d" }}
      >
        {/* <a href="">
          <Typography variant="h4">{heading}</Typography>
        </a> */}
        {/* <a href="/staycation" style={{ textDecoration: "none", color: "inherit" }}> */}
          <Typography
            variant="h4"
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.color = "blue";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "inherit";
            }}
            onClick={handleOpenModal}
          >
            {heading}
          </Typography>
        {/* </a> */}

        <Typography>{text}</Typography>
      </Box>
    </Box>
    </>
  );
};

export default StaycationGridCard;
