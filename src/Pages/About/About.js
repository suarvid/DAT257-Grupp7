import React from 'react'
import './About.css'
import niamotion from '../../Components/Banner/niamotion.jpg'
import Instructors from '../Instructors/Instructors';
import unikarum from './unikarum.jpg'

function About() {
    return (
        <div className="about-container">
            
            <div className="info-text">
                <h2>Om Hela Åsa</h2>
                <h3>Företagsnätverk</h3>
                <p>Ett företagsnätverk inom träning och hälsa. Fyll på med mer text om samarbetet....</p>
            </div>

            <div className ="companies-container">

                <div className= "company">
                    <div className="company-image">
                        </div>
                <div className="company-text">
                        <h3>Yogamidus</h3>
                        <p>Info om Yogamidus....</p>
                    </div>
                </div>


                <div className= "company">
                    <div className= "company-image">
                        <img src={niamotion} alt="Nia Motion"width="100%" height="100%"/>
                    </div>
                    <div className="company-text">
                        <h3>NiaMotion</h3>
                        <p>Info om Nia....</p>
                        <a href="http://niamotion.se/">Vidare till NiaMotion</a>
                    </div>
                </div>

                <div className= "company">
                    <div className= "company-image">
                        <img src={unikarum} alt="UnikaRum" width="100%" />
                    </div> 
                    <div className="company-text">
                        <h3>UnikaRum</h3>
                        <p>Info om UnikaRum....</p>
                        <a href="http://www.unikarum.se/">Vidare till UnikaRum</a>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default About