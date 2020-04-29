import React from 'react'
import './Activity.css'

export default function Activity({ activityType, imageUrl, description }) {
    // Can use activityType in future for nesting linking to details pages 
    console.log("Activity type: " + activityType)
    console.log(imageUrl);
    return (
        <div className="activityCard">
            <img className="activityImage" src={imageUrl} alt={activityType}></img>
            <div className="descriptionPreview">
                <h2 style = {{textDecoration: "none"}}>{activityType}</h2>
                 <p>{description}</p>
            </div>
            
        </div>
    )
}
