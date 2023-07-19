import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import simage1 from "../../Assets/sliderimage/pastevent.jpg";
import simage2 from "../../Assets/sliderimage/cycling.jpg";
import simage3 from "../../Assets/sliderimage/futureevent.jpg";
import { Box } from "@mui/material";

function Slider1() {
  return (
    <Box sx={{ mt: "100" }}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={simage1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={simage2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={simage3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}

export default Slider1;
