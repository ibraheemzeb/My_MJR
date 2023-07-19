import * as React from "react";

import Modal from "@mui/material/Modal";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Carousel from 'react-bootstrap/Carousel';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BathtubIcon from '@mui/icons-material/Bathtub';
import TvIcon from '@mui/icons-material/Tv';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import KingBedIcon from '@mui/icons-material/KingBed';
import CheckIcon from '@mui/icons-material/Check';

const defaultTheme = createTheme();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "1%",
  //   width: 600,
  maxHeight: "100vh",
  backgroundColor: "white",
  overflow: "auto",
//   border: '0px solid #000',
  boxShadow: 24,
  //   width: isSmallscreen ? "80%" : "50%",
};

export default function AccomendationModal({ open, handleClose }) {
  
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    }
    
  return (
    <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      
    >
      <Container component="main" style={style}>
      <Grid container spacing={2} >
        <Grid item xs={6}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pastevent.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pastevent.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pastevent.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h5" component="h2" gutterBottom color="#6E263D" spacing={2}>Delux, Guest Room, 1 King</Typography>
        <Typography variant="body1" component="h2" gutterBottom color="#7D7D7D"><Box display={"inline"}padding={"2px"}><SquareFootIcon/>34m</Box>  <Box display={"inline"} padding={"2px"}>
          <LandscapeIcon /> Mountain View
        </Box>  <Box display={"inline"} padding={"2px"}><LocationCityIcon/> City View</Box>  <Box display={"inline"} padding={"2px"}><AcUnitIcon/> Air Conditioned <br /></Box> <Box display={"inline"} padding={"2px"}><BathtubIcon/> Ensuite Bathroom</Box><Box display={"inline"} padding={"2px"}> <TvIcon/> Flat Screen Tv</Box> <Box display={"inline"} padding={"2px"}><RestaurantIcon/> Mini Bar</Box> <br /><Box display={"inline"} padding={"2px"}><WifiIcon/> Free Wifi</Box> </Typography>
        <Typography variant="h5" component="h2"  display={"inline"} gutterBottom color="#6E263D">
          Room Size .
        </Typography>
        <Typography variant="h5"  display={"inline"}>
           34m
        </Typography>
        <Typography variant="h5" gutterBottom color="#6E263D" >
           1 extra large Double-Bed <KingBedIcon fontSize="large"/>
        </Typography>
        <Typography gutterBottom color="#6E263D" >
           Modren Air-conditioned room with a 42-inch flat-screen TV, a personal safe and tea/coffee making facilities. En Suit bathroom has a shower and bathrobes.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="#6E263D">
          In your private bathroom:
        </Typography>
        <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Typography variant="h6"><CheckIcon/>Item 1</Typography>
          
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="h6"><CheckIcon/>Item 2</Typography>
          
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Typography variant="h6"><CheckIcon/>Item 3</Typography>
          
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="h6"><CheckIcon/>Item 4</Typography>
          
        </div>
        
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Typography variant="h6"><CheckIcon/>Item 3</Typography>
          
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="h6"><CheckIcon/>Item 4</Typography>
          
        </div>
        
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Typography variant="h6"><CheckIcon/>Item 3</Typography>
          
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="h6"><CheckIcon/>Item 4</Typography>
          
        </div>
        
        
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Typography variant="h6"><CheckIcon/>Item 3</Typography>
          
        </div>
        
        
      </div>
      <Typography variant="h5" component="h2" gutterBottom color="#6E263D">
          View:
        </Typography>
        <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Typography variant="h6"><CheckIcon/>Mountain View</Typography>
          
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="h6"><CheckIcon/>City View</Typography>
          
        </div>
        
        
      </div>

        </Grid>
      </Grid>
      </Container>
    </Modal>
    </>
  );
}
