import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about-container">
             <h1>Om Hela Åsa</h1>
            <div className="info-text">
                <h2>Företagsnätverk</h2>
                <p>Ett företagsnätverk inom träning och hälsa. Fyll på med mer text om samarbetet....</p>

                <h3>Yogamidus</h3>
                <p>Info om Åsas yoga....</p>
                <p> här ska en bild in! kanske göra det till komponenter för de olika företagen istället?</p>

                <h3>NiaMotion</h3>
                <p>Info om Nia....</p>

                <h3> UnikaRum</h3>
                <p>Info om UnikaRum, extrakolla så det heter så</p> 

            </div>
           
            
        </div>
    )
}

export default About