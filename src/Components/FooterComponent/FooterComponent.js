import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Footer.css";

function FooterComponent() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerContact">
          <h4>Kontakta Hela Åsa</h4>
          <p>
            Kumlagården
            <br></br>Ölmanäs Ringväg 622
            <br></br> 439 55 Åsa
          </p>
          <a href = "mailto:info@helaasa.se">info@helaasa.se</a>
        </div>

        <div className="footerSocial">
          <h4>Besök våra sociala medier!</h4>

          <a href="https://www.facebook.com/helaasa/">
            {" "}
            <FacebookIcon></FacebookIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
