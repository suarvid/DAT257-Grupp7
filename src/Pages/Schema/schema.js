import "./schema.css";
import React from "react";
import schema from "./schema.PNG";
import '../../globalstyles.css';

function Schema() {
  return (
    <div className="textPageContainer">
      <h2 style={{width:"100%"}}> Hela Åsas schema</h2>
      <div className="textPageImage">
        <img src={schema} alt="Nia Motion" width="100%" height="100%" />
      </div>

      <div className="cardInfo">
        <p>
          Förutom dessa upplevelser har vi stundtals speciella event. Har du
          önskemål eller vill veta mer tveka inte att höra av dig!
        </p>
        <p style={{paddingTop:"20px"}}><strong>Med Vänliga hälsningar </strong></p>
        <p>Hela Åsa</p>
      </div>
    </div>
  );
}
export default Schema;


