import React from 'react'
import './Join.css'

function Join() {
    return (
            <div className="joinContainer">
                <div className="joinContent">
                <h3 className="joinTitle">Vi på Hela Åsa letar ständigt efter nya partners i vårt hälso-kollektiv. Är du intresserad av att bli del i Hela Åsa?</h3> 
                <p style={{marginBottom:"10px"}}> Kontakta oss gärna via mail så kan vi diskutera vårt framtida partnerskap!</p>
                <p><strong> Med Vänliga Hälsningar </strong><br/>
                    Hela Åsa <br/>
                    info@helaasa.se </p>
                </div>
                
                <div className="companies">
                    <h3 className="joinTitle">Ingående företag:</h3>
                    <a href="https://www.facebook.com/Yogamidus-1001620300228906/"> Yogamidus</a>
                    <a href="http://niamotion.se/">Niamotion</a>
                    <a href="http://www.unikarum.se/">UnikaRum</a>
                </div>
            </div>
    )
}

export default Join