import React, { Component } from "react";
// import Carousel from "./Carousel";
// import uuidv4 from "uuid";
import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
import SocailCard from "../Cards/socialCards";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageLists.css";

export default class CarouselSection extends Component {
  render() {
    return (
      <div
        style={
          {
            // height: "70vh"
          }
        }
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // position: "fixed"
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6}>
              <div style={{ position: "relative", height: "100%" }}>
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

              {/* <Carousel
                axis="vertical"
                verticalSwipe="natural"
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                renderArrowPrev={() => {}}
                renderArrowNext={() => {}}
                selectedItem={0}
                emulateTouch={true}
                autoPlay={true}
                stopOnHover={true}
                swipeable={true}
                transitionTime={500}
                interval={5000}
                showIndicators={false}
                swipeScrollTolerance={false}
                style={{ height: "100%", position: "fixed" }}
              >
                <div style={{ height: "100%" }}>
                  <img
                    src="pastevent.jpg"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div style={{ height: "100%" }}>
                  <img
                    src="cycling.jpg"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div style={{ height: "100%" }}>
                  <img
                    src="futureevent.jpg"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              </Carousel> */}
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div class="right">
                <div class="grid-2-2">
                  <SocailCard
                    className="hover-overlay"
                    image="instagram.jpg"
                    iconURL="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
                    targetURL="https://www.instagram.com/malamjabbaskiresortofficial/"
                  />
                  <SocailCard
                    className="hover-overlay"
                    image="facebook.jpg"
                    iconURL="https://www.facebook.com/images/fb_icon_325x325.png"
                    targetURL="https://www.facebook.com/MjSkiResort/"
                  />
                  <SocailCard
                    className="hover-overlay"
                    image="outdoor.jpeg"
                    iconURL="https://www.youtube.com/s/desktop/5f762ff5/img/favicon_144.png"
                    targetURL="https://www.youtube.com/@malamjabbaskiresort4928"
                  />
                  <SocailCard
                    className="hover-overlay"
                    image="facebook.jpg"
                    iconURL="https://www.tiktok.com/favicons/apple-touch-icon.png"
                    targetURL="https://www.tiktok.com/@mjskiresort"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      // <div>
      //   <div
      //     style={{
      //       display: "flex",
      //       alignItems: "center",
      //       justifyContent: "center",
      //     }}
      //   >
      //     <Grid container style={{ height: "100%" }}>
      //       <Grid item md={6} sm={12} style={{ height: "100%" }}>
      //         <Carousel
      //           axis="vertical"
      //           verticalSwipe="natural"
      //           infiniteLoop={true}
      //           showArrows={true}
      //         >
      //           <div>
      //             <img src="pastevent.jpg" />
      //           </div>
      //           <div>
      //             <img src="cycling.jpg" />
      //           </div>
      //           <div>
      //             <img src="futureevent.jpg" />
      //           </div>
      //         </Carousel>
      //       </Grid>
      //       <Grid item md={6} sm={12} style={{ height: "100%" }}>
      //         <div class="right" style={{ height: "100%" }}>
      //           <div class="grid-2-2" style={{ height: "100%" }}>
      //        <SocailCard
      //               image="instagram.jpg"
      //               iconURL="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
      //               targetURL="https://www.instagram.com/malamjabbaskiresortofficial/"
      //             />
      //             <SocailCard
      //               image="facebook.jpg"
      //               iconURL="https://www.facebook.com/images/fb_icon_325x325.png"
      //               targetURL="https://www.facebook.com/MjSkiResort/"
      //             />
      //             <SocailCard
      //               image="youtube.jpg"
      //               iconURL="https://www.youtube.com/s/desktop/5f762ff5/img/favicon_144.png"
      //               targetURL="https://www.youtube.com/@malamjabbaskiresort4928"
      //             />
      //             <SocailCard
      //               image="facebook.jpg"
      //               iconURL="https://www.tiktok.com/favicons/apple-touch-icon.png"
      //               targetURL="https://www.tiktok.com/@mjskiresort"
      //             />
      //           </div>
      //         </div>
      //       </Grid>
      //     </Grid>
      //   </div>
      // </div>
    );
  }
}
