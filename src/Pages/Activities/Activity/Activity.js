import React from 'react'
import './Activity.css'

export default function Activity({ activityType, imageUrl, description }) {
    return (
        <div className="activityCard">
            <div id = "activityHeader">
                <img className="activityImage" src={imageUrl} alt={activityType}></img>
            </div>
            <div className="descriptionPreview">
                 <h2 style = {{textDecoration: "none"}}>{activityType}</h2>
                 <p>{description}</p>
            </div>
        </div>
    )
}
