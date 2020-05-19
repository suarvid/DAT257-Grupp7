import React from 'react';
import './Activity.css';
import '../../../globalstyles.css';

export default function Activity({ activityType, imageUrl, description }) {
    return (
        <div className="activityCard">
            <div id = "cardImageContainer">
                <img className="cardImage" src={imageUrl} alt={activityType}></img>
            </div>
            <div className="descriptionPreview">
                 <h2>{activityType}</h2>
                 <p >{description}</p>
            </div>
        </div>
    )
}
