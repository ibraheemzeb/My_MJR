import React from "react"
import "./card.css"

const Card = ({header='', image='', text='', url=''})=>{
    return(
        <div class="card">
            <div class="card-image">
                <img src={image} alt="images"></img>
                    <div class="card-details">
                        <a href={url}><h2>{header}</h2></a>
                        <p>{text}</p>
                    </div>
                </div>
        </div>
    );
}

export default Card