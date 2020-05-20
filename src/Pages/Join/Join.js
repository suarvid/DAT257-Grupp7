import React from 'react'
import './Join.css'
import '../../globalstyles.css'

function Join() {
    return (
            <div className="textPageContainer">
                <div className="joinContent">
                <h3>Vi på Hela Åsa letar ständigt efter nya partners i vårt hälso-kollektiv. Är du intresserad av att bli del i Hela Åsa?</h3> 
                <p style={{marginBottom:"10px"}}> Kontakta oss gärna via mail så kan vi diskutera vårt framtida partnerskap!</p>
                <p><strong> Med Vänliga Hälsningar </strong><br/>
                    Hela Åsa <br/>
                    info@helaasa.se </p>
                </div>
                
                <div className="companies">
                    <hr style={{width:"100%"}}/>
                    <h3 className="joinTitle">Ingående företag:</h3>
                    <a href="https://www.facebook.com/Yogamidus-1001620300228906/"> Yogamidus</a>
                    <a href="http://niamotion.se/">Niamotion</a>
                    <a href="http://www.unikarum.se/">UnikaRum</a>
                </div>
            </div>
    )
}

export default Join