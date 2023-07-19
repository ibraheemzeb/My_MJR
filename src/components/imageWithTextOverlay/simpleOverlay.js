import React from 'react';
import './simpleOverlay.css'; // Import the CSS file for styling

const SimpleOverlayImage = ({ image='', textHeading='', text=''}) => {
  return (
    <div className="bg-image-wrap-simple">
    <img src={image} alt='skii'></img>
    <div className="overlay-simple">
      <div className="text-box-simple">
      <h1>{textHeading}</h1>
      <p>{text}</p>
    </div>
      </div>
  </div>
  );
};



export default SimpleOverlayImage;
