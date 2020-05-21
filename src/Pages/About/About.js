import React from "react";
import "./About.css";
import unikarum from "./unikarum.jpg";
import yogamidus from "./yogamidus.jpg";
import nia from "./nia.jpg";
import aboutimg from "./about.png";
import "../../globalstyles.css";
function About() {
  return (
    <div>
      <div className="textPageContainer center">
        <h2 className="center">Om Hela Åsa</h2>
        <img src={aboutimg} alt="aboutimg" style={{ padding: "5px 0px" }} />
        <h3>Företagsnätverket</h3>
        <p>
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

          <a href="https://www.facebook.com/pages/category/Health-Beauty/Yogamidus-1001620300228906/">
            Vidare till Yogamidus
          </a>
        </div>
        <div className="companyInfo">
          <p style={{ padding: "0px 15px 5px 15px" }}>
            Yoga erbjuder många verktyg för att hitta in i dig själv och
            Yogamidus vill vara ditt stöd på vägen. Genom ergonomiska rörelser
            och positioner lär du känna din kropp och ditt sinne, för att sedan
            kunna gå vidare in i dig själv om du så vill.
          </p>
        </div>
      </div>

      <div className="cardContainer">
        <div className="cardImageContainer">
          <img src={nia} alt="Nia Motion" width="100%" className="cardImage" />
        </div>
        <div className="cardInfo">
          <h3 className="infoHeading">NiaMotion</h3>
          <a href="http://niamotion.se/">Vidare till NiaMotion</a>
        </div>
        <div className="companyInfo">
          <p style={{ padding: "0px 15px 5px 15px" }}>
            NiaMotion är ett företag som drivs av lust och glädje att dela med
            sig av rörelse och hälsa (Nia, Yinyoga mm) framförallt i gemenskap
            med andra. NIA bidrar bl.a. till medvetenheten om hur vi genom att
            använda helheten kropp- själ- tanke- ande i rörelse, kan påverka
            vårt välbefinnande.
          </p>
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
          <a href="http://www.unikarum.se/">Vidare till UnikaRum</a>
        </div>
        <div className="companyInfo">
          <p style={{ padding: "0px 15px 5px 15px" }}>
            {" "}
            Företaget UnikaRum har som mål att verka för att människor hittar
            och tar till vara sina unika inre och yttre rum. Detta gör vi för
            att bidra till människors ökade välmående och hälsa. Vi prövar på
            olika kreativa uttryck såsom måleri, skrivande, inre bildskapande,
            dans, berättande, mm. för att utvecklas och växa som människor.
            Namnet och företaget UnikaRum sammanfattar vårt förhållningssätt
            till människan, att vi alla är unika och har våra individuella unika
            rum där vi kan finna de skatter vi har inom oss.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
