import React from "react";
import "./socialCards.css";

const SocailCard = ({image='', iconURL='', targetURL=''}) =>{
    return(
        <div className="socialCard">
            <a href={targetURL} target="_blank" rel="noreferrer">
                <div className="socailCard-overlay"></div>
                <img className="socailCard-image" src={image} alt='social media link' />
                <div className="socailCard-details fadeIn-top">
                    <img src={iconURL} alt="instagraLogo" />
                </div>
            </a>
        </div>
    );
}

export default SocailCard;