import React from 'react'
import './About.css'
import niamotion from '../../Components/Banner/niamotion.jpg'
import Instructors from '../Instructors/Instructors';
import unikarum from './unikarum.jpg'
import aboutimg from './about.png'

function About() {
    return (
        <div className="about-container">
            <div className="info-text">
                <h2>Om Hela Åsa</h2>
                <img  src={aboutimg} alt="aboutimg" />
                <h3>Företagsnätverket</h3>
                <p>Hela Åsa startades av Anna Nyström och Lotten Jersby 2019. 
                    Vi är ett företagsnätverk som tror på kraften i att ”tillsammans är vi starka”. 
                    Vi vill tillsammans med andra företagare inom hälsa och friskvård skapa en mötesplats 
                    där vi kan hitta former för samarbete och utveckling. 
                    Det skulle kunna innebära en samlad portal för annonsering, gemensam lokal, skapa gemensamma evenemang, 
                    hoppa in för varandra vid semester eller annan frånvaro.</p>
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