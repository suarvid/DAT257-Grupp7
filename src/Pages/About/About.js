import React from "react";
import "./About.css";
import unikarum from "./unikarum.jpg";
import yogamidus from "./yogamidus.jpg";
import nia from "./nia.jpg";
import aboutimg from "./about.png";
import "../../globalstyles.css";
function About() {
  return (
    <div className = "center">
      <div className="textPageContainer">
        <h2 className = "center">Om Hela Åsa</h2>
        <img className="center" src={aboutimg} alt="aboutimg" />
        <h3 className="center">Företagsnätverket</h3>
        <p className="center">
          Hela Åsa startades av Anna Nyström och Lotten Jersby 2019. Vi är ett
          företagsnätverk som tror på kraften i att ”tillsammans är vi starka”.
          Vi vill tillsammans med andra företagare inom hälsa och friskvård
          skapa en mötesplats där vi kan hitta former för samarbete och
          utveckling. Det skulle kunna innebära en samlad portal för
          annonsering, gemensam lokal, skapa gemensamma evenemang, hoppa in för
          varandra vid semester eller annan frånvaro.
        </p>
      </div>

      <div className="cardContainer">
        <div className="cardImageContainer">
          <img
            src={yogamidus}
            alt="Yogamidus"
            width="100%"
            className="cardImage"
          />
        </div>
        <div className="cardInfo">
          <h3 className="infoHeading">Yogamidus</h3>
          <p style={{ paddingBottom: "5px", width: "100%" }}>
            Info om Yogamidus....
          </p>
          <a href="https://www.facebook.com/pages/category/Health-Beauty/Yogamidus-1001620300228906/">
            Vidare till Yogamidus
          </a>
        </div>
      </div>

      <div className="cardContainer">
        <div className="cardImageContainer">
          <img src={nia} alt="Nia Motion" width="100%" className="cardImage" />
        </div>
        <div className="cardInfo">
          <h3 className="infoHeading">NiaMotion</h3>
          <p style={{ paddingBottom: "5px" }}>Info om Nia....</p>
          <a href="http://niamotion.se/">Vidare till NiaMotion</a>
        </div>
      </div>

      <div className="cardContainer">
        <div className="cardImageContainer">
          <img
            src={unikarum}
            alt="UnikaRum"
            width="100%"
            className="cardImage"
          />
        </div>
        <div className="cardInfo">
          <h3 className="infoHeading">UnikaRum</h3>
          <p style={{ paddingBottom: "5px" }}>Info om UnikaRum....</p>
          <a href="http://www.unikarum.se/">Vidare till UnikaRum</a>
        </div>
      </div>
    </div>
  );
}

export default About;
