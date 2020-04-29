import React from 'react'
import './About.css'
import niamotion from '../../Components/Banner/niamotion.jpg'
/*import unikarum from '../Pages/About/unikarum.jpg'
<img src={unikarum} alt="UnikaRum" width="20%"/> - fick ej att funka??*/

function About() {
    return (
        <div className="about-container">
             <h1>Om Hela Åsa</h1>
            <p className="info-text">
                <h2>Företagsnätverk</h2>
                <p>Ett företagsnätverk inom träning och hälsa. Fyll på med mer text om samarbetet....</p>

                <div className= "Yoga">
                <h3>Yogamidus</h3>
                <p>Info om Åsas yoga....</p>
                <p> här ska en bild in! kanske göra det till komponenter för de olika företagen istället?</p>
                </div>

                <hr ></hr>

                <div className= "Nia">
                <img src={niamotion} alt="Nia Motion" width="20%"/>
                <h3>NiaMotion</h3>
                <p>Info om Nia....</p>
                
                </div>

                <hr ></hr>
                <div className= "UnikaRum">
                <h3> UnikaRum</h3>
                <p>Info om UnikaRum, extrakolla så det heter så</p> 
                
                </div>
            </p>
           
            
         </div>
    )
}

export default About