import React from 'react'
import './About.css'
import JoelsComponent from '../../Components/JoelsComponent/JoelsComponent'

function About() {
    return (
        <div className="about-container">
            <h1>Om oss sidan</h1>
            <JoelsComponent />
            <p>Ett företagsnätverk inom träning och hälsa.</p>
        </div>
    )
}

export default About