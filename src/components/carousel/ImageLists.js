import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
// import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
// import InfoIcon from "@mui/icons-material/Info";
import Limage1 from "../../Assets/sliderimage/instagram.jpg";
import Limage2 from "../../Assets/sliderimage/facebook.jpg";
import Limage3 from "../../Assets/sliderimage/youtube.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import "./ImageLists.css";
import "../../pages/home.css";
import { Grid } from "@mui/material";
// import Badge from "react-bootstrap/Badge";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageLists() {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={12} md={6} sx={{height: "100%",}}>
        <div
          style={{ position: "relative"}}
        >
          <Carousel
            axis="vertical"
            verticalSwipe="natural"
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showArrows={true}
            selectedItem={0}
            emulateTouch={true}
            autoPlay={true}
            stopOnHover={true}
            swipeable={false}
            dynamicHeight={true}
            transitionTime={500}
            interval={5000}
            showIndicators={true}
            swipeScrollTolerance={false}
            style={{ height: "100%" }}
          >
            <div style={{ height: "100%", position: "relative" }}>
              <img
                src="pastevent.jpg"
                alt="pastevent"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ height: "100%", position: "relative" }}>
              <img
                src="cycling.jpg"
                alt="cycling"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ height: "100%", position: "relative" }}>
              <img
                src="futureevent.jpg"
                alt="futureevent"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </Carousel>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <ImageList sx={{ overflow: "hidden" }}>
          <ImageListItem>
            <div className="hover-overlay" />
            <img src={Limage1} alt={"instagram"} loading="lazy" />
            <ImageListItemBar
              title={"malamjabbaskiresort"}
              sx={{ background: "transparent" }}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                ></IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img src={Limage2} alt={"facebook"} loading="lazy" />
            <div className="hover-overlay" />

            <ImageListItemBar
              title={"malamjabbaskiresort"}
              sx={{ background: "transparent" }}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                ></IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img src={Limage3} alt={"youtube"} loading="lazy" />
            <div className="hover-overlay" />
            <ImageListItemBar
              title={"malamjabbaskiresort"}
              sx={{ background: "transparent" }}
              actionIcon={
                <IconButton sx={{ color: "white", fontSize: "large" }}>
                  <InstagramIcon
                    onClick={() =>
                      navigate(
                        "/https://www.instagram.com/malamjabbaskiresort/"
                      )
                    }
                  />
                </IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img src={Limage2} alt={"facebook"} loading="lazy" />
            <div className="hover-overlay" />

            <ImageListItemBar
              title={"malamjabbaskiresort"}
              sx={{ background: "transparent" }}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                ></IconButton>
              }
            />
          </ImageListItem>
        </ImageList>
      </Grid>
    </Grid>
  );
}
