import React from 'react'
import './Activity.css'

export default function Activity({ activityType, imageUrl, description }) {
    // Can use activityType in future for nesting linking to details pages 
    console.log("Activity type: " + activityType)
    console.log("imageURl in activiry " + imageUrl);
    return (
        <div className="activityCard">
            <div id = "activityHeader">
                <img className="activityImage" src={imageUrl} alt={activityType}></img>
                <h2 style = {{textDecoration: "none"}}>{activityType}</h2>
            </div>
            <div className="descriptionPreview">
                 <p>{description}</p>
            </div>
            
        </div>
    )
}
