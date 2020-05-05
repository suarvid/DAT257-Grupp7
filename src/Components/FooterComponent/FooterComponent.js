import React from "react";
import "./Footer.css";

function FooterComponent() {
  return (
    <div className = 'footer'>
      <div className="footerContainer">
        <div className="footerContact">
          <h4>Kontakta Hela Åsa</h4>
          <p>
            Kumlagården
            <br></br>Ölmanäs Ringväg 622
            <br></br> 439 55 Åsa
          </p>
          <p>info@helaasa.se</p>
        </div>

        <div className="footerSocial">
          <h4>Besök våra socialamedier!</h4>
          <a href="https://www.facebook.com/helaasa/">Facebook</a>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
