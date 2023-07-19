import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { CardActionArea } from "@mui/material";
import "./eventcard.css"; // Import a separate CSS file for custom styles

export default function ActionAreaCard({
  header1 = "",
  header2 = "",
  image = "",
  header3 = "",
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    console.log("just checking");
    setExpanded(!expanded);
  };

  return (
    <Card className={`action-card ${expanded ? "expanded" : ""}`}>
      <CardActionArea onClick={handleExpandClick}>
        <Box>
          <CardContent className="card-content">
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt="images"
              // sx={{display: ""}}
            />
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              mt={3}
              sx={{ fontSize: "1.5em" }}
            >
              {header1}
            </Typography>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{
                fontSize: "2em",
                textTransform: "none",
                color: "inherit",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
              className="card-header2"
            >
              {header2}
            </Typography>
            {expanded && (
              <div>
                <Typography variant="h6" component="h2">
                  <b>Long Description:</b> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </Typography>
                <Typography variant="h6" component="h2">
                  <b>PreReqs:</b> Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="h6" component="h2">
                  <b>Date:</b> June 30, 2023
                </Typography>
                <Typography variant="h6" component="h2">
                  <b>Duration:</b> 3 hours
                </Typography>
                <Typography variant="h6" component="h2">
                  <b>Disclaimer:</b> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </Typography>
                <Button variant="contained" color="primary">
                  Register
                </Button>
              </div>
            )}
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
