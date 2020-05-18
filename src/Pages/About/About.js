import React from 'react'
import './About.css'
import niamotion from '../../Components/Banner/niamotion.jpg'
import Instructors from '../Instructors/Instructors';
import unikarum from './unikarum.jpg';
import yogamidus from './yogamidus.jpg';
import nia from './nia.jpg'
import '../../globalstyles.css';

function About() {
    return (
        <div> 
            <div className="info-text">
                <h2>Om Hela Åsa</h2>
                <p>Ett företagsnätverk inom träning och hälsa. Fyll på med mer text om samarbetet....</p>
            </div>

                <div className= "cardContainer">
                    <div className="cardImageContainer">
                        <img src={yogamidus} alt="Yogamidus" width="100%" className='cardImage'/>
                    </div>
                <div className="cardInfo">
                        <h3 className= "cardHeader">Yogamidus</h3>
                        <p>Info om Yogamidus....</p>
                        <a href="https://www.facebook.com/pages/category/Health-Beauty/Yogamidus-1001620300228906/">Vidare till Yogamidus</a>
                    </div>
                </div>

                <div className= "cardContainer">
                    <div className= "cardImageContainer">
                        <img src={nia} alt="Nia Motion" width="100%" className='cardImage'/>
                    </div>
                    <div className="cardInfo">
                        <h3 className= "cardHeader">NiaMotion</h3>
                        <p>Info om Nia....</p>
                        <a href="http://niamotion.se/">Vidare till NiaMotion</a>
                    </div>
                </div>

                <div className= "cardContainer">
                    <div className= "cardImageContainer">
                        <img src={unikarum} alt="UnikaRum" width="100%" className='cardImage'/>
                    </div> 
                    <div className="cardInfo">
                        <h3 className= "cardHeader">UnikaRum</h3>
                        <p>Info om UnikaRum....</p>
                        <a href="http://www.unikarum.se/">Vidare till UnikaRum</a>
                    </div>
                </div>
         </div>
    )
}

export default About