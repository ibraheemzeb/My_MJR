import React from 'react';
import './imageWithOverlay.css'; // Import the CSS file for styling
import { Button } from 'react-bootstrap';

const ImageWithOverlay = ({ image='', textHeading='', text='', button=false, buttonText='', buttonCallBack=()=>{} }) => {
  return (
    <div className="bg-image-wrap">
    <img src={image} alt='skii'></img>
    <div className="overlay">
      <div className="text-box">
      <h1>{textHeading}</h1>
      <p>{text}</p>
      {button?<Button onClick={buttonCallBack()} >{buttonText}</Button>:<></>}
    </div>
      </div>
  </div>
  );
};



export default ImageWithOverlay;
