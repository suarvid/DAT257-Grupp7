import React from 'react'
import './Activity.css'

export default function Activity({ activityType, imageUrl }) {
    // Can use activityType in future for nesting linking to details pages 
    console.log("Activity type: " + activityType)
    console.log(imageUrl);
    return (
        <img className="activityImage" src={imageUrl} alt={activityType}></img>
    )
}
