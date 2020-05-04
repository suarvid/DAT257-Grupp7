import React from 'react'
import './FooterComponent.css'
function FooterComponent() {
    return (
        <div className = "footerContainer" >
            <div className= "footerContact">
                <h4> Kontakt</h4>
                <p> Hela Åsa</p>
                <p> Adress: Kumlagården <br/> Ölmanäs Ringväg 622 <br/>  439 55 Åsa </p>
                <p> Telefonnummer: <br/>  +46736223135 <br/>  +46709438538 </p>
                <p> mail: info@helaasa.se</p>
            </div>

            <div className = "footerFB">
                <p> länk till FB och fb-logga</p>
                <h4> Besök våra sociala medier</h4>
                <a href= "https://www.facebook.com/helaasa/">  Facebook</a>
            </div>
        </div>  
    )
}

export default FooterComponent