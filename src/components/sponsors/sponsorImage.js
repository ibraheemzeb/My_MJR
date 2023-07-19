import React from "react";
import "./sponsorImage.css"

const SponsorImage = ({image='', altText=''}) =>{
    return(
        <img className="sponsorImage" src={image} alt={altText} />
    )
}

export default SponsorImage;